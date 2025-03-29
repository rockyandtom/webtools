'use client';

import { Website } from '@/data/websites';

interface WebsiteCardProps {
  website: Website;
}

const WebsiteCard = ({ website }: WebsiteCardProps) => {
  return (
    <div className="card h-full flex flex-col">
      <div className="p-6 flex-grow">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-900 hover:text-primary">
            {website.title}
          </h3>
        </div>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{website.description}</p>
        <div className="flex flex-wrap gap-1 mb-4">
          {website.tags.slice(0, 3).map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="p-4 border-t border-gray-100 bg-gray-50">
        <a
          href={website.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline text-sm flex items-center justify-between"
        >
          <span>访问网站</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default WebsiteCard; 