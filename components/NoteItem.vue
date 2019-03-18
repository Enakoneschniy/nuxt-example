<template>
  <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">{{ note.title }}</h5>
      <h6 class="card-subtitle mb-2 text-muted">
        {{ moment(note.createdAt).format('MMMM Do YYYY, h:mm:ss') }}
      </h6>
      <p class="card-text">{{ note.description }}</p>
      <a href="#" class="btn btn-sm btn-outline-primary">Edit</a>
      <button  class="btn btn-sm btn-outline-danger" @click.prevent="onDelete(note)">Delete</button>
    </div>
  </div>
</template>

<script>

  import moment from 'moment'
  import { mapActions } from 'vuex'

  export default {
    name: "NoteItem",
    data() {
      return {
        moment
      }
    },
    props: {
      note: {
        type: Object,
        required: true,
      }
    },
    methods: {
      ...mapActions({
        deleteNote: 'Notes/delete'
      }),
      onDelete(note) {
        this.$dialog
          .confirm(`Please confirm to delete "${note.title}"`)
          .then((dialog) => {
            this.deleteNote(note.id);
            // this.$emit('delete', note.id);
          })
          .catch(function() {});

      }
    }
  }
</script>

<style scoped lang="scss">
  .card {
    margin: 10px;
  }
</style>
