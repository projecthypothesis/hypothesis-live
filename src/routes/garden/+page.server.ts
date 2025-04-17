import type { PageServerLoad } from './$types';
import { readdir, readFile } from 'fs/promises';
import { join } from 'path';
import matter from 'gray-matter';

interface NoteFrontmatter {
  title?: string;
  description?: string;
  date?: string;
  tags?: string[];
}

interface Note {
  slug: string;
  frontmatter: NoteFrontmatter;
}

export const load = (async () => {
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
    
    // Читаем заметки
    const notesPromises = noteDirs.map(async (slug) => {
      try {
        const filePath = join(GARDEN_PATH, slug, '+page.svx');
        const fileContent = await readFile(filePath, 'utf-8');
        
        // Разбираем frontmatter
        const { data } = matter(fileContent);
        
        return {
          slug,
          frontmatter: {
            title: data.title || slug,
            description: data.description || '',
            date: data.date || '',
            tags: data.tags || []
          }
        };
      } catch (error) {
        console.error(`Ошибка при чтении заметки ${slug}:`, error);
        return null;
      }
    });
    
    const notesWithNulls = await Promise.all(notesPromises);
    const notes = notesWithNulls
      .filter(Boolean) as Note[];
      
    // Сортируем заметки по дате (новые сверху)
    notes.sort((a, b) => {
      if (!a.frontmatter.date) return 1;
      if (!b.frontmatter.date) return -1;
      return new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime();
    });
    
    // Собираем уникальные теги со всех заметок
    const allTags = new Set<string>();
    notes.forEach(note => {
      const tags = note.frontmatter.tags || [];
      tags.forEach(tag => allTags.add(tag));
    });
    
    return {
      notes,
      tags: Array.from(allTags)
    };
  } catch (error) {
    console.error('Ошибка при загрузке заметок:', error);
    return {
      notes: [],
      tags: []
    };
  }
}) satisfies PageServerLoad; 