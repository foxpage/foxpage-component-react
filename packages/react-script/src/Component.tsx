import React from 'react';
import { ComponentProps } from './typing';

const ReactScript: React.FC<ComponentProps> = ({ code = '', attrs = {} }) => {
  return <script {...attrs} dangerouslySetInnerHTML={{ __html: code }} />;
};

export default ReactScript;
