/**
 * Typography utilities for the project
 * This file adapts Figma text styles to Tailwind CSS classes
 */

// Type definitions
type TextStyleKey = 
  | 'text-LSemi-bold' | 'text-LBold' | 'text-LRegular'
  | 'text-MSemi-bold' | 'text-MBold' | 'text-MRegular'
  | 'text-SSemi-bold' | 'text-SBold' | 'text-SRegular'
  | 'text-BodyLRegular' | 'text-BodyLSemi-bold' | 'text-BodyLBold'
  | 'text-BodyMRegular' | 'text-BodyMSemi-bold' | 'text-BodyMBold'
  | 'text-BodySRegular' | 'text-BodySSemi-bold' | 'text-BodySBold';

type HeadingStyleKey = 'h1' | 'h2' | 'h3';

type SubheadingStyleKey = 'subheading-l' | 'subheading-m' | 'subheading-s';

type BodyStyleKey = 'body-text' | 'body-large' | 'body-small';

// Mapping from Figma text styles to Tailwind utility classes
export const textStyles: Record<TextStyleKey, string> = {
  // Large text styles
  'text-LSemi-bold': 'font-["TT_Chocolates_Trl"] text-[4rem] font-semibold leading-[1.2] tracking-[0.002em]',
  'text-LBold': 'font-["TT_Chocolates_Trl"] text-[4rem] font-bold leading-[1.2] tracking-[0.002em]',
  'text-LRegular': 'font-["TT_Chocolates_Trl"] text-[2.8rem] font-normal leading-[1.2] tracking-[0.002em]',
  
  // Medium text styles
  'text-MSemi-bold': 'font-["TT_Chocolates_Trl"] text-[3.6rem] font-semibold leading-[1.2] tracking-[-0.002em]',
  'text-MBold': 'font-["TT_Chocolates_Trl"] text-[3.6rem] font-bold leading-[1.2] tracking-[-0.002em]',
  'text-MRegular': 'font-["TT_Chocolates_Trl"] text-[2.4rem] font-normal leading-[1.2] tracking-[0.004em]',
  
  // Small text styles
  'text-SSemi-bold': 'font-["TT_Chocolates_Trl"] text-[3rem] font-semibold leading-[1.2] tracking-[0em]',
  'text-SBold': 'font-["TT_Chocolates_Trl"] text-[3rem] font-bold leading-[1.2] tracking-[0em]',
  'text-SRegular': 'font-["TT_Chocolates_Trl"] text-[2.2rem] font-normal leading-[1.2] tracking-[0.002em]',
  
  // Body large text styles
  'text-BodyLRegular': 'font-["TT_Chocolates_Trl"] text-[2rem] font-normal leading-[1.3] tracking-[0.004em]',
  'text-BodyLSemi-bold': 'font-["TT_Chocolates_Trl"] text-[2rem] font-semibold leading-[1.3] tracking-[0.004em]',
  'text-BodyLBold': 'font-["TT_Chocolates_Trl"] text-[2rem] font-bold leading-[1.3] tracking-[0.004em]',
  
  // Body medium text styles
  'text-BodyMRegular': 'font-["TT_Chocolates_Trl"] text-[1.6rem] font-normal leading-[1.3] tracking-[0.004em]',
  'text-BodyMSemi-bold': 'font-["TT_Chocolates_Trl"] text-[1.6rem] font-semibold leading-[1.3] tracking-[0.004em]',
  'text-BodyMBold': 'font-["TT_Chocolates_Trl"] text-[1.6rem] font-bold leading-[1.3] tracking-[0.004em]',
  
  // Body small text styles
  'text-BodySRegular': 'font-["TT_Chocolates_Trl"] text-[1.4rem] font-normal leading-[1.5] tracking-[0.005em]',
  'text-BodySSemi-bold': 'font-["TT_Chocolates_Trl"] text-[1.4rem] font-semibold leading-[1.5] tracking-[0.005em]',
  'text-BodySBold': 'font-["TT_Chocolates_Trl"] text-[1.4rem] font-bold leading-[1.5] tracking-[0.005em]'
};

// Heading styles mapped to Tailwind
export const headingStyles: Record<HeadingStyleKey, string> = {
  h1: 'font-["TT_Chocolates_Trl"] text-[4rem] font-bold text-text-primary leading-[1.2] tracking-[0.002em] mb-6',
  h2: 'font-["TT_Chocolates_Trl"] text-[3.6rem] font-bold text-text-primary leading-[1.2] tracking-[-0.002em] mb-5',
  h3: 'font-["TT_Chocolates_Trl"] text-[3rem] font-bold text-text-primary leading-[1.2] tracking-[0em] mb-4'
};

// Subheading styles
export const subheadingStyles: Record<SubheadingStyleKey, string> = {
  'subheading-l': 'font-["TT_Chocolates_Trl"] text-[2.8rem] font-semibold text-text-secondary leading-[1.2] tracking-[0.002em] mb-4',
  'subheading-m': 'font-["TT_Chocolates_Trl"] text-[2.4rem] font-semibold text-text-secondary leading-[1.2] tracking-[0.004em] mb-3',
  'subheading-s': 'font-["TT_Chocolates_Trl"] text-[2.2rem] font-semibold text-text-secondary leading-[1.2] tracking-[0.002em] mb-2'
};

// Body text styles
export const bodyStyles: Record<BodyStyleKey, string> = {
  'body-text': 'font-["TT_Chocolates_Trl"] text-[1.6rem] font-normal text-text-secondary leading-[1.3] tracking-[0.004em] mb-4',
  'body-large': 'font-["TT_Chocolates_Trl"] text-[2rem] font-normal text-text-secondary leading-[1.3] tracking-[0.004em] mb-5',
  'body-small': 'font-["TT_Chocolates_Trl"] text-[1.4rem] font-normal text-text-tertiary leading-[1.5] tracking-[0.005em] mb-3'
};

// Helper function to apply text style
export function applyTextStyle(styleName: TextStyleKey): string {
  return textStyles[styleName] || '';
}

// Helper function to apply heading style
export function applyHeadingStyle(level: HeadingStyleKey): string {
  return headingStyles[level] || '';
}

// Helper function to apply subheading style
export function applySubheadingStyle(size: SubheadingStyleKey): string {
  return subheadingStyles[size] || '';
}

// Helper function to apply body style
export function applyBodyStyle(size: BodyStyleKey): string {
  return bodyStyles[size] || '';
} 