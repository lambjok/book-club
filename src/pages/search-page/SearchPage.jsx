import { useLocation } from 'react-router'
import Footer from '../../components/layouts/footer/Footer'
import Navbar from '../../components/layouts/navbar/Navbar'
import SearchResultCard from '../../components/cards/search-result-card/SearchResultCard';

import './SearchPage.styles.scss'
import { useEffect } from 'react'
import { BookData } from '../../util/BookData'
import { useState } from 'react';

const SearchPage = () => {
  const location = useLocation()
  const [searchResult, setSearchResult] = useState([])

  useEffect(() => {
    let searchValue = [];
    searchValue = BookData.filter(data => data.name.toLocaleLowerCase().includes(location.state.toLocaleLowerCase()))
    setSearchResult(searchValue)
  }, [])

  return (
    <section>
      <Navbar darkTheme />
      <div className='search-result__container'>
        <div className='container'>
          <h2 className='lora text-bold'>Your Search Result</h2>
          { searchResult.length
            ? searchResult.map(result => 
              <SearchResultCard key={result.id} book={result} />
            )
            : <h3>Oops, we couldn't find this book...</h3>
          }
        </div>
      </div>      
      <Footer />
    </section>
  )
}

export default SearchPage