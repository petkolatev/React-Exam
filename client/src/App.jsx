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
import EditBook from './components/createBook/EditBook'
import Logout from './components/logout/Logout'
import UserProvider from './providers/UserProviders'
import UserProfile from './components/userProfile/UserProfile'
import Search from './components/search/Search'
import AuthGuard from './components/guards/AuthGuard'
import GuestGuard from './hooks/GuestGuard'



function App() {

  return (
    <UserProvider>
      <>
        <Header />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/catalog' element={<Catalog />} />
          <Route path='/catalog/:bookId' element={<BookInfo />} />
          <Route path='/search' element={<Search />} />
          <Route element={<AuthGuard />}>
            <Route path='/catalog/:bookId/edit' element={<EditBook />} />
            <Route path='/create' element={<CreateBook />} />
            <Route path='/logout' element={<Logout />} />
          </Route>
          <Route element={<GuestGuard />}>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/profile/:userId' element={<UserProfile />} />

          </Route>
        </Routes>


        <Footer />
      </>
    </UserProvider >
  )
}

export default App
