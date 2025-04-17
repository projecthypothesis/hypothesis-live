<script lang="ts">
  // Описываем интерфейс для обратных ссылок
  interface Backlink {
    slug: string;
    title: string;
    context?: string;
  }

  // Получаем метаданные из frontmatter заметки
  export let title: string;
  export let date: string | undefined = undefined;
  export let tags: string[] = [];
  export let backlinks: Backlink[] = [];
</script>

<div class="max-w-3xl mx-auto">
  <header class="mb-8 md:mb-10">
    <h1 class="text-heading-s font-bold">{title}</h1>
    {#if date}
      <p class="text-text-secondary mt-2 md:mt-3">
        {new Date(date).toLocaleDateString('ru-RU', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        })}
      </p>
    {/if}
    
    {#if tags && tags.length > 0}
      <div class="flex flex-wrap gap-2 mt-4 md:mt-5">
        {#each tags as tag}
          <a 
            href="/garden/tags/{tag}" 
            class="px-3 py-1 bg-container-secondary text-text-primary rounded-md text-body-s no-underline
                   hover:text-golden-fizz-600 transition-colors"
          >
            #{tag}
          </a>
        {/each}
      </div>
    {/if}
  </header>

  <article class="prose prose-blue max-w-none">
    <slot />
  </article>

  {#if backlinks && backlinks.length > 0}
    <div class="mt-12 md:mt-16 pt-6 md:pt-8 border-t border-transparency-8-black">
      <h2 class="text-title-m font-semibold mb-4 md:mb-6">Упоминания</h2>
      <ul class="space-y-3 md:space-y-4">
        {#each backlinks as link}
          <li>
            <a 
              href="/garden/{link.slug}" 
              class="text-text-primary hover:text-golden-fizz-600 transition-colors 
                     border-b border-text-primary hover:border-golden-fizz-500">
              {link.title}
            </a>
            {#if link.context}
              <p class="text-body-s text-text-secondary mt-1 md:mt-2">{link.context}</p>
            {/if}
          </li>
        {/each}
      </ul>
    </div>
  {/if}
</div> 