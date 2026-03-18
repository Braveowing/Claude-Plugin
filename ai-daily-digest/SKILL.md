---
name: AI Daily Digest
description: |
  每日 AI 领域简报生成器。

  自动搜索并整理过去 24 小时 AI 领域的重要新闻和洞见，包括：
  - 智能驾驶：Tesla, Waymo, 小米SU7, 华为ADS, 蔚来, 小鹏, 比亚迪等
  - 具身智能：人形机器人、机械臂、物理AI、Boston Dynamics, Figure AI, 宇树, 特斯拉Optimus等
  - AI 研究应用：新模型、论文突破、arxiv、OpenAI, Anthropic, Google DeepMind, Meta AI等
  - 行业洞见：关注前沿科技博主、专栏作家、行业领袖、学术科学家的观点和分析

  只采一手信源（官方博客、论文、GitHub、公司公告、社交媒体原始内容），拒绝媒体二手转发。
metadata:
  keywords: [AI, 自动驾驶, 具身智能, 每日简报, 机器人, 大模型]
---

# AI Daily Digest Skill

## 概述

本 Skill 用于生成每日 AI 领域简报，覆盖智能驾驶、具身智能、AI 大模型三大领域，同时关注行业前沿洞见。

## 三大领域

### 1. 智能驾驶 (Intelligent Driving)
- Tesla, Waymo, 小米SU7, 华为ADS, 蔚来, 小鹏, 比亚迪等
- 自动驾驶算法、芯片、传感器、无人出租车商业化

### 2. 具身智能 (Embodied AI)
- 人形机器人、机械臂、物理AI
- Boston Dynamics, Figure AI, 宇树, 特斯拉Optimus等

### 3. AI 研究应用 (AI Research)
- 新模型发布、论文突破
- OpenAI, Anthropic, Google DeepMind, Meta AI等
- arxiv 最新论文

## 行业洞见来源

除了官方新闻，还需关注：

| 类型 | 示例 |
|------|------|
| 行业领袖 | Yann LeCun, Jensen Huang, Sam Altman, Demis Hassabis |
| 科技博主 | 热门 AI Newsletter、YouTube 技术博主 |
| 专栏作家 | Wired, The Verge, TechCrunch 等科技媒体记者 |
| 产品专家 | 各大厂产品经理、技术负责人 |
| 学术前沿 | 顶级实验室科学家、教授 |

**搜索渠道**：X/Twitter、LinkedIn、Substack、个人博客、学术社交网络

## 信源优先级

1. **官方一手**：官方博客、GitHub、arxiv、论文、公司公告
2. **原始内容**：CEO/科学家社交媒体原始帖子、访谈
3. **权威分析**：知名科技记者/博主 的深度分析

**拒绝**：媒体二手转发、无来源的转发新闻

## 输出格式

简报需包含：
- 日期和领域分类
- 每条资讯 2-3 句话核心要点
- 标注来源链接
- 行业洞见单独板块

## 使用方式

本 Skill 通常通过 Cron 定时任务触发，自动发送到指定渠道。

如需手动触发：
```
生成今日 AI 日报
```

## 配置

| 配置项 | 说明 |
|--------|------|
| 搜索时间范围 | 过去 24 小时 |
| 输出语言 | 中文 |
| 信源要求 | 一手信源为主 |

## 示例输出

```
📰 AI Daily News — 2026年3月18日

🚗 智能驾驶
• Tesla FSD v13 发布：... [来源]
• Waymo 扩展城市：... [来源]

🤖 具身智能
• Figure AI 新进展：... [来源]
• 宇树机器人：... [来源]

🧠 AI 研究
• Claude 4 发布：... [来源]
• DeepMind SIMA 2：... [来源]

💡 行业洞见
• Yann LeCun 关于...的观点 [来源]
• 某科技博主对...的分析 [来源]
```
