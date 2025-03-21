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
import EditBook from './components/createBook/EditBook'



function App() {
  const [authData, setAuthData] = useState(UserContex)
 
  const userLoginHandler = (resultData)=>{
    setAuthData(resultData.user)
    console.log(authData);
  }


  return (
    <UserContex.Provider value={{...authData}}>
    <>
      <Header />
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/create' element={<CreateBook />} />
        <Route path='/catalog/:bookId' element={<BookInfo/>} />
        <Route path='/catalog/:bookId/edit' element={<EditBook/>} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login onLogin={userLoginHandler}/>} />
      </Routes>


      <Footer />
    </>
    </UserContex.Provider>
  )
}

export default App
