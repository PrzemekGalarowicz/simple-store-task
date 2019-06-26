<template lang="pug">
v-row
  v-loader(v-if="photoLoading" center)

  p(v-else-if="photoError") {{ photoError }}

  v-col(
    v-else
    v-for="photo in photos"
    :key="photo.id"
    size="xs-6 sm-4 md-3"
  )
    v-card(
      :height="150"
      :title="photo.title"
      :description="photo.title"
      :cover-url="photo.thumbnailUrl"
      @click="$router.push({ name: 'photo', params: { photoId: photo.id } })"
    )
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import VCard from '@/components/VCard'

export default {
  name: 'Home',
  methods: {
    ...mapActions('photos', [ 'fetchPhotos' ])
  },
  computed: {
    ...mapGetters({
      photos: 'photos/photos',
      photoLoading: 'photos/photoLoading',
      photoError: 'photos/photoError'
    })
  },
  created () {
    this.fetchPhotos()
  },
  components: {
    VCard
  }
}
</script>

<style lang="scss">

</style>
