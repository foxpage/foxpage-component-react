import React from 'react';
import { EditorFC } from '@foxpage/foxpage-component-editor-storybook-addon';
import { ComponentProps } from '../src/typing';

const Editor: EditorFC<ComponentProps> = props => {
  const { Group, Title, Input, Label, ColorPicker, Field, FlexCol2, NumericInput, Select, JSONEditor } = props.widgets;

  return (
    <div>
      <Group>
        <Title>Base Info</Title>
        <FlexCol2>
          <Field>
            <Label>Src:</Label>
            <Input propKey="src" />
          </Field>
          <Field>
            <Label>Alt</Label>
            <Input propKey="alt" />
          </Field>
        </FlexCol2>
      </Group>
      <Group>
        <Title>Style</Title>
        <FlexCol2>
          <Field>
            <Label>Width:</Label>
            <Input placeholder="Width" propKey="style.width" />
          </Field>
          <Field>
            <Label>Height:</Label>
            <Input placeholder="Height" propKey="style.height" />
          </Field>
        </FlexCol2>
        <Field>
          <Label>Object Fit</Label>
          <Select propKey="style.objectFit">
            <Select.Option value="fill">fill</Select.Option>
            <Select.Option value="contain">contain</Select.Option>
            <Select.Option value="cover">cover</Select.Option>
            <Select.Option value="none">none</Select.Option>
            <Select.Option value="scale-down">scale-down</Select.Option>
          </Select>
        </Field>
        <Field>
          <Label>Background Color</Label>
          <ColorPicker propKey="style.backgroundColor" />
        </Field>
      </Group>
      <Group>
        <Title>Custom</Title>
        <Field>
          <Label>Custom Attribute:</Label>
          <JSONEditor propKey="attrs" />
        </Field>
      </Group>
    </div>
  );
};

export default Editor;
