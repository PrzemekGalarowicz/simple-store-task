<template lang="pug">
v-page(title="About")
  template(slot="icon")
    font-awesome-icon(:icon="aboutIcon" :style="{ color: '#155BCC' }" size="4x")

  p
    | Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    | Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    | Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</template>

<script>
import { faUser } from '@fortawesome/free-solid-svg-icons'
import VPage from '@/components/VPage'

export default {
  name: 'About',
  data () {
    return {
      aboutIcon: faUser
    }
  },
  components: {
    VPage
  }
}
</script>
