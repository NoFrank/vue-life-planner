import items from '../../data/travelList'

export const travelModule = {
  namespaced: true,
  state: {
    items: undefined
  },
  mutations: {
    deleteItem: (state, id) => {
      let index = state.items.findIndex(item => item.id === id)
      state.items.splice(index, 1)
    },
    setItems: (state, items) => {
      state.items = items
    }
  },
  actions: {
    fetchTravelItems({ commit, state, rootState }) {
      if (!state.items) {
        commit('setItems', items)
      }
      // simulatte a small deleay
      return new Promise((resolve, reject) =>
        setTimeout(() => resolve(state.items), 200)
      )
    }
  },
  getters: {
    travelItems: state => {
      return state.items
    },
    getTravelItemById: state => id => {
      return state.items.find(item => item.id === parseInt(id))
    }
  }
}
