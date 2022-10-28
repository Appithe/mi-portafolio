import React from 'react';
import PropTypes from 'prop-types';

import { SkillSetIcons } from './SkillSetIcons';

export const SkillSetBody = (props) => {

	const { message, title, icons } = props;

	return (
		<>
			<div className="flex flex-row items-center gap-2">
				<h3 className="text-h3 font-Fjalla">{title}</h3>
				<SkillSetIcons icons={icons} />
			</div>
			<p className='text-xl font-Libre'>{message}</p>
		</>
	);
};

SkillSetBody.propTypes = {
	message: PropTypes.string,
	title: PropTypes.string,
	icons: PropTypes.array,
};
