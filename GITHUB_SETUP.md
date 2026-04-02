# GitHub 自动部署配置指南

**创建时间**：2026-04-02  
**运维负责人**：许清禾

---

## 📋 配置步骤概览

1. 安装 GitHub CLI 工具
2. 登录 GitHub 账号
3. 创建 GitHub 仓库
4. 配置远程仓库
5. 推送代码到 GitHub
6. 连接 Vercel 启用自动部署

---

## 🔧 步骤 1：安装 GitHub CLI

```bash
sudo apt install -y gh
```

---

## 🔐 步骤 2：登录 GitHub

```bash
gh auth login
```

**选择选项**：
1. GitHub.com
2. SSH 或 HTTPS（推荐 HTTPS）
3. 按提示完成浏览器认证

---

## 📦 步骤 3：创建 GitHub 仓库

### 方式 A：使用 CLI 自动创建（推荐）

```bash
cd /home/kali/web-projects/homepage
gh repo create homepage --public --source=. --remote=origin --push
```

### 方式 B：手动在网页创建

1. 访问 https://github.com/new
2. 仓库名称：`homepage`
3. 选择 **Public**（公开）
4. **不要** 勾选 "Add a README file"
5. 点击 "Create repository"

然后执行：
```bash
cd /home/kali/web-projects/homepage
git remote add origin https://github.com/YOUR_USERNAME/homepage.git
git branch -M main
git push -u origin main
```

---

## 🚀 步骤 4：连接 Vercel 启用自动部署

### 方式 A：使用 Vercel CLI 连接

```bash
cd /home/kali/web-projects/homepage
vercel link
```

### 方式 B：在 Vercel 网页配置

1. 访问 https://vercel.com/dashboard
2. 找到 `homepage` 项目
3. 点击进入项目
4. 点击 "Settings" → "Git"
5. 点击 "Connect Git Repository"
6. 选择 GitHub 和 `homepage` 仓库
7. 点击 "Connect"

---

## ✅ 验证自动部署

推送代码后，Vercel 会自动部署：

```bash
# 修改一些内容
echo "<!-- 测试自动部署 -->" >> src/App.tsx

# 提交并推送
git add .
git commit -m "Test: 自动部署测试"
git push

# 访问 Vercel 查看部署状态
# https://vercel.com/YOUR_USERNAME/homepage
```

---

## 📊 完整配置命令（快速版）

```bash
# 1. 进入项目目录
cd /home/kali/web-projects/homepage

# 2. 安装 GitHub CLI
sudo apt install -y gh

# 3. 登录 GitHub
gh auth login

# 4. 创建并推送仓库
gh repo create homepage --public --source=. --remote=origin --push

# 5. 连接 Vercel
vercel link
```

---

## 🔧 常见问题

### 问题 1：仓库已存在

```
Error: repository name already exists
```

**解决**：使用不同的仓库名称，或在 GitHub 删除现有仓库。

### 问题 2：认证失败

```
Error: authentication failed
```

**解决**：重新登录
```bash
gh auth logout
gh auth login
```

### 问题 3：推送被拒绝

```
Error: permission denied
```

**解决**：检查仓库权限，确保您是仓库所有者。

---

## 📁 项目结构

```
homepage/
├── .github/              # GitHub 配置（可选）
│   └── workflows/        # GitHub Actions（可选）
├── src/                  # 源代码
├── dist/                 # 构建输出
├── .gitignore            # Git 忽略文件
└── README.md             # 项目说明
```

---

## 🎯 后续优化

### 添加 GitHub Actions（可选）

创建 `.github/workflows/deploy.yml`：

```yaml
name: Deploy to Vercel

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '22'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
```

### 添加项目徽章

在 README.md 添加：

```markdown
![Deploy](https://github.com/YOUR_USERNAME/homepage/workflows/Deploy/badge.svg)
![Vercel](https://img.shields.io/badge/deployed%20on-vercel-black?logo=vercel)
```

---

## 📞 运维联系

**负责人**：许清禾（运维总监 Agent）  
**QQ 机器人**：AppID 1903742495

---

_文档创建：2026-04-02_
