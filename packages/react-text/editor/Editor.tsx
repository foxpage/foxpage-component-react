import React from 'react';
import { EditorFC } from '@foxpage/foxpage-component-editor-storybook-addon';
import { ComponentProps } from '../src/typing';

const Editor: EditorFC<ComponentProps> = props => {
  const {
    Group,
    Title,
    Field,
    Label,
    FlexCol2,
    Style,
    Select,
    NumericInput,
    ColorPicker,
    CodeEditor,
    JSONEditor,
  } = props.widgets;

  return (
    <div>
      <Group>
        <Title>Content</Title>
        <Field>
          <Label>Text (HTML supported)</Label>
          <CodeEditor propKey="text" />
        </Field>
      </Group>
      <Group>
        <Title>Appearance</Title>
        <Field>
          <Label>Tag Name</Label>
          <Select propKey="tagName">
            <Select.Option value="p">p</Select.Option>
            <Select.Option value="div">div</Select.Option>
            <Select.Option value="span">span</Select.Option>
          </Select>
        </Field>
        <Field>
          <Label>Text Font Size</Label>
          <NumericInput placeholder="Font Size" addonAfter="px" propKey="fontSize" />
        </Field>
        <Field>
          <Label>Text Color</Label>
          <ColorPicker propKey="textColor" />
        </Field>
        <Field>
          <Label>Line Height</Label>
          <NumericInput placeholder="Line Height" propKey="lineHeight" />
        </Field>
        <Field>
          <Label>Line Height Unit</Label>
          <Select propKey="lineHeightUnit">
            <Select.Option value="px">px</Select.Option>
            <Select.Option value="rem">rem</Select.Option>
            <Select.Option value="em">em</Select.Option>
          </Select>
        </Field>
        <Field>
          <Label>Background Color</Label>
          <ColorPicker propKey="backgroundColor" />
        </Field>
        <FlexCol2>
          <Field>
            <Label>Text Align</Label>
            <Select propKey="textAlign">
              <Select.Option value="center">center</Select.Option>
              <Select.Option value="left">left</Select.Option>
              <Select.Option value="right">right</Select.Option>
              <Select.Option value="start">start</Select.Option>
              <Select.Option value="end">end</Select.Option>
              <Select.Option value="justify">justify</Select.Option>
              <Select.Option value="match-parent">match-parent</Select.Option>
            </Select>
          </Field>
          <Field>
            <Label>Vertical Align</Label>
            <Select propKey="verticalAlign">
              <Select.Option value="baseline">baseline</Select.Option>
              <Select.Option value="sub">sub</Select.Option>
              <Select.Option value="super">super</Select.Option>
              <Select.Option value="text-top">text-top</Select.Option>
              <Select.Option value="text-bottom">text-bottom</Select.Option>
              <Select.Option value="middle">middle</Select.Option>
              <Select.Option value="top">top</Select.Option>
              <Select.Option value="bottom">bottom</Select.Option>
            </Select>
          </Field>
          <Field>
            <Label>Font Weight</Label>
            <Select propKey="fontWeight">
              <Select.Option value="normal">Normal</Select.Option>
              <Select.Option value="bold">Bolder</Select.Option>
              <Select.Option value="lighter">Lighter</Select.Option>
            </Select>
          </Field>
        </FlexCol2>
      </Group>
      <Style.Spacing />
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
