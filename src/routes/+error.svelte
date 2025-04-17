<script>
  import { page } from '$app/stores';
</script>

<div class="container mx-auto px-4 py-16 min-h-screen flex flex-col items-center justify-center text-center">
  {#if $page.status === 404}
    <h1 class="text-4xl font-bold mb-6">Страница не найдена</h1>
    <p class="text-xl mb-8">Похоже, вы перешли по неверной ссылке или запросили страницу, которой не существует.</p>
  {:else}
    <h1 class="text-4xl font-bold mb-6">Произошла ошибка</h1>
    <p class="text-xl mb-8">Код ошибки: {$page.status} ({$page.error?.message || 'Неизвестная ошибка'})</p>
  {/if}
  
  <a href="/" class="px-6 py-3 bg-golden-fizz-500 text-black font-medium rounded-lg hover:bg-golden-fizz-600 transition-colors">
    Вернуться на главную
  </a>
</div> 