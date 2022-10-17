import React from 'react';
import PropTypes from 'prop-types';

import getSkillName from '../../utils/getSkillName';

export const SkillSetIcons = (props) => {

	const { icons } = props;

	return (
		<div className='flex flex-row justify-start'>
			{icons.map((icon, index) => (
				<div key={index} className="group cursor-pointer relative flex flex-col justify-center items-center text-center">
					<img
						src={icon}
						alt='icon'
						className='w-10 h-10 m-2'
					/>
					<div className="opacity-0 bg-dark-electric-blue text-magic-mint text-center text-xs rounded-lg py-2 absolute z-10 group-hover:opacity-100 bottom-full pointer-events-none px-3">
						{getSkillName(icon)}
						<svg className="absolute text-dark-electric-blue h-2 w-full left-0 top-full" x="0px" y="0px" viewBox="0 0 255 255" xmlSpace="preserve"><polygon className="fill-current" points="0,0 127.5,127.5 255,0" /></svg>
					</div>
				</div>
			))}
		</div>
	);
};

SkillSetIcons.propTypes = {
	icons: PropTypes.arrayOf(PropTypes.string),
};
