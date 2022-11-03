const getSkillName = (icon) => {
	let skillName = icon.split('/').slice(3);
	let fileName = skillName[skillName.length - 1];

	return fileName.split('_', 1).toString();
};

export default getSkillName;