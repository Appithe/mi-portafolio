import React from 'react';
import useLanguageStore from '../../hooks/useLanguageStore';

export const AboutBody = () => {

	const { aboutContent } = useLanguageStore();

	const { header, content } = aboutContent;

	return (
		<div className='col-start-2 col-end-8 justify-self-start'>
			<h1 className='text-h1 font-Fjalla pb-8'>{header[0]}</h1>
			<h1 className='text-h1 font-Fjalla pb-16'>{header[1]}</h1>

			<p className='text-p leading-10 font-Libre w-[834px]'>{content[0]}</p>
			<p className='text-p leading-10 font-Libre'>{content[1]}</p>
		</div>
	);
};