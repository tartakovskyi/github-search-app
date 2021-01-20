import React, { useState }  from 'react';


const Repository = ({ repository }) => {

	const {id, name, description, html_url, language, created_at, owner, forks, watchers} = repository;

	const [dropped, toggleDropped] = useState(-1);

	const handleClick = e => toggleDropped(dropped * (-1))

	return (
		<li key={id} className="repository">
			<h3 className="repository__name">{name}</h3>
			<div className="repository__property">
				<span>Language:</span>
				<b>{language}</b>
			</div>
			<div className="repository__property">
				<span>Description:</span>
				<b>{description}</b>
			</div>
			{dropped === 1 && (
				<>
					<div className="repository__property">
						<span>Owner:</span>
						<b>{owner.login}</b>
					</div>
					<div className="repository__property">
						<span>Created at:</span>
						<b>{created_at}</b>
					</div>
					<div className="repository__property">
						<span>Forks:</span>
						<b>{forks}</b>
					</div>
					<div className="repository__property">
						<span>Watchers:</span>
						<b>{watchers}</b>
					</div>
				</>
			)}
			<a href="#" onClick={handleClick}>{ dropped === -1 ? 'Show more' : 'Hide' }</a>
		</li>
	)
}

export default Repository;
