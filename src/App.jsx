import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Section from './components/Section'
import Footer from './components/Footer'
import FooterLinks from './components/FooterLinks'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-black'>
      <Navbar />
      <Header />
      <Section />
      <Footer />
      <FooterLinks />
    </div>
  )
}

export default App
