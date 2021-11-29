import React from 'react';
import { ComponentProps } from './typing';

const ReactBody: React.FC<ComponentProps> = ({ attrs = {}, children }) => {
  return <body {...attrs}>{children}</body>;
};

export default ReactBody;
