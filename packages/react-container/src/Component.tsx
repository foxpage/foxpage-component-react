import React from 'react';
import { ComponentProps } from './typing';

const ReactContainer: React.FC<ComponentProps> = ({ children, _decorator = {}, ...props }) => {
  return (
    <div {..._decorator} {...props}>
      {children}
    </div>
  );
};

export default ReactContainer;
