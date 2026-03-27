# PPT Quality Checker Skill - Usage Examples

## 🎯 Quick Examples

### Example 1: Check the PPT you just created

**You say:**
```
Check the PPT I just created
```

**Skill response:**
```
🔍 Found recent PPT: D:\AI\CIVIC_FUP2_CR_Presentation.pptx
Running quality checks...

================================================================================
PPT LAYOUT CHECK REPORT
================================================================================
Total issues found: 46

🟡 WARNINGS (36):
  [Detailed list of layout and style issues]

ℹ️  INFORMATION (10):
  [Suggestions for improvement]

================================================================================
✅ QUALITY SCORE: 72/100
================================================================================

📄 Report saved to: D:\AI\CIVIC_FUP2_CR_Presentation_quality_check_20260327_143022.txt
```

### Example 2: Check a specific PPT file

**You say:**
```
Check this presentation: D:\presentations\E2_round.pptx
```

**Skill response:**
```
🔍 Checking: E2_round.pptx
Running quality checks...

[Detailed report]

✅ QUALITY SCORE: 85/100
Presentation is ready for E2/E3 leadership audience!
```

### Example 3: Check before important meeting

**You say:**
```
I have a presentation to leadership tomorrow. Can you validate my PPT?
```

**Skill response:**
```
🔍 Checking for leadership presentation readiness...

Found: leadership_update.pptx
Running comprehensive quality checks...

🔴 Critical Issues (2):
  - Slide 3: Text overlap causing readability issues
  - Slide 5: Font not MB-compliant

🟡 Style Improvements (5):
  - Color usage exceeds 3 accent colors
  - Some elements exceed margins
  - Spacing could be improved

✅ QUALITY SCORE: 68/100

Recommendation: Fix the 2 critical issues before tomorrow's presentation.
Would you like me to help you address these issues?
```

## 📋 Integration Examples

### In PPT Generation Scripts

Add to your `create_ppt.py`:

```python
# After creating PPT
output_path = r"D:\AI\my_presentation.pptx"
prs.save(output_path)
print(f"✅ PPT saved to: {output_path}")

# Automatically check quality
import sys
sys.path.insert(0, r"D:\AI\skills\ppt-quality-checker")
from check_ppt_quality import check_presentation

result = check_presentation(output_path)

if result["success"]:
    print(f"\n📊 Quality Score: {result['quality_score']}/100")

    if result['quality_score'] >= 80:
        print("✅ Excellent! Ready for presentation.")
    elif result['quality_score'] >= 60:
        print("⚠️  Good, but consider addressing warnings.")
    else:
        print("❌ Needs improvement before presenting.")
        print(f"\nReport: {result['report_path']}")
```

### In Automated Workflows

```python
import os
from pathlib import Path
from check_ppt_quality import check_presentation

def batch_check_presentations(folder_path):
    """Check all PPTs in a folder"""
    folder = Path(folder_path)
    results = []

    for ppt_file in folder.glob("*.pptx"):
        print(f"\nChecking: {ppt_file.name}")
        result = check_presentation(str(ppt_file))
        results.append({
            "file": ppt_file.name,
            "score": result["quality_score"],
            "issues": result["total_issues"]
        })

    # Summary
    print("\n" + "="*80)
    print("BATCH CHECK SUMMARY")
    print("="*80)
    for r in sorted(results, key=lambda x: x['score'], reverse=True):
        print(f"{r['file']}: {r['score']}/100 ({r['issues']} issues)")

    return results

# Usage
batch_check_presentations(r"D:\presentations")
```

## 🎨 Real-World Scenarios

### Scenario 1: Post-Creation Quality Gate

**Context:** Just finished creating a CR presentation

**Workflow:**
1. Create PPT with `create_ppt.py`
2. **Skill automatically triggers:** "Check the PPT I just created"
3. Review quality score and issues
4. Fix critical issues
5. Re-check: "Check the updated PPT again"
6. Iterate until score >= 80

**Result:** Every PPT meets quality standards before use

### Scenario 2: Pre-Meeting Validation

**Context:** Important E2 round tomorrow

**Workflow:**
1. User: "Validate my E2 presentation for tomorrow"
2. Skill finds and checks the PPT
3. Highlights leadership-critical issues (fonts, colors, alignment)
4. Provides prioritized fix list
5. Optional: Help fix issues

**Result:** Presentation polished and ready

### Scenario 3: Brand Compliance Audit

**Context:** Quarterly review of all presentations

**Workflow:**
1. User: "Check all PPTs in the Q1 folder for brand compliance"
2. Skill runs batch check
3. Generates compliance report for each file
4. Identifies common issues across presentations
5. Suggests team-wide improvements

**Result:** Team maintains consistent brand standards

## 🔧 Advanced Usage

### Custom Check Criteria

**You say:**
```
Check this PPT but only focus on fonts and colors
```

**Skill adapts:**
```
🔍 Running focused check on fonts and colors...

Font Analysis:
✅ All fonts MB-compliant

Color Analysis:
🟡 Using 4 accent colors (max recommended: 3)
  - Consider reducing to: Black, White, MB Blue, Orange (for warnings)

Font/Color Quality Score: 85/100
```

### Compare Before/After

**You say:**
```
I updated the PPT based on your suggestions. Check it again and tell me what improved.
```

**Skill response:**
```
🔍 Comparing quality checks...

Previous Score: 68/100
Current Score: 82/100
Improvement: +14 points

✅ Fixed:
  - Reduced colors from 6 to 3
  - Fixed text overlaps in slide 3
  - Aligned elements in slide 5

Remaining suggestions:
  - Minor spacing improvements (optional)

Great progress! Ready for presentation.
```

### Integration with Git

```bash
# Pre-commit hook example
#!/bin/bash
# .git/hooks/pre-commit

# Check if any .pptx files are being committed
CHANGED_PPTX=$(git diff --cached --name-only | grep '\.pptx$')

if [ ! -z "$CHANGED_PPTX" ]; then
    echo "Checking PPT quality before commit..."

    python D:\AI\skills\ppt-quality-checker\check_ppt_quality.py "$CHANGED_PPTX"

    # Read quality score from report
    # If score < 70, abort commit

    echo "✅ PPT quality check passed"
fi
```

## 💡 Tips & Tricks

### Tip 1: Always Check After Creation

Make it a habit:
```
create_ppt.py → Skill checks automatically → Fix issues → Ready to present
```

### Tip 2: Focus on High-Impact Issues

Not all issues are equal:
- 🔴 **ERROR**: Always fix (broken layouts, wrong fonts)
- 🟡 **WARNING**: Usually fix (overlaps, margin issues)
- ℹ️ **INFORMATION**: Optional (spacing refinements)

### Tip 3: Use Quality Scores as Targets

- **90+**: Excellence (client-facing, executive presentations)
- **80-89**: Very good (internal leadership)
- **70-79**: Good (team meetings)
- **60-69**: Acceptable (drafts, internal use)

### Tip 4: Batch Check for Consistency

Before a big meeting:
```
Check all presentations in the "Q1 review" folder
```
Ensures all materials meet same standards.

### Tip 5: Save Reports for Reference

Quality reports are automatically saved. Use them to:
- Track improvements over time
- Document quality for stakeholders
- Learn common issues to avoid

## 📊 Expected Quality Scores

| Presentation Type | Target Score | Notes |
|-------------------|--------------|-------|
| Executive/Leadership | 90+ | Must be polished |
| Client-facing | 85+ | Professional appearance |
| Internal team | 75+ | Clear and functional |
| Draft/Work-in-progress | 60+ | Good enough to share |
| Personal notes | 50+ | Optional |

## 🚫 Common Mistakes to Avoid

### ❌ Mistake 1: Skipping the check

**Wrong:** Create PPT → Send to stakeholders

**Right:** Create PPT → Check quality → Fix issues → Send

### ❌ Mistake 2: Ignoring all warnings

**Wrong:** "It's just warnings, it's fine"

**Right:** Review warnings, fix high-impact ones

### ❌ Mistake 3: Over-fixing

**Wrong:** Try to get 100/100 score every time

**Right:** Aim for appropriate score based on audience

### ❌ Mistake 4: Not re-checking after edits

**Wrong:** Check once, make changes, assume it's still good

**Right:** Check → Edit → Re-check

## 📈 Tracking Quality Over Time

```python
# quality_tracker.py
import json
from datetime import datetime
from check_ppt_quality import check_presentation

def track_quality(ppt_path):
    """Track quality scores over time"""
    result = check_presentation(ppt_path, save_report=False)

    # Load history
    history_file = "quality_history.json"
    try:
        with open(history_file) as f:
            history = json.load(f)
    except:
        history = {"checks": []}

    # Add new check
    history["checks"].append({
        "date": datetime.now().isoformat(),
        "file": ppt_path,
        "score": result["quality_score"],
        "issues": result["total_issues"]
    })

    # Save
    with open(history_file, 'w') as f:
        json.dump(history, f, indent=2)

    # Show trend
    scores = [c["score"] for c in history["checks"]]
    if len(scores) > 1:
        trend = "improving" if scores[-1] > scores[-2] else "declining"
        print(f"\n📈 Quality trend: {trend}")
        print(f"Average score: {sum(scores)/len(scores):.1f}")

    return result

# Usage
track_quality("my_presentation.pptx")
```

---

## 🎯 Remember

The PPT Quality Checker is your **automatic quality gate**. Use it:
- ✅ After every PPT creation
- ✅ Before important presentations
- ✅ When ensuring brand compliance
- ✅ To maintain consistent quality

**Quality is not optional for professional presentations!**
