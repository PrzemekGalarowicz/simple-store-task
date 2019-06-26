<template lang="pug">
button.v-button(
  :class="`v-button--${variant} v-button--${size}`"
  @click="click"
)
  slot
</template>

<script>
const validVariants = [ 'default', 'info', 'success' ]
const validSizes = [ 'small', 'medium', 'large' ]

export default {
  name: 'VButton',
  props: {
    variant: {
      type: String,
      default: 'default',
      validator: val => validVariants.includes(val)
    },
    size: {
      type: String,
      default: 'medium',
      validator: val => validSizes.includes(val)
    }
  },
  methods: {
    click (event) {
      this.$emit('click', event)
    }
  }
}
</script>

<style lang="scss" scoped>
.v-button {
  font-weight: $button-font-weight;
  min-width: $button-min-width;
  white-space: nowrap;

  &--small {
    font-size: $button-text-size-small;
    padding: $button-padding-small;
    min-width: $button-min-width;
  }

  &--medium {
    font-size: $button-text-size-medium;
    padding: $button-padding-medium;
    min-width: $button-min-width + 2rem;
  }

  &--large {
    font-size: $button-text-size-large;
    padding: $button-padding-desktop;
    min-width: $button-min-width + 8rem;
  }

  &--default {
    @include button(
      $button-bg-color-default,
      $button-bg-color-default-hover,
      $button-bg-color-default-active,
      $button-text-color-second
    )
  }

  &--info {
    @include button(
      $button-bg-color-info,
      $button-bg-color-info-hover,
      $button-bg-color-info-active,
      $button-text-color
    )
  }

  &--success {
    @include button(
      $button-bg-color-success,
      $button-bg-color-success-hover,
      $button-bg-color-success-active,
      $button-text-color
    )
  }
}
</style>
