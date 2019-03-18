import { ADD_NOTE, DELETE_NOTE, EDIT_NOTE, FORCE_DELETE_NOTE, RESTORE_NOTE } from "./mutation-types";

export default {
  [ADD_NOTE]: (state, note) => {
    state.items.push(note);
  },
  [DELETE_NOTE]: (state, id) => {
    const index = state.items.findIndex(note => note.id === id);
    state.items.splice(index, 1);
  }
}
