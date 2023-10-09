import './SearchInputForm.styles.scss';
import SearchIcon from '../../../assets/search.png'
import { useState } from 'react';
import { useNavigate } from 'react-router';

const SearchInputForm = () => {
  const [searchField, setSearchField] = useState('')

  const navigate = useNavigate()

  const handleChange = e => {
    setSearchField(e.target.value)
  }

  const redirectToSearch = () => {
    searchField ? navigate('/search', { state: searchField }) : alert('SearchField is Empty!')
  }

  return (
    <form onSubmit={redirectToSearch} className='search__input__container'>
      <input 
        type='text' 
        className='search__input' 
        placeholder='Search Books...'
        onChange={handleChange}
      />
      <button type='submit' className='search__input__button'><img src={SearchIcon} alt='search' className='search__input__button__icon' /></button>
    </form>
  )
}

export default SearchInputForm