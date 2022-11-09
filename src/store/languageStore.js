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

// w-[692px] h-[456px]

export const projectsEn = map({
	'header': 'My projects',
	'projects': [
		{
			'title': 'Front End Mentor',
			'description':'My solutions to the challenges of Front End Mentor. Using HTML, CSS, JS.',
			'image': 'https://res.cloudinary.com/dstbwwmvv/image/upload/w_692,h_456,c_fill/v1667529192/frontendmentor_sfbikx.png',
			'links': {
				'web': 'https://www.frontendmentor.io/profile/Appithe'
			}
		},
		{
			'title': 'Hacktoberfest 2022',
			'description':'My contribution to the Hacktoberfest 2022. In the repo of midudev/password-generator',
			'image': 'https://res.cloudinary.com/dstbwwmvv/image/upload/w_692,h_456,c_fill/v1667096169/hacktoberfest-2022_y0ox7v.png',
			'links': {
				'github': 'https://github.com/Appithe/hacktoberfest-2022',
				'figma': 'https://www.figma.com/file/NJn9O9NwfUjhhPbSwUaFgi/hacktoberfets?node-id=0%3A1',
				'web': 'https://hacktoberfest-2022.vercel.app/entry/Appithe'
			}
		},
		{
			'title': 'Random movies',
			'description': 'Whit this project i learned how to use tailwindcss and redux',
			'image': 'https://res.cloudinary.com/dstbwwmvv/image/upload/w_692,h_456,c_fill/v1667530080/randomMovies_b02wom.png',
			'links': {
				'github': 'https://github.com/Appithe/random-movies',
				'web': 'https://random-movies-eight.vercel.app/'
			}
		},
	]
});

export const projectsEs = map({
	'header': 'Mis proyectos',
	'projects': [
		{
			'title': 'Front End Mentor',
			'description':'Mis soluciones a los desafíos de Front End Mentor. Usando HTML, CSS, JS.',
			'image': 'https://res.cloudinary.com/dstbwwmvv/image/upload/w_692,h_456,c_fill/v1667529192/frontendmentor_sfbikx.png',
			'links': {
				'web': 'https://www.frontendmentor.io/profile/Appithe'
			}
		},
		{
			'title': 'Hacktoberfest 2022',
			'description':'Mi contribución en hactoberfest 2022. En el repo de midudev/password-generator',
			'image': 'https://res.cloudinary.com/dstbwwmvv/image/upload/w_692,h_456,c_fill/v1667096169/hacktoberfest-2022_y0ox7v.png',
			'links': {
				'github': 'https://github.com/Appithe/hacktoberfest-2022',
				'figma': 'https://www.figma.com/file/NJn9O9NwfUjhhPbSwUaFgi/hacktoberfets?node-id=0%3A1',
				'web': 'https://hacktoberfest-2022.vercel.app/entry/Appithe'
			}
		},
		{
			'title': 'Random movies',
			'description': 'Con este proyecto aprendí a usar tailwindcss y redux',
			'image': 'https://res.cloudinary.com/dstbwwmvv/image/upload/w_692,h_456,c_fill/v1667530080/randomMovies_b02wom.png',
			'links': {
				'github': 'https://github.com/Appithe/random-movies',
				'web': 'https://random-movies-eight.vercel.app/'
			}
		},
	]
});

export const skillsEn = map({
	'header': 'Skills',
	'skills': [
		{
			'title': 'Styling',
			'icons': [
				'https://res.cloudinary.com/dstbwwmvv/image/upload/v1667413042/SVG_icons/css3_jaqobn.svg',
				'https://res.cloudinary.com/dstbwwmvv/image/upload/v1667413045/SVG_icons/tailwindcss_kllnle.svg',
				'https://res.cloudinary.com/dstbwwmvv/image/upload/v1667413044/SVG_icons/bootstrap_ky1eb3.svg',
				'https://res.cloudinary.com/dstbwwmvv/image/upload/v1667413044/SVG_icons/materialui_bz4idr.svg'
			],
			'message': 'I have 2 years of experience with CSS, Bootstrap, and less 1 year with Material UI, TailwindCSS.'
		},
		{
			'title': 'JavaScript',
			'icons': [
				'https://res.cloudinary.com/dstbwwmvv/image/upload/v1667413043/SVG_icons/javascript_lvt2k6.svg',
				'https://res.cloudinary.com/dstbwwmvv/image/upload/v1667413045/SVG_icons/nodejs_selaau.svg'
			],
			'message': 'I have 3 years of experience with JavaScript and Node.js.'
		},
		{
			'title': 'Frameworks',
			'icons': [
				'https://res.cloudinary.com/dstbwwmvv/image/upload/v1667413045/SVG_icons/svelte_kh4khi.svg',
				'https://res.cloudinary.com/dstbwwmvv/image/upload/v1667413046/SVG_icons/react_ioez1e.svg'
			],
			'message': 'I have 2 years of experience with React and less 1 year with Svelte.'
		},
		{
			'title': 'Version Control',
			'icons': [
				'https://res.cloudinary.com/dstbwwmvv/image/upload/v1667413042/SVG_icons/git_ly5sh7.svg',
				'https://res.cloudinary.com/dstbwwmvv/image/upload/v1667413042/SVG_icons/github_n9bpi1.svg'
			],
			'message': 'I have 3 years of experience with Git and GitHub.'
		},
		{
			'title': 'Tools',
			'icons': [
				'https://res.cloudinary.com/dstbwwmvv/image/upload/v1667413045/SVG_icons/vitejs_ttow3v.svg',
				'https://res.cloudinary.com/dstbwwmvv/image/upload/v1667413042/SVG_icons/astro_dcas5j.svg'
			],
			'message': 'I have experience with Vite and Astro.'
		},
		{
			'title': 'Design',
			'icons': [
				'https://res.cloudinary.com/dstbwwmvv/image/upload/v1667413042/SVG_icons/figma_eaxdvc.svg'
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
				'https://res.cloudinary.com/dstbwwmvv/image/upload/v1667413042/SVG_icons/css3_jaqobn.svg',
				'https://res.cloudinary.com/dstbwwmvv/image/upload/v1667413045/SVG_icons/tailwindcss_kllnle.svg',
				'https://res.cloudinary.com/dstbwwmvv/image/upload/v1667413044/SVG_icons/bootstrap_ky1eb3.svg',
				'https://res.cloudinary.com/dstbwwmvv/image/upload/v1667413044/SVG_icons/materialui_bz4idr.svg'
			],
			'message': 'Tengo 2 años de experiencia con CSS, Bootstrap, y menos de 1 año con Material UI, TailwindCSS.'
		},
		{
			'title': 'JavaScript',
			'icons': [
				'https://res.cloudinary.com/dstbwwmvv/image/upload/v1667413043/SVG_icons/javascript_lvt2k6.svg',
				'https://res.cloudinary.com/dstbwwmvv/image/upload/v1667413045/SVG_icons/nodejs_selaau.svg'
			],
			'message': 'Tengo 3 años de experiencia con JavaScript y Node.js.'
		},
		{
			'title': 'Frameworks',
			'icons': [
				'https://res.cloudinary.com/dstbwwmvv/image/upload/v1667413045/SVG_icons/svelte_kh4khi.svg',
				'https://res.cloudinary.com/dstbwwmvv/image/upload/v1667413046/SVG_icons/react_ioez1e.svg'
			],
			'message': 'Tengo 2 años de experiencia con React y menos de 1 año con Svelte.'
		},
		{
			'title': 'Control de Versiones',
			'icons': [
				'https://res.cloudinary.com/dstbwwmvv/image/upload/v1667413042/SVG_icons/git_ly5sh7.svg',
				'https://res.cloudinary.com/dstbwwmvv/image/upload/v1667413042/SVG_icons/github_n9bpi1.svg'
			],
			'message': 'Tengo 3 años de experiencia con Git y GitHub.'
		},
		{
			'title': 'Herramientas',
			'icons': [
				'https://res.cloudinary.com/dstbwwmvv/image/upload/v1667413045/SVG_icons/vitejs_ttow3v.svg',
				'https://res.cloudinary.com/dstbwwmvv/image/upload/v1667413042/SVG_icons/astro_dcas5j.svg'
			],
			'message': 'Tengo experiencia con Vite y Astro.'
		},
		{
			'title': 'Diseño',
			'icons': [
				'https://res.cloudinary.com/dstbwwmvv/image/upload/v1667413042/SVG_icons/figma_eaxdvc.svg'
			],
			'message': 'Tengo experiencia con Figma.'
		}
	]
});

export const footerEn = map({
	'headers': ['Get in touch', 'Download my resume'],
	'links': [
		{
			'icon': 'https://res.cloudinary.com/dstbwwmvv/image/upload/v1667413042/SVG_icons/github_n9bpi1.svg',
			'link': 'https://github.com/Appithe',
			'message': 'View my Github'
		},
		{
			'icon': 'https://res.cloudinary.com/dstbwwmvv/image/upload/v1667413044/SVG_icons/linkedin_gabqqo.svg',
			'link': 'https://www.linkedin.com/in/joel-aviles/',
			'message': 'View my LinkedIn'
		},
		{
			'icon': 'https://res.cloudinary.com/dstbwwmvv/image/upload/v1667413043/SVG_icons/google_ykfqwr.svg',
			'link': 'mailto:avilesjoel413@gmail.com',
			'message': 'Send me a mail'
		},
		{
			'icon': 'https://res.cloudinary.com/dstbwwmvv/image/upload/v1667413046/SVG_icons/whatsapp_llpilo.svg',
			'link': 'https://wa.me/524731114987',
			'message': 'Lets chat'
		}

	],
	'resumeImage': 'https://res.cloudinary.com/dstbwwmvv/image/upload/v1666751368/Jesus_Joel_Aviles_Bermudez_Resume_eez9ys.png',
	'resumePdf': '/assets/resume/Jesus_Joel_Aviles_Bermudez_Resume.pdf',
	'svg': 'https://res.cloudinary.com/dstbwwmvv/image/upload/v1667413042/SVG_icons/file_download_ler4xl.svg'
});

export const footerEs = map({
	'headers': ['Contáctame', 'Descarga mi CV'],
	'links': [
		{
			'icon': 'https://res.cloudinary.com/dstbwwmvv/image/upload/v1667413042/SVG_icons/github_n9bpi1.svg',
			'link': 'https://github.com/Appithe',
			'message': 'Visita mi Github'
		},
		{
			'icon': 'https://res.cloudinary.com/dstbwwmvv/image/upload/v1667413044/SVG_icons/linkedin_gabqqo.svg',
			'link': 'https://www.linkedin.com/in/joel-aviles/',
			'message': 'Visita mi LinkedIn'
		},
		{
			'icon': 'https://res.cloudinary.com/dstbwwmvv/image/upload/v1667413043/SVG_icons/google_ykfqwr.svg',
			'link': 'mailto:avilesjoel413@gmail.com',
			'message': 'Mándame un correo'
		},
		{
			'icon': 'https://res.cloudinary.com/dstbwwmvv/image/upload/v1667413046/SVG_icons/whatsapp_llpilo.svg',
			'link': 'https://wa.me/524731114987',
			'message': 'Hablemos por WhatsApp'
		}

	],
	'resumeImage': 'https://res.cloudinary.com/dstbwwmvv/image/upload/v1666751368/Jesus_Joel_Aviles_Bermudez_Resume_eez9ys.png',
	'resumePdf': '/assets/resume/Jesus_Joel_Aviles_Bermudez_CV.pdf',
	'svg': 'https://res.cloudinary.com/dstbwwmvv/image/upload/v1667413042/SVG_icons/file_download_ler4xl.svg'
}
);