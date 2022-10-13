<script>

	export let bgColor = "";
	export let svgWaveBottom = "";
	export let sectionId = "";
	export let className = "";

</script>

<section id={sectionId} class="{bgColor} w-screen max-h-fit text-magic-mint relative p-20 {className}">
	  <slot />
	  <img src={svgWaveBottom} alt="wave" class="z-10 absolute inset-x-0 -bottom-28" />
</section>