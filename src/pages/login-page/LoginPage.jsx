import './LoginPage.styles.scss'
import LoginBg from '../../assets/login-bg.jpg'
import LoginForm from '../../components/forms/login-form/LoginForm'

const LoginPage = () => {
  return (
    <section className='login__container'>
      <div className='login__img__container'>
        <img src={LoginBg} alt='bookstore' />
      </div>
      <div className='login__content__container'>
        <div className='container'>
          <div className='login__content__wrapper'>
            <h2 className='lora'>Login</h2>
            <p className='login__welcome'>Welcome back!</p>
            <LoginForm />
          </div>
        </div>
      </div>
    </section>    
  )
}

export default LoginPage