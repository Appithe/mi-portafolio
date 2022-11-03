<script>
	import Contact from './Contact.svelte';

	import isLanguageEnglish from '../../utils/isLanguageEnglish';
	import { language, footerEn, footerEs } from '../../store/languageStore'

	$: footer = isLanguageEnglish($language) ? $footerEn : $footerEs;

</script>

<div class="col-start-3 col-span-4">
	<h2 class="text-h2 font-Fjalla pb-8">{footer.headers[0]}</h2>
	{#each footer.links as link}
		<Contact 
			link={link.link}
			icon={link.icon}
			message={link.message}
		/>
	{/each}
</div>
