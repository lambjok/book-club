import { useContext } from 'react'
import { CartContext } from '../../../App'
import './CartItemCard.styles.scss'
import { Link } from 'react-router-dom'

const CartItemCard = ({ bookData }) => {

  const { cartItems, setCartItems } = useContext(CartContext);

  const handleRemove = () => {
    setCartItems(cartItems.filter(item => item.id !== bookData.id))
  }

  return (
    <div className='cart__item'>
      <div className='cart__item__img__container'>
        <Link to={`/book-details/${bookData.id}`}><img className='cart__item__img' src={bookData.cover} alt='book-cover' /></Link>
      </div>
      <div className='cart__item__content__container'>
        <h2 className='lora'>{bookData.name}</h2>
        <p>{bookData.author}</p>
        <h3 className='lora cart__item__price'>{bookData.price + ' $'}</h3>
        <button onClick={handleRemove} className='cart__item__button lora text-bold'>Remove from Cart</button>
      </div>
    </div>
  )
}

export default CartItemCard