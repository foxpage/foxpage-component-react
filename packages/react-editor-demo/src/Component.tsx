import React, { CSSProperties } from 'react';
import { ComponentProps } from './typing';
import './index.scss';

const PreStyle = {
  maxHeight: '400px',
  fontFamily: 'Fira Code, Consolas, Monaco, Andale Mono, Ubuntu Mono, monospace',
  fontSize: '14px',
  color: 'rgb(248, 248, 242)',
  background: 'rgb(46, 52, 64)',
  textAlign: 'left',
  whiteSpace: 'pre',
  wordSpacing: 'normal',
  wordBreak: 'normal',
  padding: '8px',
  borderRadius: '6px',
  overflow: 'auto',
} as CSSProperties;

const ReactEditorDemo: React.FC<ComponentProps> = (props = {}) => {
  return (
    <div>
      <h1>Editor Props</h1>
      <pre style={PreStyle}>{JSON.stringify(props, null, 4)}</pre>
    </div>
  );
};

export default ReactEditorDemo;
