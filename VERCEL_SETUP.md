# Vercel 部署配置指南

**创建时间**：2026-04-02  
**运维负责人**：许清禾

---

## 🔐 首次部署需要登录 Vercel

### 步骤 1：登录 Vercel

```bash
vercel login
```

**登录方式选择**（推荐邮箱登录）：
1. 执行 `vercel login`
2. 选择登录方式（Email / GitHub / GitLab）
3. 如选择邮箱，检查邮箱验证码
4. 登录成功后会显示：`> Success! Authentication complete`

### 步骤 2：执行部署

登录成功后，执行：

```bash
cd /home/kali/web-projects/homepage
./deploy.sh
# 选择 1) 生产环境部署
```

或手动部署：

```bash
vercel --prod --yes
```

---

## 📋 首次部署流程

### 方式一：使用部署脚本（推荐）

```bash
./deploy.sh
```

脚本会提示选择：
- 1) 生产环境部署
- 2) 预览环境部署
- 3) 跳过部署

### 方式二：手动部署

```bash
# 1. 构建
npm run build

# 2. 部署
vercel --prod
```

---

## 🌐 部署后获取访问地址

部署成功后，Vercel 会返回访问地址：

```
🔍  Inspect: https://vercel.com/your-account/homepage/xxxxx
✅  Production: https://homepage-xxxxx.vercel.app
```

---

## 🔧 常见问题

### 问题 1：Token 无效

```
Error: The specified token is not valid. Use `vercel login`
```

**解决**：重新登录
```bash
vercel login
```

### 问题 2：未找到项目

首次部署时，Vercel 会询问是否链接到现有项目或创建新项目。

**选择**：
- `Create New Project` - 创建新项目（推荐）
- `Link to existing project` - 链接现有项目

### 问题 3：部署失败

查看部署日志：
```bash
vercel logs
```

或访问 Vercel 控制台查看详细信息。

---

## 📊 部署配置

Vercel 会自动读取 `vercel.json` 配置：

```json
{
  "version": 2,
  "name": "homepage",
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "vite",
  "outputDirectory": "dist"
}
```

---

## 🎯 后续优化

### 配置自定义域名

1. 访问 [vercel.com](https://vercel.com)
2. 进入项目设置
3. 选择 "Domains"
4. 添加自定义域名

### 配置环境变量

如需要环境变量：

```bash
vercel env add YOUR_ENV_VAR production
```

### 配置自动部署

1. 在 GitHub 创建仓库
2. 推送到 GitHub
3. Vercel 会自动检测并部署

---

## 📞 运维联系

**负责人**：许清禾（运维总监 Agent）  
**QQ 机器人**：AppID 1903742495

---

_文档创建：2026-04-02_
