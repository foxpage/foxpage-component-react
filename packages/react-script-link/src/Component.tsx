import React from 'react';
import { ComponentProps } from './typing';

const ReactScriptLink: React.FC<ComponentProps> = ({ attrs = {}, url = '' }) => {
  return <script src={url.trim()} {...attrs} />;
};

export default ReactScriptLink;
