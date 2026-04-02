import { useState } from 'react'
import './App.css'

// SVG 图标组件
const ReadingIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 42V8C8 6.89543 8.89543 6 10 6H38C39.1046 6 40 6.89543 40 8V42" stroke="#6366f1" strokeWidth="2" strokeLinecap="round"/>
    <path d="M12 14H36" stroke="#6366f1" strokeWidth="2" strokeLinecap="round"/>
    <path d="M12 22H36" stroke="#6366f1" strokeWidth="2" strokeLinecap="round"/>
    <path d="M12 30H28" stroke="#6366f1" strokeWidth="2" strokeLinecap="round"/>
    <rect x="6" y="40" width="36" height="4" rx="2" fill="#6366f1"/>
  </svg>
)

const ToolIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M36 14L32 10L20 22L24 26L36 14Z" stroke="#6366f1" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M20 22L14 28L18 32L24 26" stroke="#6366f1" strokeWidth="2" strokeLinejoin="round"/>
    <circle cx="28" cy="20" r="14" stroke="#6366f1" strokeWidth="2"/>
  </svg>
)

const FileIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 6H26L34 14V42C34 43.1046 33.1046 44 32 44H14C12.8954 44 12 43.1046 12 42V8C12 6.89543 12.8954 6 14 6Z" stroke="#6366f1" strokeWidth="2"/>
    <path d="M26 6V12C26 13.1046 26.8954 14 28 14H34" stroke="#6366f1" strokeWidth="2"/>
    <path d="M18 24H30" stroke="#6366f1" strokeWidth="2" strokeLinecap="round"/>
    <path d="M18 32H30" stroke="#6366f1" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

function App() {
  const [activeTab, setActiveTab] = useState('reading')

  // 阅读板块数据
  const readingItems = [
    { id: 1, title: '技术博客', description: '最新技术文章与教程', icon: <ReadingIcon /> },
    { id: 2, title: '文档中心', description: '产品文档与 API 参考', icon: <ReadingIcon /> },
    { id: 3, title: '行业资讯', description: '行业动态与技术趋势', icon: <ReadingIcon /> },
  ]

  // 工具板块数据
  const toolItems = [
    { id: 1, title: '在线编辑器', description: '代码编辑与预览', icon: <ToolIcon /> },
    { id: 2, title: '格式转换', description: '文件格式互转工具', icon: <ToolIcon /> },
    { id: 3, title: '性能测试', description: '网站性能分析', icon: <ToolIcon /> },
  ]

  // 文件板块数据
  const fileItems = [
    { id: 1, title: '我的文档', description: '个人文档管理', icon: <FileIcon /> },
    { id: 2, title: '共享文件', description: '团队文件共享', icon: <FileIcon /> },
    { id: 3, title: '回收站', description: '已删除文件', icon: <FileIcon /> },
  ]

  const getCurrentItems = () => {
    switch (activeTab) {
      case 'reading': return readingItems
      case 'tools': return toolItems
      case 'files': return fileItems
      default: return readingItems
    }
  }

  return (
    <div className="app">
      {/* 导航栏 */}
      <header className="header">
        <div className="container header-content">
          <div className="logo">
            <span className="logo-icon">◈</span>
            <span className="logo-text">个人应用网站</span>
          </div>
          <nav className="nav">
            <a href="#" className="nav-link">关于</a>
            <a href="#" className="nav-link">联系</a>
          </nav>
        </div>
      </header>

      {/* 主内容区 */}
      <main className="main">
        <div className="container">
          {/* 欢迎区域 */}
          <section className="hero">
            <h1 className="hero-title">个人应用网站</h1>
            <p className="hero-subtitle">选择一个板块开始探索</p>
          </section>

          {/* Tab 切换 */}
          <div className="tab-container">
            <button
              className={`tab ${activeTab === 'reading' ? 'tab-active' : ''}`}
              onClick={() => setActiveTab('reading')}
            >
              <ReadingIcon />
              <span>阅读</span>
            </button>
            <button
              className={`tab ${activeTab === 'tools' ? 'tab-active' : ''}`}
              onClick={() => setActiveTab('tools')}
            >
              <ToolIcon />
              <span>工具</span>
            </button>
            <button
              className={`tab ${activeTab === 'files' ? 'tab-active' : ''}`}
              onClick={() => setActiveTab('files')}
            >
              <FileIcon />
              <span>文件</span>
            </button>
          </div>

          {/* 卡片网格 */}
          <div className="grid">
            {getCurrentItems().map((item) => (
              <article key={item.id} className="card">
                <div className="card-icon">{item.icon}</div>
                <h3 className="card-title">{item.title}</h3>
                <p className="card-description">{item.description}</p>
                <div className="card-arrow">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>

      {/* 页脚 */}
      <footer className="footer">
        <div className="container">
          <p className="footer-text">© 2026 个人应用网站。All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
