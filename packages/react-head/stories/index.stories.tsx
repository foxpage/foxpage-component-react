import React from 'react';
import { mountEditor, withFoxpageEditor } from '@foxpage/foxpage-component-editor-storybook-addon';
import ReactHead from '../src';
import Editor from '../editor';

export default {
  title: 'ReactHead',
  component: ReactHead,
  decorators: [withFoxpageEditor],
};

export const WithEditor = () => {
  const props = mountEditor(Editor, {});
  return <ReactHead {...props} />;
};
