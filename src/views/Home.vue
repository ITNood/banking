<template>
  <div style="background: #fafafa !important">
    <el-header class="header">
      <div class="container relative">
        <img src="../../static/images/name.png" class="name" />
        <img src="../../static/images/map.png" class="map absolute" />
        <img src="../../static/images/logo.png" class="logo absolute" />
      </div>
    </el-header>
    <!--导航条-->
    <Navbar />
    <div class="container clear content">
      <!--左侧-->
      <div class="home_left left">
        <!--banner start-->
        <div id="banner">
          <Swiper1 :banner="list"/>
        </div>

        <!--项目介绍 start-->
        <div class="project">
          <div class="title relative">
            <h1>项目介绍</h1>
            <router-link to="">更多+</router-link>
          </div>
          <div class="content">
            <div
              class="content_list relative"
              v-for="(item, index) in items"
              :key="index"
            >
              <img :src="item.img" />
              <div class="content_left">
                <ul>
                  <li v-for="(list, index) in item.list" :key="index">
                    <router-link to="">{{ list.text }}</router-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--右侧-->
      <div class="home_right right">
        <!--资讯动态-->
        <div class="news">
          <div class="title relative">
            <h1>资讯动态</h1>
            <router-link to="">更多+</router-link>
          </div>
          <ul class="news_list">
            <li v-for="(todo, index) in todos" :key="index">
              <router-link to="">
                <h1 class="font-hide relative">
                  {{ todo.title }}<span>{{ todo.date }}</span>
                </h1>
                <p class="font-hide relative">
                  {{ todo.text }}<i class="el-icon-right"></i>
                </p>
              </router-link>
            </li>
          </ul>
        </div>

        <div class="unit_member relative">
          <!--理事单位-->
          <div class="unit">
            <div class="title relative">
              <h1>理事单位</h1>
              <router-link to="">更多+</router-link>
            </div>
            <ul class="unit_list">
              <li v-for="(unit, index) in units" :key="index">
                <router-link to="" class="font-hide">{{
                  unit.text
                }}</router-link>
              </li>
            </ul>
          </div>
          <!--会员登入-->
          <router-link to="" class="member_login flex-center absolute"
            ><img src="../../static/images/member.png"
          /></router-link>
        </div>
      </div>
    </div>
    <div class="container">
      <!--会员单位-->
      <div class="memberUnit">
        <div class="title relative">
          <h1>会员单位</h1>
        </div>
        <ul class="member_list flex-center">
          <li v-for="(member, index) in members" :key="index">
            <img :src="member.img" />
          </li>
        </ul>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Swiper1 from "../components/swiper"; // eslint-disable-line no-unused-vars
export default {
  components: { Navbar,Swiper1, Footer },
  data() {
    return {
      list: [
        {
          img: require("../../static/images/banner.jpg"),
          text: "用绿色金融创新打通地方经济血脉",
        },
        {
          img: require("../../static/images/banner.jpg"),
          text: "用绿色金融创新打通地方经济血脉",
        },
        {
          img: require("../../static/images/banner.jpg"),
          text: "用绿色金融创新打通地方经济血脉",
        },
        {
          img: require("../../static/images/banner.jpg"),
          text: "用绿色金融创新打通地方经济血脉",
        },
        {
          img: require("../../static/images/banner.jpg"),
          text: "用绿色金融创新打通地方经济血脉",
        },
      ],
      items: [
        {
          img: require("../../static/images/new_list1.jpg"),
          list: [
            { text: "2020年绿色金融政策解读与项目对接会成功举办" },
            { text: "2020年绿色金融政策解读与项目对接会成功举办" },
            { text: "2020年绿色金融政策解读与项目对接会成功举办" },
            { text: "2020年绿色金融政策解读与项目对接会成功举办" },
            { text: "2020年绿色金融政策解读与项目对接会成功举办" },
          ],
        },
        {
          img: require("../../static/images/new_list1.jpg"),
          list: [
            { text: "2020年绿色金融政策解读与项目对接会成功举办" },
            { text: "2020年绿色金融政策解读与项目对接会成功举办" },
            { text: "2020年绿色金融政策解读与项目对接会成功举办" },
            { text: "2020年绿色金融政策解读与项目对接会成功举办" },
            { text: "2020年绿色金融政策解读与项目对接会成功举办" },
          ],
        },
        {
          img: require("../../static/images/new_list1.jpg"),
          list: [
            { text: "2020年绿色金融政策解读与项目对接会成功举办" },
            { text: "2020年绿色金融政策解读与项目对接会成功举办" },
            { text: "2020年绿色金融政策解读与项目对接会成功举办" },
            { text: "2020年绿色金融政策解读与项目对接会成功举办" },
            { text: "2020年绿色金融政策解读与项目对接会成功举办" },
          ],
        },
      ],

      todos: [
        {
          title: "推动生态优势转化为经济优势",
          date: "12-07",
          text: "绿色产业将成为‘十四五’时期福建经济..",
          id: 1,
        },
        {
          title: "推动生态优势转化为经济优势",
          date: "12-07",
          text: "绿色产业将成为‘十四五’时期福建经济..",
          id: 1,
        },
        {
          title: "推动生态优势转化为经济优势",
          date: "12-07",
          text: "绿色产业将成为‘十四五’时期福建经济..",
          id: 1,
        },
        {
          title: "推动生态优势转化为经济优势",
          date: "12-07",
          text: "绿色产业将成为‘十四五’时期福建经济..",
          id: 1,
        },
      ],
      units: [
        { text: "中国人寿保险(集团)公司" },
        { text: "中国人寿保险(集团)公司" },
        { text: "中国人寿保险(集团)公司" },
        { text: "中国人寿保险(集团)公司" },
        { text: "中国人寿保险(集团)公司" },
        { text: "中国人寿保险(集团)公司" },
        { text: "中国人寿保险(集团)公司" },
        { text: "中国人寿保险(集团)公司" },
        { text: "中国人寿保险(集团)公司" },
        { text: "中国人寿保险(集团)公司" },
      ],
      members: [
        { img: require("../../static/images/menber1.jpg") },
        { img: require("../../static/images/menber2.jpg") },
        { img: require("../../static/images/menber3.jpg") },
        { img: require("../../static/images/menber4.jpg") },
        { img: require("../../static/images/menber5.jpg") },
        { img: require("../../static/images/menber6.jpg") },
      ],
    };
  },
  created() {
  },
  mounted() {
   
  },
  methods: {},
};
</script>
<style scoped lang="less">

</style>