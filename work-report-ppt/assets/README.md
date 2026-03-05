# Assets Directory

此目录用于存放PPT模板和其他资源文件。

## 可添加的资源

### 1. PPT模板
- **report-template.pptx** - 基础汇报PPT模板
- 支持自定义公司品牌、logo和设计风格

### 2. 图片资源
- logo.png - 公司标志
- icons/ - 图标素材
- charts/ - 图表示例

### 3. 字体文件
- 自定义字体（如果需要）

## 如何使用模板

1. 将你的PPT模板文件放在此目录
2. 命名为 `report-template.pptx`
3. 修改 `scripts/generate_ppt.py` 以加载模板

示例代码（在 SCQAPPTGenerator 类中）：
```python
def __init__(self, template_path=None):
    if template_path and Path(template_path).exists():
        self.prs = Presentation(template_path)
    else:
        self.prs = Presentation()
```

## 模板建议

- 使用简单的布局（最多两栏）
- 确保文本框有足够空间
- 预设好主题颜色
- 设置好页眉页脚位置
