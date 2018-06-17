import items from '../../data/mediaList'

export const mediaList = {
  namespaced: true,
  state: {
    items: items
  },
  mutations: {
    deleteItem: (state, id) => {
      let index = state.items.findIndex(item => item.id === id)
      state.items.splice(index, 1)
    }
  },
  actions: {},
  getters: {
    mediaItems: state => {
      return state.items
    },
    getMediaItemById: state => id => {
      return state.items.find(item => item.id === parseInt(id))
    }
  }
}
