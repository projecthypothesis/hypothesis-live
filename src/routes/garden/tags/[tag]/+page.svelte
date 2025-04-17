<script lang="ts">
  import { page } from '$app/stores';
  
  // Определяем тип для данных
  interface PageData {
    tag: string;
    notes: Array<{
      slug: string;
      title: string;
      date?: string;
      excerpt?: string;
      tags?: string[];
    }>;
  }
  
  // Получаем данные из загрузчика
  export let data: PageData;
  const { tag, notes } = data;
  
  // Форматирование даты
  function formatDate(dateString: string): string {
    return new Date(dateString).toLocaleDateString('ru-RU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }
</script>

<svelte:head>
  <title>#{tag} | Цифровой сад | Искандер Хамидов</title>
  <meta name="description" content="Заметки по тегу #{tag} в цифровом саду Искандера Хамидова" />
  <meta property="og:title" content="#{tag} | Цифровой сад | Искандер Хамидов" />
  <meta property="og:description" content="Заметки по тегу #{tag} в цифровом саду Искандера Хамидова" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content={`https://hypothesis.live/garden/tags/${tag}`} />
</svelte:head>

<div class="max-w-5xl mx-auto">
  <div class="mb-8 md:mb-10">
    <a href="/garden" class="inline-flex items-center text-golden-fizz-600 hover:text-golden-fizz-700 transition-colors mb-4 md:mb-6">
      <svg class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
      </svg>
      Назад в сад
    </a>
    
    <h1 class="text-heading-l font-bold mb-2 md:mb-3">#{tag}</h1>
    <p class="text-title-m text-text-secondary">Заметки с этим тегом в цифровом саду</p>
  </div>
  
  <div class="space-y-4 md:space-y-6">
    {#if notes.length === 0}
      <div class="bg-container-secondary p-6 md:p-8 rounded-lg border border-transparency-8-black text-center">
        <p class="text-text-secondary">Нет заметок с тегом "#{tag}".</p>
      </div>
    {:else}
      {#each notes as note}
        <article class="bg-container-secondary p-5 md:p-6 rounded-lg border border-transparency-8-black 
                      hover:border-golden-fizz-500 transition-all hover:translate-y-[-2px]">
          <h2 class="text-title-m font-semibold mb-2">
            <a href="/garden/{note.slug}" class="hover:text-golden-fizz-600 transition-colors">{note.title}</a>
          </h2>
          
          {#if note.date}
            <p class="text-body-s text-text-secondary mb-2 md:mb-3">{formatDate(note.date)}</p>
          {/if}
          
          {#if note.excerpt}
            <p class="mb-3 md:mb-4 text-body-m">{note.excerpt}</p>
          {/if}
          
          {#if note.tags && note.tags.length > 0}
            <div class="flex flex-wrap gap-2 mt-2 md:mt-3">
              {#each note.tags as noteTag}
                <a 
                  href="/garden/tags/{noteTag}" 
                  class="px-3 py-1 bg-container-primary rounded-md text-body-s
                        {noteTag === tag ? 'text-golden-fizz-600 border border-golden-fizz-500' : 'text-text-primary'}
                        no-underline hover:text-golden-fizz-600 transition-colors"
                >
                  #{noteTag}
                </a>
              {/each}
            </div>
          {/if}
        </article>
      {/each}
    {/if}
  </div>
</div> 