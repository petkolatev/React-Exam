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

import { UserContex } from './components/contexts/UserContex'
import EditBook from './components/createBook/EditBook'
import usePersistedState from './hooks/usePersistedState'
import Logout from './components/logout/Logout'
import UserProvider from './providers/UserProviders'



function App() {

  return (
    <UserProvider>
    <>
      <Header />
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/create' element={<CreateBook />} />
        <Route path='/catalog/:bookId' element={<BookInfo/>} />
        <Route path='/catalog/:bookId/edit' element={<EditBook/>} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/logout' element={<Logout />} />
      </Routes>


      <Footer />
    </>
    </UserProvider>
  )
}

export default App
