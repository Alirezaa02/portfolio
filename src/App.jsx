import { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { AuthProvider } from './context/AuthContext'
import Navbar from './components/layout/Navbar.jsx'
import Footer from './components/layout/Footer.jsx'
import LoadingScreen from './components/ui/LoadingScreen.jsx'
import PageTransition from './components/ui/PageTransition.jsx'
import ProtectedRoute from './components/ui/ProtectedRoute.jsx'
import ScrollProgress from './components/ui/ScrollProgress.jsx'
import BackToTop from './components/ui/BackToTop.jsx'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import ProjectDetails from './pages/ProjectDetails.jsx'
import Experience from './pages/Experience.jsx'
import Education from './pages/Education.jsx'
import Contact from './pages/Contact.jsx'
import Login from './pages/Login.jsx'
import Admin from './pages/Admin.jsx'
import NotFound from './pages/NotFound.jsx'

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />

        {/* Gated — requires login */}
        <Route path="/projects" element={
          <ProtectedRoute>
            <PageTransition><Projects /></PageTransition>
          </ProtectedRoute>
        } />
        <Route path="/projects/:slug" element={
          <ProtectedRoute>
            <PageTransition><ProjectDetails /></PageTransition>
          </ProtectedRoute>
        } />

        <Route path="/experience" element={<PageTransition><Experience /></PageTransition>} />
        <Route path="/education"  element={<PageTransition><Education /></PageTransition>} />
        <Route path="/contact"    element={<PageTransition><Contact /></PageTransition>} />
        <Route path="/login"      element={<PageTransition><Login /></PageTransition>} />

        {/* Admin — protected separately */}
        <Route path="/admin" element={
          <ProtectedRoute>
            <PageTransition><Admin /></PageTransition>
          </ProtectedRoute>
        } />

        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2600)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AuthProvider>
      <div className="page-shell">
        <ScrollProgress />
        <LoadingScreen isVisible={loading} />
        <Navbar />
        <AnimatedRoutes />
        <Footer />
        <BackToTop />
      </div>
    </AuthProvider>
  )
}

export default App
