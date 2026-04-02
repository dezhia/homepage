#!/bin/bash
#===============================================================================
# GitHub CLI 安装脚本（Kali Linux）
#===============================================================================

set -e

echo "=============================================="
echo "GitHub CLI 安装脚本"
echo "=============================================="
echo ""

# 检查 sudo 权限
if ! sudo -v 2>/dev/null; then
    echo "[ERROR] 请先执行 'sudo -v' 输入密码授权"
    exit 1
fi

echo "[INFO] sudo 权限检查通过"
echo ""

# 方法 1：从 GitHub 官方下载二进制文件安装
echo "[INFO] 从 GitHub 官方下载安装 gh..."

# 下载最新版本
GH_VERSION=$(curl -s https://api.github.com/repos/cli/cli/releases/latest | grep '"tag_name"' | cut -d'"' -f4)
GH_VERSION=${GH_VERSION#v}  # 移除 v 前缀

echo "[INFO] 最新版本：$GH_VERSION"

# 下载
cd /tmp
wget -q https://github.com/cli/cli/releases/download/v${GH_VERSION}/gh_${GH_VERSION}_linux_amd64.tar.gz

# 解压
tar xzf gh_${GH_VERSION}_linux_amd64.tar.gz

# 安装
sudo cp gh_${GH_VERSION}_linux_amd64/bin/gh /usr/local/bin/
sudo chmod +x /usr/local/bin/gh

# 清理
rm -rf gh_${GH_VERSION}_linux_amd64*

# 验证
echo ""
echo "[INFO] 验证安装..."
gh --version

echo ""
echo "=============================================="
echo "[SUCCESS] GitHub CLI 安装完成！"
echo "=============================================="
echo ""
echo "下一步：登录 GitHub"
echo "  gh auth login"
echo ""
