import { ADD_NOTE, DELETE_NOTE, EDIT_NOTE, FORCE_DELETE_NOTE, RESTORE_NOTE, CLEAR_TRASH, SET_SEARCH_QUERY } from "./mutation-types";

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
  [RESTORE_NOTE]: (state, id) => {
    const index = state.trash.findIndex(note => note.id === id);
    const newNote = Object.assign(state.trash[index], { deletedAt: null });
    state.items.push(newNote);
    state.trash.splice(index, 1);
  },
  [FORCE_DELETE_NOTE]: (state, id) => {
    const index = state.trash.findIndex(note => note.id === id);
    state.trash.splice(index, 1);
  },
  [EDIT_NOTE]: (state, { id, note }) => {
    state.items = state.items.map(item => {
      if(item.id === id) {
        item.title = note.title;
        item.description = note.description;
      }
      return item;
    });
  },
  [CLEAR_TRASH]: (state) => {
    state.trash = [];
  },
  [SET_SEARCH_QUERY]: (state, query) => {
    state.searchQuery = query;
  }
}
