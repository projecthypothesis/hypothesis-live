<script lang="ts">
  import { onMount } from 'svelte';
  
  /** @type {import('./$types').PageData} */
  export let data;
  
  interface Note {
    slug: string;
    frontmatter: {
      title?: string;
      description?: string;
      date?: string;
      tags?: string[];
    }
  }
  
  // Инициализация с значениями по умолчанию для предотвращения ошибок
  const notes = data?.notes || [];
  const tags = data?.tags || [];
  
  let selectedTag = '';
  let searchQuery = '';
  let filteredNotes = notes;
  
  // Функция для фильтрации заметок по тегу и поисковому запросу
  function filterNotes() {
    filteredNotes = notes.filter((note: Note) => {
      const matchesTag = selectedTag === '' || note.frontmatter.tags?.includes(selectedTag);
      const matchesSearch = searchQuery === '' || 
        note.frontmatter.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        note.frontmatter.description?.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesTag && matchesSearch;
    });
  }
  
  // Сортировка тегов в алфавитном порядке, с проверкой наличия массива
  const sortedTags = Array.isArray(tags) ? [...tags].sort((a: string, b: string) => a.localeCompare(b)) : [];
  
  // Отслеживаем изменения выбранного тега и поискового запроса
  $: {
    selectedTag;
    searchQuery;
    filterNotes();
  }
  
  let visible = false;
  onMount(() => {
    visible = true;
  });
</script>

<svelte:head>
  <title>Цифровой сад | Искандер Хамидов</title>
  <meta name="description" content="Цифровой сад с заметками и мыслями Искандера Хамидова" />
  <meta property="og:title" content="Цифровой сад | Искандер Хамидов" />
  <meta property="og:description" content="Цифровой сад с заметками и мыслями Искандера Хамидова" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://hypothesis.live/garden" />
</svelte:head>

<div class="max-w-5xl mx-auto transition-opacity duration-500" class:opacity-0={!visible} class:opacity-100={visible}>
  <div class="flex flex-col md:flex-row justify-between items-start gap-6 md:gap-8 mb-10 md:mb-12">
    <div>
      <h1 class="text-heading-l font-bold mb-3 md:mb-4">цифровой сад</h1>
      <p class="text-title-m text-text-secondary max-w-lg">
        Коллекция моих мыслей, заметок и идей. Заметки могут быть незавершёнными 
        и постоянно развиваются.
      </p>
    </div>
    
    <div class="w-full md:w-64">
      <div class="relative">
        <input
          type="text"
          bind:value={searchQuery}
          placeholder="Поиск..."
          class="w-full px-4 py-3 bg-container-secondary text-text-primary border border-transparency-8-black 
                rounded-md focus:outline-none focus:ring-1 focus:ring-golden-fizz-500 pl-10"
        />
        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg class="h-5 w-5 text-text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>
    </div>
  </div>
  
  <div class="flex flex-col md:flex-row gap-8 md:gap-10">
    <!-- Теги -->
    <div class="w-full md:w-48 lg:w-56 shrink-0 mb-6 md:mb-0">
      <h2 class="text-title-s font-semibold mb-4 md:mb-6">Теги</h2>
      <ul class="space-y-2 md:space-y-3">
        <li>
          <button
            class="text-left w-full text-body-m py-1 border-l-2 pl-3 transition-colors hover:text-golden-fizz-600"
            class:border-golden-fizz-500={selectedTag === ''}
            class:text-golden-fizz-600={selectedTag === ''}
            class:border-transparent={selectedTag !== ''}
            on:click={() => (selectedTag = '')}
          >
            Все заметки
          </button>
        </li>
        {#each sortedTags as tag}
          <li>
            <button
              class="text-left w-full text-body-m py-1 border-l-2 pl-3 transition-colors hover:text-golden-fizz-600"
              class:border-golden-fizz-500={selectedTag === tag}
              class:text-golden-fizz-600={selectedTag === tag}
              class:border-transparent={selectedTag !== tag}
              on:click={() => (selectedTag = tag)}
            >
              {tag}
            </button>
          </li>
        {/each}
      </ul>
    </div>
    
    <!-- Заметки -->
    <div class="flex-1">
      <h2 class="text-title-s font-semibold mb-4 md:mb-6 md:hidden">Заметки</h2>
      
      {#if filteredNotes.length > 0}
        <div class="grid gap-4 md:gap-6 grid-cols-1">
          {#each filteredNotes as note}
            <a
              href={`/garden/${note.slug}`}
              class="block bg-container-secondary p-5 md:p-6 rounded-lg border border-transparency-8-black 
                    transition-all hover:border-golden-fizz-500 hover:translate-y-[-2px]"
            >
              <h3 class="text-title-m font-semibold mb-2">{note.frontmatter.title || 'Без названия'}</h3>
              
              {#if note.frontmatter.description}
                <p class="text-body-m text-text-secondary mb-3 md:mb-4">{note.frontmatter.description}</p>
              {/if}
              
              {#if note.frontmatter.date}
                <p class="text-body-s text-text-secondary mb-2">
                  {new Date(note.frontmatter.date).toLocaleDateString('ru-RU', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </p>
              {/if}
              
              {#if note.frontmatter.tags && note.frontmatter.tags.length > 0}
                <div class="flex flex-wrap gap-2 mt-3">
                  {#each note.frontmatter.tags as tag}
                    <span class="px-2 py-1 bg-container-primary text-text-secondary text-body-s rounded">
                      {tag}
                    </span>
                  {/each}
                </div>
              {/if}
            </a>
          {/each}
        </div>
      {:else if notes.length === 0}
        <div class="bg-container-secondary p-6 md:p-8 rounded-lg border border-transparency-8-black text-center">
          <p class="text-text-secondary mb-2">В цифровом саду пока нет заметок</p>
          <p class="text-body-s">
            Скоро здесь появятся интересные мысли и заметки!
          </p>
        </div>
      {:else}
        <div class="bg-container-secondary p-6 md:p-8 rounded-lg border border-transparency-8-black text-center">
          <p class="text-text-secondary mb-2">Заметки не найдены</p>
          <p class="text-body-s">
            {#if selectedTag}
              Попробуйте выбрать другой тег или очистить поиск.
            {:else}
              Попробуйте другой поисковый запрос.
            {/if}
          </p>
        </div>
      {/if}
    </div>
  </div>
</div> 