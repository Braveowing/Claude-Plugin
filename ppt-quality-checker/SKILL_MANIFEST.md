# PPT Quality Checker Skill - Complete Package

## 📦 Skill Contents

```
ppt-quality-checker/
├── SKILL.md                    # Main skill definition (triggered by Claude)
├── check_ppt_quality.py        # Integration script (executable)
├── README.md                   # Complete documentation
├── USAGE_EXAMPLES.md          # Real-world usage examples
├── skill.json                 # Skill metadata
└── SKILL_MANIFEST.md          # This file
```

## 🚀 Quick Start

### 1. Install the Skill

Copy to your Claude skills directory:
```
D:\AI\skills\ppt-quality-checker\
```

### 2. Ensure Dependencies Exist

Required files in `D:\AI\`:
- ✅ `ppt_layout_checker.py` (main checker tool)
- ✅ `mb_style_guidelines.json` (MB brand standards)

### 3. Use the Skill

Simply say to Claude:
```
Check the PPT I just created
```

That's it! The skill will automatically trigger and validate your presentation.

## 🎯 What This Skill Does

### Automatic Quality Gates

1. **Layout Validation**
   - Overlap detection (intelligent)
   - Alignment verification
   - Spacing analysis
   - Margin compliance

2. **Style Verification**
   - MB font standards
   - Color usage policies
   - Visual balance

3. **Quality Scoring**
   - 90-100: Excellent
   - 70-89: Good
   - 50-69: Acceptable
   - <50: Needs work

### Smart Triggers

The skill automatically activates when you:
- Create a new PPT
- Ask to "check" or "validate" a presentation
- Mention quality review before meetings

## 📋 Command Reference

### Basic Commands

| Command | Action |
|---------|--------|
| `Check the PPT I just created` | Auto-find and check recent PPT |
| `Check [file path]` | Check specific PPT file |
| `Validate my presentation` | Run comprehensive check |
| `Review this PPT for E2` | Leadership-focused validation |

### Advanced Commands

| Command | Action |
|---------|--------|
| `Check only fonts and colors` | Focused validation |
| `Batch check all PPTs in [folder]` | Multiple file validation |
| `Check against custom guidelines` | Use custom standards |

## 📊 Output Examples

### Standard Report

```
================================================================================
PPT LAYOUT CHECK REPORT
================================================================================
File: my_presentation.pptx
Total issues: X

🔴 ERRORS (X):
  Critical issues

🟡 WARNINGS (X):
  Style improvements

ℹ️  INFORMATION (X):
  Optional enhancements

================================================================================
✅ QUALITY SCORE: X/100
================================================================================
📄 Report saved to: [path]_quality_check_[timestamp].txt
```

### Quick Summary

```
📊 Quality Score: 82/100

✅ Strengths:
  - All fonts MB-compliant
  - Clean color usage

⚠️  Areas for improvement:
  - 3 elements exceed margins
  - Some spacing tight

Recommendation: Ready for internal review, address margins for external use.
```

## 🔧 Technical Requirements

### System Requirements
- Python 3.8+
- Windows/Linux/macOS

### Python Packages
```
python-pptx >= 0.6.21
pillow >= 9.0.0
```

### File Dependencies
```
D:\AI\
├── ppt_layout_checker.py          (required)
├── mb_style_guidelines.json        (required)
└── skills\
    └── ppt-quality-checker\
        └── [skill files]
```

## 💡 Best Practices

### ✅ Do
- Invoke skill after EVERY PPT creation
- Fix ERRORs before sharing
- Re-check after major edits
- Save quality reports
- Track scores over time

### ❌ Don't
- Skip quality checks
- Ignore all warnings
- Assume one check is enough
- Try to achieve 100/100 every time
- Fix issues blindly without visual review

## 🎓 Learning Path

### Beginner
1. Start with: "Check the PPT I just created"
2. Read the quality report
3. Fix 1-2 critical issues
4. Re-check to see improvement

### Intermediate
1. Use focused checks: "Check only fonts and colors"
2. Compare before/after scores
3. Batch check multiple files
4. Customize guidelines

### Advanced
1. Integrate into PPT generation scripts
2. Set up automated workflows
3. Track quality metrics over time
4. Create custom validation rules

## 🔗 Integration Points

### With PPT Generation
```python
# In create_ppt.py
prs.save(output_path)
# Then say: "Check the PPT I just created"
```

### With Git Hooks
```bash
# Pre-commit hook
python check_ppt_quality.py "$CHANGED_PPTX"
```

### With CI/CD
```yaml
# In pipeline
- name: PPT Quality Check
  run: python skills/ppt-quality-checker/check_ppt_quality.py presentation.pptx
```

## 📈 Success Metrics

Track these to measure skill effectiveness:
- Average quality score improvement
- Issues caught before meetings
- Time saved on manual review
- Stakeholder feedback on presentation quality

## 🆘 Troubleshooting

| Problem | Solution |
|---------|----------|
| "No PPT found" | Specify file path explicitly |
| "Checker not found" | Verify D:\AI\ppt_layout_checker.py exists |
| "Too many issues" | Focus on ERRORs first, then WARNINGs |
| "Score too low" | Don't panic - use as improvement guide |

## 📞 Support Resources

- **Full Documentation:** `README.md`
- **Usage Examples:** `USAGE_EXAMPLES.md`
- **Main Skill:** `SKILL.md`
- **Original Tool Docs:** `D:\AI\README_PPT_Checker.md`

## 🎯 Remember

**Quality is not optional for professional presentations.**

This skill is your automatic quality gate. Use it:
- After every PPT creation
- Before important meetings
- When ensuring brand compliance
- To maintain professional standards

---

**Version:** 1.0.0
**Created:** 2026-03-27
**Status:** ✅ Production Ready

**Next Step:** Try it now! Say "Check the PPT I just created"
