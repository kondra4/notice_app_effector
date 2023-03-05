import React, { useState } from 'react';
import Editor, { composeDecorators } from '@draft-js-plugins/editor';
import createToolbarPlugin from '@draft-js-plugins/static-toolbar';
import createImagePlugin from '@draft-js-plugins/image';

import createAlignmentPlugin from '@draft-js-plugins/alignment';

import createFocusPlugin from '@draft-js-plugins/focus';

import createResizeablePlugin from '@draft-js-plugins/resizeable';

import createBlockDndPlugin from '@draft-js-plugins/drag-n-drop';
import '@draft-js-plugins/static-toolbar/lib/plugin.css';
import '@draft-js-plugins/alignment/lib/plugin.css';
import '@draft-js-plugins/focus/lib/plugin.css';
import { Button, Input } from 'antd';
import styles from './styles.module.scss';
import {DEFAULT_IMAGE, TEXT} from "./constants";

const staticToolbarPlugin = createToolbarPlugin();
const focusPlugin = createFocusPlugin();
const resizeablePlugin = createResizeablePlugin();
const blockDndPlugin = createBlockDndPlugin();
const alignmentPlugin = createAlignmentPlugin();
const { AlignmentTool } = alignmentPlugin;

const decorator = composeDecorators(
  resizeablePlugin.decorator,
  alignmentPlugin.decorator,
  focusPlugin.decorator,
  blockDndPlugin.decorator
);
const imagePlugin = createImagePlugin({ decorator });

export const TextEditor = ({ editorState, setEditorState }) => {
  const [value, setValue] = useState(DEFAULT_IMAGE);
  const { Toolbar } = staticToolbarPlugin;
  const plugins = [
    staticToolbarPlugin,
    imagePlugin,
    blockDndPlugin,
    focusPlugin,
    alignmentPlugin,
    resizeablePlugin,
  ];
  const modifier = imagePlugin.addImage;
  const addImage = () => {
    setEditorState(modifier(editorState, value));
  };

  return (
    <div>
      <div className={styles.editor}>
        <Editor editorState={editorState} onChange={setEditorState} plugins={plugins} />
        <AlignmentTool />
      </div>
      <Toolbar />
      <Input.Group compact style={{ paddingTop: '10px' }}>
        <Input
          style={{ width: 'calc(100% - 200px)' }}
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <Button type="primary" onClick={addImage}>
          {TEXT.addImage}
        </Button>
      </Input.Group>
    </div>
  );
};
