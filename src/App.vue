<template lang="pug">
#app
  v-navigation(:has-layout-sidebar="layout")
    v-navigation-link(
      v-for="item in navigation"
      :url="item.url"
      :key="item.id"
    ) {{ item.name }}

  v-container
    .v-layout
      .v-layout__sidebar(v-if="layout")
        router-view(name="sidebar")

      .v-layout__content(:class="{ 'v-layout__content--center' : !layout }")
        transition(name="router" mode="out-in")
          router-view
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import {
  VNavigation,
  VNavigationLink,
  VNavigationBtn
} from '@/components/VNavigation'

export default {
  name: 'App',
  data () {
    return {
      layout: false,
      navigation: [
        { id: '1dasdas', name: 'Home', url: '/' },
        { id: '2fdgdfgd', name: 'About', url: '/about' },
        { id: '3iouiou', name: 'Contact', url: '/contact' }
      ]
    }
  },
  watch: {
    '$route': {
      handler: 'updateLayout',
      immediate: true
    }
  },
  methods: {
    ...mapMutations('photos', [ 'setPhotoLoading', 'setPhotoError' ]),
    updateLayout () {
      this.layout = 'sidebar' in this.$router.history.current.meta
      if (this.photoLoading) this.setPhotoLoading(false)
      if (this.photoError) this.setPhotoError(false)
    }
  },
  computed: {
    ...mapGetters('photos', [ 'photoLoading', 'photoError' ])
  },
  components: {
    VNavigation,
    VNavigationLink,
    VNavigationBtn
  }
}
</script>

<style lang="scss">
.v-layout {
  @include clearfix;

  &__sidebar,
  &__content {

    @include screen (min-tablet) {
      float: left;
    }
  }

  &__content {

    @include screen (min-tablet) {
      margin-left: $layout-content-margin-tablet;
      width: $layout-content-width-tablet;
    }

    @include screen (min-desktop) {
      margin-left: $layout-content-margin-desktop;
      width: $layout-content-width-desktop;
    }

    &--center {
      justify-content: center;
      margin: auto;
      float: none;
    }
  }

  &__sidebar {

    @include screen (min-tablet) {
      width: $layout-sidebar-width-tablet;
    }

    @include screen (min-desktop) {
      width: $layout-sidebar-width-desktop;
    }
  }
}

.router {

  &-enter-active,
  &-leave-active {
    transition: opacity 300ms, transform 300ms
  }

  &-enter,
  &-leave-to {
    opacity: 0;
    transform: translateY(-10%)
  }
}
</style>
