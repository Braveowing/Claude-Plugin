"""
Quick PPT Layout Check - Simple Integration Example
快速PPT布局检查 - 简单集成示例
"""
import sys
import os

# Add parent directory to path to import checker
sys.path.insert(0, os.path.dirname(__file__))

from ppt_layout_checker import PPTLayoutChecker

def check_ppt_quick(ppt_path: str, output_report: bool = True) -> str:
    """
    Quick check PPT and return report

    Args:
        ppt_path: Path to PowerPoint file
        output_report: Whether to save report to file

    Returns:
        Formatted report string
    """
    # Initialize checker with MB guidelines
    guidelines_path = r"D:\AI\mb_style_guidelines.json"
    checker = PPTLayoutChecker(guidelines_path)

    # Run checks
    issues = checker.check_presentation(ppt_path)

    # Generate report
    report = checker.generate_report()

    # Optionally save report
    if output_report:
        report_path = ppt_path.replace('.pptx', '_layout_check.txt')
        with open(report_path, 'w', encoding='utf-8') as f:
            f.write(report)
        print(f"\n✅ Report saved to: {report_path}\n")

    return report

if __name__ == '__main__':
    # Example usage
    if len(sys.argv) < 2:
        print("Usage: python check_ppt.py <ppt_file_path>")
        sys.exit(1)

    ppt_file = sys.argv[1]

    if not os.path.exists(ppt_file):
        print(f"Error: File not found: {ppt_file}")
        sys.exit(1)

    report = check_ppt_quick(ppt_file)
    print(report)
