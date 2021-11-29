import React from 'react';
import { ComponentProps } from './typing';

const ReactSlot: React.FC<ComponentProps> = props => {
  const { attributes = {}, style = {}, children } = props;
  return (
    <div {...attributes} style={style} className={`${attributes.className || ''}`}>
      {children}
    </div>
  );
};

export default ReactSlot;
