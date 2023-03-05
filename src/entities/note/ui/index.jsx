import React, { useState } from 'react';
import { Card } from 'antd';
import { DeleteOutlined, EditOutlined, FullscreenOutlined } from '@ant-design/icons';
import { useStore } from 'effector-react';
import { $notes, remove } from '../module';
import { EditNote } from '../../../features/edit-note';

export const Note = ({ title, description, index }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dataNote] = useStore($notes).filter((_, i) => i === index);

  return (
    <Card
      title={title}
      actions={[
        <EditOutlined key="edit" onClick={() => setIsModalOpen(true)} />,
        <FullscreenOutlined key="fullScreen" onClick={() => setIsModalOpen(true)} />,
        <DeleteOutlined key="delete" onClick={() => remove(index)} />,
      ]}
    >
      <p>{description}</p>
      <EditNote
        dataNote={dataNote}
        setIsModalOpen={setIsModalOpen}
        isModalOpen={isModalOpen}
        indexNote={index}
      />
    </Card>
  );
};
