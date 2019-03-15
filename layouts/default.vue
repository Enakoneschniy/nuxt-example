<template>
  <div>
    <TheHeader/>
    <nuxt/>
    <footer class="footer">
      footer
    </footer>
  </div>
</template>
<script>
  import TheHeader from "../components/TheHeader";
  export default {
    components: { TheHeader }
  }
</script>
