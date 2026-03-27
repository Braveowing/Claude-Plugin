# PPT Layout Checker Tool

## 概述

这是一个用于检查PowerPoint演示文稿布局的专业工具，专门为Mercedes-Benz (MB) 风格演示文稿设计。

## 功能特性

### ✅ 布局检查
- **重叠检测**：识别形状之间的不必要重叠
- **对齐检查**：验证元素是否正确对齐
- **间距检查**：确保元素之间有足够的间距
- **边距检查**：验证内容是否在幻灯片安全区域内

### 🎨 样式检查
- **字体验证**：确保使用MB批准的字体（Mercedes Sans, Arial, Calibri, Helvetica）
- **色彩检查**：验证颜色使用是否符合MB商务风格（推荐最多3种强调色）
- **整体风格**：评估简洁性、专业性

## 使用方法

### 方法1：独立运行（检查现有PPT）

```bash
# 检查单个PPT文件
python ppt_layout_checker.py "D:\AI\CIVIC_FUP2_CR_Presentation.pptx"

# 使用自定义样式指南
python ppt_layout_checker.py "your_presentation.pptx" "mb_style_guidelines.json"
```

### 方法2：集成到PPT生成流程

```python
from ppt_layout_checker import PPTLayoutChecker

# 创建PPT后运行检查
checker = PPTLayoutChecker()
issues = checker.check_presentation("your_presentation.pptx")

# 生成报告
report = checker.generate_report()
print(report)
```

### 方法3：在create_ppt.py中集成

```python
# 在create_ppt.py的末尾添加
from ppt_layout_checker import PPTLayoutChecker

# 生成PPT后自动检查
output_path = r"D:\AI\CIVIC_FUP2_CR_Presentation.pptx"
prs.save(output_path)

# 运行布局检查
checker = PPTLayoutChecker()
issues = checker.check_presentation(output_path)
print(checker.generate_report())
```

## 检查报告说明

检查工具会生成详细报告，包括：

### 🔴 ERROR（错误）
必须立即修复的严重问题

### 🟡 WARNING（警告）
建议优化的问题，例如：
- 形状重叠
- 使用过多非MB颜色
- 超出安全边距

### ℹ️ INFORMATION（信息）
改进建议，例如：
- 元素间距过小
- 字体不在首选列表中

## MB样式指南

### 字体规范
- **主字体**：Mercedes Sans
- **备选字体**：Arial, Calibri, Helvetica
- **标题大小**：28-32pt（幻灯片标题）、18-22pt（章节）、14-16pt（小节）
- **正文大小**：11-13pt（常规）、9-10pt（小字）、8-9pt（备注）

### 色彩规范
- **主色**：黑色、白色、银色、MB蓝
- **语义色**：绿色（成功）、橙色（警告）、红色（错误）、蓝色（信息）
- **原则**：最多3种强调色、优先中性色、仅高亮关键信息

### 布局规范
- **边距**：左0.5in、右0.5in、上0.4in、下0.4in
- **间距**：元素最小0.15in、章节间推荐0.3in
- **对齐容忍度**：0.05in

## 示例输出

```
================================================================================
PPT LAYOUT CHECK REPORT
================================================================================
Total issues found: 3

🟡 WARNINGS (2):
  Slide 1 - Slide
    ⚠️  Slide uses 6 non-MB colors (max recommended: 3)
    💡 Reduce color variety for cleaner business presentation
  Slide 1 - Rectangle 1
    ⚠️  Shape exceeds left margin (current: 0.00in, min: 0.5in)
    💡 Move shape right by 0.5 inches

ℹ️  INFORMATION (1):
  Slide 1 - TextBox 6 and Rounded Rectangle 12
    ℹ️  Spacing between shapes is 0.10in (min recommended: 0.15in)
    💡 Increase spacing for better readability
================================================================================
```

## 文件结构

```
D:\AI\
├── ppt_layout_checker.py          # 主检查工具
├── mb_style_guidelines.json        # MB样式指南配置
├── create_ppt.py                   # PPT生成脚本（可集成检查）
└── 参考模板\
    ├── PPT template white.pptx      # MB模板1
    └── Full template.pptx            # MB模板2（包含字体参考）
```

## 最佳实践

1. **生成PPT后立即检查**：确保每次创建的PPT都符合标准
2. **逐步优化**：先修复ERROR，再处理WARNING，最后考虑INFO
3. **定期更新样式指南**：根据MB品牌规范更新`mb_style_guidelines.json`
4. **结合视觉检查**：工具检查+人工审查=最佳质量

## 常见问题

### Q: 为什么提示颜色过多？
A: MB风格强调简洁商务，推荐最多3种强调色。如果超过，考虑：
- 使用中性色（黑、白、银）作为主色调
- 仅对关键信息使用色彩高亮
- 统一相似内容的颜色

### Q: 为什么所有文本框都提示重叠？
A: 工具会检测形状的几何重叠。有意叠加（如文本框放在形状上）可能触发警告，请根据实际设计判断是否需要调整。

### Q: 如何自定义样式指南？
A: 编辑`mb_style_guidelines.json`文件，修改字体、颜色、布局参数以匹配你的具体需求。

## 版本历史

- **v1.0** (2026-03-27)
  - 初始版本
  - 支持重叠、对齐、字体、颜色、边距、间距检查
  - MB风格指南集成
  - 独立和集成两种使用方式
