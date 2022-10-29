import { action, atom, map } from 'nanostores';

export const language = atom('en'); // 'en' || 'es'

export const changeLang = action(language, 'change', (store) => {
	if (store.get() === 'en') {
		store.set('es');
	} else {
		store.set('en');
	}

	return store.get();
});

export const navLinksEn = map([
	{
		'href': '#about', 'text': 'About'
	},
	{
		'href': '#my-work', 'text': 'Projects'
	},
	{
		'href': '#skills', 'text': 'Skills'
	},
	{
		'href': '#footer', 'text': 'Get in touch'
	}
]);

export const navLinksEs = map([
	{
		'href': '#about', 'text': 'Sobre mí'
	},
	{
		'href': '#my-work', 'text': 'Proyectos'
	},
	{
		'href': '#skills', 'text': 'Habilidades'
	},
	{
		'href': '#footer', 'text': 'Contáctame'
	}
]);

