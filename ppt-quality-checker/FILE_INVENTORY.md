# PPT布局检查工具 - 文件清单

## 📦 核心工具文件

| 文件名 | 大小 | 用途 | 优先级 |
|--------|------|------|--------|
| `ppt_layout_checker.py` | 22KB | **核心检查工具** - 完整的PPT布局检查功能 | ⭐⭐⭐ 必须 |
| `mb_style_guidelines.json` | 1.8KB | **MB风格配置** - 字体、颜色、布局标准 | ⭐⭐⭐ 必须 |

## 📚 文档文件

| 文件名 | 大小 | 用途 | 读者 |
|--------|------|------|------|
| `QUICK_START.md` | 5.0KB | **5分钟快速指南** - 快速上手 | 👤 所有用户 |
| `README_PPT_Checker.md` | 5.1KB | **详细使用文档** - 完整功能说明 | 👤 所有用户 |
| `PROJECT_SUMMARY.md` | 6.0KB | **项目总结** - 技术细节和实现说明 | 👨‍💻 开发者 |
| `FILE_INVENTORY.md` | 此文件 | **文件清单** - 快速定位所需文件 | 👤 所有用户 |

## 🚀 示例和辅助文件

| 文件名 | 大小 | 用途 |
|--------|------|------|
| `check_ppt.py` | 1.5KB | **快速检查脚本** - 简化版检查工具 |
| `example_usage.py` | - | **集成示例** - 展示如何集成到生成流程 |
| `create_ppt.py` | 12KB | **PPT生成脚本** - 已创建的CIVIC FUP2 PPT |

## 🔧 工具和配置

| 文件名 | 大小 | 用途 |
|--------|------|------|
| `analyze_mb_template.py` | 5.8KB | **模板分析工具** - 从MB模板提取样式信息 |
| `extract_template_fonts.py` | - | **字体提取工具** - 提取字体配置 |
| `mb_template_fonts.json` | 200B | **字体数据** - 从模板提取的字体信息 |

## 📋 生成的报告文件

| 文件名 | 说明 |
|--------|------|
| `CIVIC_FUP2_CR_Presentation_layout_report.txt` | 示例PPT的布局检查报告 |
| `CIVIC_FUP2_CR_Presentation.pptx` | 生成的示例PPT |

## 🎯 根据需求选择文件

### 场景1：我只是想快速检查一个PPT
```
需要：ppt_layout_checker.py + mb_style_guidelines.json
命令：python ppt_layout_checker.py "your.pptx"
阅读：QUICK_START.md
```

### 场景2：我想了解所有功能和配置
```
需要：全部核心文件 + 文档
阅读：README_PPT_Checker.md → PROJECT_SUMMARY.md
```

### 场景3：我想集成到我的PPT生成流程
```
需要：ppt_layout_checker.py + mb_style_guidelines.json
参考：example_usage.py
阅读：QUICK_START.md (方式2部分)
```

### 场景4：我想修改检查标准
```
需要：mb_style_guidelines.json
阅读：README_PPT_Checker.md (自定义设置部分)
```

### 场景5：我想了解技术实现
```
阅读：PROJECT_SUMMARY.md
查看：ppt_layout_checker.py 源代码
```

## 🗂️ 文件依赖关系

```
ppt_layout_checker.py
    ├── mb_style_guidelines.json (配置文件)
    └── python-pptx (外部依赖)

check_ppt.py
    └── ppt_layout_checker.py

example_usage.py
    └── ppt_layout_checker.py

create_ppt.py (可选集成)
    └── ppt_layout_checker.py (集成后)

analyze_mb_template.py
    ├── PPT template white.pptx
    └── Full template.pptx
```

## 📦 最小部署包

如果只需要核心功能，只需：
```
ppt_layout_checker.py       (22KB)
mb_style_guidelines.json    (1.8KB)
QUICK_START.md              (5.0KB)
-----------------------------------
总计: ~29KB
```

## 🔄 更新和维护

### 如何更新MB风格指南
1. 编辑 `mb_style_guidelines.json`
2. 重新运行检查验证效果

### 如何添加新的检查规则
1. 在 `ppt_layout_checker.py` 中添加新的检查方法
2. 在 `check_presentation()` 方法中调用
3. 更新 `generate_report()` 格式化输出

### 如何适配其他品牌
1. 复制 `mb_style_guidelines.json` 为 `your_brand_guidelines.json`
2. 修改字体、颜色、布局参数
3. 使用时指定新配置文件路径

## 📊 文件大小统计

```
核心工具:     ~24KB
文档:        ~16KB
示例/辅助:    ~20KB
-----------------------------------
总计:        ~60KB
```

## ✅ 快速开始检查清单

- [ ] 下载 `ppt_layout_checker.py`
- [ ] 下载 `mb_style_guidelines.json`
- [ ] 阅读 `QUICK_START.md`
- [ ] 运行第一次检查
- [ ] 查看生成的报告
- [ ] 根据需要调整配置
- [ ] （可选）集成到工作流

---

**建议**: 第一次使用时，按顺序阅读 `QUICK_START.md` → `README_PPT_Checker.md` → `PROJECT_SUMMARY.md`

**问题排查**: 遇到问题时，先查看 `README_PPT_Checker.md` 的常见问题部分
