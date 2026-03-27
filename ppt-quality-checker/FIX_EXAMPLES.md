# PPT Quality Checker & Fixer - Examples

## 🎯 Complete Workflow Examples

### Example 1: Check and Auto-Fix (Recommended)

**User says:**
```
Fix all issues in this PPT
```

**Skill does:**
```
================================================================================
Step 1: Quality Check
================================================================================
🔍 Checking: my_presentation.pptx

Total issues: 46
Quality Score: 58/100

🔴 ERRORS (0): None
🟡 WARNINGS (36): Layout and style issues
ℹ️  INFORMATION (10): Suggestions

================================================================================
Step 2: Auto-Fix
================================================================================
🔧 Creating backup: my_presentation_backup_20260327_151045.pptx
🔧 Applying fixes...

✅ FIXES APPLIED (23):
  1. Slide 1 - Fixed margins for TextBox 2
  2. Slide 1 - Changed font from 'Times New Roman' to 'Arial' in TextBox 3
  3. Slide 1 - Increased vertical spacing between Rounded Rectangle 4 and TextBox 5
  4. Slide 2 - Fixed margins for Picture 7
  5. Slide 2 - Aligned TextBox 8 (moved 0.12in)
  ...

================================================================================
Step 3: Re-Check
================================================================================
✅ New quality score: 85/100
📈 Improvement: +27 points

================================================================================
🎉 Result: Presentation improved from 58/100 to 85/100
================================================================================
📄 Fixed PPT: my_presentation.pptx
📦 Backup: my_presentation_backup_20260327_151045.pptx
================================================================================
```

---

### Example 2: Conservative Fix (Before Client Meeting)

**User says:**
```
I have a client presentation. Check it and fix only safe issues (margins and fonts).
```

**Skill responds:**
```
================================================================================
🔍 Checking: client_presentation.pptx
================================================================================
Quality Score: 72/100

Found 28 issues:
- 12 margin violations
- 5 non-MB fonts
- 8 spacing issues
- 3 alignment issues

================================================================================
🔧 Applying CONSERVATIVE FIXES (margins, fonts only)
================================================================================

✅ Created backup: client_presentation_backup_20260327_151530.pptx

✅ FIXES APPLIED (17):
  - Fixed 12 margin violations
  - Changed 5 fonts to MB-approved alternatives

================================================================================
📊 RE-CHECK RESULTS
================================================================================
New Quality Score: 82/100
Improvement: +10 points

Remaining issues (all safe to leave as-is):
- 8 spacing suggestions (optional)
- 3 alignment suggestions (optional)

================================================================================
✅ READY FOR CLIENT PRESENTATION
================================================================================
Recommendation: Conservative fixes applied. Design preserved.
Optional: Apply spacing fixes if you want 90+ score.
================================================================================
```

---

### Example 3: Incremental Fix Workflow

**User says:**
```
Check my PPT and let me decide which fixes to apply
```

**Skill responds:**
```
================================================================================
🔍 QUALITY CHECK RESULTS
================================================================================
File: my_presentation.pptx
Quality Score: 65/100

🔴 CRITICAL (0): None

🟡 HIGH PRIORITY (12):
  ⚠️  5 margin violations - Can fix automatically ✅
  ⚠️  3 non-MB fonts - Can fix automatically ✅
  ⚠️  4 spacing issues - Can fix automatically ✅

ℹ️  MODERATE PRIORITY (8):
  ℹ️  5 alignment suggestions - Can fix automatically ⚠️
  ℹ️  3 color usage notes - Manual review recommended 👀

================================================================================
🤔 WHICH FIXES WOULD YOU LIKE TO APPLY?
================================================================================

Option 1: Fix all auto-fixable issues (margins, fonts, spacing) - RECOMMENDED
  → Would apply 12 fixes
  → Expected new score: 82/100

Option 2: Fix everything except colors (margins, fonts, spacing, alignment)
  → Would apply 17 fixes
  → Expected new score: 88/100

Option 3: Fix only margins and fonts (most conservative)
  → Would apply 8 fixes
  → Expected new score: 75/100

Option 4: Manual review only (show me details first)
  → Won't apply any fixes
  → Let's discuss specific issues

Which option would you prefer? (1/2/3/4)
```

---

### Example 4: Fix Specific Issue Types

**User says:**
```
Fix only the fonts in this PPT
```

**Skill responds:**
```
================================================================================
🔧 TARGETED FIX: FONTS ONLY
================================================================================

Checking for font issues...

Found 8 non-MB fonts:
  - Slide 1: 'Times New Roman' in 3 text boxes
  - Slide 2: 'Georgia' in 2 text boxes
  - Slide 3: 'Courier New' in 3 text boxes

================================================================================
✅ APPLYING FIXES
================================================================================

Created backup: presentation_backup_20260327_152000.pptx

Fixed:
  ✅ Slide 1 - Changed 'Times New Roman' → 'Arial' (3 instances)
  ✅ Slide 2 - Changed 'Georgia' → 'Arial' (2 instances)
  ✅ Slide 3 - Changed 'Courier New' → 'Calibri' (3 instances)

================================================================================
📊 RESULTS
================================================================================
Font fixes applied: 8
New quality score: 75/100 (was 68/100)
Improvement: +7 points

Remaining issues: 15 (margins, spacing, alignment)
Would you like to fix those too?
================================================================================
```

---

### Example 5: Fix with Review

**User says:**
```
Fix my PPT but show me what will change first
```

**Skill responds:**
```
================================================================================
🔍 PREVIEW MODE - What Would Be Fixed
================================================================================

Analyzing: leadership_presentation.pptx
Current quality score: 68/100

================================================================================
PROPOSED CHANGES (23 fixes)
================================================================================

📄 MARGINS (8 fixes):
  ✓ Slide 1, TextBox 2: Move right 0.2in (exceeds left margin)
  ✓ Slide 1, TextBox 3: Move down 0.15in (exceeds top margin)
  ✓ Slide 2, Picture 4: Reduce width 0.3in (exceeds right margin)
  ... 5 more margin fixes

📝 FONTS (5 fixes):
  ✓ Slide 1: Change 'Times New Roman' → 'Arial'
  ✓ Slide 2: Change 'Georgia' → 'Calibri'
  ... 3 more font fixes

📏 SPACING (7 fixes):
  ✓ Slide 1: Increase spacing 0.05in between TextBox 2 and TextBox 3
  ✓ Slide 3: Increase spacing 0.08in between Shape 5 and TextBox 6
  ... 5 more spacing fixes

↔️  ALIGNMENT (3 fixes):
  ⚠️  Slide 2: Move TextBox 5 left by 0.15in (align with others)
  ⚠️  Slide 4: Move Shape 8 left by 0.12in (align with others)
  ⚠️  Slide 5: Move TextBox 10 left by 0.18in (align with others)

================================================================================
⚠️  ALIGNMENT CHANGES MAY AFFECT DESIGN
================================================================================
The 3 alignment fixes will move elements. This is usually safe but
may affect carefully crafted layouts.

Would you like to:
1. Apply all fixes (including alignment) - FASTEST
2. Skip alignment fixes, apply others - SAFER
3. Show me the specific slides affected by alignment changes

Your choice?
```

---

### Example 6: Batch Fix Multiple PPTs

**User says:**
```
Fix all presentations in the Q1 folder
```

**Skill responds:**
```
================================================================================
🔧 BATCH FIX MODE
================================================================================
Found 5 PPT files in D:\presentations\Q1\

================================================================================
FILE 1/5: Q1_review.pptx
================================================================================
✅ Created backup
✅ Applied 18 fixes
📈 Score improved: 62 → 84 (+22 points)

================================================================================
FILE 2/5: team_update.pptx
================================================================================
✅ Created backup
✅ Applied 12 fixes
📈 Score improved: 71 → 89 (+18 points)

================================================================================
FILE 3/5: leadership_brief.pptx
================================================================================
✅ Created backup
✅ Applied 23 fixes
📈 Score improved: 58 → 86 (+28 points)

================================================================================
FILE 4/5: client_demo.pptx
================================================================================
✅ Created backup
✅ Applied 15 fixes
📈 Score improved: 74 → 88 (+14 points)

================================================================================
FILE 5/5: metrics_report.pptx
================================================================================
✅ Created backup
✅ Applied 19 fixes
📈 Score improved: 65 → 85 (+20 points)

================================================================================
📊 BATCH FIX SUMMARY
================================================================================
Total files processed: 5
Total fixes applied: 87
Average improvement: +20.4 points
All backups saved with _backup_ suffix

================================================================================
✅ ALL PRESENTATIONS FIXED AND READY
================================================================================
```

---

## 💡 Fix Strategies

### Strategy 1: Quick Polish (5 seconds)
```
Fix only margins and fonts
```
- **Use when:** Quick check before team meeting
- **Time:** ~5 seconds
- **Impact:** Immediate 10-15 point improvement
- **Risk:** Minimal

### Strategy 2: Standard Fix (15 seconds)
```
Fix all issues
```
- **Use when:** Normal presentation preparation
- **Time:** ~15 seconds
- **Impact:** 20-30 point improvement
- **Risk:** Low (review alignment changes)

### Strategy 3: Conservative Fix (10 seconds)
```
Fix margins, fonts, and spacing only
```
- **Use when:** Important client/executive presentation
- **Time:** ~10 seconds
- **Impact:** 15-20 point improvement
- **Risk:** Very low (preserves design)

### Strategy 4: Incremental Fix (Variable)
```
Fix fonts only, then let me review
```
- **Use when:** Fine-tuning a presentation
- **Time:** Variable
- **Impact:** Targeted improvement
- **Risk:** Minimal (step-by-step control)

---

## 🎓 Learning to Use Fixes Effectively

### Week 1: Start Conservative
- Fix only margins and fonts
- Review all changes
- Learn what the fixer does

### Week 2: Standard Usage
- Fix all issues
- Trust spacing fixes
- Review alignment changes

### Week 3: Advanced Usage
- Use targeted fixes
- Understand fix priorities
- Batch fix multiple PPTs

### Week 4: Expert Level
- Know which fixes to apply when
- Combine auto-fix with manual refinement
- Achieve consistent 85+ scores

---

## 📊 Before/After Examples

### Before Fix (Score: 62/100)
```
Issues:
❌ Text box exceeds left margin by 0.3in
❌ Using 'Times New Roman' font (not MB-approved)
❌ Text boxes overlapping by 85%
❌ Elements too close (0.08in spacing)
❌ Colors: 7 accent colors (max: 3)
```

### After Fix (Score: 88/100)
```
✅ All elements within margins
✅ All fonts changed to 'Arial'
✅ Overlaps resolved (spacing increased)
✅ Minimum spacing: 0.15in
ℹ️  Colors: Still 7 (manual design choice - acceptable)
```

---

## ⚠️  Important Reminders

### ✅ Always Creates Backup
Every fix operation creates a backup first:
- Original: `presentation.pptx`
- Backup: `presentation_backup_20260327_151045.pptx`

### ✅ Fixes Are Reversible
If you don't like the fixes:
```
Revert to the backup
```

### ✅ Transparent Process
Skill shows exactly what it's fixing:
- What issues found
- What fixes will be applied
- What changes were made

### ✅ Quality Validation
Always re-checks after fixing:
- Shows improvement
- Identifies remaining issues
- Validates quality score

---

## 🎯 Quick Reference

| Command | Action | Time |
|---------|--------|------|
| `Fix this PPT` | Apply all fixes | ~15s |
| `Fix margins and fonts only` | Conservative fix | ~5s |
| `Check and fix` | Full workflow | ~20s |
| `Preview fixes` | Show what would change | ~3s |
| `Fix all PPTs in [folder]` | Batch fix | ~1min |

---

**Remember:** Auto-fix is a tool to help you, not replace your judgment. Always review the results and use the backup if needed!
