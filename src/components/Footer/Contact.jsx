import React from 'react';
import PropTypes from 'prop-types';

export const Contact = (props) => {

	const { icon, message, link } = props;

	return (
		<a href={link} className='flex flex-row items-center gap-5 mb-2 h-8 w-fit'>
			<img src={icon} alt={message} className='h-8 w-8' />
			<span className='font-Libre text-span border-b-2 border-transparent hover:border-b-2 hover:border-blue-500'>{message}</span>
		</a>
	);
};

Contact.propTypes = {
	icon: PropTypes.string,
	message: PropTypes.string,
	link: PropTypes.string
};