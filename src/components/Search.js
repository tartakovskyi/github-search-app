import React, { useState, useEffect }  from 'react';
import { searchRepos } from '../api';

const Search = ({ setRepos }) => {

  const [term, setTerm] = useState('');

  const handleChange = e => {
    setTerm(e.target.value);
    if (term !== '') {
      searchRepos(term)
      .then(response => {
        console.log(response.data)
        setRepos(response.data);
      })
      .catch(error => {
        console.log(error);
      })
    }    
  }

  return (
    <div className="form-group search">
      <label htmlFor="search">Search:</label>
      <input type="text" name="term" id="search" value={term} onChange={handleChange} className="form-control" />
    </div>
  )
}

export default Search;
