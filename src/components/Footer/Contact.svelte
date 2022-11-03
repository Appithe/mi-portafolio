<script>
	export let link;
	export let icon;
	export let message;
</script>

<a
  href={link}
  target="_blank"
  rel="noreferrer"
  class="group flex flex-row items-center gap-5 mb-2 h-8 w-fit"
>
  <img src={icon} alt={icon} class="h-8 w-8" />
  <span
    class="font-Libre text-span border-b-2 border-transparent group-hover:after:border-b-2 group-hover:border-blue-500 group-hover:transition group-hover:duration-300 group-hover:ease-in"
    >{message}</span
  >
</a>
