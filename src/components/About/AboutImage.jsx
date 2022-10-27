import React from 'react';
import Blob from '../../../public/assets/Blob';
import PropTypes from 'prop-types';

export const AboutImage = ({image, alt}) => {
	return (
		<div className='flex items-center justify-center col-start-8 col-end-13 relative z-20'>
			<img className='absolute z-30' src={image} alt={alt} />
			<Blob/>
		</div>
	);
};

AboutImage.propTypes = {
	image: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired
};