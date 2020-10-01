import React from 'react';
import './styles.scss';

const Navigation = ({ onclick, scheme }) => {
	return scheme.length > 1 ? (
		<nav className="navigation">
			{scheme.map(({ id, title }) => {
				return (
					<a href={`/#${id}`} key={id} className="navigation-item" onClick={() => onclick({ id, title })}>
						{title}
					</a>
				);
			})}
		</nav>
	) : null;
};

export default Navigation;
