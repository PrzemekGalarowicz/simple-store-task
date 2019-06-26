<template lang="pug">
.v-card(:style="styles" @click="click")
  vue-clazy-load.v-card__cover(
    v-if="coverUrl"
    :src="coverUrl"
    :style="defaultHeight"
  )
    img.v-card__image(:src="coverUrl" :style="defaultHeight")
    template(slot="placeholder")
      v-loader(center)

  .v-card__container
    .v-card__content(:class="`v-card__content--${this.size}`")
      h3.v-card__title(:class="titleClasses") {{ title }}
      span.v-card__desc(v-if="description" :class="descClasses") {{ description }}

    .v-card__footer(:class="`v-card__content--${this.size}`")
      slot(name="footer")
</template>

<script>
import { VueClazyLoad } from 'vue-clazy-load'

export default {
  name: 'VCard',
  props: {
    title: {
      type: String,
      default: null
    },
    description: {
      type: String,
      default: null
    },
    coverUrl: {
      type: String,
      default: null
    },
    size: {
      type: String,
      default: 'small',
      validator: val => [ 'small', 'large' ].includes(val)
    },
    backgroundColor: {
      type: String,
      default: null
    },
    height: {
      type: [String, Number],
      default: 'auto'
    },
    dark: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    click (event) {
      this.$emit('click', event)
    }
  },
  computed: {
    titleClasses () {
      return `v-card__title--${this.size} ${this.dark ? 'v-card__title--light' : null}`
    },
    descClasses () {
      return `v-card__title--${this.size} ${this.dark ? 'v-card__desc--light' : null}`
    },
    styles () {
      return this.backgroundColor ? { backgroundColor: this.backgroundColor } : null
    },
    defaultHeight () {
      return this.height === 'auto' ? null : { height: `${this.height}px` }
    }
  },
  components: {
    VueClazyLoad
  }
}
</script>

<style lang="scss">
.v-card {
  background-color: $card-bg-color;
  box-shadow: 0 3px 5px 1px rgba($black, .05);
  margin-bottom: $card-margin-bottom-mobile;
  transition: box-shadow 200ms ease-in-out;
  cursor: pointer;

  @include screen(min-desktop) {
    margin-bottom: $card-margin-bottom-desktop;
  }

  &:hover {
    box-shadow: 0 5px 10px 5px rgba($black, .10);
  }

  &__cover {
    position: relative;
    background-color: $card-cover-bg-color;
    border-bottom: 1px solid $card-border-color;
  }

  &__image {
    @include center-block;
    width: initial;
    max-height: initial;
    object-fit: cover; // scale-down;
    max-width: 100%;
    height: auto;
  }

  &__content,
  &__footer {
    padding: $card-content-padding-mobile;

    @include screen(min-tablet) {
      padding: $card-content-padding-desktop;
    }

    &--large {

      @include screen(min-tablet) {
        padding: $card-content-padding-large-desktop;
      }
    }
  }

  &__container {
    @include screen(min-tablet) {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  &__title {
    font-size: $card-title-text-size-mobile;
    font-weight: $card-title-text-weight;
    color: $card-title-text-color;
    margin: $card-title-margin-desktop;

    @include screen(min-tablet) {
      font-size: $card-title-text-size-desktop;
    }

    &--large {
      height: auto !important;

      @include screen(min-tablet) {
        font-size: $card-title-text-size-large-desktop;
      }
    }

    &--light {
      color: $white;
    }
  }

  &__desc {
    font-size: $card-desc-text-size;
    font-weight: $card-desc-text-weight;
    color: $card-desc-text-color;

    &--large {
      height: auto !important;

      @include screen(min-tablet) {
        font-size: $card-desc-text-size-large-desktop;
      }
    }

    &--light {
      color: rgba($white, .75);
    }
  }

  &__title,
  &__desc {
    @include multiline-truncute(20px)
  }
}
</style>
