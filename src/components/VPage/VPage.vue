<template lang="pug">
section.v-page
  .v-page__content
    header.v-page__header
      .v-page__icon
        slot(name="icon")

      h1.v-page__title(v-if="title") {{ title }}

    slot
</template>

<script>
export default {
  name: 'VPage',
  props: {
    title: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="scss">
.v-page {
  display: flex;
  align-items: center;
  width: 100%;

  @media screen and (min-height: 1080px) {
    height: calc(100vh - 20rem);
  }

  &__content {
    background-color: $white;
    padding: $page-padding-mobile;
    width: 100%;

    @include screen(min-tablet) {
      padding: $page-padding-tablet;
    }

    @include screen(min-desktop) {
      padding: $page-padding-desktop;
    }
  }

  &__header {
    text-align: center;
    margin-bottom: $page-header-margin;
  }

  &__icon {
    margin-bottom: $page-icon-margin;
  }

  &__title {
    font-weight: 400;
    font-size: $page-text-size-mobile;
    text-transform: uppercase;
    margin: 0;

    @include screen(min-tablet) {
      font-size: $page-text-size-desktop;
    }
  }
}
</style>
