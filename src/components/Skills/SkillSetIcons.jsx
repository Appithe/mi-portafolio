import React from 'react';
import PropTypes from 'prop-types';

import { IconTooltip } from './IconTooltip';

export const SkillSetIcons = (props) => {

	const { icons } = props;

	return (
		<div className='flex flex-row justify-start'>
			{icons.map((icon, index) => (
				<IconTooltip key={index} icon={icon}>
					<img
						src={icon}
						alt='icon'
						className='w-10 h-10 m-2'
					/>
				</IconTooltip>
			))}
		</div>
	);
};

SkillSetIcons.propTypes = {
	icons: PropTypes.arrayOf(PropTypes.string),
};
