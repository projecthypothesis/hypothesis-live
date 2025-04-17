<script lang="ts">
  import { textStyles, headingStyles, subheadingStyles, bodyStyles } from '$lib/typography';

  // Базовые свойства
  export let as: 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'div' = 'div';
  
  // Стиль текста (из textStyles)
  export let textStyle: keyof typeof textStyles | null = null;
  
  // Стиль заголовка (из headingStyles)
  export let headingStyle: keyof typeof headingStyles | null = null;
  
  // Стиль подзаголовка (из subheadingStyles)
  export let subheadingStyle: keyof typeof subheadingStyles | null = null;
  
  // Стиль тела (из bodyStyles)
  export let bodyStyle: keyof typeof bodyStyles | null = null;
  
  // Классы пользователя
  export let className = '';

  // Определение классов для компонента
  $: classes = [
    textStyle ? textStyles[textStyle] : '',
    headingStyle ? headingStyles[headingStyle] : '',
    subheadingStyle ? subheadingStyles[subheadingStyle] : '',
    bodyStyle ? bodyStyles[bodyStyle] : '',
    className
  ].filter(Boolean).join(' ');

  // Для логов
  // console.log({ classes, textStyle, headingStyle, subheadingStyle, bodyStyle });
</script>

{#if as === 'h1'}
  <h1 class={classes}><slot /></h1>
{:else if as === 'h2'}
  <h2 class={classes}><slot /></h2>
{:else if as === 'h3'}
  <h3 class={classes}><slot /></h3>
{:else if as === 'p'}
  <p class={classes}><slot /></p>
{:else if as === 'span'}
  <span class={classes}><slot /></span>
{:else}
  <div class={classes}><slot /></div>
{/if} 