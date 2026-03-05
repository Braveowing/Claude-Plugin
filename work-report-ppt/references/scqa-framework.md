# SCQA Framework Detailed Guide

## What is SCQA?

SCQA (Situation, Complication, Question, Answer) is a narrative framework developed by McKinsey & Company. It structures communication to create a compelling story that guides the audience through a logical thought process.

## The Four Components

### 1. Situation (S) - Establish the Context

**Purpose:** Create shared understanding and set the baseline.

**Key Elements:**
- Facts that audience agrees with or can verify
- Relevant background information
- Current state of affairs
- Historical context if needed

**Examples:**
- "Our customer satisfaction score has been 85% for the past 6 quarters."
- "The current system processes 10,000 transactions daily."
- "We have a team of 12 engineers working on the platform."

**Tips:**
- Keep it objective and factual
- Use numbers and data when possible
- Avoid assumptions
- Should take 1-2 slides

### 2. Complication (C) - Introduce the Tension

**Purpose:** Create urgency and define the problem.

**Key Elements:**
- What changed or what's wrong
- The gap between current and desired state
- Impact of the problem
- Why action is needed now

**Examples:**
- "Last month, satisfaction dropped to 72%."
- "Transaction volume increased to 15,000, causing 4-hour delays."
- "Two key engineers left, putting project at risk."

**Tips:**
- Quantify the impact (revenue, time, quality, reputation)
- Connect to business objectives or stakeholder interests
- Make the stakes clear
- Should create tension that demands a solution

### 3. Question (Q) - Define the Decision

**Purpose:** Frame the specific issue to be resolved.

**Key Elements:**
- The key question or decision point
- What the audience needs to decide or understand
- Success criteria
- Constraints to consider

**Examples:**
- "How do we restore satisfaction to 85%?"
- "Should we upgrade infrastructure or optimize code?"
- "What's the best way to complete the project on time?"

**Tips:**
- Frame as a single, clear question
- Make sure the answer addresses the complication
- Define what "success" looks like
- Should be answerable with the proposed solution

### 4. Answer (A) - Provide the Solution

**Purpose:** Deliver the recommendation or solution.

**Key Elements:**
- Direct answer to the question
- Recommended approach
- Implementation plan
- Expected outcomes and benefits

**Examples:**
- "Implement customer support training program and new feedback system."
- "Optimize database queries first (quick win), then scale infrastructure."
- "Hire contractors for 2 months, prioritize critical features."

**Tips:**
- Be specific and actionable
- Support with evidence and reasoning
- Address potential objections
- Include next steps and timeline

## Variations of SCQA

### Classic SCQA
S → C → Q → A (most common for problem-solving)

### SCA (Without explicit Q)
S → C → A (when question is implied)

### Multiple SCQA Chains
For complex problems with sub-issues:
```
S1 → C1 → Q1 → A1
    └── S2 → C2 → Q2 → A2
```

### Reverse SCQA
Start with Answer, then provide context (BLUF approach)
A → S → C → Q

## Common Pitfalls

### Situation Mistakes
- ❌ Including subjective opinions or assumptions
- ❌ Being too long or detailed
- ❌ Starting with the problem (jumping to Complication)
- ✅ Stick to agreed facts
- ✅ Keep concise (1-2 slides)

### Complication Mistakes
- ❌ Not quantifying the impact
- ❌ Being vague about what changed
- ❌ Missing the "why it matters now"
- ✅ Use numbers and metrics
- ✅ Create urgency

### Question Mistakes
- ❌ Too broad or unfocused
- ❌ Not connected to the Complication
- ❌ Having multiple questions
- ✅ Single, clear question
- ✅ Directly addresses the problem

### Answer Mistakes
- ❌ Vague recommendations without specifics
- ❌ No implementation details
- ❌ Doesn't answer the stated question
- ✅ Specific and actionable
- ✅ Includes timeline and resources needed

## Real-World Examples

### Example 1: IT Performance Issue

**Situation:**
- E-commerce site response time: 800ms (industry average: 500ms)
- Peak traffic: 5,000 users/hour
- System uptime: 99.9%

**Complication:**
- Traffic increased to 8,000 users/hour during promotion
- Response time spiked to 3,200ms
- Cart abandonment rate increased from 15% to 35%
- Estimated revenue loss: $50K/week

**Question:**
How do we restore sub-second response times within 2 weeks?

**Answer:**
1. Implement Redis caching (3 days)
2. Optimize top 10 slow queries (5 days)
3. Add CDN for static assets (2 days)
4. Expected result: <400ms response time
5. Cost: $15K infrastructure + $5K implementation

---

### Example 2: Team Resource Request

**Situation:**
- Product team: 8 engineers, 2 PMs, 1 designer
- Current roadmap: 3 major features (4 months)
- Average velocity: 20 story points/sprint

**Complication:**
- Executive requested 2 additional features for Q3
- New compliance requirement adds 80 points of work
- Team at 120% capacity, burnout risk increasing

**Question:**
Should we add more team members or reduce scope?

**Answer:**
- Add 2 senior engineers (contract for 6 months)
- Defer 1 lower-priority feature to Q4
- Hire 1 PM to handle compliance coordination
- Total cost: $180K for 6 months
- ROI: Features generate estimated $500K revenue

---

### Example 3: Process Improvement

**Situation:**
- Monthly customer onboarding: 200 new customers
- Current process: Manual data entry, 5 forms per customer
- Time per onboarding: 30 minutes
- Error rate: 12%

**Complication:**
- Growth target: 400 customers/month by Q3
- Support team spends 25 hours/week correcting errors
- Customer satisfaction with onboarding: 72%
- Competitor offers self-service onboarding

**Question:**
How do we scale onboarding 2x while improving quality and reducing effort?

**Answer:**
- Build self-service portal (6 weeks, $40K)
- Automate data validation (2 weeks, $10K)
- Implement progress tracking dashboard (1 week, $5K)
- Expected outcomes:
  - Onboarding time: <5 minutes
  - Error rate: <1%
  - Support time saved: 100 hours/month
  - CSAT target: 90%

## SCQA vs Other Frameworks

| Framework | Focus | Best For |
|-----------|-------|----------|
| SCQA | Problem-solving | Analysis, recommendations |
| STAR | Personal stories | Interviews, case studies |
| PREP | Persuasion | Sales, public speaking |
| Problem-Agitation-Solution | Marketing | Sales pitches |

## When to Use SCQA

✅ **Ideal for:**
- Problem analysis presentations
- Solution recommendations
- Status reports on issues
- Strategy proposals
- Project reviews

❌ **Not ideal for:**
- Status updates on routine tasks
- Personal achievements
- General announcements
- Training materials

## Quick Reference Template

```
Slide 1: Title
─────────────────
[Report Title]
[Your Name]
[Date]

Slide 2: Executive Summary
────────────────────────
• [Key finding 1]
• [Key finding 2]
• [Recommendation]

Slide 3: Situation
────────────────
• [Fact 1 - shared baseline]
• [Fact 2 - current state]
• [Fact 3 - relevant data]

Slide 4: Complication
────────────────────
• [What changed?]
• [What's the impact?]
• [Why it matters now]

Slide 5: Question
───────────────
[Key question to answer]
[Success criteria]
[Constraints]

Slide 6: Answer - Recommendation
──────────────────────────────
• [Direct answer]
• [Main points]
• [Expected outcome]

Slide 7: Implementation Plan
─────────────────────────
• [Step 1]
• [Step 2]
• [Step 3]

Slide 8: Supporting Data
─────────────────────
[Charts, graphs, tables]

Slide 9: Next Steps
────────────────
• [Action 1] - [Owner] - [Timeline]
• [Action 2] - [Owner] - [Timeline]
• [Decision needed]: [What/When/Who]
```
