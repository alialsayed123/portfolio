<template>
  <v-app dark>
    <navbar />
    <Nuxt />
  </v-app>
</template>

<script>
import navbar from '@/components/navbar'
export default {
  components: {
    navbar,
  },
  data() {
    return {}
  }
}
</script>
<style lang="scss" scoped>
#app {
  font-family: 'Biko', sans-serif;
  ::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
}
</style>
