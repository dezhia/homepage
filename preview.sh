#!/bin/bash
#===============================================================================
# Homepage 网站本地预览脚本
# 用途：启动开发服务器或预览生产构建
# 作者：许清禾（运维总监 Agent）
#===============================================================================

set -e

PROJECT_DIR="/home/kali/web-projects/homepage"
cd "$PROJECT_DIR"

echo "=============================================="
echo "Homepage 网站本地预览"
echo "=============================================="
echo ""

echo "请选择预览模式:"
echo "  1) 开发模式 (npm run dev) - 热重载"
echo "  2) 生产预览 (npm run preview) - 查看构建结果"
echo ""

read -p "请输入选择 [1-2]: " mode

case $mode in
    1)
        echo ""
        echo "[INFO] 启动开发服务器..."
        echo "[INFO] 访问地址：http://localhost:5173"
        echo ""
        npm run dev
        ;;
    2)
        echo ""
        echo "[INFO] 检查构建产物..."
        if [ ! -d "dist" ]; then
            echo "[WARN] 未找到 dist 目录，先执行构建..."
            npm run build
        fi
        echo "[INFO] 启动生产预览服务器..."
        echo "[INFO] 访问地址：http://localhost:4173"
        echo ""
        npm run preview
        ;;
    *)
        echo "[ERROR] 无效选择"
        exit 1
        ;;
esac
