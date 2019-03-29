export default {
  getItems: state => state.items,
  getTrashItems: state => state.trash,
  getById: state => id => state.items.find(item => item.id === id)
}
