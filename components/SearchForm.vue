<template>
  <form class="form-inline my-2 my-lg-0" @submit.prevent="onSubmit">
    <input v-model="query" class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';
  export default {
    name: "SearchForm",
    data() {
      return {
        query: ''
      }
    },
    computed: mapGetters({
      searchQuery: 'Notes/getSearchQuery'
    }),
    watch: {
      query(value) {
        this.setSearchQuery(value);
      }
    },
    created() {
      this.query = this.$nuxt.$router.history.current.query.q;
    },
    methods: {
      ...mapActions({
        setSearchQuery: 'Notes/setSearchQuery'
      }),
      onSubmit() {
        this.$nuxt.$router.replace({
          name: 'search',
          query: {
            q: this.query
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>
