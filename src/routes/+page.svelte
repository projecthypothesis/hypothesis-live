<script>
  import { onMount } from 'svelte';
  
  let isVisible = false;
  
  onMount(() => {
    // Небольшая анимация появления
    setTimeout(() => {
      isVisible = true;
    }, 100);
  });
</script>

<svelte:head>
  <title>Искандер Хамидов | hypothesis.live</title>
  <meta name="description" content="Персональный сайт Искандера Хамидова, продакт-менеджера в Uzum Bank" />
  <meta property="og:title" content="Искандер Хамидов | hypothesis.live" />
  <meta property="og:description" content="Персональный сайт Искандера Хамидова, продакт-менеджера в Uzum Bank" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://hypothesis.live" />
</svelte:head>

<section class="w-full transition-opacity duration-500 {isVisible ? 'opacity-100' : 'opacity-0'}">
  <div class="max-w-5xl mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 my-12 md:my-16">
      <!-- Левая колонка с ролями -->
      <div class="flex flex-col space-y-3">
        <h2 class="text-heading-s font-bold">продакт</h2>
        <h2 class="text-heading-s font-bold">проджект</h2>
        <h2 class="text-heading-s font-bold">музыкант</h2>
        <h2 class="text-heading-s font-bold">AI-энтузиаст</h2>
      </div>
      
      <!-- Правая колонка с описанием -->
      <div class="flex flex-col justify-center w-full">
        <p class="text-title-m text-text-secondary mb-2">учусь новому каждый день</p>
        <p class="text-title-m text-text-secondary">а здесь делюсь процессом</p>
      </div>
    </div>
  </div>
  
  <!-- Градиентный фон/блок (fullwidth) -->
  <div class="w-full py-32 md:py-48 mt-8 md:mt-16 bg-gradient-to-b from-golden-fizz-50 to-golden-fizz-100">
    <!-- Можно добавить контент внутрь градиентного блока -->
  </div>
  
  <div class="max-w-5xl mx-auto">
    <!-- Контакты -->
    <div class="mt-12 flex flex-wrap gap-6 md:gap-8">
      <a 
        href="https://t.me/hickslaw" 
        target="_blank" 
        rel="noopener noreferrer"
        class="flex items-center gap-2 text-body-m border-b border-text-primary hover:border-golden-fizz-500 hover:text-golden-fizz-600 pb-1 transition-all"
      >
        <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 8.328c-.14.63-.306 2.752-1.008 5.688-.099.426-1.084 2.203-2.664 3.125-1.574.926-2.488 1.17-3.071 1.17-.52 0-1.112-.28-1.544-.7.683-.217 3.054-1.05 3.189-1.12.135-.07.183-.265.084-.391s-.28-.183-.425-.127c-.147.056-2.129.828-3.058 1.171-.595-.588-.798-1.343-.798-1.826 0-.265.931-1.785.931-1.785.196-.391 2.825-5.66 2.923-5.786.126-.15.384-.15.508 0 .21.244 2.449 2.483 3.563 3.88.095.098.237.069.312-.05.075-.12.42-.803.57-1.146.15-.343.03-.476-.183-.574-1.26-.574-4.503-1.76-4.92-1.914-.417-.155-.417-.224 0-.392.215-.084 6.477-2.483 6.755-2.6.424-.175.808-.112.948.517z"></path>
        </svg>
        Telegram
      </a>
      
      <a 
        href="https://linkedin.com/in/xanderproduct" 
        target="_blank" 
        rel="noopener noreferrer"
        class="flex items-center gap-2 text-body-m border-b border-text-primary hover:border-golden-fizz-500 hover:text-golden-fizz-600 pb-1 transition-all"
      >
        <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
        </svg>
        LinkedIn
      </a>
      
      <a 
        href="mailto:xanderkhamidov@gmail.com"
        class="flex items-center gap-2 text-body-m border-b border-text-primary hover:border-golden-fizz-500 hover:text-golden-fizz-600 pb-1 transition-all"
      >
        <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
        E-mail
      </a>
    </div>

    <section class="mt-20 md:mt-24 mb-12">
      <h2 class="text-heading-s font-bold mb-6 border-b pb-2 border-transparency-8-black">Обо мне</h2>
      
      <div class="grid md:grid-cols-2 gap-6 md:gap-8 mt-8">
        <div>
          <h3 class="text-title-m font-semibold mb-5">Опыт</h3>
          <ul class="space-y-6">
            <li class="border-l-2 border-golden-fizz-400 pl-4 py-1">
              <h4 class="font-medium text-body-l">Продакт-менеджер</h4>
              <p class="text-text-secondary mb-3">Uzum Bank · 2022 — настоящее время</p>
              <p class="mt-2">Развитие финансовых продуктов и сервисов для цифрового банка.</p>
            </li>
            <!-- Можно добавить другие места работы -->
          </ul>
        </div>
        
        <div>
          <h3 class="text-title-m font-semibold mb-5">Навыки</h3>
          <div class="flex flex-wrap gap-3">
            <span class="px-4 py-2 bg-container-secondary text-text-primary rounded-md">Product Management</span>
            <span class="px-4 py-2 bg-container-secondary text-text-primary rounded-md">UX/UI</span>
            <span class="px-4 py-2 bg-container-secondary text-text-primary rounded-md">Agile</span>
            <span class="px-4 py-2 bg-container-secondary text-text-primary rounded-md">Финтех</span>
            <span class="px-4 py-2 bg-container-secondary text-text-primary rounded-md">Проджект-менеджмент</span>
            <span class="px-4 py-2 bg-container-secondary text-text-primary rounded-md">B2C</span>
          </div>
        </div>
      </div>
    </section>

    <section class="mt-20 md:mt-24 mb-12">
      <h2 class="text-heading-s font-bold mb-6 border-b pb-2 border-transparency-8-black">Что нового в моём <a href="/garden" class="text-golden-fizz-600 hover:text-golden-fizz-700">цифровом саду</a>?</h2>
      
      <div class="bg-container-secondary p-6 rounded-lg border border-transparency-8-black mt-8">
        <p class="italic text-text-secondary mb-4">
          Здесь будут отображаться недавние заметки из цифрового сада...
        </p>
        
        <a href="/garden" class="inline-flex items-center text-golden-fizz-600 hover:text-golden-fizz-700 transition-colors">
          Перейти в цифровой сад
          <svg class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </a>
      </div>
    </section>
  </div>
</section>
