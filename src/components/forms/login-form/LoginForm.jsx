import './LoginForm.styles.scss'

import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import app from '../../../firebase/Firebase';

import EmailInputForm from '../email-input-form/EmailInputForm'
import PasswordInputForm from '../password-input-form/PasswordInputForm';
import SubmitInputForm from '../submit-input-form/SubmitInputForm';

const LoginForm = () => {
  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    }
  })

  const { handleSubmit } = form
  const navigate = useNavigate()

  const loginUser = async ({ email, password }) => {
    try {
      const auth = getAuth(app);
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <form onSubmit={handleSubmit(loginUser)}>
      <EmailInputForm form={form} />
      <PasswordInputForm form={form} />
      <p className='login__form__sign-up'>Don't have an <Link to='/signup'>account</Link> yet?</p>
      <SubmitInputForm btnText={'Login'} />
    </form>
  )
}

export default LoginForm