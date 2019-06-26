<script>
/**
 * For more info go there: https://github.com/alexsasharegan/vue-functional-data-merge#readme
*/
import { mergeData } from 'vue-functional-data-merge'

export default {
  name: 'VRow',
  functional: true,
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    noMargin: {
      type: Boolean,
      default: false
    }
  },
  render (h, { props, data, children }) {
    const componentData = {
      staticClass: 'v-row',
      class: { 'v-row--no-margin': props.noMargin }
    }

    return h(props.tag, mergeData(data, componentData), children)
  }
}
</script>

<style lang="scss" scoped>
.v-row {
  @include clearfix;
  margin-right: -$col-padding-mobile;
  margin-left: -$col-padding-mobile;

  @include screen(min-desktop) {
    margin-right: -$col-padding-desktop;
    margin-left: -$col-padding-desktop;
  }

  &--no-margin {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }
}
</style>
