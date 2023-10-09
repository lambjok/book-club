import React from 'react'

const UsernameInputForm = ({ form }) => {
  const { register, formState } = form;
  const { errors } = formState;

  return (
    <div className='form__group'>
      <label className='lora text-bold' htmlFor='username'>Username</label>
      <input 
        id='username' 
        type='text' 
        className={`form__input ${errors.username?.message ? 'error-border' : ''}`} 
        placeholder='Enter your username...'
        {...register('username', {
          required: 'username required',
          minLength: { value: 2, message: 'Username must be at least 2 characters long' },
          pattern: {
            value: /^(?=.*[a-zA-Z])(?!.*\d$)(?!.*[~`!#$%@\^&*+=\-\[\]\\';,/{}|\\":<>\?]).*$/,
            message: 'username invalid'
          }
        })} 
      />
      <p className='form__error'>{errors.username?.message}</p>
    </div>
  )
}

export default UsernameInputForm