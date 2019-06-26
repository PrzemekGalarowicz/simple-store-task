<template lang="pug">
div.v-loader(:class="{ 'v-loader--center' : center }")
  svg.v-loader__spinner(
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    :width="`${size}px`"
    :height="`${size}px`"
    viewBox="0 0 50 50"
    style="enable-background:new 0 0 50 50;"
    xml:space="preserve"
  )
    path(
      fill="#000"
      d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z"
    )
      animateTransform(
        attributeType="xml"
        attributeName="transform"
        type="rotate"
        from="0 25 25"
        to="360 25 25"
        dur="0.6s"
        repeatCount="indefinite"
      )
</template>

<script>
export default {
  name: 'VLoader',
  props: {
    size: {
      type: [ String, Number ],
      default: 40
    },
    center: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.v-loader {

  &--center {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  &__spinner {
    path,
    rect {
      fill: $light-blue;
    }
  }
}
</style>
