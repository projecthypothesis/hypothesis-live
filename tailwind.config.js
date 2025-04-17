/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts,svx}'],
  theme: {
    extend: {
      colors: {
        // Основные цвета и контейнеры
        'surface-primary': 'rgba(255, 255, 255, 1)',
        'container-primary': 'rgba(255, 255, 255, 1)',
        'container-secondary': 'rgba(242, 242, 237, 1)',
        
        // Текстовые цвета
        'text-primary': 'rgba(16, 16, 16, 1)',
        'text-secondary': 'rgba(153, 153, 153, 1)',
        'text-tertiary': 'rgba(255, 255, 255, 1)',
        'text-brand': 'rgba(226, 248, 34, 1)',
        'text-transparency': 'rgba(16, 16, 16, 0.48)',
        
        // Прозрачности черного
        'transparency-4-black': 'rgba(0, 0, 0, 0.04)',
        'transparency-8-black': 'rgba(0, 0, 0, 0.08)',
        'transparency-12-black': 'rgba(0, 0, 0, 0.12)',
        'transparency-24-black': 'rgba(0, 0, 0, 0.24)',
        'transparency-32-black': 'rgba(0, 0, 0, 0.32)',
        
        // Прозрачности белого
        'transparency-16-white': 'rgba(255, 255, 255, 0.16)',
        'transparency-40-white': 'rgba(255, 255, 255, 0.40)',
        'transparency-80-white': 'rgba(255, 255, 255, 0.80)',
        'transparency-90-white': 'rgba(255, 255, 255, 0.90)',
        
        // Палитра Golden Fizz
        'golden-fizz-50': 'rgba(255, 255, 229, 1)',
        'golden-fizz-100': 'rgba(254, 255, 198, 1)',
        'golden-fizz-200': 'rgba(250, 255, 148, 1)',
        'golden-fizz-300': 'rgba(241, 255, 86, 1)',
        'golden-fizz-400': 'rgba(226, 248, 34, 1)',
        'golden-fizz-500': 'rgba(197, 223, 3, 1)',
        'golden-fizz-600': 'rgba(153, 178, 0, 1)',
        'golden-fizz-700': 'rgba(115, 135, 4, 1)',
        'golden-fizz-800': 'rgba(90, 106, 10, 1)',
        
        // Палитра Thunderbird
        'thunderbird-50': 'rgba(255, 242, 241, 1)',
        'thunderbird-100': 'rgba(255, 226, 224, 1)',
        'thunderbird-200': 'rgba(255, 201, 198, 1)',
        'thunderbird-300': 'rgba(255, 164, 158, 1)',
        'thunderbird-400': 'rgba(255, 111, 102, 1)',
        'thunderbird-500': 'rgba(253, 66, 54, 1)',
        'thunderbird-600': 'rgba(235, 35, 23, 1)',
        'thunderbird-700': 'rgba(202, 26, 15, 1)',
        'thunderbird-800': 'rgba(164, 25, 16, 1)'
      },
      fontSize: {
        // Заголовки
        'heading-l': '40px',
        'heading-m': '36px',
        'heading-s': '30px',
        
        // Titles
        'title-l': '28px',
        'title-m': '24px',
        'title-s': '22px',
        
        // Body
        'body-l': '20px',
        'body-m': '16px',
        'body-s': '14px'
      },
      fontFamily: {
        'tt-chocolates': ['TT Chocolates Trial', 'sans-serif']
      },
      fontWeight: {
        'regular': 400,
        'medium': 500,
        'semibold': 600,
        'bold': 700,
        'extrabold': 800
      }
    },
  },
  plugins: [],
} 