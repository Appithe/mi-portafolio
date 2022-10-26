import React from 'react';
import PropTypes from 'prop-types';

export const Contact = (props) => {

	const { icon, message, link } = props;

	return (
		<a href={link} target='_blank' rel='noreferrer' className='group flex flex-row items-center gap-5 mb-2 h-8 w-fit'>
			<img src={icon} alt={message} className='h-8 w-8' />
			<span className='font-Libre text-span border-b-2 border-transparent group-hover:after:border-b-2 group-hover:border-blue-500 group-hover:transition group-hover:duration-300 group-hover:ease-in'>{message}</span>
		</a>
	);
};

Contact.propTypes = {
	icon: PropTypes.string,
	message: PropTypes.string,
	link: PropTypes.string
};