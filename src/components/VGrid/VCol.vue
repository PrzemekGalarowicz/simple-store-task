<script>
/**
 * For more info go there: https://github.com/alexsasharegan/vue-functional-data-merge#readme
*/
import { mergeData } from 'vue-functional-data-merge'

const sizes = [
  'xs-1', 'xs-2', 'xs-3', 'xs-4', 'xs-5', 'xs-6', 'xs-7', 'xs-8', 'xs-9', 'xs-10', 'xs-11', 'xs-12',
  'sm-1', 'sm-2', 'sm-3', 'sm-4', 'sm-5', 'sm-6', 'sm-7', 'sm-8', 'sm-9', 'sm-10', 'sm-11', 'sm-12',
  'md-1', 'md-2', 'md-3', 'md-4', 'md-5', 'md-6', 'md-7', 'md-8', 'md-9', 'md-10', 'md-11', 'md-12',
  'lg-1', 'lg-2', 'lg-3', 'lg-4', 'lg-5', 'lg-6', 'lg-7', 'lg-8', 'lg-9', 'lg-10', 'lg-11', 'lg-12'
]

export default {
  name: 'VCol',
  functional: true,
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    center: {
      type: Boolean,
      default: false
    },
    noPadding: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'xs-12',
      validator: value => value
        ? value.split(' ').some(items => sizes.includes(items))
        : ['xs-12']
    },
    offset: {
      type: String,
      default: null,
      validator: value => value
        ? value.split(' ').some(items => sizes.includes(items))
        : false
    }
  },
  render (h, { props, data, children }) {
    const sizes = props.size
      ? props.size.split(' ').map(size => `v-col--${size}`)
      : ['xs-12']

    const offsets = props.offset
      ? props.offset.split(' ').map(offset => `v-col--offset-${offset}`)
      : []

    const noPadding = props.noPadding ? [ 'v-col--no-padding' ] : []

    const center = props.center ? [ 'v-col--center' ] : []

    const componentData = {
      staticClass: 'v-col',
      class: [ ...sizes, ...offsets, ...noPadding, ...center ]
    }

    return h(props.tag, mergeData(data, componentData), children)
  }
}
</script>

<style lang="scss" scoped>
.v-col {
  padding-right: $col-padding-mobile;
  padding-left: $col-padding-mobile;
  float: left;

  @include screen(min-desktop) {
    padding-right: $col-padding-desktop;
    padding-left: $col-padding-desktop;
  }

  &--no-padding {
    padding-right: 0 !important;
    padding-left: 0 !important;
  }

  &--center {
    margin-right: auto !important;
    margin-left: auto !important;
    float: none !important;
  }

  @media only screen and #{$mobile} {
    @for $i from 1 through 12 {
      @include col('xs', $i)
    }
  }

  @media only screen and #{$min-tablet} {
    @for $i from 1 through 12 {
      @include col('sm', $i)
    }
  }

  @media only screen and #{$min-desktop} {
    @for $i from 1 through 12 {
      @include col('md', $i)
    }
  }

  @media only screen and #{$min-large-desktop} {
    @for $i from 1 through 12 {
      @include col('lg', $i)
    }
  }
}
</style>
