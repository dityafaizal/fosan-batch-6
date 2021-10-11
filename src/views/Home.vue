<template>
  <div class="home">
    <img alt="Vue logo" class="m-auto" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div class="text-secondary">data dari state {{ countStore }}</div>

    <div v-if="getStateApi" class="text-primary">data dari state API {{ getStateApi.data.hourly_units.time }}</div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data() {
    return {
      countStore: null
    }
  },
  mounted() {
    const dataPay = 10

    this.countStore = this.$store.state.count
  },
  computed: {
    getStateApi() {
        return this.$store.state.stateApi
    }
  }
}
</script>
