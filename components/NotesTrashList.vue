<template>
  <div class="notes-list">
    <NoteTrashItem v-for="note of notes" :note="note" :key="`note-${note.id}`"/>
  </div>
</template>

<script>
  import NoteTrashItem from "./NoteTrashItem";
  export default {
    name: "NotesTrashList",
    components: { NoteTrashItem },
    props: {
      notes: {
        type: Array,
        required: true,
      }
    },
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
