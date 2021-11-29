import React from 'react';
import { mountEditor, withFoxpageEditor } from '@foxpage/foxpage-component-editor-storybook-addon';
import ReactEditorDemo from '../src';
import Editor from '../editor';

export default {
  title: 'ReactEditorDemo',
  component: ReactEditorDemo,
  decorators: [withFoxpageEditor],
};

export const WithEditor = () => {
  const props = mountEditor(Editor, {
    basic: {
      input: `I'm input`,
      select: 'two',
      radio: 'two',
      checkbox: true,
      switch: true,
    },
    advanced: {
      numberInput: 110,
      colorPicker: '#666666',
      codeArea: `I'm code area`,
      codeEditor: `I'm code editor`,
      jsonEditor: {
        data: 'mock data',
      },
      jsonEditorAce: {
        data: 'mock data',
      },
      richText: `<strong>strong text</strong><p>{{variable}}</p>`,
    },
    injection: {
      attributes: {
        id: 'mock-id',
        className: 'mock-classname',
      },
      general: {
        display: 'block',
        float: 'none',
      },
      position: {
        position: 'static',
      },
      flex: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 'auto',
        alignSelf: 'baseline',
      },
      dimension: {
        width: '200px',
        minWidth: '200px',
        maxWidth: '400px',
        height: '200px',
        minHeight: '200px',
        maxHeight: '500px',
      },
      spacing: {
        marginTop: '6px',
        marginLeft: '6px',
        marginRight: '6px',
        marginBottom: '6px',
        paddingTop: '2px',
        paddingLeft: '2px',
        paddingRight: '2px',
        paddingBottom: '2px',
      },
      decorations: {
        borderTopLeftRadius: '8px',
        borderTopRightRadius: '8px',
        borderBottomRightRadius: '8px',
        borderBottomLeftRadius: '8px',
        backgroundColor: 'transparent',
      },
    },
  });
  return <ReactEditorDemo {...props} />;
};
