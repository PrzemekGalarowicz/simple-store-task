<template lang="pug">
.v-shipping-cart__section
  h3.v-shipping-cart__title(v-if="title")
    span.v-shipping-cart__title-icon(v-if="hasIcon")
      slot(name="icon")
    | {{ title }}

  p.v-shipping-cart__description(v-if="description")
    | {{ description }}
</template>

<script>
export default {
  name: 'VShippingCartSection',
  props: {
    title: {
      type: String,
      default: null
    },
    description: {
      type: String,
      default: null
    }
  },
  computed: {
    hasIcon () {
      return !!this.$slots['icon']
    }
  }
}
</script>

<style lang="scss">
.v-shipping-cart {

  &__title {
    font-size: $shipping-cart-title-text-size;
    font-weight: $shipping-cart-title-text-weight;
    color: $shipping-cart-title-text-color;
    margin: $shipping-cart-title-margin;
  }

  &__title-icon {
    padding-right: 1rem;
  }

  &__description {
    font-size: $shipping-cart-desc-text-size;
    font-weight: $shipping-cart-desc-text-weight;
    color: $shipping-cart-desc-text-color;
    line-height: 1.3;
    margin: $shipping-cart-desc-margin;
  }
}
</style>
