import './DetailsSection.styles.scss'
import { useParams, useLocation, useNavigate } from 'react-router-dom'
import { BookData } from '../../../util/BookData';
import { CartContext, UserContext } from '../../../App'
import { useEffect, useContext, useState } from 'react';

const DetailsSection = () => {
  const { id } = useParams();
  const navigate = useNavigate()
  const user = useContext(UserContext)
  const { pathname } = useLocation();

  const [bookData, setBookData] = useState({});
  const [isInCart, setIsInCart] = useState(false)

  const [{ cover, name, author, price, description, language, length }] = BookData.filter(book => book.id == id);
  
  const { cartItems, setCartItems } = useContext(CartContext)

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
    <section className='detail-section__container'>
      <div className='container'>
        <div className='flex__container'>
          <div className='book__img__container'>
            <img src={cover} alt='book cover' />
          </div>
          <div className='book__detail__container'>
            <h2 className='lora text-bold'>{name}</h2>
            <p><i>{author}</i></p>
            <p className='book__description'>{description}</p>
            <p><b className='lora'>Language:</b> {language}</p>
            <p><b className='lora'>Book Length:</b> {length}</p>
            <h3 className='lora text-bold text-primary-color'>{price} $</h3>
            { isInCart
              ? <a onClick={removeFromCart} className='book__button in-cart lora text-bold'>In Cart</a>
              : <a onClick={addToCart} className='book__button lora text-bold'>Add To Cart</a>
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default DetailsSection