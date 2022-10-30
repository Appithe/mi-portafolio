import { 
	language, 
	navLinksEn, 
	navLinksEs ,
	aboutEn,
	aboutEs
} from '../store/languageStore';
import { useStore } from '@nanostores/react';

const useLanguageStore = () => {
	let navLinks, aboutContent;
	const $language = useStore(language);

	if ($language === 'en') {
		navLinks = navLinksEn.get();
		aboutContent = aboutEn.get();
	} else {
		navLinks = navLinksEs.get();
		aboutContent = aboutEs.get();
	}

	return {
		navLinks,
		aboutContent
	};
};

export default useLanguageStore;