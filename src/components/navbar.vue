<template>
  <div>
    <el-header class="header">
      <div class="container relative">
        <img src="../../static/images/name.png" class="name" />
        <img src="../../static/images/map.png" class="map absolute" />
        <img src="../../static/images/logo.png" class="logo absolute" />
      </div>
    </el-header>
    <div class="navbar">
      <div class="container">
        <div class="relative nav">
          <ul class="navlist flex-center">
            <li v-for="(item, index) in nav" :key="index">
              <router-link
                :to="item.url"
                active-class="active"
                class="flex-center"
              >
                {{ item.name }}
              </router-link>
            </li>
          </ul>
          <!--搜索-->
          <div class="search absolute">
            <el-input suffix-icon="el-icon-search" size="mini" v-model="search"></el-input>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  props: ["search"],
  components: {},
  data() {
    return {
      nav: [
        { name: "首页", url: "/" },
        { name: "资讯动态", url: "/news" },
        { name: "项目介绍", url: "/project" },
        { name: "加入会员", url: "/member" },
        { name: "会员单位", url: "/memberunit" },
        { name: "加入我们", url: "/join" },
      ],
    };
  },
  created() {},
  methods: {},
};
</script>
<style scoped>
</style>