<script>
  import '../app.css';
</script>

<div class="min-h-screen flex flex-col font-tt-chocolates">
  <header class="py-6 px-6 md:px-12 lg:px-24 border-b border-transparency-8-black sticky top-0 bg-surface-primary z-10">
    <nav class="flex items-center justify-between max-w-7xl mx-auto">
      <a href="/" class="text-heading-s font-bold no-underline hover:no-underline">Искандер Хамидов</a>
      <ul class="flex space-x-4 md:space-x-8">
        <li><a href="/resume" class="text-body-m hover:text-golden-fizz-600 transition-colors">работа</a></li>
        <li><a href="/garden" class="text-body-m hover:text-golden-fizz-600 transition-colors">цифровой сад</a></li>
        <li><a href="/cv" class="text-body-m hover:text-golden-fizz-600 transition-colors">cv</a></li>
      </ul>
    </nav>
  </header>

  <main class="flex-1 px-6 md:px-12 lg:px-24 py-6 md:py-12">
    <slot />
  </main>

  <footer class="py-8 px-6 md:px-12 lg:px-24 border-t border-transparency-8-black">
    <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center max-w-7xl mx-auto">
      <p class="text-body-s text-text-secondary">© {new Date().getFullYear()} · hypothesis.live</p>
      <div class="flex space-x-6 mt-4 sm:mt-0">
        <a href="https://t.me/hickslaw" target="_blank" rel="noopener noreferrer" class="text-text-secondary hover:text-golden-fizz-600 transition-colors">
          <span class="sr-only">Telegram</span>
          <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 8.328c-.14.63-.306 2.752-1.008 5.688-.099.426-1.084 2.203-2.664 3.125-1.574.926-2.488 1.17-3.071 1.17-.52 0-1.112-.28-1.544-.7.683-.217 3.054-1.05 3.189-1.12.135-.07.183-.265.084-.391s-.28-.183-.425-.127c-.147.056-2.129.828-3.058 1.171-.595-.588-.798-1.343-.798-1.826 0-.265.931-1.785.931-1.785.196-.391 2.825-5.66 2.923-5.786.126-.15.384-.15.508 0 .21.244 2.449 2.483 3.563 3.88.095.098.237.069.312-.05.075-.12.42-.803.57-1.146.15-.343.03-.476-.183-.574-1.26-.574-4.503-1.76-4.92-1.914-.417-.155-.417-.224 0-.392.215-.084 6.477-2.483 6.755-2.6.424-.175.808-.112.948.517z"></path>
          </svg>
        </a>
        <a href="https://linkedin.com/in/xanderproduct" target="_blank" rel="noopener noreferrer" class="text-text-secondary hover:text-golden-fizz-600 transition-colors">
          <span class="sr-only">LinkedIn</span>
          <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
          </svg>
        </a>
        <a href="mailto:xanderkhamidov@gmail.com" class="text-text-secondary hover:text-golden-fizz-600 transition-colors">
          <span class="sr-only">Email</span>
          <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
          </svg>
        </a>
      </div>
    </div>
  </footer>
</div> 