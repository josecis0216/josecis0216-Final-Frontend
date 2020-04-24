import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    editablePlayer: null,
  },
  getters: {
    currentEditablePlayer: (state) => {
      return state.editablePlayer
    }
  },
  mutations: {
    editPlayer(state, editablePlayer) {
      state.editablePlayer = editablePlayer
    }
    // deletePlayer(state, player) {
    //   var index = state.Players.findIndex(p => p.id == player.id);
    //   state.Players.splice(index, 1);
    // }
  },
  actions: {
    editPlayer(context, player) {
      context.commit('editPlayer', player)
    },
  },
})
