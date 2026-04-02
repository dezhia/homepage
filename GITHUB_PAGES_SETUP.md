# GitHub Pages 配置指南

**部署时间**：2026-04-02  
**状态**：⚠️ 需要手动启用

---

## 📋 当前状态

- ✅ 代码已推送到 gh-pages 分支
- ⚠️ 需要在 GitHub 网页启用 Pages

---

## 🔧 启用步骤（1 分钟）

### 步骤 1：访问仓库设置

1. 打开 https://github.com/dezhia/homepage/settings/pages
2. 或进入仓库 → Settings → Pages

### 步骤 2：配置源

**Source** 选择：
- Deploy from a branch

**Branch** 选择：
- Branch: `gh-pages`
- Folder: `/ (root)`

### 步骤 3：保存

点击 **Save**

---

## 🌐 访问地址

配置完成后，等待 1-2 分钟生效：

**https://dezhia.github.io/homepage/**

---

## ✅ 验证

配置完成后执行：

```bash
curl -I https://dezhia.github.io/homepage/
```

应该返回 `HTTP/2 200`

---

## 🔄 后续部署

每次执行 `./deploy-gh-pages.sh` 后自动更新，无需重新配置。

---

_文档创建：2026-04-02_
