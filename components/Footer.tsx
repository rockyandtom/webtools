'use client';

import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white">
      <div className="container-custom py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">出海资料库</h3>
            <p className="text-gray-300">
              为出海业务提供优质工具和资源的导航站，涵盖资讯、工具和学习资源
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">快速链接</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white">
                  首页
                </Link>
              </li>
              <li>
                <Link href="/category/info" className="text-gray-300 hover:text-white">
                  资讯
                </Link>
              </li>
              <li>
                <Link href="/category/tools" className="text-gray-300 hover:text-white">
                  工具
                </Link>
              </li>
              <li>
                <Link href="/category/learning" className="text-gray-300 hover:text-white">
                  学习清单
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white">
                  关于
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">联系我们</h3>
            <p className="text-gray-300">
              如果您有任何问题或建议，请随时与我们联系
            </p>
            <div className="mt-4">
              <a href="mailto:contact@example.com" className="text-accent hover:underline">
                contact@example.com
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} 出海资料库. 保留所有权利.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 