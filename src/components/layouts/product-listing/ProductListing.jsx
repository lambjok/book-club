import './ProductListing.styles.scss'
import ProductListingCard from '../../cards/product-listing-card/ProductListingCard'
import { BookData } from '../../../util/BookData'

const ProductListing = () => {
  return (
    <div className='product__listing__container'>
      <div className="container">
        <h2 className='text-bold lora'><span className='text-primary-color'>Bestsellers </span>of <span className='text-primary-color'>All</span> Time</h2>
        <div className='product__container'>
          {BookData
            .filter(book => book.id === 0 | book.id === 7 | book.id === 8 | book.id === 12)
            .map(book =>
              <ProductListingCard key={book.id} book={book} />
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductListing