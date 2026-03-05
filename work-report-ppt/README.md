# Work Report PPT Skill (English Output - Compact Format)

这是一个用于生成工作汇报PPT的技能，基于SCQA框架（现状-冲突-问题-答案），专门用于问题分析和解决方案汇报。**输出内容为英文**，使用紧凑格式：简单报告1页，复杂报告1-2页，包含多方案对比功能，适用于向领导层展示决策建议。

## 主要特性

- ✅ **英文输出** - 所有PPT内容使用专业商务英语
- ✅ **紧凑格式** - 简单报告1页，复杂报告1-2页
- ✅ **解决方案对比** - 支持多个解决方案选项，包含优缺点和投资分析
- ✅ **根因分析** - 专门的根因分析模块
- ✅ **模板支持** - 支持公司指定模板或默认专业模板
- ✅ **决策导向** - 结构化展示，便于领导层决策
- ✅ **图片支持** - 支持在PPT中插入图表、截图等图片

## 目录结构

```
work-report-ppt/
├── SKILL.md                          # 技能主文件（工作流程指导）
├── README.md                          # 本文件
├── references/                        # 参考文档
│   ├── scqa-framework.md              # SCQA框架详细指南
│   ├── slide-best-practices.md        # 幻灯片设计最佳实践
│   └── solution-comparison.md        # 解决方案对比最佳实践
├── scripts/                           # 脚本文件
│   └── generate_ppt.py               # PPT生成脚本（紧凑格式）
├── examples/                          # 示例文件
│   ├── simple-compact-example.md      # 简单报告紧凑格式示例
│   ├── complex-compact-example.md     # 复杂报告紧凑格式示例
│   ├── sample-report.md              # 原示例（保留）
│   ├── simple-report-example.md       # 原简单示例（保留）
│   └── complex-report-example.md      # 原复杂示例（保留）
└── assets/                            # 资源文件
    └── README.md                     # 资源目录说明
```

## 报告类型（紧凑格式）

### 简单报告（Simple）- 1 页（1个Slide）

适用于：
- 单一问题，解决方案明确
- 需要快速决策的事项
- 信息量相对较少

结构（单页紧凑布局）：
```
┌─────────────────────────────────────────────────────────────┐
│              [Report Title]                               │
│         Presenter: [Name] | Date: [Date]               │
├─────────────────────────────────────────────────────────────┤
│  Executive Summary                                         │
│  • [Key finding 1] • [Key finding 2] • [Key finding 3]    │
├─────────────────────────────────────────────────────────────┤
│  Problem & Root Cause                                     │
│  Problem: [1-line description]                              │
│  Root Cause: [Primary cause]                               │
│  Impact: [1-line impact statement]                          │
├─────────────────────────────────────────────────────────────┤
│  Solution Options (Compact Table)                           │
│  ┌──────────────┬──────────────┬──────────────┐      │
│  │ Option 1    │ Option 2    │ Option 3    │      │
│  │ [Brief]      │ [Brief]      │ [Brief]      │      │
│  │ Pros: [2 pts]│ Pros: [2 pts]│ Pros: [2 pts]│      │
│  │ Cons: [1 pt] │ Cons: [1 pt] │ Cons: [1 pt] │      │
│  │ Cost: $X     │ Cost: $X     │ Cost: $X     │      │
│  └──────────────┴──────────────┴──────────────┘      │
├─────────────────────────────────────────────────────────────┤
│  Recommendation                                          │
│  Recommended: [Option X] • Justification: [1-2 lines]    │
│  Decision: [What to approve, by when]                     │
└─────────────────────────────────────────────────────────────┘
```

### 复杂报告（Complex）- 2 页（2个Slides）

适用于：
- 多因素影响的复杂问题
- 需要详细分析说明
- 多个解决方案需要深入比较

结构（两页紧凑布局）：

**第1页：问题分析 + 解决方案**
- 标题、汇报人、日期
- 执行摘要
- 问题分析（现状、冲突、根因）
- 解决方案对比表格

**第2页：推荐方案 + 决策事项**
- 推荐方案及理由
- 风险缓解
- 实施计划
- 决策事项

## 快速开始

### 1. 安装依赖

```bash
pip install python-pptx
```

### 2. 准备Markdown内容（紧凑格式）

参考示例文件格式编写汇报内容（必须使用英文）：

```markdown
# Report Title (English)

Presenter: Your Name
Date: 2024-03-15
Report Type: simple

## Executive Summary
- Key finding 1
- Key finding 2
- Recommended: [Solution Name]

## Situation
- Current state point 1
- Current state point 2

## Complication
- Problem statement
- Impact details

## Root Cause
- Primary cause
- Contributing factor 1
- Contributing factor 2

## Key Question
What is the best approach to [solve the problem]?

## Solution Options

### Option 1: [Solution Name]
Description: [Brief description]
Pros:
- Benefit 1
- Benefit 2
Cons:
- Risk 1
- Risk 2
Cost: $[Amount]
Timeline: [Time period]

### Option 2: [Solution Name]
Description: [Brief description]
Pros:
- Benefit 1
- Benefit 2
Cons:
- Risk 1
- Risk 2
Cost: $[Amount]
Timeline: [Time period]

## Recommendation
Recommended: [Solution Name]
Justification:
- Reason 1
- Reason 2
- Reason 3

## Next Steps
- Action item 1 - Owner - Timeline
- Action item 2 - Owner - Timeline

## Decision Required
[What leadership needs to approve and by when]

## Images
[Optional - add image paths]
Image1: path/to/chart1.png
Image2: path/to/chart2.png
```

### 3. 生成PPT

```bash
# 生成简单报告（1页）
python scripts/generate_ppt.py --input examples/simple-compact-example.md --output report.pptx

# 生成复杂报告（2页）
python scripts/generate_ppt.py --input examples/complex-compact-example.md --output report.pptx

# 使用公司模板
python scripts/generate_ppt.py --input examples/simple-compact-example.md --output report.pptx --template assets/company-template.pptx
```

### 4. 添加图片

在Markdown的 `## Images` 部分添加图片路径：

```markdown
## Images
Image1: path/to/problem-chart.png
Image2: path/to/comparison-chart.png
```

图片将被插入到PPT的适当位置。

### 5. 自定义

- **公司模板**: 将公司PPT模板放在 `assets/company-template.pptx`
- **颜色配置**: 修改 `scripts/generate_ppt.py` 中的 `SlideColors` 类
- **字体配置**: 修改 `scripts/generate_ppt.py` 中的 `FontSizes` 类
- **紧凑度调整**: 脚本已优化为紧凑格式，字体较小（20pt）

## 工作流程（紧凑格式）

### 使用技能时，AI会按以下步骤执行：

1. **确定模板格式**
   - 询问是否有公司指定模板
   - 检查 `assets/company-template.pptx` 是否存在
   - 使用默认模板或公司模板

2. **确定报告类型**
   - 询问是简单还是复杂报告
   - 简单 = 1页（所有内容在一个slide上）
   - 复杂 = 2页（详细分析和方案对比分两个slide）

3. **收集问题信息**
   - 问题描述（What is the issue?）
   - 根因分析（Why is this happening?）
   - 冲突点（What makes this urgent?）
   - 图片（是否有图表或截图需要添加）

4. **收集解决方案选项**
   - 确定有几个解决方案选项（建议2-3个）
   - 对每个选项收集：描述、优缺点、成本、时间线

5. **生成对比分析**
   - 结构化展示各方案的利弊（紧凑表格格式）

6. **生成英文PPT**
   - 使用Python脚本生成最终演示文稿
   - 简单报告：1个slide
   - 复杂报告：2个slides

## SCQA框架说明（紧凑版）

SCQA是麦肯锡提出的叙事框架，用于决策汇报：

1. **S - Situation（现状）** - 建立共同认知，陈述当前事实
2. **C - Complication（冲突）** - 引入问题，制造紧张感
3. **Q - Question（问题）** - 明确需要解决的关键问题
4. **A - Answer（答案）** - 提供解决方案或建议

### 增强框架（本技能使用）

1. **Situation** - 现状
2. **Complication** - 冲突
3. **Root Cause Analysis** - 根因分析
4. **Question** - 关键问题
5. **Solution Options** - 潜在方案（多选项，紧凑表格）
6. **Recommendation** - 推荐方案

## 使用场景

- 问题分析汇报
- 解决方案推荐
- 项目状态报告
- 数据洞察展示
- 述职报告
- 预算申请
- 流程改进建议

## 技能特性

- **结构化** - SCQA框架确保汇报逻辑清晰
- **自动化** - Python脚本自动生成PPT
- **可定制** - 支持自定义模板和样式
- **多方案对比** - 清晰展示不同方案的利弊
- **决策导向** - 专为领导层决策优化
- **英文输出** - 所有内容使用专业商务英语
- **紧凑格式** - 简单报告1页，复杂报告2页
- **图片支持** - 支持插入图表和截图

## 注意事项

- ✅ 所有内容必须是英文
- ✅ 内容必须简洁（每行不超过一定字符数）
- ✅ 每个幻灯片使用较小字体（20pt body）
- ✅ 必须包含多个解决方案选项（至少2个）
- ✅ 每个方案必须包含优缺点
- ✅ 必须有明确的推荐方案
- ✅ 必须有明确的决策事项
- ❌ 不要超过页数限制（简单=1页，复杂=2页）
- ❌ 不要使用中文内容（最终PPT）
- ❌ 不要只提供一个解决方案选项
- ❌ 不要省略根因分析

## 页数限制

**简单报告（Simple）：**
- 最多 1 个 slide
- 所有内容在一个页面上
- 适用于快速决策

**复杂报告（Complex）：**
- 最多 2 个 slides
- 第1页：问题分析 + 解决方案
- 第2页：推荐方案 + 决策
- 适用于需要详细分析的问题

## 示例说明

### 简单报告紧凑格式示例

查看 `examples/simple-compact-example.md`：
- 系统性能优化问题
- 2个解决方案选项
- 紧凑的对比表格
- 明确的推荐方案
- 全部在1个slide上

### 复杂报告紧凑格式示例

查看 `examples/complex-compact-example.md`：
- 运营成本降低问题
- 3个解决方案选项
- 紧凑的两页布局
- 完整的决策信息

## 故障排除

**Q: 生成PPT时出现字体或颜色问题？**
A: 可以编辑 `scripts/generate_ppt.py` 中的 `SlideColors` 和 `FontSizes` 类来自定义。

**Q: 如何使用自己的PPT模板？**
A: 将模板放在 `assets/` 目录，命名为 `company-template.pptx`，使用 `--template` 参数加载。

**Q: 生成的内容不是英文？**
A: 请确保输入的Markdown内容使用英文，技能会直接使用输入内容生成PPT。

**Q: 如何控制页数？**
A: 在Markdown中指定 `Report Type: simple`（1页）或 `Report Type: complex`（2页）来控制页数。

**Q: 如何添加图片？**
A: 在Markdown中添加 `## Images` 部分，每行格式为 `Image[N]: path/to/image.png`。

## 参考文档

- **SCQA框架详细指南** - `references/scqa-framework.md`
- **幻灯片设计最佳实践** - `references/slide-best-practices.md`
- **解决方案对比最佳实践** - `references/solution-comparison.md`

## 版本历史

- **v2.1.0** - 紧凑格式、页数限制（简单1页/复杂2页）、图片支持
- **v2.0.0** - 英文输出、根因分析、多方案对比、报告类型选择
- **v1.0.0** - 初始版本，基础SCQA框架

## 贡献

欢迎提出改进建议和问题！
