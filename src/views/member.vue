<template>
  <div>
      <Navbar />
      <div class="container"></div>
      <Footer/>
  </div>
</template>

<script>
import Footer from '../components/footer'
import Navbar from '../components/navbar'
export default {
  components: {Footer,Navbar},
  data() {
    return {
    };
  },
  created() {},
  methods: {},
};
</script>
<style scoped>
</style>