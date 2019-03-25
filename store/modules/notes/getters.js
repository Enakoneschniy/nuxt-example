export default {
  getItems: state => state.items,
  getById: state => id => state.items.find(item => item.id === id)
}
