import './BooksPage.styles.scss'

import Navbar from "../../components/layouts/navbar/Navbar"
import SearchInputForm from '../../components/forms/search-input-form/SearchInputForm';
import ProductListingAll from '../../components/layouts/product-listing-all/ProductListingAll';
import Footer from '../../components/layouts/footer/Footer';

const BooksPage = () => {
  return (
    <section className='books-pages__background'>
      <Navbar darkTheme/>
      <div className="search__container">
        <h2 className='lora'>Explore <span className='text-primary-color text-bold'>new</span> worlds!</h2>
        <SearchInputForm />
      </div>
      <ProductListingAll />
      <Footer />
    </section>
  )
}

export default BooksPage