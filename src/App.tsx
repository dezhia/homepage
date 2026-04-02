import { useState } from 'react'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('reading')

  // 阅读板块数据
  const readingItems = [
    { id: 1, title: '技术博客', description: '最新技术文章与教程', icon: '📖' },
    { id: 2, title: '文档中心', description: '产品文档与 API 参考', icon: '📄' },
    { id: 3, title: '行业资讯', description: '行业动态与技术趋势', icon: '📰' },
  ]

  // 工具板块数据
  const toolItems = [
    { id: 1, title: '在线编辑器', description: '代码编辑与预览', icon: '💻' },
    { id: 2, title: '格式转换', description: '文件格式互转工具', icon: '🔄' },
    { id: 3, title: '性能测试', description: '网站性能分析', icon: '⚡' },
  ]

  // 文件板块数据
  const fileItems = [
    { id: 1, title: '我的文档', description: '个人文档管理', icon: '📁' },
    { id: 2, title: '共享文件', description: '团队文件共享', icon: '📂' },
    { id: 3, title: '回收站', description: '已删除文件', icon: '🗑️' },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* 导航栏 */}
      <nav className="border-b border-gray-100 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-gray-900">我的主页</h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-600 hover:text-gray-900 transition">关于</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition">联系</a>
            </div>
          </div>
        </div>
      </nav>

      {/* 主要内容区 */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* 欢迎语 */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">欢迎访问</h2>
          <p className="text-gray-500">选择一个板块开始</p>
        </div>

        {/* Tab 切换 */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-lg border border-gray-200 p-1 bg-gray-50">
            <button
              onClick={() => setActiveTab('reading')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition ${
                activeTab === 'reading'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              📖 阅读
            </button>
            <button
              onClick={() => setActiveTab('tools')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition ${
                activeTab === 'tools'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              🛠️ 工具
            </button>
            <button
              onClick={() => setActiveTab('files')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition ${
                activeTab === 'files'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              📁 文件
            </button>
          </div>
        </div>

        {/* 内容卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeTab === 'reading' && readingItems.map((item) => (
            <div
              key={item.id}
              className="group p-6 bg-white border border-gray-200 rounded-xl hover:border-gray-300 hover:shadow-lg transition cursor-pointer"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm">{item.description}</p>
            </div>
          ))}

          {activeTab === 'tools' && toolItems.map((item) => (
            <div
              key={item.id}
              className="group p-6 bg-white border border-gray-200 rounded-xl hover:border-gray-300 hover:shadow-lg transition cursor-pointer"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm">{item.description}</p>
            </div>
          ))}

          {activeTab === 'files' && fileItems.map((item) => (
            <div
              key={item.id}
              className="group p-6 bg-white border border-gray-200 rounded-xl hover:border-gray-300 hover:shadow-lg transition cursor-pointer"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </main>

      {/* 页脚 */}
      <footer className="border-t border-gray-100 mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-gray-400 text-sm">
            © 2026 我的主页。All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
