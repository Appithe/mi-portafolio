import React from 'react';

import { SkillSet } from './SkillSet';

import useLanguageStore from '../../hooks/useLanguageStore';

export const Skills = () => {

	const { skills } = useLanguageStore();

	return (
		<>
			{
				skills.skills.map((skill, index) => (
					<SkillSet
						classes="row-start-2 col-span-5 col-start-2"
						key={index}
						skill={skill}
						index={index}
					/>
				))
			}
		</>
	);
};
