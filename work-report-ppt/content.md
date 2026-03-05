# MPA Feature Delivery Decision Report

Date: 2026-03-01
Report Type: simple

## Executive Summary
- MPA (Memory Parking Assist) functionality delayed due to perception collision issues
- Supplier MMT unable to resolve collisions with barriers, carts, metal horses on R6 architecture
- Decision required: Release with waiver (Px82.25) vs. Postpone to R7 (Px96)

## Situation
- MPA is a key memory parking assist feature for autonomous parking scenarios
- Original delivery target: Px82.21 (2026 Q1)
- Supplier MMT provides perception model using R6 architecture
- Feature is critical for autonomous parking user experience

## Complication
- MPA experiencing repeated delays due to unresolved collision detection issues
- Latest Px82.20 model still collides with: barriers, shopping carts, metal horses, metal triangular signs
- Px82.21 is the hard deadline - issues remain unresolved

## Root Cause Analysis
- **Primary Cause**: MMT unwilling to optimize further on R6 architecture
- **Supporting Factors**:
  - Other OEM customers use same product without complaints
  - MMT claims no further R6 optimization needed
  - MMT planning complete architecture fix on R7
- **Timeline Constraint**: R7 availability requires Px96 (2026-3.0 OTA) → 2026 Q3

## Key Question
Should MPA be released with collision waiver on Px82.25, or postponed to R7 on Px96?

## Solution Options

### Option 1: Waiver Acceptance (Release on Px82.25)
**Description**: Accept collision issues as deviations and release feature on schedule

**Pros**:
- Feature delivered on time (2026 Q1)
- Meets original project timeline
- Early user feedback opportunity

**Cons**:
- Safety risks with collision incidents
- Potential customer complaints
- Liability concerns

**Cost**: Minimal
**Timeline**: Px82.25 (2026 Q1)

### Option 2: Postpone to R7 (Release on Px96)
**Description**: Delay delivery until R7 architecture fixes all collision issues

**Pros**:
- All safety issues resolved
- Better user experience
- Eliminates customer complaint risk
- Long-term stability

**Cons**:
- Delivery delayed from Q1 to Q3 (6-month delay)
- Misses original milestone
- Internal stakeholder disappointment

**Cost**: Delay cost
**Timeline**: Px96 (2026 Q3)

## Recommendation
**Recommended**: Option 2 - Postpone to R7

**Justification**:
- Safety is non-negotiable for ADAS features
- Collision with obstacles creates real user risk
- R7 architecture provides permanent solution
- Better to delay delivery than deliver unsafe feature

## Decision Required
**Please approve**: Postpone MPA delivery from Px82.25 to Px96 (R7 release)

**Decision Deadline**: [To be specified]
**Required Approval**: Product Management / Engineering Leadership

## Images
[No images provided]
