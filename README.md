# MB Signal Search Tool V5

## 工具说明

信号搜索工具，用于检索FHAL接口信号数据。

## 文件说明

| 文件 | 说明 |
|-----|------|
| Signal_Search_Tool_V5.html | 主程序（用浏览器打开） |
| signals_data.js | 信号数据文件 |
| FHAL-IPC-MMT-RoV-ExternalInterface.xlsx | 原始Excel数据源 |
| convert_excel.js | 数据转换脚本 |
| test_signals.js | 测试脚本 |
| 版本更新说明.md | V5版本更新内容 |

## 快速开始

1. 双击打开 `Signal_Search_Tool_V5.html`
2. 在搜索框输入信号名称
3. 按 Enter 键或点击搜索按钮

## 功能特性

- 模糊搜索（支持下划线、空格忽略）
- 回车键搜索
- 上传Excel更换信号列表
- 下载最新信号列表
- 位长度和物理意义显示
- 枚举值展示

## 测试

```bash
cd Signal_Search_Tool_V5
bun run test_signals.js
```

## 技术支持

如有问题，请联系工具维护者。
