<script>
	import { language, projectsEn, projectsEs } from '../../store/languageStore';
  	import isLanguageEnglish from '../../utils/isLanguageEnglish';
	import ProjectCard from "./ProjectCard.svelte";
  
	$: projects = isLanguageEnglish($language) ? $projectsEn : $projectsEs;
</script>

<div class="flex flex-wrap gap-5 justify-center items-center">
	{#each projects.projects as project}
		<ProjectCard 
			title={project.title}
			description={project.description}
			image={project.image}
			links={project.links}
		/>
	{/each}
</div>