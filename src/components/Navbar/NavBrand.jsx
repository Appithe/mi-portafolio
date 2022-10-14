import React from 'react';
import PropTypes from 'prop-types';

import MiLogo from '../../../public/assets/MiLogo';

export const NavBrand = (props) => {

	const { title } = props;

	return (
		<div className='w-[234px] h-[50px] col-start-2 col-span-2 flex flex-row place-items-center gap-5'>
			<MiLogo/>
			<h1 className='font-Fjalla text-nav-title'>{title}</h1>
		</div>
	);
};

NavBrand.propTypes = {
	title: PropTypes.string,
};
