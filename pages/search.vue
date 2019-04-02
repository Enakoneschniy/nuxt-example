<template>
  <main>
    <h1 class="text-center mt-4">Search</h1>
    <hr>
    <h2 class="text-center mt-4">My Notes</h2>
    <NotesList :notes="notes"/>
    <hr>
    <h2 class="text-center mt-4">Trash</h2>
    <NotesTrashList :notes="trashNotes"/>
  </main>
</template>

<script>

import NotesList from "../components/NotesList";
import { mapGetters } from 'vuex';
import NotesTrashList from "../components/NotesTrashList";

export default {
  components: { NotesTrashList, NotesList },
  computed: mapGetters({
    notes: 'Notes/getItems',
    trashNotes: 'Notes/getTrashItems'
  }),

}
</script>
