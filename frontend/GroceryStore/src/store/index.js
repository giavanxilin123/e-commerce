import Vue from 'vue'
import Vuex from 'vuex'
import { BASE_URL, actions } from './action';
import { mutations } from './mutation';
Vue.use(Vuex)
const customer = JSON.parse(localStorage.getItem('customer'));

export default new Vuex.Store({ 
  state: {
    BASE_URL,
    customer: customer || {}, 
    popularProducts: [],
    productByType: [],
    cart:  [],
    orderHistory: [],
    checkVehicleAvailable: '',
    config: {}
  },
  mutations,
  actions
})


