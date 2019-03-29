<template>
  <div class="container">
    <h1 class="text-center mt-4">Create new note</h1>
    <NoteForm @create="onCreate"/>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';
  import NoteForm from "../components/NoteForm";

  export default {
    name: "create-note",
    components: { NoteForm },
    methods: {
      ...mapActions({
        add: 'Notes/add'
      }),
      async onCreate(newNote) {
        const id = await this.add(newNote);
        this.$nuxt.$router.replace({
          name: 'edit',
          params: { id }
        });
      }
    }
  }
</script>

<style scoped lang="scss">
  input, textarea {
    outline: none !important;
  }

  input:focus, textarea:focus {
    outline: none !important;
    border-color: #ced4da;
    box-shadow: none !important;
  }

  .has-error {
    border-color: red !important;
  }

  .error-text {
    color: red !important;
  }
</style>
