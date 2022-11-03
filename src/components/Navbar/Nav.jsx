import React from 'react';
import PropTypes from 'prop-types';

export const Nav = ({children}) => {
	return (
		<nav className="bg-magic-mint w-screen h-[100px] border-2 grid grid-cols-12 gap-5 justify-center items-center sticky top-0 z-30">
			{children}
		</nav>
	);
};

Nav.propTypes = {
	children: PropTypes.node,
};