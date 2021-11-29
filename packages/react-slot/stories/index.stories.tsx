import React from 'react';
import { mountEditor, withFoxpageEditor } from '@foxpage/foxpage-component-editor-storybook-addon';
import ReactSlot from '../src';
import Editor from '../editor';

export default {
  title: 'ReactSlot',
  component: ReactSlot,
  decorators: [withFoxpageEditor],
};

export const WithEditor = () => {
  const props = mountEditor(Editor, {});
  return (
    <ReactSlot {...props}>
      <h1>I am react-slot</h1>
    </ReactSlot>
  );
};
