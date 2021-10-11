<template>
  <div id="app">
    <Header />
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  },
  mounted() {
    this.getApi();
  },
  methods: {
    async getApi() {
        try {
          await this.$store.dispatch('getDataApi')
    
        } catch (error) {
            console.log(error)
        }
    },
  }
}
</script>

<style lang="scss">
$base-color: #c6538c;

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  background: green;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.footer {
  width: 100%;
  height: 80px;
  background: green;
}
</style>
