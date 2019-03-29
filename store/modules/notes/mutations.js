import { ADD_NOTE, DELETE_NOTE, EDIT_NOTE, FORCE_DELETE_NOTE, RESTORE_NOTE } from "./mutation-types";

export default {
  [ADD_NOTE]: (state, note) => {
    state.items.push(note);
  },
  [DELETE_NOTE]: (state, id) => {
    const index = state.items.findIndex(note => note.id === id);
    const newNote = Object.assign(state.items[index], { deletedAt: new Date() });
    state.trash.push(newNote);
    state.items.splice(index, 1);
  },
  [EDIT_NOTE]: (state, { id, note }) => {
    state.items = state.items.map(item => {
      if(item.id === id) {
        item.title = note.title;
        item.description = note.description;
      }
      return item;
    });
  }
}
