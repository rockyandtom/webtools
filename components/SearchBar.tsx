'use client';

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const SearchBar = ({ searchQuery, setSearchQuery }: SearchBarProps) => {
  return (
    <div className="relative max-w-3xl mx-auto">
      <div className="flex items-center bg-white rounded-full shadow-lg overflow-hidden pl-6">
        <input
          type="text"
          placeholder="搜索工具、资源或关键词..."
          className="flex-grow py-4 focus:outline-none text-gray-800 text-lg"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          className="bg-accent text-white px-6 py-4 text-lg font-medium"
          onClick={() => {
            // 搜索按钮点击时的额外操作，如果需要的话
          }}
        >
          搜索
        </button>
      </div>
    </div>
  );
};

export default SearchBar; 