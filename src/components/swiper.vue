<template>
  <div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in banner" :key="index">
          <img :src="item.img" />
          <p>{{ item.text }}</p>
        </div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
      <!-- Add Arrows -->
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  name: "Swiper1",
  props: { banner: Array },
  components: {},
  data() {
    return {};
  },
  mounted() {
    var swiper = new Swiper(".swiper-container", {// eslint-disable-line no-unused-vars
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      autoplay:{
        delay:5000,
        stopOnLastSlide:true,
        disableOnInteraction:false,
      },
      loop: true,
    });
  },
  created() {},
  methods: {},
};
</script>
<style lang="less">
:root{
  --swiper-theme-color:white;
}
.swiper-container {
  width: 100%;
  height: 100%;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.swiper-pagination-bullet {
  background-color: white;
  opacity: 1;
}
.swiper-pagination-bullet-active {
  background-color: #4fb149;
}
.swiper-slide {
  position: relative;
  p {
    position: absolute;
    background: rgba(0, 0, 0, 0.6);
    width: 100%;
    padding: 10px 15px;
    bottom: 0;
    left: 0;
    right: 0;
    font-size: 18px;
    color: white;
    text-align: left;
  }
}
.swiper-pagination{
  text-align: right;
  right: 20px !important;
}
.swiper-container-horizontal>.swiper-pagination-bullets, .swiper-pagination-custom, .swiper-pagination-fraction{
  left: -20px;
  bottom: 15px;
}
.swiper-button-next:after, .swiper-button-prev:after{
  font-size: 30px;
}
</style>