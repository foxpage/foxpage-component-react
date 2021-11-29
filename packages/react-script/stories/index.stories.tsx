import React from 'react';
import { mountEditor, withFoxpageEditor } from '@foxpage/foxpage-component-editor-storybook-addon';
import ReactScript from '../src';
import Editor from '../editor';

export default {
  title: 'ReactScript',
  component: ReactScript,
  decorators: [withFoxpageEditor],
};

export const WithEditor = () => {
  const props = mountEditor(Editor, {});
  return <ReactScript {...props} />;
};
