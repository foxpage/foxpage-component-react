import React from 'react';
import { EditorFC } from '@foxpage/foxpage-component-editor-storybook-addon';
import { ComponentProps } from '../src/typing';

const Editor: EditorFC<ComponentProps> = props => {
  const { Group, Title, Field, Label, JSONEditor, CodeEditor } = props.widgets;

  return (
    <div>
      <Group>
        <Title>Base</Title>
        <Field>
          <Label>JavaScript Code:</Label>
          <CodeEditor propKey="code" mode="javascript" />
        </Field>
        <Field>
          <Label>Custom Attribute (JSON):</Label>
          <JSONEditor style={{ height: 220 }} propKey="attrs" />
        </Field>
      </Group>
    </div>
  );
};

export default Editor;
