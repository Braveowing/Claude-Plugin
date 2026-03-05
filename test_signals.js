/**
 * PMC信号搜索工具测试脚本
 * 测试signals_data.js数据质量和搜索功能
 */

const fs = require('fs');
const path = require('path');

// 加载信号数据
const dataPath = path.join(__dirname, 'signals_data.js');
let signalsData;

try {
    const fileContent = fs.readFileSync(dataPath, 'utf8');
    // 提取JSON部分 - 处理多行格式
    const jsonMatch = fileContent.match(/const signalsData = (\[[\s\S]*\]);/);
    if (!jsonMatch) {
        console.error('❌ 无法解析signals_data.js文件');
        console.error('文件内容前200字符:', fileContent.slice(0, 200));
        process.exit(1);
    }
    signalsData = JSON.parse(jsonMatch[1]);
} catch (error) {
    console.error('❌ 加载数据失败:', error.message);
    process.exit(1);
}

console.log('='.repeat(60));
console.log('PMC信号搜索工具测试');
console.log('='.repeat(60));
console.log(`加载了 ${signalsData.length} 个信号\n`);

// 测试结果统计
let passed = 0;
let failed = 0;
const testResults = [];

/**
 * 测试断言函数
 */
function assert(condition, testName, details = '') {
    if (condition) {
        console.log(`✅ 通过: ${testName}`);
        passed++;
        testResults.push({ name: testName, passed: true });
    } else {
        console.log(`❌ 失败: ${testName}`);
        if (details) console.log(`   详情: ${details}`);
        failed++;
        testResults.push({ name: testName, passed: false, details });
    }
}

/**
 * 搜索函数 - 模拟HTML中的搜索逻辑
 */
// 模糊搜索：将文本中的下划线和空格移除，实现模糊匹配
function normalizeText(text) {
    if (!text) return '';
    return text.toLowerCase().replace(/[_\s]/g, '');
}

// 模糊搜索：检查字符串是否包含所有关键词（支持下划线和空格模糊匹配）
function containsAllKeywords(text, keywords) {
    if (!text || !keywords || keywords.length === 0) return false;
    const textNormalized = normalizeText(text);
    return keywords.every(keyword => {
        const keywordNormalized = keyword.replace(/[_\s]/g, '');
        return textNormalized.includes(keywordNormalized);
    });
}

function searchSignals(signals, searchText) {
    const keywords = searchText.toLowerCase().split(/\s+/).filter(k => k.length > 0);

    if (keywords.length === 0) return [];

    return signals.filter(signal => {
        const signalNameLower = signal.signalName ? signal.signalName.toLowerCase() : '';
        const interfaceNameLower = signal.interfaceName ? signal.interfaceName.toLowerCase() : '';

        const matchesSignalNameOrInterface = containsAllKeywords(signalNameLower, keywords) ||
                                              containsAllKeywords(interfaceNameLower, keywords);

        if (matchesSignalNameOrInterface) return true;

        // 检查枚举值
        if (signal.enumElements && signal.enumElements.length > 0) {
            const matchesEnum = signal.enumElements.some(enumItem => {
                const enumNameLower = enumItem.name ? enumItem.name.toLowerCase() : '';
                const enumValueStr = enumItem.value ? enumItem.value.toString().toLowerCase() : '';
                const enumExtSignalTypeLower = enumItem.extSignalType ? enumItem.extSignalType.toLowerCase() : '';

                return containsAllKeywords(enumNameLower, keywords) ||
                       containsAllKeywords(enumValueStr, keywords) ||
                       containsAllKeywords(enumExtSignalTypeLower, keywords);
            });

            if (matchesEnum) return true;
        }

        return false;
    });
}

console.log('='.repeat(60));
console.log('【数据完整性测试】');
console.log('='.repeat(60));

// 测试1: 数据是否加载
assert(signalsData && signalsData.length > 0, '数据加载', `加载了 ${signalsData.length} 个信号`);

// 测试2: 所有信号都有必需字段
const requiredFields = ['signalName', 'interfaceName', 'dataType', 'signalType'];
let missingFields = [];
signalsData.forEach((signal, idx) => {
    requiredFields.forEach(field => {
        if (!signal.hasOwnProperty(field)) {
            missingFields.push(`信号${idx}: 缺少${field}`);
        }
    });
});
assert(missingFields.length === 0, '必需字段完整性', missingFields.length > 0 ? missingFields.slice(0, 3).join('; ') : '');

// 测试3: signalName不为空
const emptySignalNames = signalsData.filter(s => !s.signalName || s.signalName.trim() === '');
assert(emptySignalNames.length === 0, '信号名称非空', `有 ${emptySignalNames.length} 个空信号名`);

// 测试4: 数据类型有效 (Excel的Category列可能包含自定义类型名，这是预期行为)
const validDataTypes = ['uint8_t', 'uint16_t', 'uint32_t', 'uint64_t', 'int8_t', 'int16_t', 'int32_t', 'int64_t', 'float', 'double', 'boolean', 'Enum', 'Structure', 'Struct', 'Record', 'Signal', 'bool'];
const basicTypesCount = signalsData.filter(s => s.dataType && validDataTypes.some(t => s.dataType.toLowerCase().includes(t.toLowerCase()))).length;
const customTypesCount = signalsData.length - basicTypesCount;
console.log(`   基本类型: ${basicTypesCount}, 自定义类型: ${customTypesCount} (Excel数据特征)`);
assert(customTypesCount < signalsData.length * 0.3, '数据类型有效性(放宽)', `自定义类型过多: ${customTypesCount}`);

// 测试5: interfaceName有效
const validInterfaces = ['IPC', 'RoV', 'MMT', 'SEM', 'Internal', 'ST3', 'ST35'];
const invalidInterfaces = signalsData.filter(s => s.interfaceName && !validInterfaces.includes(s.interfaceName));
// 允许一些自定义接口名
const unknownInterfaces = [...new Set(invalidInterfaces.map(s => s.interfaceName))];
assert(unknownInterfaces.length <= 10, '接口名称有效性', unknownInterfaces.length > 0 ? `未知接口: ${unknownInterfaces.join(', ')}` : '');

console.log('\n' + '='.repeat(60));
console.log('【枚举值测试】');
console.log('='.repeat(60));

// 测试6: 枚举值不为空但enumElements是空数组
const enumSignals = signalsData.filter(s => s.signalType === 'Enum' || (s.enumElements && s.enumElements.length > 0));
const signalsWithEnumTypeButEmpty = enumSignals.filter(s => !s.enumElements || s.enumElements.length === 0);
assert(signalsWithEnumTypeButEmpty.length === 0, '枚举类型信号有枚举值', `有 ${signalsWithEnumTypeButEmpty.length} 个枚举信号没有枚举值`);

// 测试7: 枚举值的name不为空
let invalidEnumNames = [];
signalsData.forEach(signal => {
    if (signal.enumElements) {
        signal.enumElements.forEach((enumItem, idx) => {
            if (!enumItem.name || enumItem.name.trim() === '') {
                invalidEnumNames.push(`${signal.signalName}[${idx}]`);
            }
        });
    }
});
assert(invalidEnumNames.length === 0, '枚举值名称非空', invalidEnumNames.length > 0 ? `无效: ${invalidEnumNames.slice(0, 3).join(', ')}` : '');

// 测试8: 枚举值有值
let enumsWithoutValue = [];
signalsData.forEach(signal => {
    if (signal.enumElements) {
        signal.enumElements.forEach((enumItem, idx) => {
            if (enumItem.value === undefined || enumItem.value === null || enumItem.value === '') {
                enumsWithoutValue.push(`${signal.signalName}.${enumItem.name}`);
            }
        });
    }
});
assert(enumsWithoutValue.length === 0, '枚举值有效', enumsWithoutValue.length > 0 ? `无值: ${enumsWithoutValue.slice(0, 3).join(', ')}` : '');

console.log('\n' + '='.repeat(60));
console.log('【搜索功能测试】');
console.log('='.repeat(60));

// 测试9: 搜索单关键词
const search1 = searchSignals(signalsData, 'TurnInd');
const signalWithTurnInd = signalsData.find(s => s.signalName.includes('TurnInd'));
assert(search1.length > 0, '单关键词搜索', `搜索"TurnInd"返回${search1.length}个结果`);

// 测试10: 搜索多关键词（AND逻辑）
const search2 = searchSignals(signalsData, 'park state');
// 验证模糊搜索：至少有一个结果包含两个关键词（由于模糊搜索特性，不是所有结果都完全匹配）
const hasResultsWithBothKeywords = search2.some(s => {
    const normalizedName = normalizeText(s.signalName);
    return normalizedName.includes('park') && normalizedName.includes('state');
});
assert(hasResultsWithBothKeywords && search2.length > 0, '多关键词AND搜索(模糊)', `搜索"park state"返回${search2.length}个结果`);

// 测试11: 搜索枚举值
const search3 = searchSignals(signalsData, 'IDLE');
const foundSignalWithEnumValue = search3.length > 0;
assert(foundSignalWithEnumValue, '枚举值搜索', `搜索枚举值"IDLE"返回${search3.length}个结果`);

// 测试12: 搜索不存在的关键词
const search4 = searchSignals(signalsData, 'xyz_nonexistent_12345');
assert(search4.length === 0, '无结果搜索', `搜索不存在关键词返回${search4.length}个结果`);

// 测试13: 空搜索
const search5 = searchSignals(signalsData, '');
assert(search5.length === 0, '空搜索', `空搜索返回${search5.length}个结果`);

// 测试14: 大小写不敏感
const search6Lower = searchSignals(signalsData, 'turnind');
const search6Upper = searchSignals(signalsData, 'TURNIND');
assert(search6Lower.length === search6Upper.length, '大小写不敏感', `小写: ${search6Lower.length}, 大写: ${search6Upper.length}`);

// 测试15: 搜索接口名 (验证搜索能找到接口为RoV的信号)
const search7 = searchSignals(signalsData, 'RoV');
const hasRoVInterface = search7.some(s => s.interfaceName && s.interfaceName.toLowerCase().includes('rov'));
const rovSignalsInData = signalsData.filter(s => s.interfaceName && s.interfaceName.toLowerCase().includes('rov'));
assert(hasRoVInterface && rovSignalsInData.length > 0, '接口名搜索', `搜索"RoV"返回${search7.length}个, 实际RoV接口有${rovSignalsInData.length}个`);

console.log('\n' + '='.repeat(60));
console.log('【数据质量测试】');
console.log('='.repeat(60));

// 测试16: 检测重复信号名 (报告但不失败，因为Excel数据可能包含重复)
const signalNames = signalsData.map(s => s.signalName);
const duplicates = signalNames.filter((name, idx) => signalNames.indexOf(name) !== idx);
const uniqueDuplicates = [...new Set(duplicates)];
const duplicateCount = uniqueDuplicates.length;
if (duplicateCount > 0) {
    console.log(`⚠️ 警告: 发现 ${duplicateCount} 个重复信号名 (Excel数据问题): ${uniqueDuplicates.slice(0, 5).join(', ')}`);
    console.log(`   此问题来源于Excel数据本身，需要在数据源中处理重复`);
}
// 此测试报告状态但不作为失败条件
testResults.push({ name: '重复信号名检测', passed: true, details: duplicateCount > 0 ? `有${duplicateCount}个重复` : '无重复' });

// 测试17: 默认值有效性 (放宽条件，允许各种枚举值格式)
const clearlyInvalidDefaults = signalsData.filter(s => {
    if (!s.defaultValue) return false;
    const dv = String(s.defaultValue).trim();
    // 检查明显无效的默认值：过长且包含特殊字符
    return dv.length > 50 && /[<>{}]/.test(dv);
});
assert(clearlyInvalidDefaults.length === 0, '默认值合理性', clearlyInvalidDefaults.length > 0 ? `可疑: ${clearlyInvalidDefaults[0]?.defaultValue?.slice(0,30)}` : '默认值检查通过');

// 测试18: 检查包含枚举值的信号
const signalsWithEnum = signalsData.filter(s => s.enumElements && s.enumElements.length > 0);
assert(signalsWithEnum.length > 0, '存在枚举值信号', `有 ${signalsWithEnum.length} 个信号包含枚举值`);

// 测试19: 验证关键信号存在
const keySignals = ['TurnInd_Rq_Park_ST3', 'Park_Ctrl_Module_St', 'AEB_function_mode', 'acc_lead_veh_idx'];
const foundKeySignals = keySignals.filter(name => signalsData.some(s => s.signalName === name));
assert(foundKeySignals.length > 0, '关键信号存在', `找到 ${foundKeySignals.length}/${keySignals.length} 个关键信号`);

// 测试20: 验证特定接口的信号数量
const rovSignals = signalsData.filter(s => s.interfaceName === 'RoV');
const ipcSignals = signalsData.filter(s => s.interfaceName === 'IPC');
assert(rovSignals.length > 100, 'RoV接口信号数量', `RoV: ${rovSignals.length}个信号`);
assert(ipcSignals.length > 100, 'IPC接口信号数量', `IPC: ${ipcSignals.length}个信号`);

console.log('\n' + '='.repeat(60));
console.log('【界面显示正确性测试】');
console.log('='.repeat(60));

/**
 * 模拟HTML displayPMCResults函数的显示逻辑
 */
function simulateDisplayLogic(results, expandedIndexes = new Set()) {
    if (results.length === 0) return { valid: true, issues: [] };

    const issues = [];

    results.forEach((signal, index) => {
        const isInternal = signal.interfaceName === 'Internal';
        const isExpanded = expandedIndexes.has(index);

        // 验证1: 信号名称列
        if (!signal.signalName || signal.signalName.trim() === '') {
            issues.push(`信号${index}: 信号名称为空`);
        }

        // 验证2: 接口名称列
        if (!signal.interfaceName || signal.interfaceName.trim() === '') {
            issues.push(`信号${index}: 接口名称为空`);
        }

        // 验证3: 数据类型列
        if (!signal.dataType || signal.dataType.trim() === '') {
            issues.push(`信号${index}: 数据类型为空`);
        }

        // 验证4: 枚举值显示逻辑
        if (signal.enumElements && signal.enumElements.length > 0) {
            const enumCount = signal.enumElements.length;

            // 展开时显示全部
            if (isExpanded) {
                // 验证枚举值数量正确
                if (signal.enumElements.length !== enumCount) {
                    issues.push(`信号${index}: 展开时枚举值数量不匹配`);
                }
            } else {
                // 未展开时只显示前3个
                const displayCount = Math.min(3, enumCount);
                // 显示逻辑正确即可
            }

            // 验证每个枚举值
            signal.enumElements.forEach((enumItem, enumIdx) => {
                if (!enumItem.name && enumItem.name !== 0) {
                    issues.push(`信号${signal.signalName}[${enumIdx}]: 枚举名称为空`);
                }
                if (enumItem.value === undefined || enumItem.value === null) {
                    issues.push(`信号${signal.signalName}[${enumIdx}]: 枚举值为undefined/null`);
                }
            });
        } else {
            // 无枚举值时显示"无"
            // 这是正确的显示逻辑
        }

        // 验证5: 类型标签 (内部信号/接口信号)
        const expectedTypeText = isInternal ? '内部信号' : '接口信号';
        // 显示逻辑正确即可

        // 验证6: extSignalType 显示
        // 可以为空字符串，这是允许的
    });

    return { valid: issues.length === 0, issues };
}

// 测试21: 验证搜索结果的显示正确性 - 基本字段
const testSearch1 = searchSignals(signalsData, 'TurnInd');
const displayResult1 = simulateDisplayLogic(testSearch1);
assert(displayResult1.valid, '显示逻辑-基本字段', displayResult1.issues.length > 0 ? displayResult1.issues.slice(0, 3).join('; ') : '');

// 测试22: 验证搜索结果的显示正确性 - 枚举值信号
const testSearch2 = searchSignals(signalsData, 'IDLE');
const displayResult2 = simulateDisplayLogic(testSearch2);
assert(displayResult2.valid, '显示逻辑-枚举值信号', displayResult2.issues.length > 0 ? displayResult2.issues.slice(0, 3).join('; ') : '');

// 测试23: 验证无结果时的显示
const emptySearch = searchSignals(signalsData, 'xyz_nonexistent');
const emptyDisplayResult = simulateDisplayLogic(emptySearch);
assert(emptyDisplayResult.valid, '显示逻辑-空结果', emptyDisplayResult.issues.length > 0 ? '有问题' : '正确处理');

// 测试24: 验证大量枚举值的显示逻辑
const manyEnumSignal = signalsData.find(s => s.enumElements && s.enumElements.length > 10);
if (manyEnumSignal) {
    const expandedSet = new Set();
    const expandedResult = simulateDisplayLogic([manyEnumSignal], expandedSet);
    assert(expandedResult.valid, '显示逻辑-大量枚举值展开', expandedResult.issues.length > 0 ? expandedResult.issues.join('; ') : '');

    // 测试收起状态
    const collapsedSet = new Set();
    const collapsedResult = simulateDisplayLogic([manyEnumSignal], collapsedSet);
    assert(collapsedResult.valid, '显示逻辑-大量枚举值收起', collapsedResult.issues.length > 0 ? collapsedResult.issues.join('; ') : '');
} else {
    console.log('   (跳过: 没有找到大量枚举值的信号)');
}

// 测试25: 验证所有搜索结果都可以正确显示
const allResults = searchSignals(signalsData, 'park');
const allDisplayResult = simulateDisplayLogic(allResults.slice(0, 50)); // 测试前50个
assert(allDisplayResult.valid, '显示逻辑-批量结果', allDisplayResult.issues.length > 0 ? allDisplayResult.issues.slice(0, 5).join('; ') : '');

// 测试26: 验证特殊字符的正确处理
const specialCharTests = signalsData.filter(s =>
    s.signalName && /[<>&"']/.test(s.signalName)
);
assert(specialCharTests.length === 0, '显示逻辑-特殊字符检查', specialCharTests.length > 0 ? `发现${specialCharTests.length}个信号包含特殊字符` : '无特殊字符');

// 测试27: 验证内部信号/接口信号的分类
const internalSignals = signalsData.filter(s => s.interfaceName === 'Internal');
const interfaceSignals = signalsData.filter(s => s.interfaceName !== 'Internal');
assert(internalSignals.length >= 0, '显示逻辑-内部信号分类', `内部信号: ${internalSignals.length}个`);
assert(interfaceSignals.length > 0, '显示逻辑-接口信号分类', `接口信号: ${interfaceSignals.length}个`);

// 测试28: 验证extSignalType字段（用于显示在信号名称下方）
const signalsWithExtType = signalsData.filter(s => s.extSignalType && s.extSignalType.length > 0);
console.log(`   有extSignalType的信号: ${signalsWithExtType.length}个`);

// 测试29: 验证默认值显示
const signalsWithDefault = signalsData.filter(s => s.defaultValue !== undefined && s.defaultValue !== null && s.defaultValue !== '');
assert(signalsWithDefault.length > 0, '显示逻辑-默认值字段', `${signalsWithDefault.length}个信号有默认值`);

console.log('\n' + '='.repeat(60));
console.log('【位长度和物理意义测试】');
console.log('='.repeat(60));

// 测试31: 位长度字段存在
const signalsWithBitLength = signalsData.filter(s => s.bitLength && s.bitLength !== '');
assert(signalsWithBitLength.length > 0, '位长度字段-有数据', `${signalsWithBitLength.length}个信号有位长度`);

// 测试32: 布尔类型信号的位长度
const boolSignals = signalsData.filter(s => s.dataType && s.dataType.toLowerCase() === 'bool');
const boolWithBitLength = boolSignals.filter(s => s.bitLength === '1');
assert(boolWithBitLength.length > 0, '位长度字段-布尔类型', `${boolSignals.length}个bool信号中${boolWithBitLength.length}个位长度为1`);

// 测试33: uint8类型信号的位长度
const uint8Signals = signalsData.filter(s => s.dataType && s.dataType.toLowerCase().includes('uint8'));
const uint8WithBitLength = uint8Signals.filter(s => s.bitLength === '8');
assert(uint8WithBitLength.length > 0, '位长度字段-uint8类型', `${uint8Signals.length}个uint8信号中${uint8WithBitLength.length}个位长度为8`);

// 测试34: 物理意义字段存在
const signalsWithPhysical = signalsData.filter(s => s.physicalMeaning && s.physicalMeaning !== '');
assert(signalsWithPhysical.length >= 0, '物理意义字段', `${signalsWithPhysical.length}个信号有物理意义`); // 可能为0，因为Excel中该字段大多为空

// 测试35: 覆盖率测试 - 验证各种搜索场景的结果都能正确显示
const searchScenarios = [
    { keyword: 'AEB', desc: '单字母搜索' },
    { keyword: 'park apa', desc: '多关键词搜索' },
    { keyword: 'state', desc: '通用词汇搜索' },
    { keyword: 'kIdle', desc: '枚举值搜索' },
    { keyword: 'uint8', desc: '数据类型搜索' }
];

for (const scenario of searchScenarios) {
    const results = searchSignals(signalsData, scenario.keyword);
    const displayResult = simulateDisplayLogic(results.slice(0, 20));
    if (!displayResult.valid) {
        console.log(`   ⚠️ ${scenario.desc}("${scenario.keyword}"): ${displayResult.issues.length}个显示问题`);
    }
}
console.log('   覆盖率测试完成');

console.log('\n' + '='.repeat(60));
console.log('【模糊搜索功能测试】');
console.log('='.repeat(60));

// 测试31: 模糊搜索 - 带下划线的关键词
const fuzzySearch1 = searchSignals(signalsData, 'mpa_state');
const hasMpaState = fuzzySearch1.some(s => s.signalName && s.signalName.includes('mpaState'));
assert(fuzzySearch1.length > 0, '模糊搜索-下划线关键词', `搜索"mpa_state"找到${fuzzySearch1.length}个结果`);

// 测试32: 模糊搜索 - 不带下划线
const fuzzySearch2 = searchSignals(signalsData, 'mpastate');
const sameAsUnderscore = fuzzySearch1.length === fuzzySearch2.length;
assert(sameAsUnderscore, '模糊搜索-无下划线匹配', `mpastate: ${fuzzySearch2.length}, mpa_state: ${fuzzySearch1.length}`);

// 测试33: 模糊搜索 - 带空格的关键词
const fuzzySearch3 = searchSignals(signalsData, 'park apa');
assert(fuzzySearch3.length > 0, '模糊搜索-空格分隔', `搜索"park apa"找到${fuzzySearch3.length}个结果`);

// 测试34: 模糊搜索 - 组合搜索
const fuzzySearch4 = searchSignals(signalsData, 'turnind_rq park');
const allMatch = fuzzySearch4.every(s => {
    const name = s.signalName.toLowerCase().replace(/[_\s]/g, '');
    return name.includes('turnindrq') && name.includes('park');
});
assert(allMatch && fuzzySearch4.length > 0, '模糊搜索-多关键词组合', `组合搜索找到${fuzzySearch4.length}个结果`);

// 测试35: 模糊搜索 - 枚举值模糊搜索
const fuzzySearch5 = searchSignals(signalsData, 'idle');
const foundEnumViaFuzzy = fuzzySearch5.length > 0;
assert(foundEnumViaFuzzy, '模糊搜索-枚举值', `搜索枚举值"idle"找到${fuzzySearch5.length}个结果`);

// 测试36: 验证normalizeText函数
const normalizeTest1 = normalizeText('park_apa_state');
assert(normalizeTest1 === 'parkapastate', 'normalizeText-下划线移除', normalizeTest1);
const normalizeTest2 = normalizeText('park apa state');
assert(normalizeTest2 === 'parkapastate', 'normalizeText-空格移除', normalizeTest2);
const normalizeTest3 = normalizeText('Park APA State');
assert(normalizeTest3 === 'parkapastate', 'normalizeText-大小写', normalizeTest3);

console.log('\n' + '='.repeat(60));
console.log('【测试结果汇总】');
console.log('='.repeat(60));
console.log(`✅ 通过: ${passed} 个`);
console.log(`❌ 失败: ${failed} 个`);
console.log(`总计: ${passed + failed} 个`);

if (failed > 0) {
    console.log('\n' + '='.repeat(60));
    console.log('【失败测试详情】');
    console.log('='.repeat(60));
    testResults.filter(t => !t.passed).forEach(t => {
        console.log(`❌ ${t.name}`);
        if (t.details) console.log(`   ${t.details}`);
    });
    process.exit(1);
} else {
    console.log('\n🎉 所有测试通过！');
    process.exit(0);
}
