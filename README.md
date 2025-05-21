# 🖥 Tauri + Angular 桌面应用

![应用截图](./doc/screenshot.png#pic_center) <!-- 请替换为实际截图 -->

基于现代Web技术的跨平台桌面应用开发模板，整合以下技术栈：
- 🚀 **Tauri** - 构建轻量级高性能桌面应用
- 🅰️ **Angular 19** - 企业级前端框架
- 🎨 **Tailwind CSS** - 原子化CSS框架
- ✨ **Windows 11 特效** - 支持亚克力/云母/模糊视觉效果

## 🌟 核心特性

### 窗口管理
✅ 原生窗口控制（最小化/最大化/关闭）  
✅ 自定义可拖拽标题栏  
✅ 窗口尺寸记忆功能  
✅ 多显示器适配支持

### 视觉效果
🎨 Windows 11 动态特效支持  
🌓 自动暗黑模式切换  
📐 响应式布局系统  
🖼️ SVG图标深度集成

## 🚀 快速开始

### 环境要求
- Node.js 18+
- Rust 1.68+ (仅构建需要)
- pnpm 8.x

```bash
# 安装依赖
pnpm install

# 开发模式运行（带热更新）
pnpm run tauri dev

# 生产环境构建
pnpm run tauri build

```

## 🛠 功能

- **窗口管理** - 支持最小化/最大化/关闭窗口
- **窗口拖动** - 自定义标题栏，支持拖动
- **暗黑模式** - 支持深色主题
- **文件系统** - 集成文件系统API

## UI特性

- **亚克力/云母/模糊** - 支持Windows 11视觉特效
- **响应式布局** - 自适应不同屏幕尺寸
- **自定义标题栏** - 支持拖动
- **暗黑模式** - 支持深色主题

## 📂 项目结构

```bash
/tauri-angular
├── src/                  # 前端源代码
│   ├── app/              # Angular组件
│   │   ├── core/         # 窗口服务
│   │   └── components/   # UI组件库
├── src-tauri/            # Tauri配置
│   ├── Cargo.toml        # Rust依赖配置
│   └── tauri.conf.json   # 窗口参数配置
├── tailwind.config.js    # Tailwind配置
└── package.json          # 前端依赖配置
```

## 🛠 开发工具

| 工具 | 用途 | 安装链接 | 
|------|------|----------| 
| Tauri 插件 | 增强开发体验 | 安装地址 | 
| Angular 工具 | 模板语法支持 | 安装地址 | 
| Rust Analyzer | Rust 代码分析 | 安装地址 |

## 贡献

欢迎任何形式的贡献，包括但不限于：

- 功能改进
- 性能优化
- 文档改进
- 测试用例
- 代码重构

## 📜 许可协议

MIT