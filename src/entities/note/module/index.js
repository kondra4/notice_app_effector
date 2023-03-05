import { combine, createEffect, createEvent, createStore, sample } from 'effector';
import { DEFAULT_NOTICE } from './constants';

const initialState = [DEFAULT_NOTICE];

export const remove = createEvent();

export const addNewNote = createEvent();

export const saveEdit = createEvent();

export const saveNotesFx = createEffect(data => {
  localStorage.setItem('notesList', JSON.stringify(data));
});
export const loadNotesFx = createEffect(() => {
  return JSON.parse(localStorage.getItem('notesList'));
});

export const $notes = createStore([])
  .on(loadNotesFx.doneData, (state, result) => {
    if (!result || result.length === 0) {
      return [...initialState];
    } else {
      state = [...result];
      return state;
    }
  })
  .on(remove, (notes, index) => notes.filter((_, i) => i !== index))
  .on(addNewNote, (notes, newNote) => [...notes, newNote])
  .on(saveEdit, (notes, { newData, indexNote }) => {
    notes[indexNote] = newData;
    return [...notes];
  });

export const $countNotes = combine($notes, notes => notes.length);

export const $notesList = combine($notes, notes => {
  const result = notes.map(note => {
    const title = note.blocks[0].text;
    const blocksDescription = note.blocks.slice(1);
    const description = blocksDescription.reduce((acc, block) => {
      acc += block.text ? block.text : '\n';
      return acc;
    }, '');
    return { title, description };
  });
  return result;
});

sample({
  clock: addNewNote,
  source: $notes,
  fn: notesList => notesList,
  target: saveNotesFx,
});

sample({
  clock: remove,
  source: $notes,
  fn: notesList => notesList,
  target: saveNotesFx,
});

sample({
  clock: saveEdit,
  source: $notes,
  fn: notesList => notesList,
  target: saveNotesFx,
});
