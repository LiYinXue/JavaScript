import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
    smallCarList: [],
    imgArrList:[]
  },
  mutations: {
    changeSmallCarList (state,payload) {
      console.log(payload)
      state.smallCarList = payload.car_list
    }
  }
})

export default store

