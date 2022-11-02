import { 
	language, 
	navLinksEn, 
	navLinksEs ,
	aboutEn,
	aboutEs,
	images,
	skillsEn,
	skillsEs
} from '../store/languageStore';
import { useStore } from '@nanostores/react';

const useLanguageStore = () => {
	let navLinks, aboutContent, skills;
	const $language = useStore(language);

	if ($language === 'en') {
		navLinks = navLinksEn.get();
		aboutContent = aboutEn.get();
		skills = skillsEn.get();
	} else {
		navLinks = navLinksEs.get();
		aboutContent = aboutEs.get();
		skills = skillsEs.get();
	}

	return {
		navLinks,
		aboutContent,
		images: images.get(),
		skills
	};
};

export default useLanguageStore;