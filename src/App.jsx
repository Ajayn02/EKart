import './App.css'
import './bootstrap.min.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Wish from './pages/Wish'
import Cart from './pages/Cart'
import Header from './components/Header'
import Footer from './components/Footer'
import View from './pages/View'
import  { Toaster } from 'react-hot-toast';

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/wish' element={<Wish />} />
        <Route path='/cart' element={<Cart />} />
        <Route path= 'view/:id' element={<View />} />
      </Routes>
      <Footer/>
      <Toaster />
    </>
  )
}

export default App
