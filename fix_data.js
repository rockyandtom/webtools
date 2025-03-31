const fs = require("fs"); const content = `export interface Website { id: string; title: string; url: string; description: string; tags: string[]; category: string; subcategory: string; }

export const websites: Website[] = [ ... ]; export const categories = [ ... ]; export const subcategories = { "资讯": ["通用", "AI站", "游戏站"], "工具": ["域名", "编程", "代码", "服务器代码托管", "SEO", "收款", "竞品调研", "汇总"], "学习清单": ["生财有术", "SEO"] };`; fs.writeFileSync("data/websites.ts", content);
