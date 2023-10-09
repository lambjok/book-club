const EmailInputForm = ({ form }) => {
  const { register, formState } = form;
  const { errors } = formState;

  return (
    <div className='form__group'>
      <label className='lora text-bold' htmlFor='email'>Email</label>
      <input 
        id='email' 
        type='email' 
        className={`form__input ${errors.email?.message ? 'error-border' : ''}`} 
        placeholder='Enter your email...'
        {...register('email', {
          required: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: 'email required'
          },
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: 'invalid email'
          },
        })}
      />
      <p className='form__error'>{errors.email?.message}</p>
    </div>
  )
}

export default EmailInputForm