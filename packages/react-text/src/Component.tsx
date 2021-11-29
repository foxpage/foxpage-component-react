import React from 'react';
import { ComponentProps } from './typing';

const ReactText: React.FC<ComponentProps> = props => {
  const {
    tagName = 'p',
    text,
    fontSize,
    textColor,
    lineHeight,
    lineHeightUnit = 'px',
    backgroundColor,
    textAlign,
    verticalAlign,
    fontWeight,
    style = {},
    attrs = {},
  } = props;
  const styles: React.CSSProperties = {
    fontSize: fontSize ? `${fontSize}px` : undefined,
    color: textColor,
    lineHeight: lineHeight ? `${lineHeight}${lineHeightUnit}` : undefined,
    backgroundColor,
    textAlign,
    verticalAlign,
    fontWeight,
    ...style,
    ...(attrs.style || {}),
  };
  // 过滤无用的 style 数据
  const mergedStyles: Record<string, any> = {};
  Object.keys(styles).forEach((key: string) => {
    const val = styles[key as keyof React.CSSProperties];
    if (val || val === 0) {
      mergedStyles[key] = val;
    }
  });
  const mergedProps: Record<string, any> = {
    ...(attrs || {}),
    style: mergedStyles,
    dangerouslySetInnerHTML: { __html: text || '' },
  };
  const TagName = tagName as keyof JSX.IntrinsicElements;
  return <TagName {...mergedProps} />;
};

export default ReactText;
