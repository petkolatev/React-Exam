import { Routes, Route } from 'react-router'

import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import './App.css'
// import Home from '../components/Home'
import Catalog from '../components/catalog/Catalog'
import CreateBook from '../components/createBook/CreateBook'
// import Register from '../components/Register'
// import Login from '../components/Login'
// import SingleBook from '../components/SingleBook'


function App() {


  return (
    <>
      <Header />
      <Routes>
        {/* <Route path='/' element={<Home />} /> */}
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/create' element={<CreateBook />} />
        {/* <Route path='/catalog/:bookId' element={<SingleBook />} /> */}
        {/* <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} /> */}
      </Routes>


      <Footer />
    </>
  )
}

export default App
