import './SignUpForm.styles.scss'

import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import app from '../../../firebase/Firebase';

import EmailInputForm from '../email-input-form/EmailInputForm';
import SubmitInputForm from '../submit-input-form/SubmitInputForm';
import PasswordValidationForm from '../password-validation-form/PasswordValidationForm';
import UsernameInputForm from '../username-input-form/UsernameInputForm';


const SignUpForm = () => {
  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
      repeatPassword: '',
      username: '',
    }
  })
  
  const { handleSubmit } = form;
  const navigate = useNavigate()

  const createUser = async ({ email, password, username }) => {
    try {
      const auth = getAuth(app);
      const user = await createUserWithEmailAndPassword(auth, email, password);
      user.user.displayName = username;
      navigate('/')
    } catch (err) {
      alert('User Alredy Exist!')
    }
  }

  return (
    <form onSubmit={handleSubmit(createUser)}>
      <UsernameInputForm form={form} />
      <EmailInputForm email={form.email} form={form} />
      <PasswordValidationForm form={form} />
      <SubmitInputForm btnText={'Sign Up'} />
    </form>
  )
}

export default SignUpForm