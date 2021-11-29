import React from 'react';
import { EditorFC, EditorWidgets } from '@foxpage/foxpage-component-editor-storybook-addon';
import { ComponentProps } from '../src/typing';

const Editor: EditorFC<ComponentProps> = props => {
  const {
    Group,
    Title,
    Field,
    Label,
    Input,
    Select,
    Radio,
    Checkbox,
    Switch,
    NumericInput,
    ColorPicker,
    CodeArea,
    CodeEditor,
    JSONEditor,
    JSONEditorAce,
    RichText,
    Attributes,
    Style,
  } = props.widgets as EditorWidgets;
  return (
    <div>
      <Group>
        <Title>Basic</Title>
        <Field>
          <Label>input:</Label>
          <Input propKey="basic.input" />
        </Field>
        <Field>
          <Label>select:</Label>
          <Select propKey="basic.select">
            <Select.Option value="one">one</Select.Option>
            <Select.Option value="two">two</Select.Option>
          </Select>
        </Field>
        <Field>
          <Label>radio:</Label>
          <Radio.Group propKey="basic.radio">
            <Radio value="one">one</Radio>
            <Radio value="two">two</Radio>
          </Radio.Group>
        </Field>
        <Field>
          <Label>checkbox:</Label>
          <Checkbox propKey="basic.checkbox" label="checkbox" />
        </Field>
        <Field>
          <Label>switch:</Label>
          <Switch propKey="basic.switch" label="test-switch" />
        </Field>
      </Group>
      <Group>
        <Title>Advanced</Title>
        <Field>
          <Label>numberInput:</Label>
          <NumericInput propKey="advanced.numberInput" />
        </Field>
        <Field>
          <Label>colorPicker:</Label>
          <ColorPicker propKey="advanced.colorPicker" />
        </Field>
        <Field>
          <Label>codeArea:</Label>
          <CodeArea propKey="advanced.codeArea" />
        </Field>
        <Field>
          <Label>codeEditor:</Label>
          <CodeEditor propKey="advanced.codeEditor" />
        </Field>
        <Field>
          <Label>jsonEditor:</Label>
          <JSONEditor propKey="advanced.jsonEditor" />
        </Field>
        <Field>
          <Label>jsonEditorAce:</Label>
          <JSONEditorAce propKey="advanced.jsonEditorAce" />
        </Field>
        <Field>
          <Label>richText:</Label>
          <RichText propKey="advanced.richText" />
        </Field>
      </Group>
      <Group>
        <Title>Injection</Title>
        <Field>
          <Attributes propsRootKey="injection.attributes" fold />
        </Field>
        <Field>
          <Style.General propsRootKey="injection.general" fold />
        </Field>
        <Field>
          <Style.Position propsRootKey="injection.position" fold />
        </Field>
        <Field>
          <Style.Flex propsRootKey="injection.flex" fold />
        </Field>
        <Field>
          <Style.Dimension propsRootKey="injection.dimension" fold />
        </Field>
        <Field>
          <Style.Spacing propsRootKey="injection.spacing" fold />
        </Field>
        <Field>
          <Style.Decorations propsRootKey="injection.decorations" fold />
        </Field>
      </Group>
    </div>
  );
};

export default Editor;
