import ShowIcon from '../../../assets/show.png';
import HideIcon from '../../../assets/hide.png';

import './PasswordInputForm.styles.scss'

import { useState } from 'react'

const PasswordInputForm = ({ form }) => {
  const [passwordType, setPasswordType] = useState('password');

  const { register, formState } = form;
  const { errors } = formState;

  const passwordVisible = () => {
    setPasswordType(passwordType === 'password' ? 'text' : 'password')
  }

  return (
    <div className='form__group'>
      <label className='lora text-bold' htmlFor='password'>Enter Your Password</label>
      <div className={`form__input__container ${errors.password?.message ? 'error-border' : ''}`}>
        <input 
          id='password' 
          type={passwordType}
          className='form__password'  
          placeholder='Enter your password...'
          {...register('password', {
            required: {
              value: true,
              message: 'password required'
            }            
          })} 
        />
        <img className='password__visible-icon' onClick={passwordVisible} src={`${passwordType === 'password' ? HideIcon : ShowIcon}`}/> 
      </div>
      <p className='form__error'>{errors.password?.message}</p>
    </div>
  )
}

export default PasswordInputForm