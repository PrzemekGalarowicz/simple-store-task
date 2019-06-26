<template lang="pug">
v-page(title="Error 404")
  template(slot="icon")
    font-awesome-icon(:icon="errorIcon" :style="{ color: '#FF6B00' }" size="4x")

  p Oops… It seems that something is missing…
  p Back to the <router-link to="/">home page</router-link>.
</template>

<script>
import { faExclamation } from '@fortawesome/free-solid-svg-icons'
import VPage from '@/components/VPage'

export default {
  name: 'NotFoundComponent',
  data () {
    return {
      errorIcon: faExclamation
    }
  },
  components: {
    VPage
  }
}
</script>
