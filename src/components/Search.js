import React, { useState, useEffect }  from 'react';
import { searchRepos } from '../api';

const Search = () => {

  const [term, setTerm] = useState('');

  const handleChange = e => {
    setTerm(e.target.value);
    if (term !== '') {
      searchRepos(term)
      .then((response) => {
        console.log(response.data)
      })
      .catch(error => {
        console.log(error)
      })
    }    
  }

  return (
    <div className="search">
      <input type="text" name="term" value={term} onChange={handleChange} />
    </div>
  )
}

export default Search;
