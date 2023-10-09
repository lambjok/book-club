import './SearchResultCard.styles.scss'
import { Link } from 'react-router-dom'

import { useLocation, useNavigate } from 'react-router-dom'
import { BookData } from '../../../util/BookData';
import { CartContext, UserContext } from '../../../App'
import { useEffect, useContext, useState } from 'react';

const SearchResultCard = ({ book }) => {
  const [isInCart, setIsInCart] = useState(false)
  const [bookData, setBookData] = useState({});
  
  const navigate = useNavigate()
  const user = useContext(UserContext)

  const { pathname } = useLocation();
  const { cartItems, setCartItems } = useContext(CartContext)
  const { id, cover, price, author, name } = book;

  const addToCart = () => {
    if (user) {
      setCartItems([...cartItems, bookData]);
      setIsInCart(true)
    } else {
      alert('Please Login or SignUp first!')
      navigate('/login')
    }
  }
  
  const removeFromCart = () => {
    setCartItems(cartItems.filter(item => item.id !== bookData.id))
    setIsInCart(false)
  }

  useEffect(() => {
    let newData = BookData.filter((book) => book.id == id)
    setBookData(newData[0])
    newData = cartItems.filter(book => book.id == id)
    setIsInCart(newData.length ? true : false)
  }, [pathname]);

  return (
    <div className='search-card-result__item'>
      <div className='search-card-result__item__img__container'>
        <Link to={`/book-details/${id}`}><img className='search-card-result__item__img' src={cover} alt='book-cover' /></Link>
      </div>
      <div className='search-card-result__item__content__container'>
        <h2 className='lora'>{name}</h2>
        <p>{author}</p>
        <h3 className='lora search-card-result__item__price'>{price + ' $'}</h3>
        { isInCart
            ? <a onClick={removeFromCart} className='search-card-result__item__button in-cart lora text-bold'>In Cart</a>
            : <a onClick={addToCart} className='search-card-result__item__button lora text-bold'>Add To Cart</a>
        }
      </div>
    </div>
  )
}

export default SearchResultCard