<script>
	import isLanguageEnglish from "../../utils/isLanguageEnglish";
	import { projectsEn, projectsEs, language } from "../../store/languageStore";

	$: projects = isLanguageEnglish($language) ? $projectsEn : $projectsEs;

</script>

<div class="grid grid-cols-12 gap-5">
	<!-- TODO: Implement store contract -->
    <h2 class="text-h2 font-Fjalla pb-10 col-start-2 col-span-2">{ projects.header }</h2>
</div>