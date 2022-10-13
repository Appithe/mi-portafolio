<script>

	export let bgColor="";
	export let svgWaveBottom="";
	export let sectionId="";

</script>

<section id={sectionId} class="{bgColor} w-screen h-[709px] text-magic-mint border-black border-2">
	  <slot />
	  <img src={svgWaveBottom} alt="wave" class="bottom-full w-full" />
</section>