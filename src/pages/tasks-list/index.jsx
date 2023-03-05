import React, { Fragment, useEffect, useState } from 'react';
import { Button, Layout, Space } from 'antd';
import { EditNote } from '../../features/edit-note';
import { Note } from '../../entities/note/ui';
import { useStore } from 'effector-react';
import { $countNotes, $notesList, loadNotesFx } from '../../entities/note/module';
import { TEXT } from './constants';
import styles from './styles.module.scss';

const { Footer } = Layout;

const TasksListPage = () => {
  const notes = useStore($notesList);

  const countNotes = useStore($countNotes);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const newNote = () => {
    setIsModalOpen(true);
  };

  useEffect(() => {
    loadNotesFx();
  }, []);

  return (
    <Layout>
      <Button type="primary" block onClick={newNote}>
        {TEXT.buttonText}
      </Button>
      <EditNote isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <Space
        direction="vertical"
        size="middle"
        className={styles.space}
      >
        {notes.map(({ title, description }, index) => (
          <Fragment key={index}>
            <Note title={title} description={description} index={index} />
          </Fragment>
        ))}
      </Space>
      <Footer className={styles.footer}>{countNotes ? countNotes : TEXT.notNotes}</Footer>
    </Layout>
  );
};

export default TasksListPage;
