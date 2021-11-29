import React from 'react';
import { ComponentProps } from './typing';

const ReactStyle: React.FC<ComponentProps> = ({ code = '' }) => {
  return <style dangerouslySetInnerHTML={{ __html: code }} />;
};

export default ReactStyle;
