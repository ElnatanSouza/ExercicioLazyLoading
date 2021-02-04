import React from 'react'
import { lazy, Suspense } from 'react'
import './global.css'

const Menu = lazy(() => import('./code-splitting/Menu'))
const Home = lazy(() => import('./code-splitting/Home'))
const Footer = lazy(() => import('./code-splitting/Footer'))

function App() {
  return (
    <div className='container'>

      <Suspense fallback={<img src='https://pa1.narvii.com/6898/0942d25fd0bc260c51d360ed1a328df5e57e1b5cr1-320-231_00.gif' />}>
        <Menu />
        <Home />
        <Footer />
      </Suspense>

    </div>
  )
}

export default App
