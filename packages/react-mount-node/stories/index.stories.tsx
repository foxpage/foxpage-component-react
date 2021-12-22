import React from 'react';
import { mountEditor, withFoxpageEditor } from '@foxpage/foxpage-component-editor-storybook-addon';
import ReactMountNode from '../src';
import Editor from '../editor';

export default {
  title: 'ReactCSREntry',
  component: ReactMountNode,
  decorators: [withFoxpageEditor],
};

export const WithEditor = () => {
  const props = mountEditor(Editor, {});
  return (
    <ReactMountNode {...props}>
      <h1>I am react-mount-node</h1>
    </ReactMountNode>
  );
};
