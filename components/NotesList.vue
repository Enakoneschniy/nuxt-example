<template>
  <div class="notes-list">
    <!--<NoteItem
      v-for="note of notes" :note="note" :key="`note-${note.id}`"
      @delete="onNoteDelete"
    />-->
    <NoteItem v-for="note of notes" :note="note" :key="`note-${note.id}`"/>
  </div>
</template>

<script>
  import NoteItem from "./NoteItem";
  export default {
    name: "NotesList",
    components: { NoteItem },
    props: {
      notes: {
        type: Array,
        required: true,
      }
    },
   /* methods: {
      onNoteDelete(id) {
        this.$emit('delete', id);
      }
    }*/
  }
</script>

<style scoped lang="scss">
  .notes-list {
    flex-wrap: wrap;
    display: flex;
    margin-top: 25px;
    margin-bottom: 25px;
    padding: 24px;
  }
</style>
