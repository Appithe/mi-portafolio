const getSkillName = (icon) => {
	let skillName = icon.split('/').slice(3);

	return (skillName.toString().split('.', 1).toString());
};

export default getSkillName;