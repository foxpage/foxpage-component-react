import React from 'react';
import { mountEditor, withFoxpageEditor } from '@foxpage/foxpage-component-editor-storybook-addon';
import ReactStyle from '../src';
import Editor from '../editor';

export default {
  title: 'ReactStyle',
  component: ReactStyle,
  decorators: [withFoxpageEditor],
};

export const WithEditor = () => {
  const props = mountEditor(Editor, {});
  return <ReactStyle {...props} />;
};
