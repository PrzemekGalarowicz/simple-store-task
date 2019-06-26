import Vue from 'vue'
import Vuex from 'vuex'

import photos from './modules/photos'
import shippingCart from './modules/shippingCart'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: { photos, shippingCart }
})

export default store
