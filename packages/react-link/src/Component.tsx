import React from 'react';
import { ComponentProps } from './typing';

const ReactLink: React.FC<ComponentProps> = ({ attrs = {} }) => {
  return <link {...attrs} />;
};

export default ReactLink;
