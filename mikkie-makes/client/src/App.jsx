import { useContext } from 'react'
import { Context } from './context'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './components/pages/Home'
import Cart from './components/pages/Cart'
import About from './components/pages/About'
import ProductPage from './components/pages/ProductPage'
import Inventory from './components/pages/Inventory'
import Login from './components/pages/Login'
import Navbar from './components/sections/Navbar'
import ProtectedRoute from './components/ProtectedRoute'

export default function App() {
  const {token} = useContext(Context)

  return (
    <>
      <Navbar />

      <Routes>
        <Route 
          path='/' 
          element={<Home />}
        />
        <Route 
          path='/cart' 
          element={<Cart />}
        />    
        <Route 
          path='/about' 
          element={<About />}
        />
        <Route 
          path='/login' 
          element={<Login />}
        />          
        <Route 
          path='/:productId' 
          element={<ProductPage />}
        />        
        <Route 
          path='/inventory' 
          element={<ProtectedRoute token={token}>
            <Inventory />
          </ProtectedRoute>}
        />
      </Routes>
    </>
  )
}