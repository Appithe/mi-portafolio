<script>
	export let title = 'Project Title';
	export let description = 'Dolor aliqua officia esse ipsum nulla laborum laborum sit ex Lorem veniam esse esse tempor';
	export let image = 'https://picsum.photos/id/1060/692/456'
	export let link = 'https://github.com/Appithe'; 
</script>

<a class="w-[692px] h-[456px]" href={link}>
  <!-- background image with gradient overlay tailwindcss -->
  <div
	class='w-full h-full object-cover bg-cover bg-center relative text-left flex flex-col gap-2 justify-end before:w-[692px] before:h-[456px] before:absolute before:bg-gradient-to-t before:from-charcoal'
	style="background-image: url('{image}')"
  >
	<div class="px-36 pb-8 w-full absolute">
	  <h3 class="text-h3 font-Fjalla">{title}</h3>
	  <p class="text-2xl font-Libre w-96 description">{description}</p>
	</div>
  </div>
</a>

<style>
  .description {
    max-width: 24rem;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
</style>