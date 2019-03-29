import { ADD_NOTE, DELETE_NOTE, EDIT_NOTE, FORCE_DELETE_NOTE, RESTORE_NOTE } from "./mutation-types";

function generateId() {
  return `f${(new Date().getTime()).toString(16)}`;
}

export default {
  add({ commit }, note) {
    const newNote = Object.assign(note, {
      id: generateId(),
      createdAt: new Date(),
      deletedAt: null
    });
    commit(ADD_NOTE, newNote);
    return newNote.id;
  },
  delete({ commit }, id) {
    commit(DELETE_NOTE, id)
  },
  update({ commit }, noteData) {
    commit(EDIT_NOTE, noteData);
  }
}
