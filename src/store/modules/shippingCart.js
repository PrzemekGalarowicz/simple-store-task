const state = {
  order: JSON.parse(localStorage.getItem('shippingCart')) || [],
  showShippingCart: false
}

const mutations = {
  addPhoto (state, photo) {
    state.order = [ { ...photo, quantity: 1 }, ...state.order ]
    localStorage.setItem('shippingCart', JSON.stringify(state.order))
  },
  incrementOrderedPhoto (state, photoId) {
    state.order.find(photo => {
      if (photo.id === photoId) photo.quantity++
    })
    localStorage.setItem('shippingCart', JSON.stringify(state.order))
  },
  removePhoto (state, photoId) {
    state.order = state.order.filter(photo => photo.id !== photoId)
    localStorage.setItem('shippingCart', JSON.stringify(state.order))
  },
  togglesShippingCart (state) {
    state.showShippingCart = !state.showShippingCart
  }
}

const actions = {}

const getters = {
  order: state => state.order,
  photosInCart: state => state.order.length,
  showShippingCart: state => state.showShippingCart
}

export default { namespaced: true, state, mutations, actions, getters }
