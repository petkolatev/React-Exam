import { Routes, Route } from 'react-router'

import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import './App.css'
import Home from './components/home/Home'
import Catalog from './components/catalog/Catalog'
import CreateBook from './components/createBook/CreateBook'
import Register from './components/register/Register'
import Login from './components/login/Login'
import BookInfo from './components/bookInfo/BookInfo'
import { useState } from 'react'
import { UserContex } from './components/contexts/UserContex'



function App() {
  const [authData, setAuthData] = useState({})
 

  const userLoginHandler = (resultData)=>{
    setAuthData(resultData)
    console.log(authData);
  }


  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/create' element={<CreateBook />} />
        <Route path='/catalog/:bookId' element={<BookInfo/>} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>


      <Footer />
    </>
  )
}

export default App
