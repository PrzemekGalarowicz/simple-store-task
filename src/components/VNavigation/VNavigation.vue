<template lang="pug">
header.v-navigation
  .v-navigation__container

    v-navigation-btn.hide--tablet.hide--desktop.hide--large-desktop(
      area-label="Toggle menu"
      @click="showMenu"
    )
      font-awesome-icon(:icon="burgerIcon")

    router-link.v-navigation__logo(to="/") Logo

    nav.v-navigation__menu(:class="{ 'v-navigation__menu--open' : isMenuShown }")
      slot

    v-navigation-btn.hide--tablet.hide--desktop.hide--large-desktop(
      v-if="hasLayoutSidebar"
      area-label="Shipping Cart"
      @click="togglesShippingCart"
    )
      font-awesome-icon(:icon="basketIcon")
      small ({{ photosInCart }})

    v-navigation-btn(area-label="Search")
      font-awesome-icon(:icon="searchIcon")

  .v-navigation__overlay(
    v-show="isMenuShown"
    area-label="Close menu"
    @click="hideMenu"
  )
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import { faBars, faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import VNavigationBtn from './VNavigationBtn'

export default {
  name: 'VNavigation',
  data () {
    return {
      burgerIcon: faBars,
      searchIcon: faSearch,
      basketIcon: faShoppingCart,
      isMenuShown: false
    }
  },
  props: {
    hasLayoutSidebar: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    '$route': {
      handler: 'hideMenu',
      immediate: false
    }
  },
  methods: {
    ...mapMutations('shippingCart', [ 'togglesShippingCart' ]),
    hideMenu () {
      this.isMenuShown = false
    },
    showMenu () {
      this.isMenuShown = true
    }
  },
  computed: {
    ...mapGetters('shippingCart', [ 'photosInCart', 'showShippingCart' ])
  },
  components: {
    VNavigationBtn
  }
}
</script>

<style lang="scss" scoped>
.v-navigation {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 990;
  display: flex;
  justify-content: center;
  height: $navigation-height-mobile;
  background-color: $navigation-bg-color;
  border-bottom: 1px solid $navigation-border-color;

  @include screen(min-tablet) {
    height: $navigation-height-desktop;
  }

  &__container {
    display: flex;
    flex-grow: 1;

    @include screen(min-tablet) {
      max-width: $breakpoint-tablet;
    }

    @include screen(desktop) {
      max-width: $breakpoint-tablet;
    }

    @include screen(large-desktop) {
      max-width: $breakpoint-desktop;
    }
  }

  &__menu {
    position: fixed;
    top: 0;
    left: -16rem;
    bottom: 0;
    width: 16rem;
    z-index: 999;
    background-color: $navigation-bg-color;
    transition: left 200ms ease-in-out;

    &--open {
      left: 0;
    }

    @include screen(min-tablet) {
      position: initial;
      top: initial;
      left: initial;
      bottom: initial;
      width: initial;
    }
  }

  &__logo {
    font-family: $second-font;
    font-size: 1.5rem;
    font-weight: 300;
    color: $dark-text;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    margin-right: auto;
    margin-left: $col-padding-desktop;
    height: 100%;
  }

  &__overlay {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 995;
    background: rgba($black, .5);

    @include screen(tablet) {
      display: none;
    }
  }
}
</style>
