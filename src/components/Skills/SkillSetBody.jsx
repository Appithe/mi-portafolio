import React from 'react';
import PropTypes from 'prop-types';

export const SkillSetBody = (props) => {

	const { message = 'Hola mundo' } = props;

	return (
		<p className='text-xl font-Libre'>{message}</p>
	);
};

SkillSetBody.propTypes = {
	message: PropTypes.string,
};
