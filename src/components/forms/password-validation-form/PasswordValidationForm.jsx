import ShowIcon from '../../../assets/show.png';
import HideIcon from '../../../assets/hide.png';

import './PasswordValidationForm.styles.scss'

import { useState } from 'react'

const PasswordValidationForm = ({ form }) => {
  const [passwordType, setPasswordType] = useState('password');

  const { register, handleSubmit, formState, watch } = form;
  const { errors } = formState;

  const password = watch('password')
  const passwordStrength = PasswordValidation(password);

  const passwordVisible = () => {
    setPasswordType(passwordType === 'password' ? 'text' : 'password')
  }

  return (
    <>
      <div className='form__group'>
        <label className='lora text-bold' htmlFor='password'>Password</label>
        <div className={`form__input__container ${errors.password?.message ? 'error-border' : ''}`}>
          <input 
            id='password' 
            type={passwordType}
            className='form__password'
            placeholder='Enter your password...'
            {...register('password', {
              required: 'password is required',
              minLength: { value: 8, message: 'Password must be at least 8 characters long' }
            })} 
          />
          <img className='password__visible-icon' onClick={passwordVisible} src={`${passwordType === 'password' ? HideIcon : ShowIcon}`}/> 
        </div>
        <p className='form__error'>{errors.password?.message}</p>
        <div className={`password__validation__container ${passwordStrength === 0 && 'hidden'}`}>
          <span className={`password__validation__item ${passwordStrength >= 1 && 'red'} `} />
          <span className={`password__validation__item ${passwordStrength >= 2 && 'yellow'}`} />
          <span className={`password__validation__item ${passwordStrength === 3 && 'green'}`} />
        </div>
        <p 
          className={`
            password__validation__text 
            lora
            text-bold
            ${
              passwordStrength === 0 && 'hidden' ||
              passwordStrength === 1 && 'red' ||
              passwordStrength === 2 && 'yellow' ||
              passwordStrength === 3 && 'green'
            }
          `}
        >
          {`
            ${
              passwordStrength <= 0 && ' ' ||
              passwordStrength === 1 && 'TOO WEAK' ||
              passwordStrength === 2 && 'NORMAL' ||
              passwordStrength === 3 && 'VERY STRONG'
            }
          `}
        </p>              
      </div>
      <div className='form__group'>
        <label className='lora text-bold' htmlFor='repeatPassword'>Repeat Your Password</label>
        <div className={`form__input__container ${errors.repeatPassword?.message ? 'error-border' : ''}`}>
          <input 
            id='repeatPassword' 
            type={passwordType}
            className='form__password'  
            placeholder='Repeat your password...'
            {...register('repeatPassword', {
              required: 'repeat your password',
              validate: value => value === password || 'your passwords must match'
            })} 
          />
          <img className='password__visible-icon' onClick={passwordVisible} src={`${passwordType === 'password' ? HideIcon : ShowIcon}`}/> 
        </div>
        <p className='form__error'>{errors.repeatPassword?.message}</p>
      </div>
    </>
  )
}

const PasswordValidation = password => {
  let strength = 0;
  if (password.match(/[a-z]/)) strength++;
  if (password.match(/\d+/)) strength++;
  if (password.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/)) strength++;
  return strength;
}

export default PasswordValidationForm