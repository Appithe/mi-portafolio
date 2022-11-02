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

export const images = map({
	'aboutImage': 'https://res.cloudinary.com/dstbwwmvv/image/upload/w_410,h_620,c_fill/v1666751040/20220710_203258_isgdxt.jpg',
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

export const aboutEn = map({
	'header': ['Hi!', 'I\'m Joel Avilés'],
	'content': ['I\'m junior Frontend Developer with interests in UX / UI, Design Thinking & SCRUM.', 'I am constantly learning and I love working in a team.'],
});

export const aboutEs = map({
	'header': ['Hola!', 'Soy Joel Avilés'],
	'content': ['Soy Desarrollador Frontend junior con intereses en UX / UI, Design Thinking & SCRUM.', 'Estoy en constante aprendizaje y me encanta trabajar en equipo.'],
});

export const projectsEn = map({
	'header': 'My projects',
	'projects': [
		{
			'title': 'Title 1',
			'description':
				'Dolor aliqua officia esse ipsum nulla laborum laborum sit ex Lorem veniam esse esse tempor',
			'image': 'https://picsum.photos/id/1050/692/456',
			'links': {
				'github': 'https://github.com/Appithe',
				'figma': 'https://figma.com',
				'web': 'www.google.com'
			}
		},
		{
			'title': 'Title 2',
			'description':
				'Dolor aliqua officia esse ipsum nulla laborum laborum sit ex Lorem veniam esse esse tempor',
			'image': 'https://picsum.photos/id/1060/692/456',
			'links': {
				'github': 'https://github.com/Appithe',
				'figma': 'https://figma.com',
			}
		},
		{
			'title': 'Title 3',
			'description':
				'Dolor aliqua officia esse ipsum nulla laborum laborum sit ex Lorem veniam esse esse tempor',
			'image': 'https://picsum.photos/id/1070/692/456',
			'links': {
				'github': 'https://github.com/Appithe',
				'web': 'www.google.com'
			}
		},
		{
			'title': 'Title 4',
			'description':
				'Dolor aliqua officia esse ipsum nulla laborum laborum sit ex Lorem veniam esse esse tempor',
			'image': 'https://picsum.photos/id/1080/692/456',
			'links': {
				'figma': 'https://figma.com',
			}
		}
	]
});

export const projectsEs = map({
	'header': 'Mis proyectos',
	'projects': [
		{
			'title': 'Titulo 1',
			'description':
				'Dolor aliqua officia esse ipsum nulla laborum laborum sit ex Lorem veniam esse esse tempor',
			'image': 'https://picsum.photos/id/1050/692/456',
			'links': {
				'github': 'https://github.com/Appithe',
				'figma': 'https://figma.com',
				'web': 'www.google.com'
			}
		},
		{
			'title': 'Titulo 2',
			'description':
				'Dolor aliqua officia esse ipsum nulla laborum laborum sit ex Lorem veniam esse esse tempor',
			'image': 'https://picsum.photos/id/1060/692/456',
			'links': {
				'github': 'https://github.com/Appithe',
				'figma': 'https://figma.com',
			}
		},
		{
			'title': 'Titulo 3',
			'description':
				'Dolor aliqua officia esse ipsum nulla laborum laborum sit ex Lorem veniam esse esse tempor',
			'image': 'https://picsum.photos/id/1070/692/456',
			'links': {
				'github': 'https://github.com/Appithe',
				'web': 'www.google.com'
			}
		},
		{
			'title': 'Titulo 4',
			'description':
				'Dolor aliqua officia esse ipsum nulla laborum laborum sit ex Lorem veniam esse esse tempor',
			'image': 'https://picsum.photos/id/1080/692/456',
			'links': {
				'figma': 'https://figma.com',
			}
		}
	]
});

export const skillsEn = map({
	'header': 'Skills',
	'skills': [
		{
			'title': 'Styling',
			'icons': [
				'/assets/icons/css3.svg',
				'/assets/icons/tailwindcss.svg',
				'/assets/icons/bootstrap.svg',
				'/assets/icons/materialui.svg'
			],
			'message': 'I have experience with CSS, TailwindCSS, Bootstrap, and Material UI.'
		},
		{
			'title': 'JavaScript',
			'icons': [
				'/assets/icons/javascript.svg',
				'/assets/icons/nodejs.svg'
			],
			'message': 'I have experience with JavaScript and Node.js.'
		},
		{
			'title': 'Frameworks',
			'icons': [
				'/assets/icons/svelte.svg',
				'/assets/icons/react.svg'
			],
			'message': 'I have experience with Svelte and React.'
		},
		{
			'title': 'Version Control',
			'icons': [
				'/assets/icons/git.svg',
				'/assets/icons/github.svg'
			],
			'message': 'I have experience with Git and GitHub.'
		},
		{
			'title': 'Tools',
			'icons': [
				'/assets/icons/vitejs.svg',
				'/assets/icons/astro.svg'
			],
			'message': 'I have experience with Vite and Astro.'
		},
		{
			'title': 'Design',
			'icons': [
				'/assets/icons/figma.svg'
			],
			'message': 'I have experience with Figma.'
		}
	]
});

export const skillsEs = map({
	'header': 'Habilidades',
	'skills': [
		{
			'title': 'Estilos',
			'icons': [
				'/assets/icons/css3.svg',
				'/assets/icons/tailwindcss.svg',
				'/assets/icons/bootstrap.svg',
				'/assets/icons/materialui.svg'
			],
			'message': 'Tengo experiencia con CSS, TailwindCSS, Bootstrap y Material UI.'
		},
		{
			'title': 'JavaScript',
			'icons': [
				'/assets/icons/javascript.svg',
				'/assets/icons/nodejs.svg'
			],
			'message': 'Tengo experiencia con JavaScript y Node.js.'
		},
		{
			'title': 'Frameworks',
			'icons': [
				'/assets/icons/svelte.svg',
				'/assets/icons/react.svg'
			],
			'message': 'Tengo experiencia con Svelte y React.'
		},
		{
			'title': 'Control de Versiones',
			'icons': [
				'/assets/icons/git.svg',
				'/assets/icons/github.svg'
			],
			'message': 'Tengo experiencia con Git y GitHub.'
		},
		{
			'title': 'Herramientas',
			'icons': [
				'/assets/icons/vitejs.svg',
				'/assets/icons/astro.svg'
			],
			'message': 'Tengo experiencia con Vite y Astro.'
		},
		{
			'title': 'Diseño',
			'icons': [
				'/assets/icons/figma.svg'
			],
			'message': 'Tengo experiencia con Figma.'
		}
	]
});