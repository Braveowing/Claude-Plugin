# Signal Search Tool Test Skill

这是用于测试MB Signal Search Tool V5的自动化测试skill。

## 功能

- 数据完整性测试 (5项)
- 枚举值测试 (3项)
- 搜索功能测试 (7项)
- 数据质量测试 (6项)
- 界面显示正确性测试 (10项)
- 模糊搜索功能测试 (8项)
- 位长度和物理意义测试 (4项)

总计 **42项测试**

## 使用方法

```bash
# 安装依赖
npm install

# 运行测试
bun run test_signals.js
```

## 测试通过标准

- ✅ 通过: 42个
- ❌ 失败: 0个
- 退出码: 0

## 文件说明

| 文件 | 说明 |
|-----|------|
| test_signals.js | 测试脚本入口 |
| skill.md | Skill说明文档 |
| skill.yaml | Skill配置文件 |

## 配合工具

此skill配合 MB Signal Search Tool V5 使用，用于验证数据质量和功能正确性。
