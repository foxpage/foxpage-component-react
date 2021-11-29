import React from 'react';
import { ComponentProps } from './typing';

const ReactHead: React.FC<ComponentProps> = ({ children }) => {
  return <head>{children}</head>;
};

export default ReactHead;
