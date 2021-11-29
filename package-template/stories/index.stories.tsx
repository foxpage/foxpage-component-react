import React from 'react';
import { mountEditor, withFoxpageEditor } from '@foxpage/foxpage-component-editor-storybook-addon';
import ___ComponentName___ from '../src';
import Editor from '../editor';

export default {
  title: '___ComponentName___',
  component: ___ComponentName___,
  decorators: [withFoxpageEditor],
};

export const WithEditor = () => {
  const props = mountEditor(Editor, {});
  return <___ComponentName___ {...props} />;
};
