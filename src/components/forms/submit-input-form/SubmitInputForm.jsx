import React from 'react'

const SubmitInputForm = ({ btnText }) => {
  return (
    <div className='form__group'>
      <input 
        type='submit' 
        className='form__submit lora text-bold' 
        value={btnText}
      />
    </div>
  )
}

export default SubmitInputForm