import React from 'react';
import PropTypes from 'prop-types';

export const Button = (props) => {

	const {
		children = null,
		handleClick = () => { console.log('Button clicked'); },
		message = 'Button',
	} = props;

	return (
		<button onClick={handleClick} className='w-fit h-[50px] p-3 flex justify-center items-center hover:rounded hover:border-2 hover:border-charcoal'>
			{
				children || <span className='font-Libre text-button-text'>{message}</span>
			}
		</button>
	);
};

Button.propTypes = {
	message: PropTypes.string,
	handleClick: PropTypes.func,
	children: PropTypes.node,
};
