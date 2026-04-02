# Homepage 网站部署文档

**最后更新**：2026-04-02  
**运维负责人**：许清禾

---

## 📋 部署方式

### 方式一：本地脚本部署（推荐）

```bash
# 进入项目目录
cd /home/kali/web-projects/homepage

# 执行部署脚本
./deploy.sh
```

脚本会自动执行：
1. ✅ 安全检查（npm audit）
2. ✅ 安装依赖（npm ci）
3. ✅ 生产构建（npm run build）
4. ✅ 部署到 Vercel（可选）

---

### 方式二：Ansible 自动化部署

```bash
# 进入 Ansible 目录
cd /home/kali/web-projects/homepage/ansible

# 执行部署 Playbook
ansible-playbook deploy.yml
```

---

### 方式三：手动部署

```bash
cd /home/kali/web-projects/homepage

# 1. 安全检查
npm audit

# 2. 安装依赖
npm install

# 3. 生产构建
npm run build

# 4. 部署到 Vercel
vercel --prod
```

---

## 🔄 自动部署配置

### GitHub + Vercel 自动部署

**步骤 1：创建 GitHub 仓库**

```bash
# 在 GitHub 创建新仓库（例如：homepage）
# 然后配置远程仓库
cd /home/kali/web-projects/homepage
git remote add origin https://github.com/YOUR_USERNAME/homepage.git
git branch -M main
git push -u origin main
```

**步骤 2：连接 Vercel**

1. 访问 [vercel.com](https://vercel.com)
2. 登录账号
3. 点击 "Add New Project"
4. 选择 "Import Git Repository"
5. 选择 `homepage` 仓库
6. 点击 "Deploy"

**步骤 3：配置自动部署**

- Vercel 会自动检测 Vite 框架
- 构建命令：`npm run build`
- 输出目录：`dist`
- 每次推送到 `main` 分支自动部署

---

## 📊 部署检查清单

### 部署前检查
- [ ] 代码已提交到 Git
- [ ] 执行 `npm audit` 无高危漏洞
- [ ] 本地构建测试通过
- [ ] 环境变量已配置（如需要）

### 部署后检查
- [ ] 网站可正常访问
- [ ] 所有页面加载正常
- [ ] 控制台无错误
- [ ] 移动端适配正常

---

## 🔧 常用命令

| 命令 | 说明 |
|------|------|
| `./deploy.sh` | 执行完整部署流程 |
| `./preview.sh` | 本地预览（开发/生产） |
| `npm run dev` | 启动开发服务器 |
| `npm run build` | 生产构建 |
| `npm run preview` | 预览生产构建 |
| `npm audit` | 安全检查 |
| `vercel --prod` | 部署到 Vercel 生产环境 |
| `ansible-playbook ansible/deploy.yml` | Ansible 自动化部署 |

---

## 📁 目录结构

```
homepage/
├── deploy.sh              # 部署脚本
├── preview.sh             # 预览脚本
├── ansible/
│   └── deploy.yml         # Ansible Playbook
├── src/                   # 源代码
├── dist/                  # 构建输出
├── package.json           # 项目配置
└── vercel.json            # Vercel 配置
```

---

## 🚨 故障排查

### 构建失败

```bash
# 清理缓存重新构建
rm -rf node_modules dist
npm install
npm run build
```

### 依赖冲突

```bash
# 强制重新安装
npm ci --force
```

### Vercel 部署失败

```bash
# 查看 Vercel 日志
vercel logs
# 或访问 vercel.com 查看部署日志
```

---

## 📞 运维联系

**负责人**：许清禾（运维总监 Agent）  
**QQ 机器人**：AppID 1903742495

---

_文档创建：2026-04-02 | 版本：1.0_
