import './Footer.styles.scss'
import emailjs from '@emailjs/browser'
import { useRef } from 'react'
import { useForm } from 'react-hook-form';

const Footer = () => {
  const feedback = useRef();
  const form = useForm({
    defaultValues: {
      user_email: '',
      user_name: '',
      message: '',
    }
  });

  const serviceId = 'service_eygvhx9';
  const templateId = 'template_h98j70e'
  const publicKey = 'CGtgle5TH_K3mDl7Y' 

  const { handleSubmit, formState, register } = form
  const { errors } = formState;

  const sendQuestion = async ({ user_name, user_email, message}) => {
    try {
      await emailjs.send(serviceId, templateId, { user_name, user_email, message }, publicKey)
      form.reset();
    } catch (error) {
      console.log(error)
    }    
  }

  return (
    <div className='footer__container'>
      <div className='container'>
        <h2 className='lora'>If you have any questions don't hesitate to ask here:</h2>
        <form onSubmit={handleSubmit(sendQuestion)} className='footer__form' ref={feedback}>
          <div className='form__group'>
            <label htmlFor='name' className='form__label'>Name:</label>
            <input 
              type='text' 
              name='user_name' 
              id='name' 
              className={`form__input ${errors.user_name?.message && 'error-border'}`}
              placeholder='Enter your name...' 
              {...register('user_name', {
                required: 'name required',
                minLength: { value: 2, message: 'Name must be at least 2 characters long' },
                pattern: {
                  value: /^(?=.*[a-zA-Z])(?!.*\d$)(?!.*[~`!#$%@\^&*+=\-\[\]\\';,/{}|\\":<>\?]).*$/,
                  message: 'name invalid'
                }
              })}
            />
            <p className='form__error'>{errors.user_name?.message}</p>
          </div>
          <div className='form__group'>
            <label htmlFor='email' className='form__label'>Email:</label>
            <input 
              type='email' 
              name='user_email' 
              id='email' 
              className={`form__input ${errors.user_email?.message && 'error-border'}`}
              placeholder='Enter your email...'
              {...register('user_email', {
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
            <p className='form__error'>{errors.user_email?.message}</p>
          </div>
          <div className='form__group'>
            <label htmlFor='question' className='form__label'>Question:</label>
            <textarea 
              id='question' 
              name='user_message' 
              className={`form__input ${errors.message?.message && 'error-border'}`}
              placeholder='Type your question...' 
              {...register('message', {
                required: {
                  value: true,
                  message: 'question required'
                }            
              })}
            ></textarea>
            <p className='form__error'>{errors.message?.message}</p>
          </div>
          <div className='form__group'>
            <input value='Submit' type='submit' className='footer__form__submit lora text-bold' />
          </div>
        </form>
        <p className='lora text-bold'>&copy; 2023 Book Club. All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer