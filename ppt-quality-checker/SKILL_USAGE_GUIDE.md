# PPT Quality Checker & Fixer - Complete Usage Guide

## 🚀 Quick Commands

### Check Only
```
Check the PPT I just created
Validate my presentation
Review this PPT
```

### Check and Fix
```
Fix this PPT
Fix all issues in my presentation
Check and fix this presentation
```

### Specific Fixes
```
Fix only margins and fonts
Fix spacing issues only
Apply conservative fixes (margins, fonts, spacing)
```

### Preview Mode
```
Show me what would be fixed (don't fix yet)
Preview changes before applying
```

---

## 📖 Complete Feature List

### 1️⃣ Quality Checking

**What it checks:**
- ✅ Layout (overlaps, alignment, spacing)
- ✅ Margins (safe boundaries)
- ✅ Fonts (MB-approved list)
- ✅ Colors (brand compliance)
- ✅ Visual balance

**Output:**
- Quality score (0-100)
- Categorized issues (ERROR/WARNING/INFO)
- Detailed recommendations
- Saved report file

### 2️⃣ Automatic Fixing

**What it fixes:**
- 🔧 Margin violations → Moves elements within bounds
- 🔧 Non-MB fonts → Replaces with approved alternatives
- 🔧 Spacing issues → Increases spacing to minimum
- 🔧 Alignment problems → Aligns to consistent edges
- 📊 Color usage → Reports issues for manual review

**Safety features:**
- ✅ Always creates backup before fixing
- ✅ Shows exactly what will change
- ✅ Re-checks after fixing
- ✅ Can revert to backup if needed

### 3️⃣ Smart Strategies

**Built-in strategies:**
1. **Quick Polish** - Fix margins + fonts (5s, low risk)
2. **Standard Fix** - Fix all issues (15s, moderate risk)
3. **Conservative** - Fix safe issues only (10s, minimal risk)
4. **Incremental** - Fix one type at a time (variable)

---

## 🎯 Use Case Scenarios

### Scenario 1: Team Meeting (Tomorrow)

**You say:**
```
Fix my PPT for tomorrow's team meeting
```

**Skill applies:**
- Quick Fix strategy
- Margins + fonts only
- Time: ~5 seconds
- Score improvement: +10-15 points

**Result:** Ready for team review ✅

---

### Scenario 2: Leadership Presentation (This Week)

**You say:**
```
I'm presenting to E2/E3 leadership on Friday. Check and fix my presentation.
```

**Skill does:**
1. Quality check (identifies 46 issues, score: 62/100)
2. Shows preview of fixes
3. Applies Standard Fix
4. Re-checks (new score: 85/100)
5. Shows improvement: +23 points

**Result:** Executive-ready quality ✅

---

### Scenario 3: Client Presentation (Important!)

**You say:**
```
This is for a client presentation. Be conservative with fixes.
```

**Skill applies:**
- Conservative Fix strategy
- Margins + fonts + spacing only
- Preserves design intent
- Skips alignment changes

**Result:** Professional quality, design preserved ✅

---

### Scenario 4: Learning What's Wrong

**You say:**
```
Check this PPT but don't fix it yet. Teach me what's wrong.
```

**Skill responds:**
```
🔍 QUALITY CHECK RESULTS

Score: 68/100

Issue #1: Non-MB Font
  - Found 'Times New Roman' in slide 3
  - Why it matters: MB presentations should use Mercedes Sans or approved fallbacks
  - Impact: Unprofessional appearance
  - Fix: Replace with Arial or Calibri

Issue #2: Margin Violation
  - TextBox in slide 1 exceeds left margin by 0.3in
  - Why it matters: Content may be cut off on some displays
  - Impact: Information not visible to audience
  - Fix: Move element right by 0.3in

Would you like me to fix these issues now?
```

**Result:** Understand issues before fixing ✅

---

## 💡 Pro Tips

### Tip 1: Always Check After Creation

```
create_ppt.py → "Check the PPT I just created"
```

Make it automatic in your workflow!

### Tip 2: Use Preview Mode for Important PPTs

```
Show me what would be fixed (don't fix yet)
```

Review changes before committing.

### Tip 3: Fix in Stages for Complex PPTs

```
1. Fix margins and fonts first
2. Review the result
3. Fix spacing if needed
4. Review again
5. Fix alignment last (optional)
```

### Tip 4: Keep the Backup

```
Don't delete the backup file until you've presented successfully
```

Backup files have `_backup_[timestamp]` suffix.

### Tip 5: Compare Before/After

```
Fix this PPT and show me a before/after comparison
```

See exactly what improved!

---

## 🎓 Learning Path

### Week 1: Exploration
- ✅ Try: `Check the PPT I just created`
- ✅ Try: `Show me what would be fixed`
- ✅ Try: `Fix margins only`
- 📚 Learn what each fix does

### Week 2: Confidence
- ✅ Try: `Fix all issues`
- ✅ Review alignment changes
- ✅ Understand fix priorities
- 📚 Learn which fixes are safe

### Week 3: Expertise
- ✅ Try: `Fix all PPTs in this folder`
- ✅ Use targeted fixes
- ✅ Achieve consistent 85+ scores
- 📚 Master the skill

### Week 4: Mastery
- ✅ Predict quality scores
- ✅ Know which fixes to apply when
- ✅ Combine auto-fix + manual polish
- 📚 Help others use the skill

---

## 📊 Quality Score Targets

| Audience | Target Score | Fix Strategy | Time Investment |
|----------|--------------|--------------|-----------------|
| Personal notes | 60+ | Quick Fix | 5 seconds |
| Team meeting | 75+ | Standard Fix | 15 seconds |
| Leadership | 85+ | Standard + Manual | 2 minutes |
| Client/External | 90+ | Conservative + Manual | 5 minutes |

---

## ⚠️ Common Mistakes

### ❌ Mistake 1: Not Checking
**Problem:** Create PPT → Present directly
**Fix:** Always say "Check the PPT I just created"

### ❌ Mistake 2: Fixing Blindly
**Problem:** `Fix this PPT` without reviewing
**Fix:** Use preview mode first: `Show me what would be fixed`

### ❌ Mistake 3: Ignoring Backups
**Problem:** Deleting backup files immediately
**Fix:** Keep backups until after successful presentation

### ❌ Mistake 4: Over-Fixing
**Problem:** Trying to achieve 100/100 every time
**Fix:** Target appropriate score based on audience

### ❌ Mistake 5: One-Shot Fixing
**Problem:** Fixing everything at once for important PPTs
**Fix:** Use incremental fixes for important presentations

---

## 🔧 Technical Details

### File Locations

**Checker Tool:**
```
D:\AI\ppt_layout_checker.py
```

**Fixer Tool:**
```
D:\AI\ppt_auto_fixer.py
```

**Style Guidelines:**
```
D:\AI\mb_style_guidelines.json
```

**Skill Files:**
```
D:\AI\skills\ppt-quality-checker\
├── SKILL.md (main skill)
├── README.md (this file)
├── FIX_EXAMPLES.md (fix examples)
├── USAGE_EXAMPLES.md (check examples)
└── check_ppt_quality.py (integration script)
```

### Command-Line Usage

**Check only:**
```bash
python check_ppt_quality.py "presentation.pptx"
```

**Check and fix:**
```bash
python check_ppt_quality.py "presentation.pptx" --fix
```

**Fix specific types:**
```bash
python check_ppt_quality.py "presentation.pptx" --fix --fix-types margins,fonts
```

**Use fixer directly:**
```bash
python ppt_auto_fixer.py "presentation.pptx" margins,fonts,spacing
```

---

## 📚 Related Documentation

- **SKILL.md** - Main skill definition
- **README.md** - Complete feature guide
- **FIX_EXAMPLES.md** - Detailed fix examples
- **USAGE_EXAMPLES.md** - Check usage examples
- **SKILL_READY.md** - Quick start guide

---

## 🆘 FAQ

### Q: Is it safe to auto-fix?
**A:** Yes! The skill always creates a backup first. You can revert if needed.

### Q: Will it break my design?
**A:** Unlikely. Fixes are conservative. Alignment fixes are the only ones that might affect design - review those.

### Q: Can I fix only some issues?
**A:** Yes! Use: `Fix only [margins/fonts/spacing/alignment]`

### Q: What if I don't like the fixes?
**A:** Revert to backup or use preview mode first: `Show me what would be fixed`

### Q: How long does fixing take?
**A:** Quick Fix: ~5s | Standard Fix: ~15s | Conservative Fix: ~10s

### Q: Should I always fix to 100/100?
**A:** No. Target based on audience: Team (75+) | Leadership (85+) | Client (90+)

---

## ✅ Checklist: Before Every Presentation

- [ ] Created PPT with proper content
- [ ] Said "Check the PPT I just created"
- [ ] Reviewed quality score (target: 75+ for team, 85+ for leadership)
- [ ] Applied appropriate fixes
- [ ] Re-checked after fixes
- [ ] Reviewed fix report
- [ ] Kept backup until after presentation

---

**Remember:** This skill is your quality gate. Use it after EVERY PPT creation to ensure professional, MB-compliant presentations!

**Version:** 2.0.0 (with Auto-Fix)
**Last Updated:** 2026-03-27
