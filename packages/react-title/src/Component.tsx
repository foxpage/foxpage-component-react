import React from 'react';
import { ComponentProps } from './typing';

const ReactTitle: React.FC<ComponentProps> = ({ value = '' }) => {
  return <title>{value}</title>;
};

export default ReactTitle;
