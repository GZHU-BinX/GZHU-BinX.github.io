/*
 * @Author: SanMuzZzZz 1614858685@qq.com
 * @Date: 2026-03-24 17:16:29
 * @LastEditors: SanMuzZzZz 1614858685@qq.com
 * @LastEditTime: 2026-03-24 19:50:57
 * @FilePath: /lu-website/src/App.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Layout from './components/Layout'
import Home from './pages/Home'
import Achievements from './pages/Achievements'
import Members from './pages/Members'
import JoinUs from './pages/JoinUs'
import Events from './pages/Events'
import Friends from './pages/Friends'
import Gallery from './pages/Gallery'

function ScrollToTop() {
  const { pathname, search } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname, search])
  return null
}

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="achievements" element={<Achievements />} />
          <Route path="members" element={<Members />} />
          <Route path="join" element={<JoinUs />} />
          <Route path="events" element={<Events />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="friends" element={<Friends />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}
