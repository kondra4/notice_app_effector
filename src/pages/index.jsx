import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const TasksListPage = lazy(() => import('./tasks-list'));

export const Routing = () => {
  return (
    <Routes>
      <Route exact path="/" element={<TasksListPage />} />
    </Routes>
  );
};
