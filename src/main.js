// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

let app;
const config = {
  apiKey: "AIzaSyDwLIX16ulnR8xfgWT11DD6_tycIj-_j4I",
  authDomain: "crud-e1da1.firebaseapp.com",
  databaseURL: "https://crud-e1da1.firebaseio.com",
  projectId: "crud-e1da1",
  storageBucket: "crud-e1da1.appspot.com",
  messagingSenderId: "67616954494"

};

firebase.initializeApp(config)
firebase.auth().onAuthStateChanged(function(user) {
  if (!app) {
    /* eslint-disable no-new */
    app = new Vue({
      el: '#app',
      template: '<App/>',
      components: { App },
      router,
      store
    })
  }
});

