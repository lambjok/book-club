import { Link } from 'react-router-dom';
import './ProductListingCard.styles.scss';

import { useLocation, useNavigate } from 'react-router-dom'
import { BookData } from '../../../util/BookData';
import { CartContext, UserContext } from '../../../App'
import { useEffect, useContext, useState } from 'react';

const ProductListingCard = ({ book }) => {
  const [isInCart, setIsInCart] = useState(false)
  const [bookData, setBookData] = useState({});
  
  const navigate = useNavigate()
  const user = useContext(UserContext)

  const { pathname } = useLocation();
  const { cartItems, setCartItems } = useContext(CartContext)
  const { id, cover, price } = book;

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
    <div className='product__card'>
      <Link to={`/book-details/${id}`}><img src={cover} alt='book cover' className='product__image'/></Link>
      <div className='product__details__container'>
        <div className='product__card__price-container'>
          <p className='product__pricing'>{ price + ' $'}</p>
          { isInCart
            ? <a onClick={removeFromCart} className='product__button in-cart lora text-bold'>In Cart</a>
            : <a onClick={addToCart} className='product__button lora text-bold'>Add To Cart</a>
          }
          
        </div>        
      </div>
    </div>
  )
}

export default ProductListingCard