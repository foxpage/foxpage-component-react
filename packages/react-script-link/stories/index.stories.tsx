import React from 'react';
import { mountEditor, withFoxpageEditor } from '@foxpage/foxpage-component-editor-storybook-addon';
import ReactScriptLink from '../src';
import Editor from '../editor';

export default {
  title: 'ReactScriptLink',
  component: ReactScriptLink,
  decorators: [withFoxpageEditor],
};

export const WithEditor = () => {
  const props = mountEditor(Editor, {});
  return <ReactScriptLink {...props} />;
};
