import { BookData } from '../../../util/BookData'
import ProductListingCard from '../../cards/product-listing-card/ProductListingCard'

import './ProductListingAll.styles.scss'

const ProductListingAll = () => {
  return (
    <section className='product-listing-all__container'>
      <div className='container'>
        <div className='grid__container'>
          {BookData.map(book => 
            <div key={book.id} className='grid__item'>
              <ProductListingCard book={book} />
            </div>
          )}          
        </div>
      </div>
    </section>
  )
}

export default ProductListingAll