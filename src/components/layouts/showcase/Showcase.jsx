import './Showcase.styles.scss'

import Navbar from '../navbar/Navbar'
import SearchInputForm from '../../forms/search-input-form/SearchInputForm'

const Showcase = () => {
  return (
    <section className='showcase__container'>
      <Navbar darkTheme={false} /> 
      <div className='showcase__overlay' />
      <div className="showcase__content">
        <h1>The best <span className='text-primary-color'>books</span> on the <span className='text-primary-color'>market</span></h1>
        <p>Buy quality books cheaper</p>
        <SearchInputForm />  
      </div>          
    </section>
  )
}

export default Showcase