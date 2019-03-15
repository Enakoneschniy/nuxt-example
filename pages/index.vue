<template>
  <main>
    <NotesList/>
  </main>
</template>

<script>

import NotesList from "../components/NotesList";
export default {
  components: { NotesList },
  data() {
    return {
      notes: [
        {
          title: 'title1',
          description: 'description1',
          createdAt: new Date(),
          deletedAt: null
        },
        {
          title: 'title2',
          description: 'description2',
          createdAt: new Date(),
          deletedAt: null
        },
        {
          title: 'title3',
          description: 'description3',
          createdAt: new Date(),
          deletedAt: null
        }
      ]
    }
  }
}
</script>
