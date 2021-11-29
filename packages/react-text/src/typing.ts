export interface ComponentProps {
  tagName?: string;
  text?: string;
  fontSize?: string | number;
  textColor?: string;
  lineHeight?: string | number;
  lineHeightUnit?: 'px' | 'rem' | 'em';
  backgroundColor?: string;
  textAlign?: 'center' | 'left' | 'right' | 'start' | 'end' | 'justify' | 'match-parent';
  verticalAlign?: 'baseline' | 'sub' | 'super' | 'text-top' | 'text-bottom' | 'middle' | 'top' | 'bottom';
  fontWeight?: 'normal' | 'bolder' | 'lighter';
  style: { [key: string]: any };
  attrs?: { [index: string]: any };
}
