# PPT布局检查工具 - 快速开始指南

## 🚀 5分钟快速使用

### 方式1：检查现有PPT文件（最快）

```bash
cd D:\AI
python ppt_layout_checker.py "你的PPT文件路径.pptx"
```

示例：
```bash
python ppt_layout_checker.py "D:\AI\CIVIC_FUP2_CR_Presentation.pptx"
```

### 方式2：集成到PPT生成流程（推荐）

在你的PPT生成脚本（如`create_ppt.py`）末尾添加：

```python
# 保存PPT
output_path = r"D:\AI\your_presentation.pptx"
prs.save(output_path)

# ===== 添加以下代码 =====
import sys
sys.path.insert(0, r"D:\AI")
from ppt_layout_checker import PPTLayoutChecker

# 运行检查
checker = PPTLayoutChecker(r"D:\AI\mb_style_guidelines.json")
checker.check_presentation(output_path)

# 输出报告
print(checker.generate_report())
# ========================
```

### 方式3：在Python代码中直接使用

```python
from ppt_layout_checker import PPTLayoutChecker

# 初始化
checker = PPTLayoutChecker()  # 使用默认MB风格
# 或
checker = PPTLayoutChecker("path/to/your_style_guidelines.json")

# 检查PPT
issues = checker.check_presentation("your_presentation.pptx")

# 生成报告
report = checker.generate_report()
print(report)

# 保存报告
with open("report.txt", "w", encoding="utf-8") as f:
    f.write(report)
```

## 📊 理解检查报告

### 报告结构

```
================================================================================
PPT LAYOUT CHECK REPORT
================================================================================
Total issues found: XX

🔴 ERRORS (X):
  必须立即修复的严重问题

🟡 WARNINGS (X):
  建议优化的问题（重叠、颜色过多、超出边距等）

ℹ️  INFORMATION (X):
  改进建议（间距过小、字体选择等）
================================================================================
```

### 问题严重级别

- 🔴 **ERROR** - 必须修复（如文件损坏）
- 🟡 **WARNING** - 建议修复（如颜色过多、超出边距）
- ℹ️ **INFORMATION** - 改进建议（如间距优化）

## 🎨 MB风格检查标准

### 字体
✅ **推荐字体**:
- Mercedes Sans（首选）
- Arial（备选）
- Calibri（备选）
- Helvetica（备选）

✅ **字号标准**:
- 幻灯片标题：28-32pt
- 章节标题：18-22pt
- 正文：11-13pt

### 颜色
✅ **MB主色**:
- 黑色、白色、银色、MB蓝

✅ **原则**:
- 最多3种强调色
- 优先中性色
- 仅高亮关键信息

### 布局
✅ **边距**:
- 左/右：0.5英寸
- 上/下：0.4英寸

✅ **间距**:
- 元素最小：0.15英寸
- 章节间：0.3英寸

## 🔧 自定义设置

### 修改检查标准

编辑 `mb_style_guidelines.json`:

```json
{
  "layout": {
    "margins": {
      "left": 0.4,     // 调整左边距
      "right": 0.4,
      "top": 0.3,
      "bottom": 0.3
    },
    "spacing": {
      "min_between_elements": 0.1  // 调整最小间距
    }
  },
  "colors": {
    "guidelines": {
      "max_highlight_colors": 5  // 调整允许的颜色数量
    }
  }
}
```

## 📁 相关文件

| 文件 | 用途 |
|------|------|
| `ppt_layout_checker.py` | 主检查工具（核心） |
| `check_ppt.py` | 快速检查脚本 |
| `mb_style_guidelines.json` | MB样式指南配置 |
| `README_PPT_Checker.md` | 详细使用文档 |
| `PROJECT_SUMMARY.md` | 项目完整总结 |
| `example_usage.py` | 集成示例代码 |

## 💡 声明

### Q: 为什么提示"重叠"但看起来是正常的？
A: 工具会智能识别有意设计（如文字放在色块上）。如果仍提示：
- 检查是否符合常见模式（header+title）
- 确认尺寸比例合理
- 可忽略INFO级别的重叠提示

### Q: 如何知道我的PPT是否合格？
A: 建议：
1. **ERROR = 0** - 必须达到
2. **WARNING < 5** - 可以接受
3. **INFORMATION** - 根据实际情况优化

### Q: 检查报告如何保存？
A: 报告自动保存为 `原文件名_layout_report.txt`

## 🎯 最佳实践

### ✅ 推荐工作流

```
1. 生成PPT
   ↓
2. 自动检查（集成到生成脚本）
   ↓
3. 修复ERROR和重要WARNING
   ↓
4. 人工视觉审查
   ↓
5. 最终检查（独立运行）
   ↓
6. 发布
```

### ✅ 质量标准

- **字体**: 统一使用MB批准字体
- **颜色**: 控制在3-5种以内
- **布局**: 内容在安全区域内
- **间距**: 元素清晰分隔
- **对齐**: 整齐有序

## 📞 获取帮助

- **详细文档**: `README_PPT_Checker.md`
- **项目总结**: `PROJECT_SUMMARY.md`
- **示例代码**: `example_usage.py`

## ✨ 立即开始

```bash
# 1. 检查你的第一个PPT
python ppt_layout_checker.py "你的PPT.pptx"

# 2. 查看报告
# 报告会自动打印并保存到同目录

# 3. 根据建议优化PPT
# 从ERROR开始，然后是WARNING，最后考虑INFO
```

---

**版本**: v1.0
**更新日期**: 2026-03-27
**状态**: ✅ 生产就绪
