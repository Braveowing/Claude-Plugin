# Slide Design and Content Best Practices

## Core Principles

### 1. One Idea Per Slide
Each slide should communicate a single, clear idea. If you find yourself explaining multiple concepts, split into separate slides.

**Bad:**
- Discussing both problem and solution on same slide
- Combining data analysis with recommendations

**Good:**
- Slide: Current State (Situation)
- Next slide: The Problem (Complication)
- Next slide: The Solution (Answer)

### 2. Bottom Line Up Front (BLUF)
Put the key message at the top of the slide, not buried at the bottom. Executives should understand your point within 5 seconds.

```
┌─────────────────────────────────────┐
│ KEY MESSAGE: We need $150K budget   │
└─────────────────────────────────────┘
│ Supporting details...               │
│ • Data point 1                      │
│ • Data point 2                      │
│ • Data point 3                      │
└─────────────────────────────────────┘
```

### 3. 3x5 Rule for Bullets
- Maximum 3 bullets per slide
- Maximum 5 words per bullet

This ensures slides are scannable and prevents information overload.

## Typography

### Font Guidelines

| Element | Minimum Size | Recommended Size |
|---------|-------------|------------------|
| Title | 36pt | 44-54pt |
| Headings | 28pt | 32-36pt |
| Body text | 24pt | 28-32pt |
| Footnotes | 18pt | 20-24pt |

**Font Choices:**
- Sans-serif for screens: Arial, Calibri, Segoe UI, Roboto
- Serif for print feel: Georgia, Garamond (use sparingly)
- Monospace for code: Consolas, Monaco, Courier New

**Consistency:**
- Use max 2 font families per presentation
- Use consistent hierarchy (same font for all titles, same for body)
- Bold for emphasis only, not entire slides

### Color Guidelines

**Text Color:**
- Body text: #1F1F1F or #333333 (not pure black)
- Accent color: Use consistently for key points
- Red: Use only for critical/negative items
- Green: Use only for positive outcomes

**Background:**
- White or very light gray (#F5F5F5)
- Avoid busy backgrounds
- High contrast with text (contrast ratio 4.5:1 minimum)

**Color Palette Examples:**

Corporate Blue:
- Primary: #0052CC
- Secondary: #0065FF
- Accent: #2684FF

Modern Clean:
- Primary: #172B4D
- Secondary: #0052CC
- Success: #36B37E
- Warning: #FFAB00
- Error: #FF5630

## Layout Patterns

### The Title-Body Layout
```
┌─────────────────────────────────────┐
│          Slide Title                │
├─────────────────────────────────────┤
│                                     │
│  • Point one                        │
│  • Point two                        │
│  • Point three                      │
│                                     │
│  [Optional: supporting visual]      │
└─────────────────────────────────────┘
```

### The Split Layout
```
┌─────────────────────────────────────┐
│          Slide Title                │
├─────────────────────────────────────┤
│  Text Content  │    Visual Content   │
│               │                     │
│  • Point 1    │   [Chart/Image]     │
│  • Point 2    │   [Data table]      │
│  • Point 3    │   [Diagram]         │
└─────────────────────────────────────┘
```

### The Three-Column Layout
```
┌─────────────────────────────────────┐
│          Slide Title                │
├─────────────────────────────────────┤
│ Col 1  │ Col 2  │ Col 3             │
│        │        │                   │
• Item   • Item   • Item             │
• Item   • Item   • Item             │
• Item   • Item   • Item             │
└─────────────────────────────────────┘
```

## Visual Design

### Charts and Graphs

**When to use:**

| Chart Type | Best For | Don't Use For |
|------------|----------|---------------|
| Bar chart | Comparisons | Trend over time |
| Line chart | Trends | Comparisons |
| Pie chart | Part-to-whole (few parts) | Many categories |
| Scatter plot | Correlation | Causation claims |

**Chart Best Practices:**
- Remove gridlines when unnecessary
- Label data points directly when possible
- Avoid 3D effects (distorts perception)
- Use consistent colors across slides
- Add context with annotations

**Bar Chart Checklist:**
- [ ] Bars sorted logically (magnitude, time, etc.)
- [ ] Gap between bars is 50-75% of bar width
- [ ] Axis labels are readable
- [ ] No 3D effects
- [ ] Data labels present when <7 bars

### Images and Icons

**Image Guidelines:**
- High resolution (minimum 1500px width)
- Consistent style throughout (all photos or all illustrations)
- Relevant to content (no generic stock photos)
- Sourced properly if copyright is a concern

**Icon Guidelines:**
- Use a single icon set
- Consistent size (usually 48px or 64px)
- Same color (usually brand color)
- Align with text baseline

### Tables

**Simple Table Format:**
```
┌──────────┬─────────┬─────────┬─────────┐
│ Metric   │ Current │ Target  │ Gap     │
├──────────┼─────────┼─────────┼─────────┤
│ Revenue  │ $1.2M   │ $1.5M   │ -$300K  │
│ Growth   │ 12%     │ 15%     │ -3%     │
│ CSAT     │ 82%     │ 90%     │ -8%     │
└──────────┴─────────┴─────────┴─────────┘
```

**Table Best Practices:**
- Zebra stripe rows for readability
- Right-align numbers, left-align text
- Use bold for headers only
- Highlight key cells with subtle background color
- Remove vertical lines

## Content Writing

### Bullet Point Guidelines

**Do:**
- Start with action verbs
- Be concise
- Use parallel structure
- Make each point independent
- Quantify with specific numbers

**Don't:**
- Use complete sentences
- Include more than one idea per bullet
- Vary verb forms
- Use jargon without explanation
- Be vague

**Examples:**

❌ Bad:
- The revenue decreased by 15% last quarter.
- We should look into implementing a new system.
- The customer satisfaction has been going down recently.

✅ Good:
- Revenue decreased 15% Q3
- Implement new inventory system
- CSAT declined to 72%

### Number Formatting

| Metric | Format | Example |
|--------|--------|---------|
| Currency | $X.XX or $X.XB | $1.5M, $3.2B |
| Percentages | X% (no decimal unless needed) | 15%, 12.5% |
| Dates | YYYY-MM-DD or Month YYYY | 2024-03-15, March 2024 |
| Time | X hours or X:XX | 3 hours, 2:30 |
| Ratios | X:Y or X:1 | 3:1, 2:5 |

**Consistency Rules:**
- Use same format for same metric across all slides
- Don't mix "3 hours" and "180 minutes"
- Be consistent with decimals (either all integers or all 1 decimal place)

## Animation and Transitions

### The Golden Rule
Less is more. Most corporate presentations should use NO animations.

### When to Use Animation
- Build bullet points one at a time (use sparingly)
- Reveal data points in a chart sequence
- Show before/after comparisons

### Animation Checklist
- [ ] Purposeful (not decorative)
- [ ] Fast duration (0.5s or less)
- [ ] Consistent type (all fade or all wipe)
- [ ] No sound effects

### Transitions
- Use simple fade (no slide animations)
- Same transition throughout
- Duration: 0.3-0.5 seconds

## Data Visualization Tips

### Color Coding Data
- Use red for negative performance (below target)
- Use green for positive performance (above target)
- Use neutral colors for on-target metrics
- Add legend if more than 3 colors

### Context is King
Never show data without context:
- Compare to previous period (MoM, YoY)
- Compare to target/benchmark
- Show trend, not just snapshot

### Decluttering
- Remove axis lines when data labels are present
- Remove legends when labels are sufficient
- Remove borders from charts
- Simplify tick marks

## Presentation Structure

### The Story Arc
```
Introduction (10%)
├── Title slide
├── Agenda (if >12 slides)
└── Executive summary

Body (70%)
├── Situation
├── Complication
├── Question
└── Answer (with evidence)

Conclusion (20%)
├── Summary of key points
├── Next steps
└── Q&A / Discussion
```

### Slide Count Guidelines
- Quick update: 5-8 slides
- Standard report: 8-12 slides
- Comprehensive analysis: 12-18 slides
- Never exceed 20 slides for a single meeting

### Timing
- Plan 1-2 minutes per slide
- Reserve 5 minutes for Q&A in 30-minute meeting
- Reserve 10 minutes for Q&A in 60-minute meeting

## Accessibility

### Color Blindness
- Avoid red/green combinations
- Use patterns or labels in addition to color
- Test with color blindness simulator

### Screen Readers
- Use proper heading hierarchy
- Add alt text to images
- Ensure text is selectable (not in images)

### Visibility
- Test on projector before presenting
- Stand back 10 feet to check readability
- Avoid light text on dark backgrounds in bright rooms

## Quick Checklist

**Before finalizing:**
- [ ] Title on every slide
- [ ] Page numbers on slides 2+
- [ ] One idea per slide
- [ ] Maximum 5 bullets per slide
- [ ] Font size ≥24pt for body
- [ ] Consistent fonts and colors
- [ ] All numbers formatted consistently
- [ ] Charts are labeled and sourced
- [ ] Executive summary included
- [ ] Next steps are clear and actionable

**Final review questions:**
- Does the first slide clearly state the purpose?
- Is the key message visible within 5 seconds?
- Would someone understand without verbal explanation?
- Is the call to action clear?
- Did I respect the time limit?
