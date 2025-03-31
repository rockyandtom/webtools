export interface Website {
  id: string;
  title: string;
  url: string;
  description: string;
  tags: string[];
  category: string;
  subcategory: string;
}

export const websites: Website[] = [];


export const categories = [
  { id: "info", name: "资讯", icon: "newspaper" },
  { id: "tools", name: "工具", icon: "wrench" },
  { id: "learning", name: "学习清单", icon: "book" },
];

export const subcategories = {
  "资讯": ["通用", "AI站", "游戏站"],
  "工具": ["域名", "编程", "代码", "服务器代码托管", "SEO", "收款", "竞品调研", "汇总"],
  "学习清单": ["生财有术", "SEO"],
};