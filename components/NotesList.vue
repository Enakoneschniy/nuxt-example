<template>
  <div>
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

<style scoped>

</style>
