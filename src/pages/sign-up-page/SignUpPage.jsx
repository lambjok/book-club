import './SignUpPage.styles.scss'
import SignUpBg from '../../assets/sign-up-bg.jpg'
import SignUpForm from '../../components/forms/sign-up-form/SignUpForm'

const SignUpPage = () => {
  return (
    <section className='sign-up__container'>
      <div className='sign-up__img__container'>
        <img src={SignUpBg} alt='bookstore' />
      </div>
      <div className='sign-up__content__container'>
        <div className='container'>
          <div className='sign-up__content__wrapper'>
            <h2 className='lora'>Sign Up</h2>
            <p>Become part of our community today!</p>
            <SignUpForm />
          </div>
        </div>
      </div>
    </section>    
  )
}

export default SignUpPage