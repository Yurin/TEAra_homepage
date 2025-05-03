import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <header className="relative w-full min-h-[30vh] overflow-hidden mt-[20vh]">
      {/* ロゴ・タイトル（中央） */}
      <div className="w-full h-full flex flex-col items-start justify-center text-white text-left pl-12">
  <div className="flex items-center space-x-6">
    <img
      src="/teara.png"
      alt="TEAra logo"
      className="w-20 h-20 object-contain"
    />
    <h1 className="text-5xl md:text-6xl font-bold text-white"style={{textShadow: '2px 2px 0 black, -2px -2px 0 black, -2px 2px 0 black, 2px -2px 0 black'
  }}
>
  TEAra
</h1>
  </div>
  <p className="text-lg md:text-xl tracking-wide mt-4 font-bold"style={{textShadow: '1px 1px 0 black, -1px -1px 0 black, -1px 1px 0 black, 1px -1px 0 black'
  }}>
    お茶大生むけコミュニティ
  </p>
</div>

      {/* ナビバー */}
      <nav className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-teal-400 to-green-400 shadow-md z-10">
        <ul className="w-full flex justify-center gap-6 px-4 py-2 text-white font-medium text-sm">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/schedule">スケジュール</Link></li>
          <li><Link to="/members">members</Link></li>
          <li><Link to="/news">新歓情報</Link></li>
          <li><Link to="/links">Link</Link></li>
        </ul>
      </nav>
    </header>
  )
}
