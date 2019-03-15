<template>
  <main>
    <h1 class="text-center mt-4">My Notes</h1>
    <NotesList :notes="notes"/>
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
          id: 1,
          title: 'title1',
          description: 'description1',
          createdAt: new Date(),
          deletedAt: null
        },
        {
          id: 2,
          title: 'title2',
          description: 'description2',
          createdAt: new Date(),
          deletedAt: null
        },
        {
          id: 3,
          title: 'title3',
          description: 'description3',
          createdAt: new Date(),
          deletedAt: null
        },
        {
          id: 4,
          title: 'title4',
          description: 'description4',
          createdAt: new Date(),
          deletedAt: null
        },
        {
          id: 5,
          title: 'title5',
          description: 'description5',
          createdAt: new Date(),
          deletedAt: null
        },
        {
          id: 6,
          title: 'title6',
          description: 'description6',
          createdAt: new Date(),
          deletedAt: null
        }
      ]
    }
  }
}
</script>
