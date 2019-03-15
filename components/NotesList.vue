<template>
  <div class="notes-list">
    <NoteItem/>
    <NoteItem/>
    <NoteItem/>
    <NoteItem/>
  </div>
</template>

<script>
  import NoteItem from "./NoteItem";
  export default {
    name: "NotesList",
    components: { NoteItem }
  }
</script>

<style scoped lang="scss">
  .notes-list {
    flex-wrap: wrap;
    justify-content: space-around;
    display: flex;
    margin-top: 25px;
  }
</style>
