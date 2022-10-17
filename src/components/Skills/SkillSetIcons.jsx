import React from 'react';
import PropTypes from 'prop-types';

export const SkillSetIcons = (props) => {

	const { icons } = props;

	return (
		<div className='flex flex-row justify-start'>
			{icons.map((icon, index) => (
				<img
					key={index}
					src={icon}
					alt='icon'
					className='w-10 h-10 m-2'
				/>
			))}
		</div>
	);
};

SkillSetIcons.propTypes = {
	icons: PropTypes.arrayOf(PropTypes.string),
};
