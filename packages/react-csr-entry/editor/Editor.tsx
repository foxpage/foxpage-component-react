import React from 'react';
import { EditorFC } from '@foxpage/foxpage-component-editor-storybook-addon';
import { ComponentProps } from '../src/typing';

const Editor: EditorFC<ComponentProps> = props => {
  const { Group, Title, Field, Label, Input, JSONEditor } = props.widgets;

  return (
    <div>
      <Group>
        <Title>Base</Title>
        <Field>
          <Label>Js entry link:</Label>
          <Input propKey="entryLink.url" placeholder="Please input the csr entry link" />
        </Field>
        <Field>
          <Label>Lib resource (JSON):</Label>
          <JSONEditor propKey="resource" />
        </Field>
      </Group>
    </div>
  );
};

export default Editor;
