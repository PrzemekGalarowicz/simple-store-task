<template lang="pug">
v-page(title="Contact")
  template(slot="icon")
    font-awesome-icon(:icon="aboutIcon" :style="{ color: '#155BCC' }" size="4x")

  address.v-address
    a(href="mailto:client@client.pl") client@client.pl
    br
    br
    a(href="tel:123456789") 123 - 456 - 789
    br
    a(href="tel:887236324") 887 - 236 - 324
    br
    br
    | Street 17
    br
    | 00 - 000 City
</template>

<script>
import { faUser } from '@fortawesome/free-solid-svg-icons'
import VPage from '@/components/VPage'

export default {
  name: 'Contact',
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

<style lang="scss">
.v-address {
  text-align: center;
  font-style: normal;

  a {
    color: $light-text;
  }
}
</style>
