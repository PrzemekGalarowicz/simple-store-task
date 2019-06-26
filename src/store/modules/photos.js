import axios from 'axios'

const state = {
  photos: [],
  currentPhoto: null,
  photoLoading: false,
  photoError: false
}

const mutations = {
  setPhotos (state, photos) {
    state.photos = photos
  },
  setCurrentPhoto (state, photo) {
    state.currentPhoto = photo
  },
  setPhotoLoading (state, payload) {
    state.photoLoading = payload
  },
  setPhotoError (state, payload) {
    state.photoError = payload
  }
}

const actions = {
  fetchPhotos ({ commit }) {
    commit('setPhotoLoading', true)

    axios.get('photos?_page=1&_limit=20')
      .then(response => {
        commit('setPhotos', response.data)
        commit('setPhotoLoading', false)
      })
      .catch(error => {
        commit('setPhotoError', error.message)
        commit('setPhotoLoading', false)
      })
  },
  fetchPhoto ({ commit }, photoId) {
    if (!photoId) return

    commit('setPhotoLoading', true)

    axios.get(`photos/${photoId}`)
      .then(response => {
        commit('setCurrentPhoto', response.data)
        commit('setPhotoLoading', false)
      })
      .catch(error => {
        commit('setPhotoError', error.message)
        commit('setPhotoLoading', false)
      })
  }
}

const getters = {
  photos: state => state.photos,
  currentPhoto: state => state.currentPhoto,
  photoLoading: state => state.photoLoading,
  photoError: state => state.photoError
}

export default { namespaced: true, state, mutations, actions, getters }
