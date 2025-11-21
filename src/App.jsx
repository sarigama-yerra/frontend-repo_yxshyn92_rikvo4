import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Highlights from './components/Highlights'
import Speaker from './components/Speaker'
import Schedule from './components/Schedule'
import Registration from './components/Registration'
import Venue from './components/Venue'
import Resources from './components/Resources'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <About />
      <Highlights />
      <Speaker />
      <Schedule />
      <Registration />
      <Venue />
      <Resources />
      <Footer />
    </div>
  )
}

export default App
