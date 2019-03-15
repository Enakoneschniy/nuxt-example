<template>
  <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">{{ note.title }}</h5>
      <h6 class="card-subtitle mb-2 text-muted">
        {{ moment(note.createdAt).format('MMMM Do YYYY, h:mm:ss') }}
      </h6>
      <p class="card-text">{{ note.description }}</p>
      <a href="#" class="btn btn-sm btn-outline-primary">Edit</a>
      <button  class="btn btn-sm btn-outline-danger">Delete</button>
    </div>
  </div>
</template>

<script>
  import moment from 'moment'
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
    }
  }
</script>

<style scoped lang="scss">
  .card {
    margin: 10px;
  }
</style>
