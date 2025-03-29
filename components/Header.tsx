'use client';

import Link from 'next/link';
import { useState } from 'react';
import { categories } from '@/data/websites';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary">
              出海资料库
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {categories.map((category) => (
              <Link 
                key={category.id}
                href={`/category/${category.id}`} 
                className="font-medium text-gray-700 hover:text-primary"
              >
                {category.name}
              </Link>
            ))}
            <Link 
              href="/about" 
              className="font-medium text-gray-700 hover:text-primary"
            >
              关于
            </Link>
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-700 hover:text-primary focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              {categories.map((category) => (
                <Link 
                  key={category.id}
                  href={`/category/${category.id}`} 
                  className="font-medium text-gray-700 hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {category.name}
                </Link>
              ))}
              <Link 
                href="/about" 
                className="font-medium text-gray-700 hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                关于
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 