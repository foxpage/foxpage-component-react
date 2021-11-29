import React from 'react';
import { ComponentProps } from './typing';

const ReactStyleLink: React.FC<ComponentProps> = ({ url = '' }) => {
  return <link rel="stylesheet" href={url.trim()} />;
};

export default ReactStyleLink;
