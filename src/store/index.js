import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import routeMock from '../api-mock'

// axios mock method
const mock = new MockAdapter(axios)

mock.onGet("/api/products").reply(200, {
  ...routeMock[0].response.data
})

for (let i=1; i<6; i++){
  const mockdata = routeMock[i];
  mock.onGet(mockdata.url).reply(mockdata.status,{
    ...routeMock[i].response.data
  })
}

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    product:{},
    products:[],
    carts:[],
    shipping:{},
    payment: {}
  },
  mutations: {
    setProduct (state, value) {
      state.product = value
    },
    setProducts (state, value) {
      state.products = value
    }
  },
  actions: {
    getProducts ({ commit }) {
      axios.get("/api/products").then(function (response) {
        commit('setProducts', response.data)
      });
    },
    getProduct ({ commit }, param) {
      axios.get("/api/products/" + param.id).then(function (response) {
        commit('setProduct', response.data)
      });
    }
  },
  getters: {
    products: state => state.products,
    product: state => state.product
  }

})
