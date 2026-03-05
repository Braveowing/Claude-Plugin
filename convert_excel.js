/**
 * FHAL-IPC-MMT-RoV-ExternalInterface.xlsx 数据转换脚本
 * 将Excel数据转换为Signal_search_tool_v4所需的signals_data.js格式
 */

const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

const excelPath = process.argv[2] || 'FHAL-IPC-MMT-RoV-ExternalInterface.xlsx';
const outputPath = process.argv[3] || 'signals_data.js';

// 读取Excel
console.log('读取Excel文件:', excelPath);
const workbook = XLSX.readFile(excelPath);

// 需要处理的sheets - 所有有效的信号Sheet
// Mapping_MMT: MMT模块信号
// Mapping_IPC: IPC相关信号
// Mapping_RoV: RoV相关信号
// Mapping_IPC_DC: IPC DC信号
// Mapping_SEM: SEM信号
// MappingTemplate: 模板信号
// P6FHAL_DataType_IPC: 数据类型定义
const sheetsToProcess = [
    'Mapping_MMT',
    'Mapping_IPC',
    'Mapping_RoV',
    'Mapping_IPC_DC',
    'Mapping_SEM',
    'MappingTemplate',
    'P6FHAL_DataType_IPC'
];

function parseEnumDefinition(enumDef) {
    if (!enumDef || typeof enumDef !== 'string') {
        return [];
    }

    const enumElements = [];

    // 方法1: 匹配标准C++枚举格式: NAME = 0U, NAME = 0, kName = 1, etc.
    const enumRegex = /(\w+)\s*=\s*(\d+)[Uu]?\s*,?/g;
    let match;
    while ((match = enumRegex.exec(enumDef)) !== null) {
        enumElements.push({
            name: match[1].trim(),
            value: match[2].trim() + '.0',
            extSignalType: ''
        });
    }

    // 方法2: 匹配简单布尔值格式 "1 False 2 True" 或 "0 False 1 True"
    if (enumElements.length === 0) {
        const boolRegex = /(\d+)\s+(\w+)/g;
        let boolMatch;
        while ((boolMatch = boolRegex.exec(enumDef)) !== null) {
            const value = boolMatch[1].trim();
            const name = boolMatch[2].trim();
            // 过滤掉非布尔值关键词（如"scaled", "value"等）
            if (name.toLowerCase() !== 'true' && name.toLowerCase() !== 'false') continue;
            // 检查是否已经添加过（避免重复）
            if (!enumElements.some(e => e.value === value + '.0')) {
                enumElements.push({
                    name: name,
                    value: value + '.0',
                    extSignalType: ''
                });
            }
        }
    }

    return enumElements;
}

function getSignalType(category, dataType) {
    if (!category || category === ' ') {
        return 'Signal';
    }
    if (category.toLowerCase().includes('record') || category.toLowerCase().includes('struct')) {
        return 'Structure';
    }
    if (category.toLowerCase().includes('enum')) {
        return 'Enum';
    }
    return 'Signal';
}

function cleanValue(val) {
    if (val === undefined || val === null || val === ' ' || val === '') {
        return '';
    }
    return String(val).trim();
}

function processSheet(sheetName) {
    if (!workbook.SheetNames.includes(sheetName)) {
        console.log(`  [跳过] Sheet "${sheetName}" 不存在`);
        return [];
    }

    console.log(`  处理Sheet: ${sheetName}`);
    const sheet = workbook.Sheets[sheetName];
    const data = XLSX.utils.sheet_to_json(sheet);

    const signals = [];
    const processedSignals = new Set();

    for (const row of data) {
        const signalName = cleanValue(row['Sub Elements(If any)']);
        if (!signalName) continue;

        // 避免重复信号名
        if (processedSignals.has(signalName)) continue;
        processedSignals.add(signalName);

        const dataType = cleanValue(row['Category of DataType for SubElement']);
        const defaultValue = cleanValue(row['Default Value']);
        const min = cleanValue(row['Min']);
        const max = cleanValue(row['Max']);
        const enumDef = cleanValue(row['EnumDefinition(Opt)']);
        const module = cleanValue(row['Module']);
        const functionCol = cleanValue(row['Function']);
        const direction = cleanValue(row['Direction']);
        const wrapperSignal = cleanValue(row['WrapperSignal']);
        const typeNamespace = cleanValue(row['TypeNameSpace']);
        const description = cleanValue(row['Description']);

        // 计算位长度
        let bitLength = '';
        if (dataType) {
            const dtLower = dataType.toLowerCase();
            if (dtLower === 'bool') bitLength = '1';
            else if (dtLower.includes('uint8') || dtLower.includes('int8')) bitLength = '8';
            else if (dtLower.includes('uint16') || dtLower.includes('int16')) bitLength = '16';
            else if (dtLower.includes('uint32') || dtLower.includes('int32') || dtLower.includes('float')) bitLength = '32';
            else if (dtLower.includes('uint64') || dtLower.includes('int64') || dtLower.includes('double')) bitLength = '64';
        }

        // 提取物理意义 - 从Description中提取非枚举定义的部分
        let physicalMeaning = '';
        if (description && enumDef && description !== enumDef) {
            // 如果Description和EnumDefinition不同，说明有额外描述
            physicalMeaning = description;
        } else if (description && !enumDef) {
            // 没有枚举值，直接使用Description
            physicalMeaning = description;
        }

        // 解析枚举值
        const enumElements = parseEnumDefinition(enumDef);

        // 确定interfaceName
        let interfaceName = 'IPC';
        if (sheetName === 'Mapping_RoV') interfaceName = 'RoV';
        else if (sheetName === 'Mapping_Internal') interfaceName = 'Internal';
        else if (sheetName === 'Mapping_MMT') interfaceName = 'MMT';
        else if (sheetName === 'Mapping_SEM') interfaceName = 'SEM';
        else if (sheetName === 'Mapping_IPC_DC') interfaceName = 'IPC_DC';
        else if (sheetName === 'MappingTemplate') interfaceName = 'Template';
        else if (sheetName === 'P6FHAL_DataType_IPC') interfaceName = 'DataType';
        else if (sheetName === 'Mapping_IPC') {
            // 从Direction推断
            if (direction.includes('Rov')) interfaceName = 'RoV';
            else if (direction.includes('Sem')) interfaceName = 'SEM';
            else if (direction.includes('Mmt')) interfaceName = 'MMT';
        }

        const signal = {
            signalName: signalName,
            interfaceName: interfaceName,
            dataType: dataType || 'uint8_t',
            signalType: enumElements.length > 0 ? 'Enum' : 'Signal',
            defaultValue: defaultValue || '0',
            min: min || '',
            max: max || '',
            extSignalType: typeNamespace || '',
            bitLength: bitLength || '',
            physicalMeaning: physicalMeaning || '',
            enumElements: enumElements,
            // 保留额外信息
            module: module,
            function: functionCol,
            wrapperSignal: wrapperSignal
        };

        signals.push(signal);
    }

    console.log(`    解析了 ${signals.length} 个信号`);
    return signals;
}

// 处理所有sheets
console.log('\n开始解析Excel数据...\n');
const allSignals = [];

for (const sheetName of sheetsToProcess) {
    const signals = processSheet(sheetName);
    allSignals.push(...signals);
}

// 按信号名排序
allSignals.sort((a, b) => a.signalName.localeCompare(b.signalName));

// 统计
const enumCount = allSignals.filter(s => s.enumElements && s.enumElements.length > 0).length;
console.log(`\n总计: ${allSignals.length} 个信号, ${enumCount} 个包含枚举值`);

// 生成JS文件内容
const jsContent = `const signalsData = ${JSON.stringify(allSignals, null, 2)};`;

// 写入文件
fs.writeFileSync(outputPath, jsContent, 'utf8');
console.log(`\n已保存到: ${outputPath}`);
console.log(`文件大小: ${(jsContent.length / 1024).toFixed(2)} KB`);
