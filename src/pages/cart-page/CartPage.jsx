import Navbar from "../../components/layouts/navbar/Navbar"
import Footer from "../../components/layouts/footer/Footer"
import CartItemsContainer from "../../components/layouts/cart-items-container/CartItemsContainer"
import CartTotalContainer from "../../components/layouts/cart-total-container/CartTotalContainer"

import './CartPage.styles.scss'
import { useContext } from "react"
import { CartContext } from "../../App"

const CartPage = () => {
  const cart = useContext(CartContext)
  const { cartItems } = cart;

  return (
    <section className='cart-page'>
      <Navbar darkTheme />
      <CartItemsContainer />
      { cartItems.length ? <CartTotalContainer /> : <></> }
      <Footer />
    </section>
  )
}

export default CartPage