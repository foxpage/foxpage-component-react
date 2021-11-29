import React from 'react';
import { mountEditor, withFoxpageEditor } from '@foxpage/foxpage-component-editor-storybook-addon';
import ReactListenButton from '../src';
import Editor from '../editor';

export default {
  title: 'ReactListenButton',
  component: ReactListenButton,
  decorators: [withFoxpageEditor],
};

export const WithEditor = () => {
  const props = mountEditor(Editor, {
    text: 'Button',
    onClick: () => {
      console.log('click, mock onClick');
    },
  });
  return <ReactListenButton {...props} />;
};
