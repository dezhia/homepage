# 个人主页网站

一个简约白色风格的响应式个人主页，包含阅读、工具、文件三个板块。

## 技术栈

- **框架**: React 18 + TypeScript
- **构建工具**: Vite
- **样式**: Tailwind CSS
- **部署**: Vercel

## 功能特点

- ✅ 响应式设计（手机/平板/桌面）
- ✅ 简约白色风格
- ✅ 三个核心板块：阅读、工具、文件
- ✅ Tab 切换交互
- ✅ 悬停动画效果

## 本地开发

```bash
cd /home/kali/web-projects/homepage
npm install
npm run dev
```

访问 http://localhost:5173

## 构建生产版本

```bash
npm run build
```

输出目录：`dist/`

## 部署到 Vercel

### 方式一：Vercel CLI

```bash
npm install -g vercel
vercel login
vercel
```

### 方式二：GitHub + Vercel

1. 推送代码到 GitHub
```bash
git remote add origin https://github.com/yourname/homepage.git
git push -u origin master
```

2. 访问 [vercel.com](https://vercel.com)
3. 导入 GitHub 仓库
4. 自动部署完成

## 项目结构

```
homepage/
├── src/
│   ├── App.tsx          # 主页面组件
│   ├── App.css          # 组件样式
│   ├── index.css        # 全局样式 (Tailwind)
│   └── main.tsx         # 入口文件
├── public/              # 静态资源
├── index.html           # HTML 模板
├── tailwind.config.js   # Tailwind 配置
├── vercel.json          # Vercel 部署配置
└── vite.config.ts       # Vite 配置
```

## 板块说明

### 📖 阅读
- 技术博客
- 文档中心
- 行业资讯

### 🛠️ 工具
- 在线编辑器
- 格式转换
- 性能测试

### 📁 文件
- 我的文档
- 共享文件
- 回收站

## License

MIT
