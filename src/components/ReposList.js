import React, { useState }  from 'react';
import Repository from './Repository';

const ReposList = ({ repos }) => {


  const [term, setTerm] = useState('');

  return (
  	<ul className="repository-list">
	    {repos.map((repository) => 
	      <Repository repository={repository} />
	    )}
    </ul>
  )
}

export default ReposList;
