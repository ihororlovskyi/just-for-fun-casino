import { auth } from '@/services/fireinit.js'

export default (context) => {
  const {store} = context
  store.dispatch('loadGames')

  return new Promise((resolve, reject) => {
    auth.onAuthStateChanged(user => {
      store.commit('setUser', user)
      if (user) {
        store.dispatch('loadTransactions')
      }
    resolve()
    })
  })

}
