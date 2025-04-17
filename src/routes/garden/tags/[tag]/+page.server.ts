import type { PageServerLoad } from './$types';
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

export const load = (async ({ params }) => {
  const tag = params.tag;
  
  // Путь к заметкам
  const GARDEN_PATH = join(process.cwd(), 'src', 'routes', 'garden');
  
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
    
    // Читаем и фильтруем заметки по тегу
    const notesPromises = noteDirs.map(async (slug) => {
      try {
        const filePath = join(GARDEN_PATH, slug, '+page.svx');
        const fileContent = await readFile(filePath, 'utf-8');
        
        // Разбираем frontmatter
        const { data, content } = matter(fileContent);
        
        // Проверяем наличие нужного тега
        const tags = data.tags || [];
        if (!tags.includes(tag)) {
          return null;
        }
        
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
          date: data.date,
          tags
        };
      } catch (error) {
        console.error(`Ошибка при чтении заметки ${slug}:`, error);
        return null;
      }
    });
    
    const notesWithNulls = await Promise.all(notesPromises);
    const notes = notesWithNulls
      .filter(Boolean) as Note[];
      
    // Сортируем заметки по дате
    notes.sort((a, b) => {
      if (!a.date) return 1;
      if (!b.date) return -1;
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
    
    return {
      tag,
      notes
    };
  } catch (error) {
    console.error('Ошибка при загрузке заметок по тегу:', error);
    return {
      tag,
      notes: []
    };
  }
}) satisfies PageServerLoad; 