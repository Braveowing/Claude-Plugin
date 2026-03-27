#!/usr/bin/env python3
"""
Demo: Check and Fix PowerPoint Presentation
演示：检查并修复PowerPoint演示文稿
"""

import sys
import os
from pathlib import Path

# Add paths
sys.path.insert(0, r"D:\AI")
sys.path.insert(0, r"D:\AI\skills\ppt-quality-checker")

from check_ppt_quality import check_presentation, fix_presentation

def demo_check_and_fix(ppt_path: str):
    """
    Demo: Complete check and fix workflow
    """
    print("="*80)
    print("🎯 PPT QUALITY CHECKER & FIXER DEMO")
    print("="*80)
    print(f"\n📄 File: {os.path.basename(ppt_path)}")
    print()

    # Step 1: Initial Check
    print("="*80)
    print("📊 STEP 1: INITIAL QUALITY CHECK")
    print("="*80)

    result = check_presentation(ppt_path, save_report=True)

    if not result["success"]:
        print(f"\n❌ Check failed: {result['error']}")
        return False

    # Display report
    print(result["report"])
    print(f"\n✅ Initial Quality Score: {result['quality_score']}/100")
    print(f"   Total Issues: {result['total_issues']}")
    print(f"   - Errors: {result['errors']}")
    print(f"   - Warnings: {result['warnings']}")
    print(f"   - Info: {result['information']}")

    # Step 2: Decide if fixing is needed
    if result['quality_score'] >= 95:
        print("\n🎉 Excellent quality! No fixes needed.")
        return True

    if result['quality_score'] >= 85:
        print("\n✅ Good quality. Minor fixes optional.")
        fix_choice = input("\nFix anyway? (y/n): ").lower().strip()
        if fix_choice != 'y':
            print("Skipping fixes. Presentation is ready!")
            return True

    # Step 3: Apply Fixes
    print("\n" + "="*80)
    print("🔧 STEP 2: APPLYING AUTOMATIC FIXES")
    print("="*80)

    # Determine fix strategy based on score
    if result['quality_score'] < 70:
        print("\n📉 Low quality score detected. Applying all fixes...")
        fix_types = None  # All fixes
    elif result['quality_score'] < 85:
        print("\n📊 Moderate quality. Applying conservative fixes...")
        fix_types = ['margins', 'fonts', 'spacing']  # Conservative
    else:
        print("\n📊 Good quality. Applying minimal fixes...")
        fix_types = ['margins', 'fonts']  # Minimal

    print(f"Fix strategy: {'All fixes' if fix_types is None else ', '.join(fix_types)}")
    print()

    fix_result = fix_presentation(ppt_path, fix_types)

    if not fix_result["success"]:
        print(f"\n❌ Fix failed: {fix_result['error']}")
        return False

    # Display fix report
    print(fix_result["report"])
    print(f"\n✅ Fixes Applied: {fix_result['total_fixes']}")

    # Step 4: Re-Check
    print("\n" + "="*80)
    print("📊 STEP 3: RE-CHECK AFTER FIXES")
    print("="*80)

    new_result = check_presentation(ppt_path, save_report=True)

    if new_result["success"]:
        print(f"\n✅ New Quality Score: {new_result['quality_score']}/100")
        print(f"📈 Improvement: +{new_result['quality_score'] - result['quality_score']} points")
        print()
        print("Issues remaining:")
        print(f"   - Errors: {new_result['errors']}")
        print(f"   - Warnings: {new_result['warnings']}")
        print(f"   - Info: {new_result['information']}")

    # Step 5: Summary
    print("\n" + "="*80)
    print("📋 SUMMARY")
    print("="*80)
    print()
    print(f"Original Score: {result['quality_score']}/100")
    print(f"Fixed Score:    {new_result['quality_score']}/100")
    print(f"Improvement:    +{new_result['quality_score'] - result['quality_score']} points")
    print(f"Fixes Applied:  {fix_result['total_fixes']}")
    print()

    if new_result['quality_score'] >= 90:
        print("🎉 EXCELLENT! Ready for executive/client presentations")
    elif new_result['quality_score'] >= 85:
        print("✅ GREAT! Ready for leadership presentations")
    elif new_result['quality_score'] >= 75:
        print("✅ GOOD! Ready for team meetings")
    else:
        print("⚠️  ACCEPTABLE. Consider manual improvements for important presentations")

    print()
    print("="*80)

    return True


if __name__ == "__main__":
    # Demo with the created PPT
    ppt_path = r"D:\AI\CIVIC_FUP2_CR_Presentation.pptx"

    if not os.path.exists(ppt_path):
        print(f"❌ Demo file not found: {ppt_path}")
        print("\nUsage: python demo_workflow.py [path_to_ppt]")
        sys.exit(1)

    # Run demo
    demo_check_and_fix(ppt_path)
