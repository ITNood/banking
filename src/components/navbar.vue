<template>
  <div>
    <el-header class="header">
      <div class="container relative">
        <img src="../../static/images/name.png" class="name" />
        <img src="../../static/images/map.png" class="map absolute" />
        <router-link to="/"  class="logo absolute"><img src="../../static/images/logo.png"></router-link>
      </div>
    </el-header>
    <div class="navbar">
      <div class="container">
        <div class="relative nav">
          <div class="navlist flex-center">
              <router-link
                v-for="(item, index) in nav"
                :key="index"
                :to="item.url"
                active-class="active"
                class="flex-center"
              >
                {{ item.name }}
              </router-link>
          </div>
          <!--搜索-->
          <div class="search absolute">
            <el-input
              suffix-icon="el-icon-search"
              size="mini"
              v-model="search"
              @keyup.enter.native="onSubmit"
            ></el-input>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  components: {},
  data() {
    return {
      search: "",
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
  methods: {
    onSubmit() {
      console.log("按下了回车键！！");
    },
  },
};
</script>
<style scoped>
</style>