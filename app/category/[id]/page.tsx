'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { categories, websites, subcategories } from '@/data/websites';
import WebsiteCard from '@/components/WebsiteCard';
import SearchBar from '@/components/SearchBar';

export default function CategoryPage({ params }: { params: { id: string } }) {
  const [searchQuery, setSearchQuery] = useState('');
  const searchParams = useSearchParams();
  
  // 获取当前分类
  const categoryId = params.id;
  const category = categories.find(cat => cat.id === categoryId);
  
  if (!category) {
    return (
      <div className="container-custom py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">分类不存在</h1>
        <p className="mb-6">您查找的分类不存在，请返回首页</p>
        <Link href="/" className="btn">
          返回首页
        </Link>
      </div>
    );
  }
  
  // 获取该分类下的所有网站
  const categoryWebsites = websites.filter(website => {
    const matchesCategory = website.category === category.name;
    const matchesSearch = searchQuery.trim() === '' ? true : (
      website.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      website.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      website.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    );
    return matchesCategory && matchesSearch;
  });
  
  // 获取该分类的所有子分类
  const subcats = subcategories[category.name] || [];

  return (
    <>
      {/* 分类标题 */}
      <section className="bg-primary text-white py-12">
        <div className="container-custom">
          <h1 className="text-3xl font-bold mb-4">{category.name}</h1>
          <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        </div>
      </section>
      
      {/* 子分类过滤 */}
      <div className="bg-gray-100 border-b">
        <div className="container-custom py-4">
          <div className="flex flex-wrap gap-2">
            <Link 
              href={`/category/${categoryId}`}
              className={`rounded-full px-4 py-1 ${!searchParams.get('subcategory') ? 'bg-primary text-white' : 'bg-white hover:bg-gray-200'}`}
            >
              全部
            </Link>
            {subcats.map(subcat => (
              <Link 
                key={subcat}
                href={`/category/${categoryId}/${subcat}`}
                className="bg-white hover:bg-gray-200 rounded-full px-4 py-1"
              >
                {subcat}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* 网站列表 */}
      <section className="py-10">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryWebsites.length > 0 ? (
              categoryWebsites.map(website => (
                <WebsiteCard key={website.id} website={website} />
              ))
            ) : (
              <div className="col-span-3 text-center py-10">
                <p className="text-lg text-gray-600">
                  {searchQuery.trim() !== '' 
                    ? "没有找到匹配的结果，请尝试其他关键词" 
                    : "该分类下暂无网站"}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
} 