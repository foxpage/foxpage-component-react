import React from 'react';
import { ComponentProps } from './typing';

const ReactInput: React.FC<ComponentProps> = ({ attrs = {} }) => {
  return <input {...attrs} />;
};

export default ReactInput;
