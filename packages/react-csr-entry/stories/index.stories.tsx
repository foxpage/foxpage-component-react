import React from 'react';
import { mountEditor, withFoxpageEditor } from '@foxpage/foxpage-component-editor-storybook-addon';
import ReactCSREntry from '../src';
import Editor from '../editor';

export default {
  title: 'ReactCSREntry',
  component: ReactCSREntry,
  decorators: [withFoxpageEditor],
};

export const WithEditor = () => {
  const props = mountEditor(Editor, {});
  return (
    <ReactCSREntry {...props}>
      <h1>I am react-csr-entry</h1>
    </ReactCSREntry>
  );
};
