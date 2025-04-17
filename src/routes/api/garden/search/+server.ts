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
  content?: string;
  date?: string;
  tags?: string[];
}

// Путь к заметкам 
const GARDEN_PATH = join(process.cwd(), 'src', 'routes', 'garden');

// Функция для получения всех заметок с содержимым
async function getAllNotes(): Promise<Note[]> {
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
    
    // Читаем заметки
    const notesPromises = noteDirs.map(async (slug) => {
      try {
        const filePath = join(GARDEN_PATH, slug, '+page.svx');
        const fileContent = await readFile(filePath, 'utf-8');
        
        // Разбираем frontmatter
        const { data, content } = matter(fileContent);
        
        // Создаем краткое описание
        const excerpt = content
          .replace(/#+\s+.+/g, '') // Удаляем заголовки
          .replace(/\[.+?\]\(.+?\)/g, '') // Удаляем markdown ссылки
          .replace(/```[\s\S]+?```/g, '') // Удаляем блоки кода
          .trim()
          .split('\n')
          .filter(Boolean)
          .slice(0, 2)
          .join(' ')
          .slice(0, 150) + '...';
        
        return {
          slug,
          title: data.title || slug,
          excerpt,
          content,
          date: data.date,
          tags: data.tags || []
        };
      } catch (error) {
        console.error(`Ошибка при чтении заметки ${slug}:`, error);
        return null;
      }
    });
    
    const notesWithNulls = await Promise.all(notesPromises);
    return notesWithNulls.filter(Boolean) as Note[];
  } catch (error) {
    console.error('Ошибка при получении заметок:', error);
    return [];
  }
}

// Обработчик GET запроса
export const GET = async ({ url }: RequestEvent) => {
  try {
    const query = url.searchParams.get('q') || '';
    const tag = url.searchParams.get('tag') || '';
    
    // Получаем все заметки
    const allNotes = await getAllNotes();
    let results = [...allNotes];
    
    // Фильтрация по тегу
    if (tag) {
      results = results.filter(note => note.tags?.includes(tag));
    }
    
    // Поиск по запросу (в заголовке, содержимом, тегах)
    if (query) {
      const lowerQuery = query.toLowerCase();
      results = results.filter(note => 
        note.title.toLowerCase().includes(lowerQuery) || 
        note.content?.toLowerCase().includes(lowerQuery) || 
        note.excerpt?.toLowerCase().includes(lowerQuery) ||
        note.tags?.some(tag => tag.toLowerCase().includes(lowerQuery))
      );
    }
    
    // Возвращаем результаты без полного содержимого для экономии трафика
    return json(results.map(note => ({
      slug: note.slug,
      title: note.title,
      excerpt: note.excerpt,
      date: note.date,
      tags: note.tags
    })));
  } catch (error) {
    console.error('Ошибка при поиске по заметкам:', error);
    return json({ error: 'Ошибка при поиске' }, { status: 500 });
  }
}; 