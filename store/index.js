import Vuex from 'vuex'

import games from './games'
import user from './user'
import ballance from './ballance'
import loading from './loading'
import error from './error'

const createStore = () => {
  return new Vuex.Store({

    modules: {
      games: games,
      user: user,
      ballance: ballance,
      loading: loading,
      error: error
    }

  })
}

export default createStore
