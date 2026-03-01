import sys
print(f"Python executable: {sys.executable}")
print(f"Python version: {sys.version}")

try:
    from pptx import Presentation
    print("pptx import: SUCCESS")
except ImportError as e:
    print(f"pptx import: FAILED - {e}")

try:
    import pptx
    print(f"pptx location: {pptx.__file__}")
except:
    print("Cannot find pptx location")
