import { useContext } from 'react'
import './CartTotalContainer.styles.scss'
import { CartContext } from '../../../App'
import StripeCheckout from 'react-stripe-checkout'
import { useNavigate } from 'react-router'

const CartTotalContainer = () => {

  const { totalAmount, setCartItems } = useContext(CartContext);
  const stripeKey = 'pk_test_51NychEKw9cHUM3k9DC7gXQ0mZH7lsW8DNfh4MxnwGnXovy0ZtOoxeQrTwhIFwMHYSGSOCfvXdpLeVmbK3mfnwEyu00wXYONpGM'
  const navigate = useNavigate()

  const onToken = token => {
    alert('Your Payment has been processed!')
    setCartItems([]) 
    navigate('/books')
  }

  return (
    <section className='total__container'>
      <div className='container'>
        <div className='total'>
          <div className='total__count__container'>
            <h1 className='lora'>Total Price: <span className='text-primary-color'>{totalAmount} $</span> </h1>
          </div>
          <div className='total__order__container'>
            <StripeCheckout 
              name='Book Checkout'
              description='Please fill in the details bellow...'
              amount={totalAmount * 100}
              currency='USD'
              stripeKey={stripeKey}
              token={onToken}
              billingAddress
            >
              <button className='total__order__button lora text-bold'>Checkout</button>
            </StripeCheckout>
          </div>
        </div>
      </div>      
    </section>
  )
}

export default CartTotalContainer