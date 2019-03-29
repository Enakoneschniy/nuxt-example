<template>
  <main>
    <h1 class="text-center mt-4">My Notes</h1>
    <!--<NotesList :notes="notes" @delete="onNoteDelete"/>-->
    <NotesList :notes="notes"/>
  </main>
</template>

<script>

import NotesList from "../components/NotesList";
import { mapGetters } from 'vuex';

export default {
  components: { NotesList },
  computed: mapGetters({
    notes: 'Notes/getTrashItems'
  }),
}
</script>
