<template lang="pug">
div
  v-loader(v-if="photoLoading" center)

  p(v-else-if="photoError") {{ photoError }}

  v-card(
    v-else
    :title="currentPhoto.title"
    :description="currentPhoto.title"
    :cover-url="currentPhoto.url"
    height="600"
    dark
    size="large"
    background-color="#155BCC"
  )
    template(slot="footer")
      v-button(
        variant="success"
        size="large"
        :disabled="isAdded"
        @click="addPhoto(currentPhoto)"
      ) {{ buttonText }}
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
import VCard from '@/components/VCard'

export default {
  name: 'Photo',
  methods: {
    ...mapMutations({
      addPhoto: 'shippingCart/addPhoto',
      setCurrentPhoto: 'photos/setCurrentPhoto'
    }),
    ...mapActions('photos', [ 'fetchPhoto' ])
  },
  computed: {
    ...mapGetters({
      order: 'shippingCart/order',
      currentPhoto: 'photos/currentPhoto',
      photoLoading: 'photos/photoLoading',
      photoError: 'photos/photoError'
    }),
    isAdded () {
      return this.currentPhoto ? this.order.find(item => item.id === this.currentPhoto.id) : false
    },
    buttonText () {
      return this.isAdded ? 'Added' : 'Add to Cart'
    }
  },
  created () {
    const params = this.$router.history.current.params
    if ('photoId' in params) this.fetchPhoto(params.photoId)
    else console.log('error!!')
  },
  destroyed () {
    this.setCurrentPhoto(null)
  },
  components: {
    VCard
  }
}
</script>
