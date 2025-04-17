# Система типографики для hypothesis.live

## Обзор

Эта система типографики адаптирует стили, экспортированные из Figma, для использования с Tailwind CSS. Она обеспечивает единообразную типографику по всему сайту через компонентный подход.

## Структура

- `typography.ts` - Содержит определения всех текстовых стилей и утилиты для их применения
- `components/Typography.svelte` - Компонент Svelte для использования типографики в шаблонах

## Использование

### Базовое использование

```svelte
<script>
  import Typography from '$lib/components/Typography.svelte';
</script>

<!-- Заголовок -->
<Typography as="h1" headingStyle="h1">Мой заголовок</Typography>

<!-- Обычный текст -->
<Typography as="p" bodyStyle="body-text">Мой параграф</Typography>

<!-- Стилизованный span -->
<Typography as="span" textStyle="text-SBold">Акцентный текст</Typography>
```

### Доступные стили

#### Заголовки
- `h1` - Крупный заголовок
- `h2` - Средний заголовок
- `h3` - Маленький заголовок

#### Подзаголовки
- `subheading-l` - Большой подзаголовок
- `subheading-m` - Средний подзаголовок
- `subheading-s` - Маленький подзаголовок

#### Текстовые стили
- `text-LBold`, `text-LSemi-bold`, `text-LRegular` - Большие текстовые стили
- `text-MBold`, `text-MSemi-bold`, `text-MRegular` - Средние текстовые стили
- `text-SBold`, `text-SSemi-bold`, `text-SRegular` - Маленькие текстовые стили

#### Стили для основного текста
- `body-large` - Большой параграф
- `body-text` - Стандартный параграф
- `body-small` - Маленький параграф

### Комбинирование с Tailwind

Вы можете добавлять собственные классы Tailwind через свойство `className`:

```svelte
<Typography 
  as="h2" 
  headingStyle="h2" 
  className="text-golden-fizz-500 mb-8 max-w-lg"
>
  Заголовок с дополнительными стилями
</Typography>
```

## Демонстрация

Демо-страница всех стилей доступна по адресу: `/typography-demo`

---

## Для разработчиков

### Добавление новых стилей

Для добавления новых стилей внесите изменения в файл `typography.ts`, добавляя их в соответствующие объекты:

```typescript
// Добавление нового текстового стиля
export const textStyles = {
  // ... существующие стили
  'text-новый-стиль': 'font-tt-chocolates text-body-l font-bold text-text-primary'
};
```

Не забудьте также добавить новый стиль в тип TypeScript, если вы его добавляете:

```typescript
type TextStyleKey = 
  // ... существующие ключи
  | 'text-новый-стиль';
``` 