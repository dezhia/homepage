#!/bin/bash
#===============================================================================
# GitHub Pages 部署脚本
# 免费 hosting，国内访问更稳定
#===============================================================================

set -e

PROJECT_DIR="/home/kali/web-projects/homepage"
cd "$PROJECT_DIR"

echo "=============================================="
echo "GitHub Pages 部署"
echo "=============================================="
echo ""

# 1. 检查 dist 目录
if [ ! -d "dist" ]; then
    echo "[INFO] 未找到 dist 目录，先执行构建..."
    npm run build
fi

# 2. 安装 gh-pages
echo "[INFO] 安装 gh-pages..."
npm install -D gh-pages

# 3. 部署
echo "[INFO] 部署到 GitHub Pages..."
npx gh-pages -d dist

echo ""
echo "=============================================="
echo "[SUCCESS] 部署完成！"
echo "=============================================="
echo ""
echo "访问地址：https://dezhia.github.io/homepage/"
echo ""
echo "注意：首次部署后可能需要等待 1-2 分钟生效"
echo ""
