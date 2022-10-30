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

export const images = atom('https://res.cloudinary.com/dstbwwmvv/image/upload/w_410,h_620,c_fill/v1666751040/20220710_203258_isgdxt.jpg');

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

export const aboutEn = map({
	'header': ['Hi!', 'I\'m Joel Avilés'],
	'content': ['I\'m junior Frontend Developer with interests in UX / UI, Design Thinking & SCRUM.','I am constantly learning and I love working in a team.'],
});

export const aboutEs = map({
	'header': ['Hola!', 'Soy Joel Avilés'],
	'content': ['Soy Desarrollador Frontend junior con intereses en UX / UI, Design Thinking & SCRUM.','Estoy en constante aprendizaje y me encanta trabajar en equipo.'],
});
