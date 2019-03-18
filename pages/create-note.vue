<template>
  <div>
    <h1>Create new note</h1>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    name: "create-note",
    created() {
      this.add({
        title: 'Some note title',
        description: 'Some note description'
      });
    },
    methods: mapActions({
      add: 'Notes/add'
    })
  }
</script>

<style scoped>

</style>
