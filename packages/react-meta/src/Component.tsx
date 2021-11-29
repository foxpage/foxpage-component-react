import React from 'react';
import { ComponentProps } from './typing';

const ReactMeta: React.FC<ComponentProps> = ({ attrs = {} }) => {
  return <meta {...attrs} />;
};

export default ReactMeta;
