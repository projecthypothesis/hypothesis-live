<script>
  import { goto } from '$app/navigation';
  import { onMount } from 'svelte';

  onMount(() => {
    goto('/resume');
  });
</script>

<div class="flex justify-center items-center min-h-[40vh]">
  <p class="text-text-secondary">Перенаправление...</p>
</div> 