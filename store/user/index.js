import firebase, {auth} from '@/services/fireinit.js'

export default {

  state: {
    user: null,
    admins: [
      'lX1CdmZNCsOMNAxTmeBjxbNDmeE2',
      'LVEiqHxayAcsfqyDLquv9FRjOwh2'
    ]
  },

  mutations: {
    setUser (state, payload) {
      state.user = payload
    }
  },

  actions: {
    signUserUp ({commit}, payload) {
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            commit('setLoading', false)
            const newUser = {
              id: user.uid,
              email: user.email
            }
            commit('setUser', newUser)
          }
        )
        .catch(
          error => {
            commit('setLoading', false)
            commit('setError', error)
            console.log(error)
          }
        )
    },
    signUserIn ({commit}, payload) {
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            commit('setLoading', false)
            const newUser = {
              id: user.uid,
              email: user.email
            }
            commit('setUser', newUser)
          }
        )
        .catch(
          error => {
            commit('setLoading', false)
            commit('setError', error)
            console.log(error)
          }
        )
    },
    autoLogin ({commit}, payload) {
      commit('setUser', {
        id: payload.uid,
        email: payload.email,
        registeredItems: []
      })
    },
    logOut ({commit}) {
      firebase.auth().signOut()
      commit('setUser', null)
    }
  },

  getters: {
    user (state) {
      return state.user
    },
    userIsAuthenticated (state, getters) {
      return !!getters.user
    },
    currentUserId (state, getters) {
      if (!getters.userIsAuthenticated) {
        return false
      }
      return getters.user && getters.user.uid
    },
    userIsAdmin (state, getters) {
      if (state.admins.findIndex((admin) => {
        return admin === getters.currentUserId
      }) === -1) {
        return false
      }
      return true
    }
  }

}
