<template lang="pug">
.v-shipping-cart__order(:class="{ 'v-shipping-cart__order--empty' : isEmpty }")
    span(v-if="isEmpty") Cart is empty

    ul.v-shipping-cart__list(v-else)
      li.v-shipping-cart__item(v-for="item in order" :key="item.id")
        <span class="v-shipping-cart__quantity">{{ item.quantity }}</span> {{ item.title }}

        .v-shipping-cart__item-actions
          v-button(variant="success" size="small" @click="increment(item.id)")
            font-awesome-icon(:icon="incrementIcon")
          v-button(size="small" @click="remove(item.id)")
            font-awesome-icon(:icon="removeIcon")
</template>

<script>
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons'

export default {
  name: 'VShippingCartOrder',
  data () {
    return {
      incrementIcon: faPlus,
      removeIcon: faTimes
    }
  },
  props: {
    order: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    remove (id) {
      this.$emit('remove', id)
    },
    increment (id) {
      this.$emit('increment', id)
    }
  },
  computed: {
    isEmpty () {
      return !this.order.length
    }
  }
}
</script>

<style lang="scss">
.v-shipping-cart {

  &__order {
    border: $shipping-order-border;
    min-height: $shipping-order-min-height;
    max-height: $shipping-order-max-height;
    overflow: auto;

    &--empty {
      color: rgba($white, .5);
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  &__item {
    @include truncute;
    position: relative;
    background-color: $shipping-cart-basket-color;
    padding: $shipping-cart-basket-space $shipping-cart-basket-space + 4;
    margin: $shipping-cart-basket-space;
    cursor: pointer;

    &:hover {
      .v-shipping-cart__item-actions {
        display: flex;
      }
    }
  }

  &__item-actions {
    position: absolute;
    top: 0;
    right: $shipping-cart-basket-space;
    bottom: 0;
    left: 0;
    align-items: center;
    justify-content: flex-end;
    display: flex;

    @include screen (min-tablet) {
      display: none;
    }
  }

  &__quantity {
    font-weight: $shipping-cart-quantity-text-weight;
    color: $shipping-cart-quantity-color;
    padding-right: $shipping-cart-basket-space;
  }
}
</style>
