<template>
  <header class="header">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <nuxt-link class="navbar-brand" :to="{ name: 'home' }">Navbar</nuxt-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <nuxt-link class="nav-link" :to="{ name: 'home' }">Home</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" :to="{ name: 'create' }">Create Note</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" :to="{ name: 'trash' }">Trash</nuxt-link>
          </li>
        </ul>
        <SearchForm/>
      </div>
    </nav>
  </header>
</template>

<script>
  import SearchForm from "./SearchForm";
  export default {
    name: "TheHeader",
    components: { SearchForm },
  }
</script>

<style scoped>

</style>
