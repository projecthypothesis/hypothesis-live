<script lang="ts">
  import Typography from '$lib/components/Typography.svelte';
  import { textStyles, headingStyles, subheadingStyles, bodyStyles } from '$lib/typography';
</script>

<div class="container mx-auto px-4 py-8">
  <Typography as="h1" headingStyle="h1">Демонстрация типографики</Typography>
  
  <section class="mb-8">
    <Typography as="h2" headingStyle="h2">Заголовки</Typography>
    
    <div class="grid gap-4 mt-4">
      <Typography as="h1" headingStyle="h1">Заголовок 1 (H1)</Typography>
      <Typography as="h2" headingStyle="h2">Заголовок 2 (H2)</Typography>
      <Typography as="h3" headingStyle="h3">Заголовок 3 (H3)</Typography>
    </div>
  </section>
  
  <section class="mb-8">
    <Typography as="h2" headingStyle="h2">Подзаголовки</Typography>
    
    <div class="grid gap-4 mt-4">
      <Typography subheadingStyle="subheading-l">Подзаголовок L</Typography>
      <Typography subheadingStyle="subheading-m">Подзаголовок M</Typography>
      <Typography subheadingStyle="subheading-s">Подзаголовок S</Typography>
    </div>
  </section>
  
  <section class="mb-8">
    <Typography as="h2" headingStyle="h2">Текстовые стили</Typography>
    
    <div class="grid gap-4 mt-4">
      <Typography textStyle="text-LBold">Большой жирный текст (LBold)</Typography>
      <Typography textStyle="text-LSemi-bold">Большой полужирный текст (LSemi-bold)</Typography>
      <Typography textStyle="text-LRegular">Большой обычный текст (LRegular)</Typography>
      
      <Typography textStyle="text-MBold">Средний жирный текст (MBold)</Typography>
      <Typography textStyle="text-MSemi-bold">Средний полужирный текст (MSemi-bold)</Typography>
      <Typography textStyle="text-MRegular">Средний обычный текст (MRegular)</Typography>
      
      <Typography textStyle="text-SBold">Малый жирный текст (SBold)</Typography>
      <Typography textStyle="text-SSemi-bold">Малый полужирный текст (SSemi-bold)</Typography>
      <Typography textStyle="text-SRegular">Малый обычный текст (SRegular)</Typography>
    </div>
  </section>
  
  <section class="mb-8">
    <Typography as="h2" headingStyle="h2">Основной текст</Typography>
    
    <div class="grid gap-6 mt-4">
      <div>
        <Typography as="p" bodyStyle="body-large">
          Большой параграф (Body Large). Этот текст демонстрирует стиль большого параграфа, 
          который обычно используется для вводных абзацев или важной информации на странице.
        </Typography>
      </div>
      
      <div>
        <Typography as="p" bodyStyle="body-text">
          Обычный параграф (Body Text). Этот текст представляет собой стандартный стиль параграфа, 
          который используется для основного содержания на странице. В нем достаточно места между 
          строками для комфортного чтения, а размер шрифта оптимален для длительного чтения.
        </Typography>
        
        <Typography as="p" bodyStyle="body-text" className="mt-4">
          Второй параграф в стиле обычного текста. В системе типографики правильно настроены 
          отступы между параграфами для улучшения читаемости и визуальной структуры страницы.
        </Typography>
      </div>
      
      <div>
        <Typography as="p" bodyStyle="body-small">
          Малый параграф (Body Small). Этот текст используется для вспомогательной информации, 
          примечаний, сносок и других элементов, которые не являются основным содержанием.
        </Typography>
      </div>
    </div>
  </section>
  
  <section class="mb-8">
    <Typography as="h2" headingStyle="h2">Примеры комбинирования стилей</Typography>
    
    <div class="bg-container-secondary p-6 rounded-lg mt-4">
      <Typography as="h3" headingStyle="h3">Пример карточки с контентом</Typography>
      
      <Typography subheadingStyle="subheading-m" className="mt-2">Описание карточки</Typography>
      
      <Typography as="p" bodyStyle="body-text" className="mt-4">
        Это демонстрация того, как различные текстовые стили могут сочетаться в рамках одного компонента.
        Мы используем заголовок, подзаголовок и основной текст для создания хорошо структурированного 
        содержания.
      </Typography>
      
      <Typography textStyle="text-SBold" className="mt-4 text-golden-fizz-600">
        Обратите внимание на акцентный текст
      </Typography>
    </div>
  </section>
</div> 