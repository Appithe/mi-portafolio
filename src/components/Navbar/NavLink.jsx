import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Button';

export const NavLink = (props) => {

	const {
		href = '',
		message = 'NavLink',
	} = props;

	return (
		<Button>
			<a href={href}>
				<span className='font-Libre text-button-text'>{message}</span>
			</a>
		</Button>
	);
};

NavLink.propTypes = {
	href: PropTypes.string,
	message: PropTypes.string,
};
