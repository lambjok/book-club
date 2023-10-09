import { Routes, Route } from 'react-router-dom'
import { useEffect, createContext, useState } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import app from './firebase/Firebase'

import HomePage from './pages/home-page/HomePage'
import BooksPage from './pages/books-page/BooksPage'
import BookDetailsPage from './pages/book-details-page/BookDetailsPage'
import SignUpPage from './pages/sign-up-page/SignUpPage'
import LoginPage from './pages/login-page/LoginPage'
import CartPage from './pages/cart-page/CartPage'
import ScrollToTop from './components/utils/ScrollToTop'
import SearchPage from './pages/search-page/SearchPage'

export const UserContext = createContext({});
export const CartContext = createContext({});

const App = () => {
  const auth = getAuth(app)

  const [authUser, setAuthUser] = useState(null)
  const [cartItems, setCartItems] = useState([])
  const [totalAmount, setTotalAmount] = useState(0)

  useEffect(() => {
    onAuthStateChanged(auth, user => 
      user ? setAuthUser(user) : setAuthUser(null)
    )
  }, [])

  useEffect(() => {
    let total = 0;
    cartItems.forEach(item => total += +item.price)
    setTotalAmount(total.toFixed(2));
  }, [cartItems])
  

  return (
    <ScrollToTop>
      <UserContext.Provider value={authUser}>
        <CartContext.Provider value={{cartItems, setCartItems, totalAmount}}>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/books' element={<BooksPage />} />
            <Route path='/search' element={<SearchPage />} />
            <Route path='/book-details/:id' element={<BookDetailsPage />} />
            <Route path='/signup' element={<SignUpPage />}/>
            <Route path='/login' element={<LoginPage />} />
            <Route path='/cart' element={<CartPage />} />
          </Routes>  
        </CartContext.Provider>      
      </UserContext.Provider>
    </ScrollToTop>    
  )
}

export default App