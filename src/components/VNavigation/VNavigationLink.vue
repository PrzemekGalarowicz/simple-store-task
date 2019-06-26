<template lang="pug">
router-link.v-navigation__link(:to="url")
  slot
</template>

<script>
export default {
  name: 'VNavigationLink',
  props: {
    url: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
.v-navigation__link {
  @include navigation-item;
  height: 10%;

  @include screen(min-tablet) {
    height: 100%;
  }
}
</style>
