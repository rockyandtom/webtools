# 出海资料库导航站

一个为出海业务提供优质工具和资源的导航站，涵盖资讯、工具和学习资源。

## 项目特点

- 📱 响应式设计，适配各种设备
- 🔍 实时搜索功能
- 🏷️ 分类和标签系统
- 🚀 基于Next.js和React构建的现代Web应用
- 💪 TypeScript提供类型安全
- 🎨 使用Tailwind CSS设计美观的界面

## 技术栈

- [Next.js](https://nextjs.org/) - React框架
- [React](https://reactjs.org/) - 用户界面库
- [TypeScript](https://www.typescriptlang.org/) - 类型安全
- [Tailwind CSS](https://tailwindcss.com/) - 实用优先的CSS框架

## 本地开发

### 前提条件

- Node.js (推荐v16或更高版本)
- npm或yarn

### 安装

1. 克隆仓库
```bash
git clone https://your-repository-url.git
cd webtools-nav
```

2. 安装依赖
```bash
npm install
# 或
yarn install
```

3. 开发模式运行
```bash
npm run dev
# 或
yarn dev
```

4. 打开[http://localhost:3000](http://localhost:3000)查看应用

## 项目结构

```
webtools-nav/
├── app/                # Next.js应用文件
│   ├── about/          # 关于页面
│   ├── category/       # 分类页面
│   ├── globals.css     # 全局CSS
│   ├── layout.tsx      # 应用布局
│   └── page.tsx        # 首页
├── components/         # React组件
│   ├── Footer.tsx      # 页脚组件
│   ├── Header.tsx      # 头部导航
│   ├── SearchBar.tsx   # 搜索栏组件
│   └── WebsiteCard.tsx # 网站卡片组件
├── data/               # 数据文件
│   └── websites.ts     # 网站数据模型和内容
├── public/             # 静态资源
├── .eslintrc.json      # ESLint配置
├── next.config.js      # Next.js配置
├── package.json        # 项目依赖
├── postcss.config.js   # PostCSS配置
├── tailwind.config.js  # Tailwind CSS配置
└── tsconfig.json       # TypeScript配置
```

## 添加新网站

要添加新网站，编辑 `data/websites.ts` 文件，按照以下格式添加新条目：

```typescript
{
  id: "unique-id",            // 唯一标识
  title: "网站标题",           // 显示名称
  url: "https://example.com", // 网站URL
  description: "网站描述",     // 简短描述
  tags: ["标签1", "标签2"],    // 相关标签
  category: "分类名称",        // 主分类
  subcategory: "子分类名称",   // 子分类
}
```

添加后，应用将自动显示新的网站。

## 构建生产版本

```bash
npm run build
# 或
yarn build
```

## 部署

该项目可以部署到Vercel、Netlify等平台。

### Vercel部署

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/webtools-nav)

## 许可证

[MIT](LICENSE) 