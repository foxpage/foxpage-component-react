import React from 'react';
import { mountEditor, withFoxpageEditor } from '@foxpage/foxpage-component-editor-storybook-addon';
import ReactStyleLink from '../src';
import Editor from '../editor';

export default {
  title: 'ReactStyleLink',
  component: ReactStyleLink,
  decorators: [withFoxpageEditor],
};

export const WithEditor = () => {
  const props = mountEditor(Editor, {});
  return <ReactStyleLink {...props} />;
};
