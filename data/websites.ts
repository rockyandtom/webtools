export interface Website {
  id: string;
  title: string;
  url: string;
  description: string;
  tags: string[];
  category: string;
  subcategory: string;
}

export const websites: Website[] = [
  {
    id: "google-trends",
    title: "谷歌趋势",
    url: "https://trends.google.com/home?geo=HK",
    description: "查看热门搜索趋势，了解全球用户关注的话题",
    tags: ["趋势", "谷歌", "数据分析"],
    category: "资讯",
    subcategory: "通用",
  },
  {
    id: "search-suggest",
    title: "谷歌下拉词",
    url: "https://www.searchsuggest.tips/",
    description: "帮助发现谷歌搜索下拉框中的热门搜索词",
    tags: ["SEO", "关键词", "搜索优化"],
    category: "资讯",
    subcategory: "通用",
  },
  {
    id: "nomads",
    title: "数字游民生活方式的第一社区",
    url: "https://nomads.com",
    description: "连接世界各地的数字游民，分享远程工作和生活方式",
    tags: ["社区", "数字游民", "远程工作"],
    category: "资讯",
    subcategory: "通用",
  },
  {
    id: "reddit",
    title: "Reddit社区",
    url: "https://www.reddit.com",
    description: "世界知名的内容分享和讨论平台",
    tags: ["社区", "论坛", "内容分享"],
    category: "资讯",
    subcategory: "通用",
  },
  {
    id: "v2ex",
    title: "V2社区",
    url: "https://www.v2ex.com/",
    description: "创意工作者的社区，关注技术和创意",
    tags: ["社区", "技术", "创意"],
    category: "资讯",
    subcategory: "通用",
  },
  {
    id: "producthunt",
    title: "Product Hunt",
    url: "https://producthunt.com",
    description: "海外新产品发布的圣地，每天会有几十个新产品发布",
    tags: ["产品", "创新", "发布平台"],
    category: "资讯",
    subcategory: "通用",
  },
  {
    id: "hacker-news",
    title: "Hacker News - Show HN",
    url: "https://news.ycombinator.com/show",
    description: "Y Combinator投资的Hacker News的子板块，技术黑客们喜欢在这里发布他们的小作品",
    tags: ["技术", "创业", "项目展示"],
    category: "资讯",
    subcategory: "通用",
  },
  {
    id: "toolify-ai",
    title: "Toolify AI",
    url: "https://www.toolify.ai/zh/",
    description: "世界上第二大的AI产品导航网站",
    tags: ["AI", "工具", "导航"],
    category: "资讯",
    subcategory: "AI站",
  },
  {
    id: "theresanaiforthat",
    title: "There's An AI For That",
    url: "https://theresanaiforthat.com/",
    description: "世界上最大的AI产品导航网站",
    tags: ["AI", "工具", "导航"],
    category: "资讯",
    subcategory: "AI站",
  },
  {
    id: "spaceship",
    title: "Spaceship",
    url: "https://www.spaceship.com/",
    description: "域名注册和管理服务",
    tags: ["域名", "注册", "服务"],
    category: "工具",
    subcategory: "域名",
  },
  {
    id: "query-domains",
    title: "域名查询",
    url: "https://query.domains/",
    description: "查询域名可用性和信息的工具",
    tags: ["域名", "查询", "工具"],
    category: "工具",
    subcategory: "域名",
  },
  {
    id: "github",
    title: "GitHub",
    url: "https://github.com/",
    description: "全球最大的代码托管平台",
    tags: ["代码", "开源", "托管"],
    category: "工具",
    subcategory: "代码",
  },
  {
    id: "stripe",
    title: "Stripe",
    url: "https://stripe.com/en-hk",
    description: "全球知名的在线支付处理平台",
    tags: ["支付", "金融", "收款"],
    category: "工具",
    subcategory: "收款",
  }
];

export const categories = [
  { id: "info", name: "资讯", icon: "newspaper" },
  { id: "tools", name: "工具", icon: "wrench" },
  { id: "learning", name: "学习清单", icon: "book" },
];

export const subcategories = {
  "资讯": ["通用", "AI站", "游戏站"],
  "工具": ["域名", "编程", "代码", "服务器代码托管", "SEO", "收款", "竞品调研", "汇总"],
  "学习清单": ["生财有术", "SEO", "百问百答"],
}; 