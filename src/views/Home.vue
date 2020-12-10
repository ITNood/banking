<template>
  <div style="background: #fafafa !important">
    <Navbar :search="value"/>
    <div class="container clear content">
      <!--左侧-->
      <div class="home_left left">
        <!--banner start-->
        <div id="banner">
          <Swiper1 :banner="list" />
        </div>

        <!--项目介绍 start-->
        <div class="project">
          <div class="title relative">
            <h1>项目介绍</h1>
            <router-link :to="{ path: '/', query: { id: this.id } }">更多+</router-link>
          </div>
          <div class="content">
            <div
              class="content_list relative"
              v-for="(item, index) in items"
              :key="index"
            >
              <router-link to="" class="content_img"><img :src="item.img" /></router-link>
              <div class="content_left">
                <ul>
                  <li v-for="(list, index) in item.list" :key="index" class="relative">
                    <router-link :to="{ path: '/', query: { id: list.id } }">{{
                      list.title
                    }}</router-link>
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
            <router-link :to="{ path: '/', query: { id: this.newsid } }"
              >更多+</router-link
            >
          </div>
          <ul class="news_list">
            <li v-for="(todo, index) in todos" :key="index">
              <router-link :to="{ path: '/', query: { id: todo.id } }">
                <h1 class="font-hide relative">
                  {{ todo.title }}<span>{{ todo.create_time }}</span>
                </h1>
                <p class="font-hide relative">
                  {{ todo.post_excerpt }}<i class="el-icon-right"></i>
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
              <router-link :to="{ path: '/', query: { id: this.unitid } }"
                >更多+</router-link
              >
            </div>
            <ul class="unit_list">
              <li v-for="(unit, index) in units" :key="index">
                <router-link
                  :to="{ path: '/', query: { id: unit.id } }"
                  class="font-hide"
                  >{{ unit.text }}</router-link
                >
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
import api from "../API/index";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Swiper1 from "../components/swiper";
export default {
  components: { Navbar, Swiper1, Footer },
  data() {
    return {
      value:'',
      id: "",
      newsid: "",
      unitid: "",
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
        // {
        //   img: require("../../static/images/new_list1.jpg"),
        //   list: [
        //     { text: "2020年绿色金融政策解读与项目对接会成功举办" ,id:'1'},
        //     { text: "2020年绿色金融政策解读与项目对接会成功举办",id:'1' },
        //     { text: "2020年绿色金融政策解读与项目对接会成功举办" ,id:'1'},
        //     { text: "2020年绿色金融政策解读与项目对接会成功举办",id:'1' },
        //     { text: "2020年绿色金融政策解读与项目对接会成功举办",id:'1' },
        //   ],
        // },
        // {
        //   img: require("../../static/images/new_list1.jpg"),
        //   list: [
        //     { text: "2020年绿色金融政策解读与项目对接会成功举办" },
        //     { text: "2020年绿色金融政策解读与项目对接会成功举办" },
        //     { text: "2020年绿色金融政策解读与项目对接会成功举办" },
        //     { text: "2020年绿色金融政策解读与项目对接会成功举办" },
        //     { text: "2020年绿色金融政策解读与项目对接会成功举办" },
        //   ],
        // },
        // {
        //   img: require("../../static/images/new_list1.jpg"),
        //   list: [
        //     { text: "2020年绿色金融政策解读与项目对接会成功举办" },
        //     { text: "2020年绿色金融政策解读与项目对接会成功举办" },
        //     { text: "2020年绿色金融政策解读与项目对接会成功举办" },
        //     { text: "2020年绿色金融政策解读与项目对接会成功举办" },
        //     { text: "2020年绿色金融政策解读与项目对接会成功举办" },
        //   ],
        // },
      ],

      todos: [],
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
    this.getdata();
  },
  mounted() {},
  methods: {
    getdata() {
      api
        .choices("index")
        .then((res) => {
          //if(res.status==200){
            console.log(res)
            this.todos=res.barnd
            this.items=res.items
         // }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<style scoped lang="less"></style>
