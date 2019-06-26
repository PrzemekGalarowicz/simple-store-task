<template lang="pug">
button.v-navigation__btn(@click="click")
  slot
</template>

<script>
export default {
  name: 'VNavigationBtn',
  methods: {
    click (event) {
      this.$emit('click', event)
    }
  }
}
</script>

<style lang="scss" scoped>
.v-navigation__btn {
  @include navigation-item;
  border: 0;
  cursor: pointer;
  background-color: transparent;

  &:focus {
    background-color: transparent;
    color: $dark-text;
  }

  @include screen(min-tablet) {
    background-color: $navigation-btn-bg-color
  }
}
</style>
