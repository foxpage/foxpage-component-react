import React from 'react';
import { mountEditor, withFoxpageEditor } from '@foxpage/foxpage-component-editor-storybook-addon';
import ReactMeta from '../src';
import Editor from '../editor';

export default {
  title: 'ReactMeta',
  component: ReactMeta,
  decorators: [withFoxpageEditor],
};

export const WithEditor = () => {
  const props = mountEditor(Editor, {});
  return <ReactMeta {...props} />;
};
