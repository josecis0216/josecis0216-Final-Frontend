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
    },
  },
  actions: {
    editCourse(context, player) {
      context.commit('editPlayer', player)
    },
  },
})
