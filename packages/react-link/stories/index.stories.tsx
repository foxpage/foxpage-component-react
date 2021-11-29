import React from 'react';
import { mountEditor, withFoxpageEditor } from '@foxpage/foxpage-component-editor-storybook-addon';
import ReactLink from '../src';
import Editor from '../editor';

export default {
  title: 'ReactLink',
  component: ReactLink,
  decorators: [withFoxpageEditor],
};

export const WithEditor = () => {
  const props = mountEditor(Editor, {});
  return <ReactLink {...props} />;
};
