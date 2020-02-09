// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.prototype.$http = axios

Vue.config.productionTip = false

const store = new Vuex.Store({
  state: {
    channels: '',
    channelIndex: 0,
    channelData: '',
    newDataIndex: '',
    isActive: 0,
    load: true,
    showMy: false,
    showLogin: false,
    collection: JSON.parse(localStorage.getItem('collection'))|| [],
    likeImg: require("./assets/like.png")
  },
  mutations: {
    muChannels(state, data) {
      state.channels = data
    },
    muChannelIndex(state, index) {
      state.channelIndex = index
    },
    muGetData(state, data) {
      state.channelData = data
    },
    muNewDataIndex(state, index) {
      state.newDataIndex = index
    },
    increment(state, index) {
      state.channels.splice(index, 1)
    },
    decrement(state, item) {
      state.channels.push(item)
    },
    loading(state, statu) {
      state.load = statu
    },
    muIsActive(state, index) {
      state.isActive = index
    },
    muShowMy(state, statu) {
      state.showMy = statu
    },
    muShowLogin(state, statu) {
      state.showLogin = statu
    },
    muCollect(state, data) {
      state.collection.push(data)
      // state.collection.reverse()
    },
    muLike(state, data) {
      state.collection.splice(state.collection.indexOf(data), 1)
    },
    muLikeImg(state, url) {
      state.likeImg = url
    }
  },
  actions: {
    acChannels({ commit, state }) {
      return new Promise((resolve, reject) => {
        axios.get('/api/channel')
          .then(res => {
            // console.log(res);
            commit('muChannels', res.data.result)
          })
        resolve()
      })
    },
    acGetData({ commit, state }, channel) {
      return new Promise((resolve, reject) => {
        axios.get('/api/channel/' + channel)
          .then(res => {
            if (res.data.msg == "请求超过次数限制") {
              reject({ commit, state });
            } else {
              commit('muGetData', res.data.result.list)
              store.state.load = false
              resolve()
            }
          })
      
      }).catch(({ commit, state }) => {
        console.log("aaaa")
      })
      // axios.post('http://api.avatardata.cn/TouTiao/Query?key=2a884575156d4ff6b7f022a9890fcad2&type=top').then(res=>{
      //   console.log(res)
      //     });
    }
  }
})
store.subscribe((mutations,state)=>{
  localStorage.setItem('collection',JSON.stringify(state.collection))
})
export default store
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
