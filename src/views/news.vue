<template>
  <div>
    <Navbar />
    <div class="container">
      <div id="news" class="relative">
        <div class="new_tab">
          <h1>资讯动态</h1>
          <el-tabs tab-position="left" v-model="tabs">
            <el-tab-pane label="绿色产业" name="1">
              <div class="tabscontent">
                <h2>绿色产业</h2>
                <ul class="newcontentlist">
                  <li v-for="list in news" :key="list.id">
                    <router-link
                      :to="{ path: '/details', query: { id: list.id } }"
                      class="flex-center relative"
                    >
                      <div class="new_img"><img :src="list.thumbnail" /></div>
                      <div>
                        <h3 class="relative font-hide">
                          {{ list.post_title
                          }}<span class="absolute">{{ list.create_time }}</span>
                        </h3>
                        <p class="relative morefont">
                          {{ list.post_content }}<i class="el-icon-right absolute"></i>
                        </p>
                      </div>
                    </router-link>
                  </li>
                </ul>
                <page1 :value="total" :current="cur"  @clickpage="page"/>
              </div>
            </el-tab-pane>
            <el-tab-pane label="金融政策" name="2">
              <div class="tabscontent">
                <h2>金融政策</h2>
                <ul class="newcontentlist">
                  <li v-for="list in news1" :key="list.id">
                    <router-link
                      :to="{ path: '/details', query: { id: list.id } }"
                      class="flex-center relative"
                    >
                      <div class="new_img"><img :src="list.img" /></div>
                      <div>
                        <h3 class="relative font-hide">
                          {{ list.title
                          }}<span class="absolute">{{ list.date }}</span>
                        </h3>
                        <p class="relative morefont">
                          {{ list.text }}<i class="el-icon-right absolute"></i>
                        </p>
                      </div>
                    </router-link>
                  </li>
                </ul>
                <page2 :value="total1" :current="cur1"  @clickpage="page"/>
              </div>
            </el-tab-pane>
            <el-tab-pane label="发展规划" name="3">
              <div class="tabscontent">
                <h2>发展规划</h2>
                <ul class="newcontentlist">
                  <li v-for="list in news2" :key="list.id">
                    <router-link
                      :to="{ path: '/details', query: { id: list.id } }"
                      class="flex-center relative"
                    >
                      <div class="new_img"><img :src="list.img" /></div>
                      <div>
                        <h3 class="relative font-hide">
                          {{ list.title
                          }}<span class="absolute">{{ list.date }}</span>
                        </h3>
                        <p class="relative morefont">
                          {{ list.text }}<i class="el-icon-right absolute"></i>
                        </p>
                      </div>
                    </router-link>
                  </li>
                </ul>
                <page3 :value="total2" :current="cur2" @clickpage="page" />
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import api from "../API/index";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
const page1 = () => import("@/components/page");
const page2 = () => import("@/components/page");
const page3 = () => import("@/components/page");
export default {
  components: { Footer, Navbar, page1, page2, page3 },
  data() {
    return {
      total: 0,
      total1: 0,
      total2: 0,
      cur: 1,
      cur1: 1,
      cur2: 1,
      tabs:'1',
      news: [],
      news1: [
        {
          img: require("../../static/images/news1.jpg"),
          title: "中国低碳网首届绿色产业发展交流会圆满召开",
          id: 1,
          text:
            "由促进绿色低碳经济发展专家顾问委员会与中国低碳网主办、北京国发绿色创新科技发展中心与由促进绿色低碳经济发展专家顾问委员会与中国低碳网主办、北京国发绿色创新科技发展中心与",
          date: "2020-12-16",
        },
        {
          img: require("../../static/images/news1.jpg"),
          title: "中国低碳网首届绿色产业发展交流会圆满召开",
          id: 2,
          text:
            "由促进绿色低碳经济发展专家顾问委员会与中国低碳网主办、北京国发绿色创新科技发展中心与由促进绿色低碳经济发展专家顾问委员会与中国低碳网主办、北京国发绿色创新科技发展中心与",
          date: "2020-12-16",
        },
        {
          img: require("../../static/images/news1.jpg"),
          title: "中国低碳网首届绿色产业发展交流会圆满召开",
          id: 3,
          text:
            "由促进绿色低碳经济发展专家顾问委员会与中国低碳网主办、北京国发绿色创新科技发展中心与由促进绿色低碳经济发展专家顾问委员会与中国低碳网主办、北京国发绿色创新科技发展中心与",
          date: "2020-12-16",
        },
      ],
      news2: [
        {
          img: require("../../static/images/news2.jpg"),
          title: "中国低碳网首届绿色产业发展交流会圆满召开",
          id: 1,
          text:
            "由促进绿色低碳经济发展专家顾问委员会与中国低碳网主办、北京国发绿色创新科技发展中心与由促进绿色低碳经济发展专家顾问委员会与中国低碳网主办、北京国发绿色创新科技发展中心与",
          date: "2020-12-16",
        },
        {
          img: require("../../static/images/news2.jpg"),
          title: "中国低碳网首届绿色产业发展交流会圆满召开",
          id: 2,
          text:
            "由促进绿色低碳经济发展专家顾问委员会与中国低碳网主办、北京国发绿色创新科技发展中心与由促进绿色低碳经济发展专家顾问委员会与中国低碳网主办、北京国发绿色创新科技发展中心与",
          date: "2020-12-16",
        },
        {
          img: require("../../static/images/news2.jpg"),
          title: "中国低碳网首届绿色产业发展交流会圆满召开",
          id: 3,
          text:
            "由促进绿色低碳经济发展专家顾问委员会与中国低碳网主办、北京国发绿色创新科技发展中心与由促进绿色低碳经济发展专家顾问委员会与中国低碳网主办、北京国发绿色创新科技发展中心与",
          date: "2020-12-16",
        },
      ],
    };
  },
  created() {
    this.getdata();
  },
  methods: {
    //初始化数据
    getdata() {
      api
        .choices("index/index/news_list")
        .then((res) => {
          console.log(res);
          this.news=res.list
          this.total=res.num*10
        })
        .catch((err) => {
          console.log(err);
        });
    },
    //分页请求数据
    page(val) {
       api
          .choices("index/index/news_list", { type: this.tabs,page:val })
          .then((res) => {
            if(this.tabs==1){
              this.news=res.list
            }else if(this.tabs==2){
              this.news1
            }else{
              this.news2
            }
          })
          .catch((err) => {
            console.log(err);
          });
    },
  },
};
</script>
<style scoped></style>
