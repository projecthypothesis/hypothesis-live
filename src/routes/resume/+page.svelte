<script>
  // Путь к PDF-файлу резюме
  const resumeUrl = '/documents/resume.pdf';
</script>

<svelte:head>
  <title>Резюме | Искандер Хамидов</title>
  <meta name="description" content="Резюме Искандера Хамидова, продакт-менеджера в Uzum Bank" />
  <meta property="og:title" content="Резюме | Искандер Хамидов" />
  <meta property="og:description" content="Резюме Искандера Хамидова, продакт-менеджера в Uzum Bank" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://hypothesis.live/resume" />
</svelte:head>

<div class="max-w-5xl mx-auto">
  <h1 class="text-heading-l font-bold mb-6 md:mb-8">работа</h1>
  
  <div class="mb-6 md:mb-8 flex flex-col md:flex-row md:items-start md:justify-between">
    <p class="text-title-m text-text-secondary mb-4 md:mb-0 max-w-md">Здесь вы можете просмотреть и скачать моё резюме.</p>
    
    <a 
      href={resumeUrl} 
      download
      class="inline-flex items-center gap-2 text-body-m border-b border-text-primary hover:border-golden-fizz-500 hover:text-golden-fizz-600 pb-1 transition-all"
    >
      <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
      </svg>
      Скачать PDF
    </a>
  </div>
  
  <div class="bg-container-secondary rounded-lg overflow-hidden h-[70vh] md:h-[80vh] border border-transparency-8-black">
    <iframe
      title="Резюме Искандера Хамидова"
      src={resumeUrl}
      class="w-full h-full"
    ></iframe>
  </div>
  
  <div class="mt-16 md:mt-24">
    <h2 class="text-heading-s font-bold mb-6 md:mb-8 border-b pb-2 border-transparency-8-black">Опыт работы</h2>
    
    <div class="space-y-10 md:space-y-12 mt-6 md:mt-8">
      <div class="border-l-2 border-golden-fizz-400 pl-4 md:pl-8 py-1">
        <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
          <h3 class="text-title-l font-semibold">Продакт-менеджер</h3>
          <span class="text-text-secondary mt-1 md:mt-0">2022 — настоящее время</span>
        </div>
        <p class="text-title-s text-golden-fizz-600 mb-4">Uzum Bank</p>
        <p class="mb-4">
          Разработка и развитие банковских продуктов в цифровом банке. Управление жизненным циклом
          продукта от идеи до реализации и поддержки.
        </p>
        <ul class="list-disc pl-6 text-text-secondary space-y-2">
          <li>Запуск новых финансовых сервисов</li>
          <li>Оптимизация пользовательских сценариев</li>
          <li>Аналитика продуктовых метрик</li>
          <li>Управление командой разработки</li>
        </ul>
      </div>
    </div>
  </div>
  
  <div class="mt-16 md:mt-24 mb-8">
    <h2 class="text-heading-s font-bold mb-6 md:mb-8 border-b pb-2 border-transparency-8-black">Навыки</h2>
    
    <div class="flex flex-wrap gap-3 mt-6 md:mt-8">
      <span class="px-4 py-2 bg-container-secondary text-text-primary rounded-md">Product Management</span>
      <span class="px-4 py-2 bg-container-secondary text-text-primary rounded-md">UX/UI</span>
      <span class="px-4 py-2 bg-container-secondary text-text-primary rounded-md">Agile</span>
      <span class="px-4 py-2 bg-container-secondary text-text-primary rounded-md">Финтех</span>
      <span class="px-4 py-2 bg-container-secondary text-text-primary rounded-md">Проджект-менеджмент</span>
      <span class="px-4 py-2 bg-container-secondary text-text-primary rounded-md">B2C</span>
    </div>
  </div>
</div> 