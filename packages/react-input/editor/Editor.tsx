import React from 'react';
import { EditorFC } from '@foxpage/foxpage-component-editor-storybook-addon';
import { ComponentProps } from '../src/typing';

const Editor: EditorFC<ComponentProps> = props => {
  const { Group, Title, Field, Label, JSONEditor } = props.widgets;

  return (
    <div>
      <Group>
        <Title>Base</Title>
        <Field>
          <Label>Custom attribute (JSON)</Label>
          <JSONEditor propKey="attrs" />
        </Field>
      </Group>
    </div>
  );
};

export default Editor;
