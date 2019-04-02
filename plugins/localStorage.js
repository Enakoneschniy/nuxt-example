import createPersistedState from 'vuex-persistedstate'

export default ({store}) => {
  window.onNuxtReady(() => {
    createPersistedState({
      paths: [
        'Notes.items',
        'Notes.trash'
      ]
    })(store)
  })
}
