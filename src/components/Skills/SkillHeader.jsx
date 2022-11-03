import React from 'react';
import useLanguageStore from '../../hooks/useLanguageStore';

export const SkillHeader = () => {

	const { skills } = useLanguageStore();

	return (
		<h2 className="text-h2 font-Fjalla pb-10 col-start-2">{skills.header}</h2>
	);
};
