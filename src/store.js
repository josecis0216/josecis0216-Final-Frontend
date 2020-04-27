import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    editablePlayer: null,
    editableTeam: null, 
  },
  getters: {
    currentEditablePlayer: (state) => {
      return state.editablePlayer
    },
    currentTeam: (state) => {
      return state.editableTeam
    }
  },
  mutations: {
    editPlayer(state, editablePlayer) {
      state.editablePlayer = editablePlayer
    },
    editTeam(state, editableTeam) {
      state.editableTeam = editableTeam
    }
  },
  actions: {
    editPlayer(context, player) {
      context.commit('editPlayer', player)
    },
    editTeam(context, team) {
      context.commit('editTeam', team)
    }
  },
})
