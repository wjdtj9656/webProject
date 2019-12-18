import Vue from 'vue'
import './plugins/firebase'
import App from './App.vue'
import router from './router'
import store from './store'
import { Editor, Viewer } from '@toast-ui/vue-editor'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.component('editor', Editor)
Vue.component('viewer', Viewer)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
