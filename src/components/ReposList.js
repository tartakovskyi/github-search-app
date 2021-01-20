import React, { useState, useEffect }  from 'react';
import { searchRepos } from '../api';

const ReposList = ({repos}) => {


  const [term, setTerm] = useState('');

  return (
    {repos && repos.map((repository, index)=>{
      <p>{repository.name}</p>
    })}
  )
}

export default ReposList;
