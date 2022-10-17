import React from 'react';
import Blob from '../../../public/assets/Blob';

// TODO: Add image
export const AboutImage = () => {
	return (
		<div className='flex items-center justify-center col-start-8 col-end-13 relative z-20'>
			<img className='absolute z-30' src="https://picsum.photos/id/804/410/620" alt="Joel Avilés" />
			<Blob/>
		</div>
	);
};
