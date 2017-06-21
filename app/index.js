import Vue from 'vue'
import VueRouter from 'vue-router'
import VueFormGenerator from 'vue-form-generator'

Vue.use(VueRouter)
Vue.use(VueFormGenerator)

// eslint-disable-next-line no-unused-vars
var vue = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})
