import React from 'react';
import { mountEditor, withFoxpageEditor } from '@foxpage/foxpage-component-editor-storybook-addon';
import ReactImage from '../src';
import Editor from '../editor';

export default {
  title: 'ReactImage',
  component: ReactImage,
  decorators: [withFoxpageEditor],
};

export const WithEditor = () => {
  const props = mountEditor(Editor, {
    src: 'https://pages.trip.com/images/home-background/bg-default.webp',
    attrs: {
      id: 'test-id',
      className: 'test-classname',
    },
  });
  return <ReactImage {...props} />;
};
