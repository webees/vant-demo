/**
 * Vuex
 *
 * @library
 *
 * https://vuex.vuejs.org/en/
 */

// Lib imports
import Vue from 'vue'
import Vuex from 'vuex'

// Store functionality
import actions from './actions'
import getters from './getters'
import modules from './modules'
import mutations from './mutations'
import state from './state'

import VuexPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules,
  actions,
  getters,
  mutations,
  state,
  strict: true, // 严格模式
  plugins: [
    VuexPersistedState({
      paths: []
    })
  ]
})

// 快捷函数：读写state
store.__s = (type, msg) => {
  if (!type) return store.state
  let _path = type.split('.')
  let _state = store.state
  for (let i = 0; i < _path.length; i++) {
    // 获取state
    if (_state[_path[i]] !== undefined) _state = _state[_path[i]]
    else _state = undefined
  }
  if (msg !== undefined && _path.length === 2) {
    store.commit({
      // 修改state
      type: _path[0] + '/_set',
      key: _path[1],
      val: msg
    })
  }
  return _state
}

// 快捷函数：dispatch
store.__d = (type, msg) => store.dispatch(type, msg)

// 快捷函数：getters
store.__g = type => {
  if (!type) return store.getters
  return store.getters[type]
}

export default store
