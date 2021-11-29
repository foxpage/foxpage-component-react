import React from 'react';
import { FoxpageEditorPanelKey } from '@foxpage/foxpage-component-editor-storybook-addon';
import ReactContainer from '../src';

export default {
  title: 'ReactContainer',
  component: ReactContainer,
  decorators: [],
  parameters: {
    [FoxpageEditorPanelKey]: {
      disable: true,
    },
  },
};

export const BaseComponent = () => {
  const props = {
    style: {
      color: 'red',
    },
  };
  return <ReactContainer {...props}>container</ReactContainer>;
};
