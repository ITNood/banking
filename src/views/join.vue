<template>
  <div>
      <Navbar/>
      <div class="container"></div>
      <Footer/>
  </div>
</template>

<script>
import Navbar from '../components/navbar'
import Footer from '../components/footer'
export default {
  components: {Footer,Navbar},
  data() {
    return {
      value:''
    };
  },
  created() {},
  methods: {},
};
</script>
<style scoped>
</style>