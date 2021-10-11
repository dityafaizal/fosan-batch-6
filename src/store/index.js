import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 1,
    stateApi: null
  },
  mutations: {
    increment (state) {
      // mutate state
      state.count++
    },
    muttApi (state, data) {
      state.stateApi = data
    }
  },
  actions: {
    increment (context) {
      context.commit('increment')
      // console.log(data);
    },
    async getDataApi ({commit}) {
      await axios.get('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,relativehumidity_2m,windspeed_10m')
      .then(function (response) {
        // handle success
        console.log(response);
        commit('muttApi', response)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
    }
  },
  modules: {

  }
})
