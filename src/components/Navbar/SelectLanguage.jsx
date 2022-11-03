import React from 'react';

import { changeLang } from '../../store/languageStore';

export const SelectLanguage = () => {
	return (
		<select name="changeLang" onChange={changeLang} className="w-fit h-[50px] px-3 text-button-text font-Libre col-start-11 border-2 border-transparent rounded bg-transparent hover:rounded hover:border-2 hover:border-charcoal">
			<option value="en" className='bg-magic-mint'>🇺🇲 English</option>
			<option value="es" className='bg-magic-mint'>🇲🇽 Español</option>
		</select>
	);
};
