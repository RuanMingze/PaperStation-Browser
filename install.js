const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

// ===================== 核心配置项（已设为 40.1.0）=====================
const CONFIG = {
  // 目标 Electron 版本（已改为 40.1.0）
  electronVersion: '40.1.0',
  // Electron 目录（install.js 所在路径）
  electronInstallDir: path.resolve(__dirname, 'node_modules', 'electron'),
  // 国内淘宝镜像源（新版 Electron 兼容此镜像）
  mirror: 'https://npmmirror.com/mirrors/electron/'
};
// ================================================================

// 步骤1：检查环境（目录、install.js 是否存在）
function checkEnvironment() {
  // 验证 Electron 目录是否存在
  if (!fs.existsSync(CONFIG.electronInstallDir)) {
    console.error(`❌ 错误：Electron 目录不存在 → ${CONFIG.electronInstallDir}`);
    console.error('提示：请先执行 npm install electron@40.1.0 安装基础依赖');
    process.exit(1);
  }

  // 验证 install.js 是否存在
  const installJsPath = path.join(CONFIG.electronInstallDir, 'install.js');
  if (!fs.existsSync(installJsPath)) {
    console.error(`❌ 错误：install.js 不存在 → ${installJsPath}`);
    process.exit(1);
  }

  console.log(`✅ 环境检查通过`);
  console.log(`📌 目标版本：Electron ${CONFIG.electronVersion}`);
  console.log(`📌 镜像源：${CONFIG.mirror}`);
  return installJsPath;
}

// 步骤2：一键下载（内置镜像+版本配置）
function downloadElectron() {
  const installJsPath = checkEnvironment();

  // 配置环境变量（自动设置镜像+版本，无需手动输命令）
  const env = {
    ...process.env, // 继承系统原有环境变量
    ELECTRON_MIRROR: CONFIG.mirror,
    ELECTRON_VERSION: CONFIG.electronVersion, // 强制指定 40.1.0
    ELECTRON_CUSTOM_DIR: '{{ version }}' // 新版 Electron 推荐的自动匹配语法
  };

  console.log(`\n📥 开始下载 Electron ${CONFIG.electronVersion} 二进制文件...`);
  
  // 运行 install.js 脚本（核心逻辑）
  const childProcess = spawn('node', [installJsPath], {
    env: env,
    cwd: CONFIG.electronInstallDir, // 切换到 electron 目录执行
    stdio: 'inherit' // 实时输出下载进度、日志（和手动运行一样）
  });

  // 监听下载完成/失败
  childProcess.on('close', (code) => {
    if (code === 0) {
      console.log(`\n✅ 成功！Electron ${CONFIG.electronVersion} 二进制文件下载完成`);
      console.log(`📂 文件路径：${CONFIG.electronInstallDir}\\dist`);
    } else {
      console.error(`\n❌ 失败！下载进程退出码：${code}`);
      console.error('提示：若报404，检查版本号是否正确，或换镜像源 https://cdn.npmmirror.com/binaries/electron/');
    }
  });

  // 监听进程错误（如 node 命令找不到）
  childProcess.on('error', (err) => {
    console.error(`\n❌ 进程错误：${err.message}`);
    console.error('提示：确保已安装 Node.js，且 node 命令能在终端正常运行');
  });
}

// 启动脚本
downloadElectron();