import React from 'react';
import { ComponentProps } from './typing';

const ReactHtml: React.FC<ComponentProps> = ({ lang = 'en-US', attrs = {}, children }) => {
  return (
    <html lang={lang} {...attrs}>
      {children}
    </html>
  );
};

export default ReactHtml;
