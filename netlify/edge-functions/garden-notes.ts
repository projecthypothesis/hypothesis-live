import type { Context } from '@netlify/edge-functions';

// Функция Edge для получения заметок
export default async (request: Request, context: Context) => {
  // Перенаправляем запрос на API SvelteKit
  return context.next();
}; 