import { 
	language, 
	navLinksEn, 
	navLinksEs 
} from '../../../store/languageStore';
import { useStore } from '@nanostores/react';

export const useLanguageStore = () => {
	let navLinks;
	const $language = useStore(language);

	if ($language === 'en') {
		navLinks = navLinksEn.get();
	} else {
		navLinks = navLinksEs.get();
	}

	return {
		navLinks,
	};
};