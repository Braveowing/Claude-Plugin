---
name: ppt-quality-checker
description: Check PowerPoint presentations for layout, style, and MB brand compliance. Use this skill after creating or modifying any PPT, or when the user asks to check, validate, review, or audit a presentation. Automatically verifies layout quality, font usage, color compliance, spacing, and alignment according to Mercedes-Benz corporate style guidelines.
---

# PowerPoint Quality Checker

Automatically validate PowerPoint presentations against MB corporate style guidelines.

## When to Use

Invoke this skill:
- **Immediately after creating any new PPT** (automatic quality gate)
- When modifying or updating existing presentations
- When user asks to "check", "validate", "review", or "audit" a PPT
- Before presenting to stakeholders or leadership
- When ensuring brand compliance

## What This Skill Does

This skill runs comprehensive quality checks on PowerPoint files:

### ✅ Layout Checks
- **Overlap Detection** - Identifies unintended shape overlaps (intelligently ignores intentional overlays like text on colored backgrounds)
- **Alignment Verification** - Ensures elements are properly aligned
- **Spacing Analysis** - Validates adequate spacing between elements (minimum 0.15 inches)
- **Margin Compliance** - Verifies content stays within safe margins

### 🎨 Style Checks
- **Font Validation** - Confirms use of MB-approved fonts (Mercedes Sans, Arial, Calibri, Helvetica)
- **Color Audit** - Ensures color usage follows MB business style (max 3 accent colors)
- **Visual Balance** - Evaluates overall presentation aesthetics

### 📊 Quality Metrics
- Severity categorization: ERROR / WARNING / INFORMATION
- Actionable recommendations for each issue
- Pass/fail summary with improvement suggestions

## How to Use

### Method 1: Check Current Working Directory PPT

If a PPT was just created in the current session:

```
Please check the PPT I just created
```

The skill will automatically locate and check the most recently modified .pptx file.

### Method 2: Check Specific PPT File

Provide the file path:

```
Check this PPT: D:\presentations\my_presentation.pptx
```

### Method 3: After PPT Generation (Automatic)

When creating a PPT using Python scripts, the skill can be invoked immediately after:

```
I've created a PPT at [path]. Please check its quality.
```

## Output Format

The skill generates a detailed report:

```
================================================================================
PPT QUALITY CHECK REPORT
================================================================================
File: presentation_name.pptx
Total issues: X

🔴 ERRORS (X):
  Issues requiring immediate attention

🟡 WARNINGS (X):
  Layout and style issues to address

ℹ️  INFORMATION (X):
  Suggestions for improvement

================================================================================
✅ QUALITY SCORE: X/100
================================================================================
```

## Quality Standards

### MB Brand Guidelines

**Fonts:**
- Primary: Mercedes Sans
- Fallback: Arial, Calibri, Helvetica
- Title sizes: 28-32pt (slides), 18-22pt (sections), 14-16pt (subsections)
- Body sizes: 11-13pt (normal), 9-10pt (small)

**Colors:**
- Primary: Black, White, Silver, MB Blue (#0064B4)
- Semantic: Green (success), Orange (warning), Red (error)
- Maximum accent colors: 3
- Principle: Prefer neutral, highlight only key information

**Layout:**
- Margins: 0.5in (left/right), 0.4in (top/bottom)
- Minimum spacing: 0.15in between elements
- Alignment tolerance: 0.05in

### Quality Scoring

- **90-100**: Excellent, presentation-ready
- **70-89**: Good, minor refinements suggested
- **50-69**: Acceptable, several improvements needed
- **Below 50**: Requires significant revision

## Implementation

### Step 0: Determine User Intent

First, understand what the user wants:

**Checking only (default):**
- "Check this PPT"
- "Validate my presentation"
- "Review this file"
- "What's the quality of this PPT?"

**Checking AND fixing:**
- "Fix this PPT"
- "Auto-fix the issues"
- "Check and fix my presentation"
- "Apply fixes to this PPT"
- "Improve this presentation"

**Specific fixes:**
- "Fix only the margins"
- "Fix fonts and spacing"
- "Apply margin and alignment fixes"

Based on user intent, proceed with either:
- **Check only** → Continue to Step 1
- **Check and fix** → Check first (Step 1-3), then fix (Step 4)

### Step 1: Locate PPT File

If user provides specific path, use it. Otherwise:
1. Check if a PPT path was mentioned in recent conversation
2. Search for most recently modified .pptx in current directory
3. Ask user to specify if unclear

### Step 2: Run Quality Check

Execute the layout checker tool:

```python
import sys
sys.path.insert(0, r"D:\AI")
from ppt_layout_checker import PPTLayoutChecker

# Initialize with MB guidelines
checker = PPTLayoutChecker(r"D:\AI\mb_style_guidelines.json")

# Run comprehensive check
issues = checker.check_presentation(ppt_path)

# Generate report
report = checker.generate_report()
```

### Step 3: Analyze and Report

1. Display the quality report to user
2. Highlight critical issues (ERRORs)
3. Summarize WARNINGS and INFORMATION items
4. Provide actionable recommendations

### Step 4: Save Report

Automatically save report to:
- Same directory as PPT
- Filename: `[original_name]_quality_check_[timestamp].txt`

### Step 5: Apply Fixes (if requested)

If user wants fixes applied:

```python
import sys
sys.path.insert(0, r"D:\AI\skills\ppt-quality-checker")
from check_ppt_quality import fix_presentation

# Determine fix types (or None for all)
fix_types = None  # or ['margins', 'fonts', 'spacing', 'alignment']

# Apply fixes
result = fix_presentation(ppt_path, fix_types, create_backup=True)

if result["success"]:
    # Display fix report
    print(result["report"])

    # Show fixes applied
    for fix in result["fixes_applied"]:
        print(f"  ✅ {fix}")
```

### Step 6: Re-check After Fixes (if fixes applied)

After fixing, automatically re-run quality check:

```python
# Re-check the fixed PPT
new_result = check_presentation(ppt_path)

# Compare scores
improvement = new_result["quality_score"] - original_result["quality_score"]
print(f"📈 Improvement: +{improvement} points")
print(f"✅ New quality score: {new_result['quality_score']}/100")
```

## Advanced Usage

### Custom Guidelines

If checking non-MB presentations:

```
Check this PPT using custom style guidelines: path/to/guidelines.json
```

### Specific Checks Only

```
Check only the layout (fonts/colors/spacing) of this PPT
```

### Batch Checking

```
Check all PPTs in the presentations folder
```

## 🔧 Automatic Fixing Capabilities

### Overview

This skill can automatically fix common layout and style issues, saving time and ensuring compliance with MB standards.

### Available Fixes

#### 1. **Margins** (`margins`)
- **What it fixes:** Elements exceeding safe margins
- **How:** Moves elements within boundaries, adjusts width/height if needed
- **Safety:** ✅ Conservative - won't break layout
- **Recommended:** Always apply

#### 2. **Fonts** (`fonts`)
- **What it fixes:** Non-MB fonts
- **How:** Replaces with approved fallback (Arial, Calibri, or Helvetica)
- **Safety:** ✅ Very safe - only affects font appearance
- **Recommended:** Always apply

#### 3. **Spacing** (`spacing`)
- **What it fixes:** Elements too close together
- **How:** Increases spacing to minimum 0.15 inches
- **Safety:** ✅ Safe - moves elements down/right to create space
- **Recommended:** Apply for better readability

#### 4. **Alignment** (`alignment`)
- **What it fixes:** Misaligned elements
- **How:** Aligns to most common edge in same row
- **Safety:** ⚠️ Moderate - may shift elements
- **Recommended:** Review changes after applying

#### 5. **Colors** (`colors`)
- **What it fixes:** Too many accent colors
- **How:** Reports issues but doesn't auto-change (preserves design intent)
- **Safety:** ℹ️ Information only - manual review recommended
- **Recommended:** Review and manually adjust

### How to Request Fixes

#### Fix All Issues (Recommended)
```
Fix all issues in this PPT
```

#### Fix Specific Issue Types
```
Fix only margins and fonts in this PPT
```

#### Fix After Checking
```
Check this PPT and then fix the issues
```

#### Preview Fixes
```
Show me what would be fixed in this PPT (don't actually fix yet)
```

### Automatic Backup

**IMPORTANT:** The skill ALWAYS creates a backup before fixing!

- **Backup location:** Same folder as original PPT
- **Backup naming:** `[original_name]_backup_[timestamp].pptx`
- **Purpose:** You can always revert if fixes aren't satisfactory

### Fix Workflow

```
1. User: "Fix all issues in my PPT"
   ↓
2. Skill creates backup automatically
   ↓
3. Analyzes presentation
   ↓
4. Applies fixes:
   - Margins (safe)
   - Fonts (safe)
   - Spacing (safe)
   - Alignment (review recommended)
   ↓
5. Saves fixed PPT
   ↓
6. Generates fix report
   ↓
7. User reviews and approves or reverts
```

### Fix Report Example

```
================================================================================
PPT FIX REPORT
================================================================================
Total fixes applied: 23
Total fixes failed: 0

✅ FIXES APPLIED:
  1. Backup created: my_presentation_backup_20260327_150530.pptx
  2. Slide 1 - Fixed margins for TextBox 5
  3. Slide 1 - Changed font from 'Times New Roman' to 'Arial' in TextBox 3
  4. Slide 2 - Increased vertical spacing between Shape 4 and Shape 5
  5. Slide 3 - Aligned TextBox 7 (moved 0.15in)
  ...

================================================================================
✅ Successfully applied 23 fixes!
📄 Fixed PPT saved to: my_presentation.pptx
📦 Backup saved to: my_presentation_backup_20260327_150530.pptx
================================================================================
```

### When to Use Fixes

#### ✅ Use Automatic Fixes When:
- Creating new PPTs (standard quality gate)
- Preparing for internal meetings
- Time is limited
- Issues are straightforward (margins, fonts)

#### ⚠️  Manual Review Recommended When:
- Preparing for executive/client presentations
- Design is carefully crafted
- Color palette is intentional
- Complex layouts with overlapping elements by design

#### ❌ Don't Auto-Fix When:
- PPT is from external source (preserve original design)
- You're making template modifications
- Complex custom layouts

### Fix Strategies by Use Case

#### Quick Fix (Before Team Meeting)
```
Fix margins and fonts only
```
- Fast: ~5 seconds
- Safe: Low risk
- Impact: Immediate improvement

#### Standard Fix (Before Leadership)
```
Fix all issues
```
- Comprehensive
- Review alignment changes
- High quality result

#### Conservative Fix (Before Client)
```
Fix margins, fonts, and spacing
Then manually review colors and alignment
```
- Preserves design intent
- Ensures compliance
- Professional result

### Reverting Fixes

If fixes aren't satisfactory:

1. **Use the backup:**
   ```
   The fixes changed too much. Can you restore the backup?
   ```

2. **Selective reversion:**
   ```
   The alignment fixes were too aggressive. Revert only those.
   ```

### Implementation Details

The skill uses the `ppt_auto_fixer.py` tool located at `D:\AI\ppt_auto_fixer.py`.

**Fix Priority Order:**
1. Backup creation (always first)
2. Margins (structural foundation)
3. Fonts (style compliance)
4. Spacing (readability)
5. Alignment (visual polish)

**Safety Guarantees:**
- ✅ Never deletes content
- ✅ Never changes text
- ✅ Always creates backup
- ✅ Only adjusts layout properties
- ✅ Preserves design intent for colors

### Advanced Fix Options

#### Incremental Fixing
```
Fix only critical issues (margins and fonts) first, then we'll review
```

#### Fix Specific Slides
```
Fix only slide 3 and 5 in this PPT
```

#### Compare Before/After
```
Fix this PPT and show me a summary of what changed
```

## Troubleshooting

### "No PPT file found"
- User needs to specify the file path
- Check if file extension is .pptx

### "Checker tool not found"
- Ensure ppt_layout_checker.py is in D:\AI directory
- Verify mb_style_guidelines.json exists

### "Too many warnings"
- Not all warnings require fixing
- Focus on ERRORs first, then high-priority WARNINGs
- Use judgment based on presentation context

## Best Practices

1. **Always check after creation** - Make this part of your PPT workflow
2. **Fix critical issues first** - Prioritize ERRORs over WARNINGs
3. **Use judgment** - Not all suggestions must be implemented
4. **Review before sharing** - Run check before presentations to leadership
5. **Iterate** - Check → Fix → Re-check until satisfied

## Examples

### Example 1: Post-Creation Check

**User:** "I've created the CIVIC FUP2 presentation. Can you check it?"

**Skill Action:**
1. Locate file: D:\AI\CIVIC_FUP2_CR_Presentation.pptx
2. Run quality check
3. Display report showing 46 issues
4. Highlight: "6 non-MB colors used (max: 3)"
5. Suggest: "Reduce color variety for cleaner business presentation"

### Example 2: Pre-Meeting Validation

**User:** "Check this before my E2 presentation tomorrow"

**Skill Action:**
1. Check specified file
2. Identify alignment and spacing issues
3. Generate quality score: 78/100
4. Provide prioritized fix list
5. Save detailed report for reference

## Integration Notes

This skill integrates with:
- **PPT generation scripts** - Can be called after prs.save()
- **Workflow automation** - Part of quality gate process
- **Brand compliance** - Ensures MB standards maintained

## Technical Details

**Dependencies:**
- python-pptx library
- PIL/Pillow library
- mb_style_guidelines.json configuration

**File Locations:**
- Checker tool: D:\AI\ppt_layout_checker.py
- Guidelines: D:\AI\mb_style_guidelines.json
- Reports: Same directory as PPT file

---

**Remember**: Quality checking is not optional for professional presentations. Always invoke this skill after creating or significantly modifying any PowerPoint file, especially for leadership or external audiences.
