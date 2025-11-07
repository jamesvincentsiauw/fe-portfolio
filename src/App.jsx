import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:8000'

function App() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`${API_BASE}/api/portfolio`)
      .then(res => res.json())
      .then(data => {
        setData(data)
        setLoading(false)
      })
      .catch(err => {
        console.error('Error fetching portfolio data:', err)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <div className="app" style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh'
      }}>
        <p style={{ color: 'var(--color-text-secondary)' }}>Loading...</p>
      </div>
    )
  }

  if (!data) {
    return (
      <div className="app" style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh'
      }}>
        <p style={{ color: 'var(--color-text-secondary)' }}>Error loading portfolio data</p>
      </div>
    )
  }

  return (
    <div className="app">
      <Navbar />
      <Hero profile={data.profile} />
      <About about={data.about} />
      <Experience experiences={data.experiences} />
      <Projects projects={data.projects} />
      <Contact profile={data.profile} />
      <Footer profile={data.profile} />
    </div>
  )
}

export default App
