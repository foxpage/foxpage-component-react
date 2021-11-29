import React from 'react';
import { EditorFC } from '@foxpage/foxpage-component-editor-storybook-addon';
import { ComponentProps } from '../src/typing';

const Editor: EditorFC<ComponentProps> = props => {
  const { Style, Attributes } = props.widgets;

  return (
    <div>
      <Attributes propsRootKey="attributes" />
      <Style.General />
      <Style.Dimension />
      <Style.Spacing />
      <Style.Position />
      <Style.Flex />
    </div>
  );
};

export default Editor;
