import { Modal } from 'antd';
import { TEXT } from './constants';
import { TextEditor } from '../text-editor';
import { useEffect, useState } from 'react';
import { createEditorStateWithText } from '@draft-js-plugins/editor';
import { addNewNote, saveEdit } from '../../entities/note/module';
import { convertFromRaw, convertToRaw, EditorState } from 'draft-js';

export const EditNote = ({ isModalOpen, setIsModalOpen, dataNote = null, indexNote = 0 }) => {
  const [editorState, setEditorState] = useState(() =>
    dataNote
      ? EditorState.createWithContent(convertFromRaw(dataNote))
      : createEditorStateWithText('')
  );

  const handleOk = () => {
    if (dataNote) {
      saveEdit({ newData: convertToRaw(editorState.getCurrentContent()), indexNote });
    } else {
      addNewNote(convertToRaw(editorState.getCurrentContent()));
      setEditorState(EditorState.createEmpty());
    }
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    dataNote && EditorState.createWithContent(convertFromRaw(dataNote));
  }, [dataNote]);

  return (
    <>
      <Modal title={TEXT.titleModal} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <TextEditor editorState={editorState} setEditorState={setEditorState} />
      </Modal>
    </>
  );
};
