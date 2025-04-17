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
		// Используем адаптер для Netlify с правильными настройками
		adapter: adapter({
			// Оставляем edge: false, так как адаптер сам определит, 
			// когда использовать edge functions
			edge: false
		}),
		
		// Сообщаем SvelteKit, что путь по умолчанию - корень сайта
		paths: {
			base: ''
		}
	}
};

export default config;
