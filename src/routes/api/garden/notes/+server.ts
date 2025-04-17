import { json } from '@sveltejs/kit';
import type { RequestEvent } from '@sveltejs/kit';
import { readdir, readFile } from 'fs/promises';
import { join } from 'path';
import matter from 'gray-matter';

// Типы для заметок
interface Note {
  slug: string;
  title: string;
  excerpt?: string;
  date?: string;
  tags?: string[];
}

// Путь к заметкам в проекте
const GARDEN_PATH = join(process.cwd(), 'src', 'routes', 'garden');

// Функция для чтения метаданных заметки
async function getNoteMetadata(slug: string): Promise<Note | null> {
  try {
    const filePath = join(GARDEN_PATH, slug, '+page.svx');
    const fileContent = await readFile(filePath, 'utf-8');
    
    // Разбираем frontmatter с помощью gray-matter
    const { data, content } = matter(fileContent);
    
    // Создаем краткое описание из содержимого
    const excerpt = content
      .replace(/#+\s+.+/g, '') // Удаляем заголовки
      .replace(/\[.+?\]\(.+?\)/g, '') // Удаляем markdown ссылки
      .replace(/```[\s\S]+?```/g, '') // Удаляем блоки кода
      .trim()
      .split('\n')
      .filter(Boolean)
      .slice(0, 2)
      .join(' ')
      .slice(0, 150);
    
    return {
      slug,
      title: data.title || slug,
      date: data.date,
      tags: data.tags,
      excerpt: excerpt + '...'
    };
  } catch (error) {
    console.error(`Ошибка при чтении заметки ${slug}:`, error);
    return null;
  }
}

// Обработчик GET запроса для получения всех заметок
export const GET = async ({ url }: RequestEvent) => {
  try {
    // Читаем директорию сада
    const items = await readdir(GARDEN_PATH, { withFileTypes: true });
    
    // Фильтруем только директории (это наши заметки)
    const noteDirs = items
      .filter(item => 
        item.isDirectory() && 
        !item.name.startsWith('_') && 
        !item.name.startsWith('.') &&
        item.name !== 'tags'
      )
      .map(dir => dir.name);
    
    // Читаем метаданные для каждой заметки
    const notesPromises = noteDirs.map(slug => getNoteMetadata(slug));
    const notesWithNulls = await Promise.all(notesPromises);
    
    // Фильтруем null значения и сортируем по дате (новые сначала)
    const filteredNotes = notesWithNulls.filter(Boolean) as Note[];
    
    // Сортируем по дате
    filteredNotes.sort((a, b) => {
      if (!a.date) return 1;
      if (!b.date) return -1;
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
    
    // Возвращаем заметки
    return json(filteredNotes);
  } catch (error) {
    console.error('Ошибка при получении списка заметок:', error);
    return json({ error: 'Ошибка при получении списка заметок' }, { status: 500 });
  }
}; 