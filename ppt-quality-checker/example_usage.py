"""
Example: How to integrate PPT checker into PPT generation workflow
示例：如何在PPT生成流程中集成检查工具
"""

# 在你的PPT生成脚本（如create_ppt.py）末尾添加以下代码：

"""
# ====== 在create_ppt.py末尾添加 ======

# Save PPT
output_path = r"D:\AI\CIVIC_FUP2_CR_Presentation.pptx"
prs.save(output_path)
print(f"\n✅ PPT saved to: {output_path}")

# Optional: Run layout check
try:
    from ppt_layout_checker import PPTLayoutChecker

    print("\n" + "="*50)
    print("Running Layout Check...")
    print("="*50)

    # Initialize checker
    guidelines_path = r"D:\AI\mb_style_guidelines.json"
    checker = PPTLayoutChecker(guidelines_path)

    # Check the generated PPT
    issues = checker.check_presentation(output_path)

    # Generate and display report
    report = checker.generate_report()
    print(report)

    # Optional: Save report to file
    report_path = output_path.replace('.pptx', '_layout_check.txt')
    with open(report_path, 'w', encoding='utf-8') as f:
        f.write(report)

    print(f"\n📄 Detailed report saved to: {report_path}")

except Exception as e:
    print(f"\n⚠️  Layout check failed: {e}")
    print("PPT generation completed, but layout check encountered an error.")

# ====== 集成代码结束 ======
"""

# 或者，如果你想更简洁的集成方式：

INTEGRATION_CODE_SIMPLE = """
# In your create_ppt.py, after saving the PPT:

import sys
sys.path.insert(0, r"D:\AI")
from ppt_layout_checker import PPTLayoutChecker

output_path = r"D:\AI\CIVIC_FUP2_CR_Presentation.pptx"
prs.save(output_path)

# Quick check
checker = PPTLayoutChecker(r"D:\AI\mb_style_guidelines.json")
checker.check_presentation(output_path)
print(checker.generate_report())
"""

# 演示如何使用
if __name__ == '__main__':
    print("="*70)
    print("PPT Layout Checker - Integration Example")
    print("="*70)
    print()
    print("方式1：在create_ppt.py末尾添加完整检查（推荐）")
    print("-" * 70)
    print("参见上面的详细代码示例")
    print()

    print("方式2：简化集成（5行代码）")
    print("-" * 70)
    print(INTEGRATION_CODE_SIMPLE)
    print()

    print("方式3：独立运行（检查现有PPT）")
    print("-" * 70)
    print("命令: python ppt_layout_checker.py \"your_presentation.pptx\"")
    print()

    print("="*70)
    print("推荐工作流程:")
    print("="*70)
    print("1. 开发阶段：集成到create_ppt.py，生成后自动检查")
    print("2. 审查阶段：独立运行，对批量PPT进行检查")
    print("3. 发布前：快速检查，确保最终质量")
    print()
    print("详细文档: README_PPT_Checker.md")
    print("项目总结: PROJECT_SUMMARY.md")
    print("="*70)
