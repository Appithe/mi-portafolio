<script>
  import { language, footerEn, footerEs } from '../../store/languageStore';
  import isLanguageEnglish from '../../utils/isLanguageEnglish';

  $: footer = isLanguageEnglish($language) ? $footerEn : $footerEs;
</script>

<div class="col-start-8 col-span-3 flex flex-col">
  <h2 class="text-h2 font-Fjalla pb-8">{footer.headers[1]}</h2>
  <a class="flex flex-col" href={footer.resumePdf} download>
    <div
      class="group w-32 h-40 object-cover bg-cover bg-center relative flex flex-col justify-end items-end before:w-32 before:h-40 before:absolute before:bg-gradient-to-t before:from-charcoal"
      style="background-image: url('{footer.resumeImage}')"
    >
      <div class="w-6 h-6 m-3 absolute group-hover:transition-all group-hover:ease-in group-hover:delay-1000 group-hover:animate-bounce">
        <img src={footer.svg} alt="svg" />
      </div>
    </div>
  </a>
</div>
