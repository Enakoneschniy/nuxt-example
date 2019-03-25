<template>
  <div class="container">
    <h1 class="text-center mt-4">Edit note</h1>
    <NoteForm/>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';
  import NoteForm from "../components/NoteForm";

  export default {
    name: "create-note",
    components: { NoteForm },
    created() {
      const note = this.$store.getters['Notes/getById']('f169b6401667')
    },
    methods: mapActions({
        add: 'Notes/add'
    })
  }
</script>

<style scoped lang="scss">
  input, textarea {
    outline: none!important;
  }
  input:focus, textarea:focus {
    outline: none!important;
    border-color: #ced4da;
    box-shadow: none!important;
  }
  .has-error {
    border-color: red !important;
  }
  .error-text {
    color: red !important;
  }
</style>
