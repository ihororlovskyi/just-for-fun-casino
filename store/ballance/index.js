import firebase, { DB } from '@/services/fireinit.js'

export default {

  state: {
    loadedTransactions: []
  },

  mutations: {
    setLoadedTransactions (state, payload) {
      state.loadedTransactions = payload
    },
    createTransaction (state, payload) {
      state.loadedTransactions.push(payload)
    }
  },

  actions: {
    loadTransactions ({commit, getters}) {
      commit('setLoading', true)
      firebase.database().ref('users/' + getters.user.uid + '/transactions').once('value')
        .then((data) => {
          const transactions = []
          const obj = data.val()
          for (let key in obj) {
            transactions.push({
              id: key,
              date: obj[key].date,
              funCoins: obj[key].funCoins
            })
          }
          commit('setLoadedTransactions', transactions)
          commit('setLoading', false)
        })
        .catch((error) => {
          console.log(error)
          commit('setLoading', false)
        })
    },
    createTransaction ({commit, getters}, payload) {
      const transaction = {
        date: payload.date.toISOString(),
        funCoins: payload.funCoins
      }
      let key
      firebase.database().ref('users/' + getters.user.uid + '/transactions').push(transaction)
        .then((data) => {
          key = data.key
          return key
        })
        .then(() => {
          commit('createTransaction', {
            ...transaction,
            id: key
          })
        })
        .catch((error) => {
          console.log(error)
        })
    }

  },

  getters: {
    loadedTransactions (state) {
      return state.loadedTransactions
    },
    loadedTransactionsSortedByDate (state, getters) {
      return getters.loadedTransactions.sort((itemA, itemB) => {
        return new Date(itemA.date) - new Date(itemB.date)
      }).reverse() || {}
    }
  }

}
