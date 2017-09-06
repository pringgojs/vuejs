// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import * as firebase from 'firebase'
import router from './router'
import { store } from './store'

Vue.use(Vuetify)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  created () {
    firebase.initializeApp({
      apiKey: "AIzaSyDCwe3xno3-KOe9UFjsHH8Q4wJ3tcneKMM",
      authDomain: "vuejs-40957.firebaseapp.com",
      databaseURL: "https://vuejs-40957.firebaseio.com",
      projectId: "vuejs-40957",
      storageBucket: "",
      messagingSenderId: "990935005244"
    })
  },
  components: { App }
})
