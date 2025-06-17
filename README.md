# Tauri 2 + Angular 模板项目

这是一个现代化的Tauri 2与Angular整合模板项目，帮助开发者快速启动桌面应用开发。相比官方模板，本模板具有以下优势：
- 保持最新依赖版本（每周更新）
- 预集成TailwindCSS
- 包含常用UI框架支持
- 优化的构建配置

## 功能特性
✅ 最新Tauri 2 + Angular组合  
✅ 预装TailwindCSS  
✅ 支持常见UI框架（如PrimeNG, Angular Material等）  
✅ 优化的生产构建配置  
✅ 定期更新依赖版本  

## 快速开始

1. 使用GitHub模板创建新项目
2. 安装依赖：
```bash
pnpm install
```

3. 开发模式运行：
```bash
pnpm tauri dev
```

## 项目结构

```
/ (项目根目录)
├── src/                      # Angular前端源代码
│   ├── app/                  # Angular核心模块和组件
│   │   ├── components/       # 公共组件
│   │   ├── pages/            # 页面组件
│   │   └── app.module.ts     # 主模块
│   ├── assets/               # 静态资源
│   │   ├── images/           # 图片资源
│   │   └── fonts/            # 字体文件
│   └── style.css             # 全局样式文件
│
├── src-tauri/                # Tauri后端代码
│   ├── src/                  # Rust源代码
│   │   └── main.rs           # 程序入口
│   ├── Cargo.toml            # Rust项目配置
│   └── tauri.conf.json       # Tauri应用配置
│
├── angular.json              # Angular工作区配置
├── package.json              # 前端依赖管理
└── tsconfig.json             # TypeScript配置
```



## 技术栈

- **前端**: Angular 20+ 
- **UI框架**: TailwindCSS + PrimeNG/Angular Material
- **构建工具**: Vite
- **后端**: Tauri 2 (Rust)

## 配置说明

### 修改应用信息
编辑 `tauri.conf.json`:
```json
{
  "package": {
    "productName": "我的应用",
    "version": "0.1.0"
  }
}
```