import adapter from '@sveltejs/adapter-netlify';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Укажем, что будем обрабатывать .svelte и .svx файлы
	extensions: ['.svelte', '.svx'],
	
	// Препроцессоры
	preprocess: [
		// Tailwind и другие процессоры
		preprocess({
			postcss: true
		}),
		vitePreprocess(),
		// MDsveX для Markdown
		mdsvex({
			extensions: ['.svx'],
			layout: {
				garden: './src/lib/layouts/GardenLayout.svelte'
			}
		})
	],

	kit: {
		// Используем стандартный адаптер для Netlify
		adapter: adapter(),
		
		// Проверяем все ресурсы и страницы при сборке
		prerender: {
			handleMissingId: 'warn'
		}
	}
};

export default config;
