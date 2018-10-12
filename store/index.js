import Vuex from 'vuex'
import firebase, {auth, GoogleProvider, DB} from '@/services/fireinit.js'
// import * as firebase from 'firebase'

import games from './games'
import user from './user'
import loading from './loading'
import error from './error'

const createStore = () => {
  return new Vuex.Store({

    modules: {
      games: games,
      user: user,
      loading: loading,
      error: error
    }

  })
}

export default createStore
