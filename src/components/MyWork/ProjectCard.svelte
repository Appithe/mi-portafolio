<script>
  import CardButton from "./CardButton.svelte";

  export let title;
  export let description;
  export let image;
  export let links;

  const width = "692px";
  const height = "456px";

</script>

<!-- background image with gradient overlay tailwindcss -->
<picture
  class="w-[{width}] h-[{height}] flex items-end relative before:w-[692px] before:h-[456px] before:absolute before:bg-gradient-to-t before:from-charcoal"
>
  <img class="w-[{width}] h-[{height}] object-cover" src={image} alt="perro" />

  <main class="w-full absolute p-5">
    <section class="pb-5">
      <h3 class="text-h3 font-Fjalla">{title}</h3>
      <p class="text-2xl font-Libre description">{description}</p>
    </section>
    
    <footer class="flex gap-5 justify-end">
      {#each Object.entries(links) as [key, value]}
          <CardButton link={value} linkName={key} />
      {/each}
    </footer>
  </main>

</picture>

<style>
  .description {
    max-width: fit-content;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
</style>
