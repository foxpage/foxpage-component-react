import React from 'react';
import { mountEditor, withFoxpageEditor } from '@foxpage/foxpage-component-editor-storybook-addon';
import ReactHtml from '../src';
import Editor from '../editor';

export default {
  title: 'ReactHtml',
  component: ReactHtml,
  decorators: [withFoxpageEditor],
};

export const WithEditor = () => {
  const props = mountEditor(Editor, {});
  return <ReactHtml {...props} />;
};
