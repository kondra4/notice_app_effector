import React from 'react';
import Editor from '@draft-js-plugins/editor';
import createToolbarPlugin from '@draft-js-plugins/static-toolbar';
import '@draft-js-plugins/static-toolbar/lib/plugin.css';
import styles from './styles.module.scss';

const staticToolbarPlugin = createToolbarPlugin();

export const TextEditor = ({ editorState, setEditorState }) => {
  const { Toolbar } = staticToolbarPlugin;
  const plugins = [staticToolbarPlugin];

  return (
    <div className={styles.editor}>
      <Editor editorState={editorState} onChange={setEditorState} plugins={plugins} />
      <Toolbar />
    </div>
  );
};
