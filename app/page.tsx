'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { categories, websites, subcategories } from '@/data/websites';
import WebsiteCard from '@/components/WebsiteCard';
import SearchBar from '@/components/SearchBar';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredWebsites, setFilteredWebsites] = useState(websites);

  // 搜索功能
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredWebsites(websites);
      return;
    }

    const results = websites.filter(
      (website) =>
        website.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        website.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        website.tags.some((tag: string) => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
        website.url.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredWebsites(results);
  }, [searchQuery]);

  // 获取每个分类的前5个网站用于展示
  const getTopWebsitesForCategory = (categoryName: string, count: number = 5) => {
    return websites
      .filter(website => website.category === categoryName)
      .slice(0, count);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary text-white py-16 px-4">
        <div className="container-custom text-center">
          <h1 className="text-4xl font-bold mb-6">出海资料库导航站</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            为出海业务提供优质工具和资源的一站式导航平台，助您在全球市场中取得成功
          </p>
          <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        </div>
      </section>

      {/* 搜索结果 */}
      {searchQuery.trim() !== '' && (
        <section className="py-10">
          <div className="container-custom">
            <h2 className="text-2xl font-bold mb-6">搜索结果：{filteredWebsites.length} 条</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredWebsites.map((website) => (
                <WebsiteCard key={website.id} website={website} />
              ))}
            </div>
            {filteredWebsites.length === 0 && (
              <div className="text-center py-10">
                <p className="text-lg text-gray-600">没有找到匹配的结果，请尝试其他关键词</p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* 不显示搜索结果时显示分类预览 */}
      {searchQuery.trim() === '' && (
        <section className="py-10">
          <div className="container-custom">
            {categories.map((category) => (
              <div key={category.id} className="mb-12">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold">{category.name}</h2>
                  <Link href={`/category/${category.id}`} className="text-primary hover:underline">
                    查看全部
                  </Link>
                </div>
                
                {/* 子分类列表 */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {subcategories[category.name as keyof typeof subcategories]?.map((subcat) => (
                    <Link 
                      key={subcat} 
                      href={`/category/${category.id}/${subcat}`}
                      className="bg-gray-100 hover:bg-gray-200 rounded-full px-4 py-1 text-sm"
                    >
                      {subcat}
                    </Link>
                  ))}
                </div>
                
                {/* 该分类的前4个网站 */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {getTopWebsitesForCategory(category.name).map((website) => (
                    <WebsiteCard key={website.id} website={website} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
} 