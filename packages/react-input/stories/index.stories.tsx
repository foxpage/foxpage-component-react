import React from 'react';
import { mountEditor, withFoxpageEditor } from '@foxpage/foxpage-component-editor-storybook-addon';
import ReactInput from '../src';
import Editor from '../editor';

export default {
  title: 'ReactInput',
  component: ReactInput,
  decorators: [withFoxpageEditor],
};

export const WithEditor = () => {
  const props = mountEditor(Editor, {});
  return <ReactInput {...props} />;
};
