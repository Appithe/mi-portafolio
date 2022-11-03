import React from 'react';
import PropTypes from 'prop-types';

import { SkillSetBody } from './SkillSetBody';

export const SkillSet = ({ classes, skill, index }) => {

	classes = 'row-start-2 col-span-5 bg-dark-electric-blue/20 rounded-lg p-3 z-20';

	const createCardClass = (index) => {
		if (index === 0) {
			classes += ' row-start-2';
		} else if (index === 1) {
			classes += ' row-start-2';
		} else if (index === 2) {
			classes += ' row-start-3';
		} else if (index === 3) {
			classes += ' row-start-3';
		} else if (index === 4) {
			classes += ' row-start-4';
		} else if (index === 5) {
			classes += ' row-start-4';
		}
	};

	if (index % 2 === 0) {
		classes += ' col-start-2';
		createCardClass(index); // left
	} else {
		classes += ' col-start-7';
		createCardClass(index); // right
	}

	return (
		<article className={classes}>
			<SkillSetBody
				message={skill.message}
				title={skill.title}
				icons={skill.icons}
			/>
		</article>
	);
};

SkillSet.propTypes = {
	classes: PropTypes.string,
	skill: PropTypes.object,
	index: PropTypes.number
};