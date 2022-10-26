import React from 'react';
import PropTypes from 'prop-types';

export const AboutBody = ({header, text}) => {
	return (
		<div className='col-start-2 col-end-8 justify-self-start'>
			<h1 className='text-h1 font-Fjalla pb-8'>{header[0]}</h1>
			<h1 className='text-h1 font-Fjalla pb-16'>{header[1]}</h1>

			<p className='text-p leading-10 font-Libre w-[834px]'>{text[0]}</p>
			<p className='text-p leading-10 font-Libre'>{text[1]}</p>
		</div>
	);
};

AboutBody.propTypes = {
	header: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired
};