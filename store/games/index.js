import firebase, {DB} from '@/services/fireinit.js'
// import * as firebase from 'firebase'

export default {

  state: {
    loadedGames: []
  },

  mutations: {
    setLoadedGames (state, payload) {
      state.loadedGames = payload
    },
    createGame (state, payload) {
      state.loadedGames.push(payload)
    },
    removeGame (state, payload) {
      const index = state.loadedGames.findIndex(game => {
        return game.id === payload
      })
      if (index !== -1) {
        state.loadedGames.splice(index, 1)
      }
    },
    updateGameData (state, payload) {
      const game = state.loadedGames.find(game => {
        return game.id === payload.id
      })
      game.title = payload.title
      game.slug = payload.slug
      game.imageUrl = payload.imageUrl
      game.iframeUrl = payload.iframeUrl
    }
  },

  actions: {
    loadGames ({commit}) {
      commit('setLoading', true)
      firebase.database().ref('games').once('value')
        .then((data) => {
          const games = []
          const obj = data.val()
          for (let key in obj) {
            games.push({
              id: key,
              date: obj[key].date,
              title: obj[key].title,
              slug: obj[key].slug,
              imageUrl: obj[key].imageUrl,
              iframeUrl: obj[key].iframeUrl
            })
          }
          commit('setLoadedGames', games)
          commit('setLoading', false)
        })
        .catch((error) => {
          console.log(error)
          commit('setLoading', false)
        })
    },
    createGame ({commit, getters}, payload) {
      const game = {
        date: payload.date.toISOString(),
        title: payload.title,
        slug: payload.slug,
        imageUrl: payload.imageUrl,
        iframeUrl: payload.iframeUrl
      }
      let key
      firebase.database().ref('games').push(game)
        .then((data) => {
          key = data.key
          return key
        })
        .then(() => {
          commit('createGame', {
            ...game,
            id: key
          })
        })
        .catch((error) => {
          console.log(error)
        })
    },
    removeGame ({commit}, payload) {
      // commit('setLoading', true)
      firebase.database().ref('games').child(payload.id).remove()
        // .then(() => {
        //   const imageUrl = payload.imageUrl
        //   const extWithMeta = imageUrl.slice(imageUrl.lastIndexOf('.'))
        //   const ext = extWithMeta.slice(0, extWithMeta.lastIndexOf('?'))
        //   return firebase.storage().ref('games/' + payload.id + ext).delete()
        // })
        .then(() => {
          commit('removeGame', payload.id)
          // commit('setLoading', false)
        })
        .catch((error) => {
          console.log(error)
          // commit('setLoading', false)
        })
    },
    updateGameData ({commit}, payload) {
      const updateObj = {}
      updateObj.title = payload.title
      updateObj.slug = payload.slug
      // updateObj.imageUrl = payload.imageUrl
      // updateObj.iframeUrl = payload.iframeUrl
      firebase.database().ref('games').child(payload.id).update(updateObj)
        .then(() => {
          commit('updateGameData', payload)
        })
        .catch((error) => {
          console.log(error)
        })
    },
  },

  getters: {
    loadedGames (state) {
      return state.loadedGames
    },
    loadedGame (state) {
      return (id) => {
        return state.loadedGames.find((game) => {
          return game.id === id
        }) || {}
      }
    }
  }

}
