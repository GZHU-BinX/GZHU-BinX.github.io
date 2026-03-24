import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Achievements from './pages/Achievements'
import Members from './pages/Members'
import JoinUs from './pages/JoinUs'
import Events from './pages/Events'
import Friends from './pages/Friends'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="achievements" element={<Achievements />} />
          <Route path="members" element={<Members />} />
          <Route path="join" element={<JoinUs />} />
          <Route path="events" element={<Events />} />
          <Route path="friends" element={<Friends />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
