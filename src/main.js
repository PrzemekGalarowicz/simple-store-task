import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/styles/main.scss'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { VContainer, VRow, VCol } from '@/components/VGrid'
import VLoader from '@/components/VLoader'
import VButton from '@/components/VButton'

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('VContainer', VContainer)
Vue.component('VRow', VRow)
Vue.component('VCol', VCol)
Vue.component('VLoader', VLoader)
Vue.component('VButton', VButton)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
