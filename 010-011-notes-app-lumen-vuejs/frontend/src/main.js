import Vue from 'vue'
import App from './App.vue'
import store from './store'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

axios.defaults.baseURL = 'http://localhost:8000/api'

Vue.use(ElementUI)

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
