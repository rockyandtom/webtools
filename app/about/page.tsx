export default function AboutPage() {
  return (
    <div className="container-custom py-12">
      <h1 className="text-3xl font-bold mb-6">关于出海资料库</h1>
      
      <div className="bg-white rounded-lg shadow-card p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">我们的使命</h2>
        <p className="text-gray-700 mb-4">
          出海资料库致力于为中国企业和个人提供高质量的出海资源导航，
          帮助大家在全球市场中更加便捷地获取信息、工具和学习资源，
          从而更好地开展海外业务。
        </p>
      </div>
      
      <div className="bg-white rounded-lg shadow-card p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">网站功能</h2>
        <ul className="list-disc pl-6 space-y-3 text-gray-700">
          <li>
            <strong>分类导航</strong> - 网站资源按照资讯、工具和学习清单等类别进行分类，方便快速查找
          </li>
          <li>
            <strong>实时搜索</strong> - 强大的搜索功能帮助您迅速找到所需资源
          </li>
          <li>
            <strong>子分类筛选</strong> - 细化的子分类让您更精准地找到特定领域的资源
          </li>
          <li>
            <strong>资源标签</strong> - 每个资源都有相关标签，帮助理解其功能和特点
          </li>
          <li>
            <strong>详细介绍</strong> - 为每个资源提供简明扼要的介绍和使用说明
          </li>
        </ul>
      </div>
      
      <div className="bg-white rounded-lg shadow-card p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">联系我们</h2>
        <p className="text-gray-700 mb-4">
          如果您有任何问题、建议或想要推荐新的资源，请随时联系我们：
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>邮箱：<a href="mailto:contact@example.com" className="text-primary hover:underline">contact@example.com</a></li>
          <li>微信：YourWeChatID</li>
        </ul>
      </div>
      
      <div className="bg-white rounded-lg shadow-card p-6">
        <h2 className="text-xl font-semibold mb-4">免责声明</h2>
        <p className="text-gray-700 mb-4">
          本网站提供的所有链接和资源仅供参考。我们尽力确保信息的准确性和及时性，
          但不对这些第三方资源的内容、可用性或安全性做任何保证。
          使用这些资源时，请自行判断其适用性和安全性。
        </p>
      </div>
    </div>
  );
} 