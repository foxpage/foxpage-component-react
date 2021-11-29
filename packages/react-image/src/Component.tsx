import React from 'react';
import { ComponentProps } from './typing';
import './index.scss';

const ReactImage: React.FC<ComponentProps> = props => {
  const { src, alt, style = {}, attrs = {} } = props;
  const mergedStyle = {
    width: '100%',
    ...style,
    ...(attrs.style || {}),
  };
  return <img src={src} alt={alt} {...attrs} style={mergedStyle} />;
};

export default ReactImage;
