import React from 'react';
import { ComponentProps } from './typing';

const ReactMountNode: React.FC<ComponentProps> = props => {
  return <div id="foxpage-mount-node">{props.children}</div>;
};

export default ReactMountNode;
