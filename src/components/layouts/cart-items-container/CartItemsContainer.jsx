import CartItemCard from '../../cards/cart-item-card/CartItemCard'
import { useContext } from 'react'
import { CartContext } from '../../../App'
import './CartItemsContainer.styles.scss'

const CartItemsContainer = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <section className='cart__items__container'>
      <div className='container'>
        <h2 className='lora text-bold'>Cart</h2> 
        { cartItems.length 
          ? cartItems.map(item =>
            <>              
              <CartItemCard key={item.id} bookData={item} />
            </>            
          )
          : <>
            <section className='cart__empty__container'>
              <h2 className='lora text-bold cart__empty'>Your cart is empty right now...</h2>
              <p>It's time for some shopping!</p>
            </section>
             
          </>
        }
      </div>
    </section>
  )
}

export default CartItemsContainer