import React from 'react';

import Blob from '/public/assets/Blob';

import useLanguageStore from '../../hooks/useLanguageStore';

export const AboutImage = () => {

	const { images } = useLanguageStore();

	return (
		<div className='flex items-center justify-center col-start-8 col-end-13 relative z-20'>
			<img className='absolute z-30' src={images.aboutImage} />
			<Blob/>
		</div>
	);
};
