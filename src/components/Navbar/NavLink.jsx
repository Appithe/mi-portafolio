import React from 'react';
import PropTypes from 'prop-types';
import { NavButton } from './NavButton';

export const NavLink = (props) => {

	const {
		href = '',
		message = 'NavLink',
	} = props;

	return (
		<NavButton>
			<a href={href}>
				<span className='font-Libre text-button-text'>{message}</span>
			</a>
		</NavButton>
	);
};

NavLink.propTypes = {
	href: PropTypes.string,
	message: PropTypes.string,
};
