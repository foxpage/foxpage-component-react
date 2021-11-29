import React from 'react';
import { mountEditor, withFoxpageEditor } from '@foxpage/foxpage-component-editor-storybook-addon';
import ReactTitle from '../src';
import Editor from '../editor';

export default {
  title: 'ReactTitle',
  component: ReactTitle,
  decorators: [withFoxpageEditor],
};

export const WithEditor = () => {
  const props = mountEditor(Editor, {});
  return <ReactTitle {...props} />;
};
