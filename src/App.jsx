import Navbar from './components/Navbar'
import CartList from './components/CartList'
import Footer from './components/Footer'
import './index.css'
// import {useState} from 'react'

function App() {
    // const [quantityCart, setQuantityCart] = useState(0) 
    // Maaf ya kak saya sudah berusaha pakai state dan props ke Navbarnya, namun gagal terus, Jadi saya pakai redux kak.

  return (
    <div className='app'>
      <Navbar />  
      <CartList />
      <Footer />

    </div>
  )

}

export default App