import { useLayoutEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { initLenis } from './lib/lenis'
import { AppProvider } from './context/AppContext'
import Loader from './components/layout/Loader'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Academics from './pages/Academics'
import CampusLife from './pages/CampusLife'
import Admissions from './pages/Admissions'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

export default function App() {
  useLayoutEffect(() => initLenis(), [])
  return (
    <BrowserRouter>
      <AppProvider>
        <Loader />
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="academics" element={<Academics />} />
            <Route path="campus-life" element={<CampusLife />} />
            <Route path="admissions" element={<Admissions />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </AppProvider>
    </BrowserRouter>
  )
}
