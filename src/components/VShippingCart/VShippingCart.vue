<template lang="pug">
.v-shipping-cart(:class="{ 'v-shipping-cart--mobile' : showShippingCart }")
  v-shipping-cart-section(
    title="Contact"
    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  )
    font-awesome-icon(slot="icon" :icon="contactIcon")

  v-shipping-cart-section(:title="cartTitle")
    font-awesome-icon(slot="icon" :icon="shoppingCartIcon")

  v-shipping-cart-order(
    :order="order"
    @increment="incrementOrderedPhoto"
    @remove="removePhoto"
  )
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons'
import VShippingCartSection from './VShippingCartSection'
import VShippingCartOrder from './VShippingCartOrder'

export default {
  name: 'VShippingCart',
  data () {
    return {
      contactIcon: faUser,
      shoppingCartIcon: faShoppingCart
    }
  },
  methods: {
    ...mapMutations('shippingCart', [ 'incrementOrderedPhoto', 'removePhoto' ])
  },
  computed: {
    ...mapGetters('shippingCart', [ 'order', 'photosInCart', 'showShippingCart' ]),
    cartTitle () {
      return `Cart ${this.photosInCart ? `( ${this.photosInCart} )` : ''}`
    }
  },
  components: {
    VShippingCartSection,
    VShippingCartOrder
  }
}
</script>

<style lang="scss">
.v-shipping-cart {
  background-color: $shipping-cart-bg-color;
  font-size: $shipping-cart-text-size;
  color: $shipping-cart-text-color;
  padding: $shipping-cart-padding;
  margin: $shipping-cart-margin;
  display: none;

  @include screen(min-tablet) {
    display: block;
  }

  @include screen(mobile) {
    &--mobile {
      position: fixed;
      top: $navigation-height-mobile;
      right: 0;
      left: 0;
      z-index: 995;
      display: block;
    }
  }
}
</style>
