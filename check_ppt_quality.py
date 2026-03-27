"""
PPT Quality Checker - Skill Integration Script
Used by the ppt-quality-checker skill to validate presentations
"""
import sys
import os
from pathlib import Path
from typing import List

# Get skill directory (where this script is located)
skill_dir = Path(__file__).parent
sys.path.insert(0, str(skill_dir))

def fix_presentation(ppt_path: str, fix_types: List[str] = None, create_backup: bool = True) -> dict:
    """
    Fix a PowerPoint presentation based on quality issues

    Args:
        ppt_path: Path to the PPT file
        fix_types: Types of fixes to apply ('margins', 'fonts', 'colors', 'spacing', 'alignment')
                   None = apply all fixes
        create_backup: Whether to create backup before fixing

    Returns:
        Dictionary with fix results and report
    """
    # Import the fixer
    try:
        from ppt_auto_fixer import PPTLayoutFixer
    except ImportError:
        return {
            "success": False,
            "error": "ppt_auto_fixer.py not found in skill directory",
            "report": None
        }

    # Validate file exists
    if not os.path.exists(ppt_path):
        return {
            "success": False,
            "error": f"PPT file not found: {ppt_path}",
            "report": None
        }

    try:
        # Initialize fixer
        guidelines_path = skill_dir / "mb_style_guidelines.json"
        fixer = PPTLayoutFixer(str(guidelines_path))

        # Run fixes
        print(f"\n🔧 Fixing: {os.path.basename(ppt_path)}")
        if create_backup:
            print("Creating backup...")

        success, fixes = fixer.fix_presentation(ppt_path, fix_types, create_backup)

        # Generate report
        report = fixer.generate_fix_report()

        return {
            "success": success,
            "error": None,
            "report": report,
            "fixes_applied": fixer.fixes_applied,
            "fixes_failed": fixer.fixes_failed,
            "total_fixes": len(fixer.fixes_applied)
        }

    except Exception as e:
        return {
            "success": False,
            "error": f"Error during fixing: {str(e)}",
            "report": None
        }

def check_presentation(ppt_path: str, save_report: bool = True) -> dict:
    """
    Check a PowerPoint presentation for quality issues

    Args:
        ppt_path: Path to the PPT file
        save_report: Whether to save the report to a file

    Returns:
        Dictionary with check results and report
    """
    # Import the checker
    try:
        from ppt_layout_checker import PPTLayoutChecker
    except ImportError:
        return {
            "success": False,
            "error": "ppt_layout_checker.py not found in skill directory",
            "report": None
        }

    # Validate file exists
    if not os.path.exists(ppt_path):
        return {
            "success": False,
            "error": f"PPT file not found: {ppt_path}",
            "report": None
        }

    # Load MB style guidelines
    guidelines_path = skill_dir / "mb_style_guidelines.json"
    if not guidelines_path.exists():
        return {
            "success": False,
            "error": f"Style guidelines not found: {guidelines_path}",
            "report": None
        }

    try:
        # Initialize checker
        checker = PPTLayoutChecker(str(guidelines_path))

        # Run checks
        print(f"\n🔍 Checking: {os.path.basename(ppt_path)}")
        print("Running quality checks...")
        issues = checker.check_presentation(ppt_path)

        # Generate report
        report = checker.generate_report()

        # Save report if requested
        report_path = None
        if save_report:
            from datetime import datetime
            timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
            ppt_name = Path(ppt_path).stem
            report_path = str(Path(ppt_path).parent / f"{ppt_name}_quality_check_{timestamp}.txt")
            with open(report_path, 'w', encoding='utf-8') as f:
                f.write(report)
            print(f"\n📄 Report saved to: {report_path}")

        # Calculate quality score
        total_issues = len(issues)
        errors = sum(1 for i in issues if i.severity.name == "ERROR")
        warnings = sum(1 for i in issues if i.severity.name == "WARNING")

        # Simple scoring: start at 100, deduct for issues
        quality_score = max(0, 100 - (errors * 10) - (warnings * 3))

        return {
            "success": True,
            "error": None,
            "report": report,
            "report_path": report_path,
            "total_issues": total_issues,
            "errors": errors,
            "warnings": warnings,
            "information": total_issues - errors - warnings,
            "quality_score": quality_score,
            "issues": issues
        }

    except Exception as e:
        return {
            "success": False,
            "error": f"Error during checking: {str(e)}",
            "report": None
        }

def find_recent_ppt(directory: str = None, max_age_minutes: int = 30) -> str:
    """
    Find the most recently modified PPT file

    Args:
        directory: Directory to search (defaults to current directory)
        max_age_minutes: Maximum age of file in minutes

    Returns:
        Path to the most recent PPT file, or None if not found
    """
    from datetime import datetime, timedelta

    if directory is None:
        directory = os.getcwd()

    search_dir = Path(directory)
    if not search_dir.exists():
        return None

    # Find all .pptx files
    ppt_files = list(search_dir.glob("*.pptx"))

    if not ppt_files:
        return None

    # Get modification times and filter by age
    cutoff_time = datetime.now() - timedelta(minutes=max_age_minutes)
    recent_ppts = []

    for ppt_file in ppt_files:
        mtime = datetime.fromtimestamp(ppt_file.stat().st_mtime)
        if mtime > cutoff_time:
            recent_ppts.append((ppt_file, mtime))

    if not recent_ppts:
        return None

    # Return most recent
    recent_ppts.sort(key=lambda x: x[1], reverse=True)
    return str(recent_ppts[0][0])

if __name__ == "__main__":
    # Fix encoding for Windows console
    import io
    if sys.stdout.encoding != 'utf-8':
        sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

    # Command-line usage
    if len(sys.argv) < 2:
        print("Usage: python check_ppt_quality.py <ppt_file_path> [--fix] [--fix-types <types>]")
        print("\nOptions:")
        print("  --fix              Automatically fix issues after checking")
        print("  --fix-types        Comma-separated list of fix types (margins,fonts,colors,spacing,alignment)")
        print("\nExamples:")
        print("  python check_ppt_quality.py presentation.pptx")
        print("  python check_ppt_quality.py presentation.pptx --fix")
        print("  python check_ppt_quality.py presentation.pptx --fix --fix-types margins,fonts")
        print("\nOr use 'auto' to check most recently modified PPT in current directory")
        sys.exit(1)

    # Parse arguments
    ppt_arg = sys.argv[1]
    should_fix = '--fix' in sys.argv

    fix_types = None
    if '--fix-types' in sys.argv:
        idx = sys.argv.index('--fix-types')
        if idx + 1 < len(sys.argv):
            fix_types_str = sys.argv[idx + 1]
            fix_types = [f.strip() for f in fix_types_str.split(',')]

    if ppt_arg.lower() == "auto":
        # Find recent PPT
        ppt_path = find_recent_ppt()
        if not ppt_path:
            print("❌ No recently modified PPT files found in current directory")
            sys.exit(1)
        print(f"Found recent PPT: {ppt_path}")
    else:
        ppt_path = ppt_arg

    # Run check
    result = check_presentation(ppt_path)

    if not result["success"]:
        print(f"\n❌ {result['error']}")
        sys.exit(1)

    # Display report
    print("\n" + result["report"])

    # Summary
    print(f"\n{'='*80}")
    print(f"QUALITY SCORE: {result['quality_score']}/100")
    print(f"{'='*80}")

    # Optionally fix
    if should_fix:
        print(f"\n{'='*80}")
        print("🔧 AUTO-FIX MODE")
        print(f"{'='*80}")

        if result['quality_score'] >= 95:
            print("✅ Quality score is already excellent (95+). No fixes needed!")
            sys.exit(0)

        # Ask for confirmation if interactive
        if sys.stdin.isatty():
            print(f"\nFound {result['total_issues']} issues. Fix them? (y/n): ", end='')
            try:
                response = input().lower().strip()
                if response != 'y':
                    print("❌ Fix cancelled.")
                    sys.exit(0)
            except:
                pass  # Non-interactive, proceed

        # Run fixes
        fix_result = fix_presentation(ppt_path, fix_types)

        if fix_result["success"]:
            print("\n" + fix_result["report"])

            # Re-check after fix
            print(f"\n{'='*80}")
            print("📊 RE-CHECKING AFTER FIXES...")
            print(f"{'='*80}")

            new_result = check_presentation(ppt_path, save_report=False)
            if new_result["success"]:
                print(f"\n✅ New quality score: {new_result['quality_score']}/100")
                print(f"📈 Improvement: +{new_result['quality_score'] - result['quality_score']} points")
        else:
            print(f"\n❌ Fix failed: {fix_result['error']}")
            sys.exit(1)

    sys.exit(0)
