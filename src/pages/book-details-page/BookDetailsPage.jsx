import './BookDetailsPage.styles.scss'

import Navbar from '../../components/layouts/navbar/Navbar'
import Footer from '../../components/layouts/footer/Footer'
import DetailsSection from '../../components/layouts/details-section/DetailsSection'

const BookDetailsPage = () => {
  return (
    <section className='book-page__background'>
      <Navbar darkTheme />
      <DetailsSection />
      <Footer />
    </section>
  )
}

export default BookDetailsPage