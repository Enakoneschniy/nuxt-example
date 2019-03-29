<template>
  <div class="container">
    <h1 class="text-center mt-4">Edit note</h1>
    <NoteForm :note="note" @update="onUpdate"/>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';
  import NoteForm from "../components/NoteForm";

  export default {
    name: "create-note",
    components: { NoteForm },
    data() {
      return {
        note: null
      }
    },
    /*async asyncData(ctx) {
      console.log(ctx);
      const id  = ctx.app.router.history.current.params.id;
      console.log(id);
      return {
        note: ctx.app.store.getters['Notes/getById'](id)
      };
    },*/
    created() {
      const id = this.$nuxt.$router.history.current.params.id;
      this.note = this.$store.getters['Notes/getById'](id);
    },
    methods: {
      ...mapActions({
        add: 'Notes/add',
        update: 'Notes/update'
      }),
      onUpdate(newNote) {
        this.update({
          note: newNote,
          id: this.note.id
        });
        this.$nuxt.$router.replace({ name: 'home' });
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
