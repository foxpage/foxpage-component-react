import React from 'react';
import { mountEditor, withFoxpageEditor } from '@foxpage/foxpage-component-editor-storybook-addon';
import ReactText from '../src';
import Editor from '../editor';

export default {
  title: 'ReactText',
  component: ReactText,
  decorators: [withFoxpageEditor],
};

export const WithEditor = () => {
  const props = mountEditor(Editor, {
    text: 'test text...',
  });
  return <ReactText {...props} />;
};
