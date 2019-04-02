<template>
  <main>
    <h1 class="text-center mt-4">My Notes</h1>
    <NotesList :notes="notes"/>
  </main>
</template>

<script>

import NotesList from "../components/NotesList";
import { mapGetters } from 'vuex';

export default {
  components: { NotesList },
  computed: mapGetters({
    notes: 'Notes/getItems'
  }),
 /* methods: {
    onNoteDelete(id) {
      //this.notes = this.notes.filter(note => note.id !== id );
      const index = this.notes.findIndex(note => note.id === id);
      this.notes.splice(index, 1);
    }
  }*/
}
</script>
