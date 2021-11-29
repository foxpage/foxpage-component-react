import React from 'react';
import { mountEditor, withFoxpageEditor } from '@foxpage/foxpage-component-editor-storybook-addon';
import ReactBody from '../src';
import Editor from '../editor';

export default {
  title: 'ReactBody',
  component: ReactBody,
  decorators: [withFoxpageEditor],
};

export const WithEditor = () => {
  const props = mountEditor(Editor, {});
  return (
    <ReactBody {...props}>
      <h1>I am react-body</h1>
    </ReactBody>
  );
};
