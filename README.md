# Note Editor 

### Основной стек:
- React
- Effector
- Draft.js
- Ant Design
- SCSS
- React Router
- Feature-Sliced Design


### Обязательные требования:
- Создание одной простейшей заметки только с текстом.<br/>
  [**EditNote**](https://github.com/kondra4/notice_app_effector/blob/3ad9cf3e1097f7677f04fb484bfa19cbf916cfae/src/features/edit-note/index.jsx#L9)
- Редактирование заметки в окне собственного приложения.<br/>
  [**EditNote**](https://github.com/kondra4/notice_app_effector/blob/3ad9cf3e1097f7677f04fb484bfa19cbf916cfae/src/features/edit-note/index.jsx#L9)
- Сохранение заметки между сеансами приложения, в любом формате.<br/>
[**LocalStorage**](https://github.com/kondra4/notice_app_effector/blob/3ad9cf3e1097f7677f04fb484bfa19cbf916cfae/src/entities/note/module/index.js#L12)
- При первом запуске, приложение должно иметь одну заметку с текстом.<br/>
  [**InitialState**](https://github.com/kondra4/notice_app_effector/blob/3ad9cf3e1097f7677f04fb484bfa19cbf916cfae/src/entities/note/module/index.js#L22)
### Желательно:
- Создание нескольких заметок в приложении.<br/>
  [**newNote**](https://github.com/kondra4/notice_app_effector/blob/3ad9cf3e1097f7677f04fb484bfa19cbf916cfae/src/pages/tasks-list/index.jsx#L17)
- Выводить список существующих заметок.<br/>
  [**Render List**](https://github.com/kondra4/notice_app_effector/blob/3ad9cf3e1097f7677f04fb484bfa19cbf916cfae/src/pages/tasks-list/index.jsx#L36)
- Возможность редактирования любой заметки из списка.<br/>
  [**EditNote**](https://github.com/kondra4/notice_app_effector/blob/3ad9cf3e1097f7677f04fb484bfa19cbf916cfae/src/features/edit-note/index.jsx#L9)
- Удаление заметок.<br/>
  [**EffectEffector**](https://github.com/kondra4/notice_app_effector/blob/3ad9cf3e1097f7677f04fb484bfa19cbf916cfae/src/entities/note/module/index.js#L28)
- Также сохранять все заметки между сеансами.<br/>
  [**LocalStorage**](https://github.com/kondra4/notice_app_effector/blob/3ad9cf3e1097f7677f04fb484bfa19cbf916cfae/src/entities/note/module/index.js#L12)
### Идеи для улучшения:
- Возможность выделять текст курсивом, жирным и т.п.<br/>
  [**draft-js-plugins/static-toolbar**](https://github.com/kondra4/notice_app_effector/blob/3ad9cf3e1097f7677f04fb484bfa19cbf916cfae/src/features/text-editor/index.jsx#L57)<br/>
~~- Менять шрифт и размер текста.<br/>~~
- Вставка картинок.<br/>
  [**draft-js-plugins/image**](https://github.com/kondra4/notice_app_effector/blob/3ad9cf3e1097f7677f04fb484bfa19cbf916cfae/src/features/text-editor/index.jsx#L47)