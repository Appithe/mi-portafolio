<script>
  export let title = "Project Title";
  export let description =
    "Dolor aliqua officia esse ipsum nulla laborum laborum sit ex Lorem veniam esse esse tempor";
  export let image = "https://picsum.photos/id/1060/692/456";
  export let link = "https://github.com/Appithe";

  const width = "692px";
  const height = "456px";

</script>

<a class="w-[{width}] h-[{height}]" href={link}>
  <!-- background image with gradient overlay tailwindcss -->
  <picture
    class="w-[{width}] h-[{height}] flex items-end relative before:w-[692px] before:h-[456px] before:absolute before:bg-gradient-to-t before:from-charcoal"
  >
    <img class="w-[{width}] h-[{height}] object-cover" src={image} alt="perro" />
    <div class=" w-full absolute p-5">
      <h3 class="text-h3 font-Fjalla">{title}</h3>
      <p class="text-2xl font-Libre description">{description}</p>
    </div>
  </picture>
</a>

<style>
  .description {
    max-width: fit-content;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
</style>
