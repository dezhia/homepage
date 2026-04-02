#!/bin/bash
#===============================================================================
# Homepage 网站部署脚本
# 用途：构建并部署到 Vercel
# 作者：许清禾（运维总监 Agent）
#===============================================================================

set -e  # 遇到错误立即退出

# 颜色定义
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

log_info()    { echo -e "${BLUE}[INFO]${NC} $1"; }
log_success() { echo -e "${GREEN}[SUCCESS]${NC} $1"; }
log_warn()    { echo -e "${YELLOW}[WARN]${NC} $1"; }
log_error()   { echo -e "${RED}[ERROR]${NC} $1"; }

# 项目路径
PROJECT_DIR="/home/kali/web-projects/homepage"
cd "$PROJECT_DIR"

echo "=============================================="
echo "Homepage 网站部署脚本"
echo "=============================================="
echo ""

# 1. 安全检查
log_info "执行安全检查..."
npm audit --audit-level=high
log_success "安全检查通过"
echo ""

# 2. 安装依赖
log_info "安装依赖..."
npm ci --prefer-offline || npm install
log_success "依赖安装完成"
echo ""

# 3. 生产构建
log_info "执行生产构建..."
npm run build
log_success "构建完成"
echo ""

# 4. 显示构建产物信息
log_info "构建产物信息:"
ls -lh dist/
echo ""

# 5. 部署到 Vercel
log_info "部署到 Vercel..."
echo ""
echo "请选择部署方式:"
echo "  1) 生产环境部署 (vercel --prod)"
echo "  2) 预览环境部署 (vercel)"
echo "  3) 跳过 Vercel 部署（仅本地构建）"
echo ""

read -p "请输入选择 [1-3]: " deploy_choice

case $deploy_choice in
    1)
        log_info "执行生产环境部署..."
        vercel --prod
        log_success "生产环境部署完成"
        ;;
    2)
        log_info "执行预览环境部署..."
        vercel
        log_success "预览环境部署完成"
        ;;
    3)
        log_warn "跳过 Vercel 部署"
        ;;
    *)
        log_error "无效选择"
        exit 1
        ;;
esac

echo ""
echo "=============================================="
log_success "部署完成！"
echo "=============================================="
echo ""
