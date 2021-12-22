import React from 'react';
import { mountEditor, withFoxpageEditor } from '@foxpage/foxpage-component-editor-storybook-addon';
import ReactUnpkgAssetsDemo from '../src';
import Editor from '../editor';

export default {
  title: 'ReactUnpkgAssetsDemo',
  component: ReactUnpkgAssetsDemo,
  decorators: [withFoxpageEditor],
};

export const WithEditor = () => {
  const props = mountEditor(Editor, {});
  return <ReactUnpkgAssetsDemo {...props} />;
};
