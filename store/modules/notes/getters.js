export default {
  getSearchQuery: state => state.searchQuery,
  getItems: state => state.searchQuery ?
    state.items.filter(item => item.title.indexOf(state.searchQuery) !== -1)
    : state.items,
  getTrashItems: state => state.searchQuery ?
    state.trash.filter(item => item.title.indexOf(state.searchQuery) !== -1)
    : state.trash,
  getById: state => id => state.items.find(item => item.id === id),
  search: state =>
    state.trash.concat(state.items).filter(
      item => item.title.indexOf(state.searchQuery) !== -1),
}
