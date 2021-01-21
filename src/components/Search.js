import React, { useState, useEffect }  from 'react';
import PropTypes from 'prop-types';
import PrevRequests from './PrevRequests';

const Search = ({ term, handleChange }) => {

  const [prevRequests, setPrevRequests] = useState([]);
  const [focus, setFocus] = useState(false);


  useEffect(() => {
    if (prevRequests.length) {
      localStorage.setItem('prevRequests', JSON.stringify(prevRequests));
    } else if (localStorage.getItem('prevRequests')) {
      setPrevRequests(JSON.parse(localStorage.getItem('prevRequests')));
    }
  },[prevRequests])

  const updateRequestsArchive = () => {
    if (term && !prevRequests.includes(term)) {
      setPrevRequests([term,...prevRequests.slice(0,4)]);
      setFocus(false);
    }
  }

  const onFocus = () => setFocus(true);

  return (
    <div className="form-group search">
      <label htmlFor="search">Search:</label>
      <input 
        type="text" 
        name="term"
        autoComplete="off" 
        id="search"
        className="form-control pos-relative"
        value={term} 
        onChange={handleChange} 
        onFocus={onFocus}
        onBlur={updateRequestsArchive}
      />
      {focus && prevRequests.length > 0 && <PrevRequests terms={prevRequests} /> }
    </div>
  )
}

Search.propTypes = {
  term: PropTypes.string,
  handleChange: PropTypes.func.isRequired
}

export default Search;
