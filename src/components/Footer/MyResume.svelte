<script>
  export let header;
  export let resumeImage;
  export let resumePdf;
  export let svg;
</script>

<div class="col-start-8 col-span-3 flex flex-col">
  <h2 class="text-h2 font-Fjalla pb-8">{header}</h2>
  <a class="flex flex-col" href={resumePdf} download>
    <div
      class="group w-32 h-40 object-cover bg-cover bg-center relative flex flex-col justify-end items-end before:w-32 before:h-40 before:absolute before:bg-gradient-to-t before:from-charcoal"
      style="background-image: url('{resumeImage}')"
    >
      <div class="w-6 h-6 m-3 absolute group-hover:transition-all group-hover:ease-in group-hover:delay-1000 group-hover:animate-bounce">
        <img src={svg} alt="svg" />
      </div>
    </div>
  </a>
</div>
