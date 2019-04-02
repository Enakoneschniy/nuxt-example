<template>
  <main>
    <h1 class="text-center mt-4">
      Trash
      <button class="btn btn-light btn-sm" @click="onClear">Clear</button>
    </h1>
    <NotesTrashList :notes="notes"/>
  </main>
</template>

<script>

import NotesTrashList from "../components/NotesTrashList";
import { mapGetters, mapActions } from 'vuex';

export default {
  components: { NotesTrashList },
  computed: mapGetters({
    notes: 'Notes/getTrashItems',
  }),
  methods: {
    ...mapActions({
      clear: 'Notes/clear'
    }),
    onClear() {
      this.$dialog
        .confirm(`Clear trash?`)
        .then((dialog) => {
          this.clear();
        })
        .catch(function() {});
    }
  }
}
</script>
