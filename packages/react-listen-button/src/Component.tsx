import React from 'react';
import { ComponentProps } from './typing';

const ButtonStyle: React.CSSProperties = {
  lineHeight: '1.5715',
  position: 'relative',
  display: 'inline-block',
  whiteSpace: 'nowrap',
  textAlign: 'center',
  boxShadow: 'rgba(0, 0, 0, 0.043) 0px 2px',
  cursor: 'pointer',
  userSelect: 'none',
  touchAction: 'manipulation',
  height: '32px',
  fontSize: '14px',
  fontWeight: 400,
  color: 'rgb(255, 255, 255)',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderImage: 'initial',
  transition: 'all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1) 0s',
  padding: '4px 15px',
  borderRadius: '2px',
  borderColor: 'rgb(24, 144, 255)',
  background: 'rgb(24, 144, 255)',
  outline: '0px',
  textShadow: 'rgba(0, 0, 0, 0.12) 0px -1px 0px',
};

const ReactListenButton: React.FC<ComponentProps> = ({ text, onClick }) => {
  const onClickBtn = (event: any) => {
    try {
      onClick(event);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <button onClick={onClickBtn} type="button" style={ButtonStyle}>
      <span>{text}</span>
    </button>
  );
};

export default ReactListenButton;
