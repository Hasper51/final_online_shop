import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    goods:[],
    onegoods:null
    
  },
  mutations: {
    GET_GOODS(state, payload){
      state.goods = payload
    },
    GET_ONE_GOODS(state,payload){
      state.onegoods = payload
    }
    
  },
  actions: {
    loadGoods({commit}){
      return new Promise((resolve, reject) =>{
          axios
              .get('http://localhost:3000/goods')
              .then(response => {
                  commit("GET_GOODS", response.data);
                  resolve(response);
              })
              .catch(error => {
                  reject(error);
              })
      })
    },
    loadOneGoods({commit},id){
      return new Promise((resolve, reject) =>{
          axios
              .get(`http://localhost:3000/goods/${id}`)
              .then(response => {
                  commit("GET_ONE_GOODS", response.data);
                  resolve(response);
              })
              .catch(error => {
                  reject(error);
              })
      })
  },
  },
  getters: {
    allGoods(state){
      return state.goods
    },
    oneGoods(state){
      return state.onegoods
    }
    
  }
})
