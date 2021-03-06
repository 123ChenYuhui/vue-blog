// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueParticles from 'vue-particles'
import router from './router'
import '@/assets/style/index.scss'
Vue.config.productionTip = false
Vue.use(VueParticles)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
