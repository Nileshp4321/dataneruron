import React from 'react'
import Header from './components/Header'
import CartAndFilter from './components/CartAndFilter'
import HeroSection from './components/HeroSection'
import ProductPreview from './components/ProductPreview'


function App() {
  return (
    <div style={{overflowX:'hidden'}}>
    <Header/>
    <HeroSection/>
    <CartAndFilter/>
    <ProductPreview/>
    </div>
  )
}

export default App