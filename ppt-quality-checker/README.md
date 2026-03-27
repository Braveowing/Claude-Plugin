# PPT Quality Checker & Fixer for Claude Code

<div align="center">

**Automated PowerPoint Quality Control for Mercedes-Benz Brand Compliance**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Python 3.8+](https://img.shields.io/badge/python-3.8+-blue.svg)](https://www.python.org/downloads/)
[![Claude Code](https://img.shields.io/badge/Claude%20Code-Compatible-green.svg)](https://claude.ai)

</div>

---

## 🎯 Overview

This Claude Code skill automatically **checks and fixes** PowerPoint presentations for layout quality and Mercedes-Benz brand compliance.

### ✨ Key Features

- ✅ **Quality Checking** - Comprehensive validation of layout, fonts, colors, spacing
- 🔧 **Auto-Fixing** - Automatically resolve detected issues
- 📊 **Quality Scoring** - 0-100 point quality assessment
- 🎨 **MB Brand Compliance** - Enforces Mercedes-Benz style guidelines
- 💾 **Safe Operation** - Always creates backups before modifying
- 📋 **Detailed Reports** - Professional check and fix reports

---

## 🚀 Quick Start

### Prerequisites

```bash
pip install python-pptx pillow
```

### Installation

1. **Clone this repository:**
   ```bash
   git clone https://github.com/Braveowing/Claude-Plugin.git
   cd Claude-Plugin/ppt-quality-checker
   ```

2. **Copy to your Claude skills directory:**
   ```bash
   # Copy entire folder to your Claude Code skills directory
   # Location varies by OS - check Claude Code documentation
   ```

### Basic Usage

#### Check a Presentation
```python
from check_ppt_quality import check_presentation

result = check_presentation("your_presentation.pptx")
print(result["report"])
print(f"Quality Score: {result['quality_score']}/100")
```

#### Fix a Presentation
```python
from ppt_auto_fixer import PPTLayoutFixer

fixer = PPTLayoutFixer("mb_style_guidelines.json")
success, fixes = fixer.fix_presentation("your_presentation.pptx")
print(fixer.generate_fix_report())
```

---

## 📋 What Gets Checked & Fixed

### Quality Checks

| Check Type | Description |
|------------|-------------|
| **Overlaps** | Detects unintended shape overlaps |
| **Margins** | Verifies content within safe margins |
| **Fonts** | Validates MB-approved fonts |
| **Colors** | Checks color usage (max 3 accents) |
| **Spacing** | Ensures adequate element spacing |
| **Alignment** | Verifies proper element alignment |

### Auto-Fixes Available

| Fix Type | What It Does | Safety Level |
|----------|--------------|--------------|
| **Margins** | Moves elements within boundaries | ✅ Very Safe |
| **Fonts** | Replaces non-MB fonts | ✅ Very Safe |
| **Spacing** | Increases spacing between elements | ✅ Safe |
| **Alignment** | Aligns elements to consistent edges | ⚠️ Moderate |

---

## 🎨 MB Brand Guidelines

### Approved Fonts
- **Primary:** Mercedes Sans
- **Fallback:** Arial, Calibri, Helvetica

### Font Sizes
| Element | Size Range |
|---------|------------|
| Slide Title | 28-32pt |
| Section Header | 18-22pt |
| Subsection | 14-16pt |
| Body Text | 11-13pt |
| Small Text | 9-10pt |

### Colors
- **Primary:** Black, White, Silver, MB Blue (#0064B4)
- **Max Accent Colors:** 3
- **Principle:** Minimal colors, highlight only key information

### Layout
- **Margins:** 0.5" (left/right), 0.4" (top/bottom)
- **Minimum Spacing:** 0.15" between elements

---

## 📖 Documentation

| File | Description |
|------|-------------|
| `SKILL.md` | Main skill definition for Claude Code |
| `README.md` | This file - complete documentation |
| `SKILL_USAGE_GUIDE.md` | Detailed usage examples |
| `FIX_EXAMPLES.md` | Fix workflow examples |
| `check_ppt_quality.py` | Main checking and integration script |
| `ppt_layout_checker.py` | Quality checker engine |
| `ppt_auto_fixer.py` | Auto-fixer engine |

---

## 🔧 Command Line Usage

### Check Only
```bash
python check_ppt_quality.py presentation.pptx
```

### Check and Fix
```bash
python check_ppt_quality.py presentation.pptx --fix
```

### Fix Specific Issues
```bash
python check_ppt_quality.py presentation.pptx --fix --fix-types margins,fonts
```

### Use Fixer Directly
```bash
python ppt_auto_fixer.py presentation.pptx margins,fonts,spacing
```

---

## 📊 Quality Score Targets

| Audience | Target Score | Fix Strategy |
|----------|--------------|--------------|
| Personal notes | 60+ | Quick Fix (5s) |
| Team meeting | 75+ | Standard Fix (15s) |
| Leadership | 85+ | Standard + Manual |
| Client/External | 90+ | Conservative + Manual |

---

## 💡 Examples

### Example 1: Quick Check
```python
from check_ppt_quality import check_presentation

result = check_presentation("my_presentation.pptx")

print(f"Quality Score: {result['quality_score']}/100")
print(f"Total issues: {result['total_issues']}")
print(f"- Errors: {result['errors']}")
print(f"- Warnings: {result['warnings']}")
print(f"- Info: {result['information']}")
```

### Example 2: Check and Fix
```python
from check_ppt_quality import check_presentation, fix_presentation
from ppt_auto_fixer import PPTLayoutFixer

# Check first
result = check_presentation("my_presentation.pptx")
original_score = result['quality_score']

# Fix if needed
if original_score < 85:
    fix_result = fix_presentation("my_presentation.pptx")

    # Re-check
    new_result = check_presentation("my_presentation.pptx")
    print(f"Improvement: +{new_result['quality_score'] - original_score} points")
```

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- Built for use with [Claude Code](https://claude.ai)
- Uses [python-pptx](https://github.com/scanny/python-pptx) library
- Inspired by Mercedes-Benz corporate presentation standards

---

## 📞 Support

If you encounter any issues or have questions:
1. Check the [Issues](https://github.com/Braveowing/Claude-Plugin/issues) page
2. Create a new issue with detailed description
3. Include your PPT file (if possible) and error messages

---

<div align="center">

**Made with ❤️ for better presentations**

[⬆ Back to Top](#ppt-quality-checker--fixer-for-claude-code)

</div>
