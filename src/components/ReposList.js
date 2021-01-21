import React  from 'react';
import PropTypes from 'prop-types';
import Repository from './Repository';

const ReposList = ({ repos }) => {


	return (
		<ul className="repository-list">
		{repos.map((repository) => 
			<Repository key={repository.id} repository={repository} />
			)}
		</ul>
	);
}

ReposList.propTypes = {
  repos: PropTypes.array.isRequired
}

export default ReposList;
