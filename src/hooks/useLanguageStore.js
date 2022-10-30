import { 
	language, 
	navLinksEn, 
	navLinksEs ,
	aboutEn,
	aboutEs,
	images
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
		aboutContent,
		images: images.get()
	};
};

export default useLanguageStore;