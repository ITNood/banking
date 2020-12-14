<template>
  <div>
    <Navbar />
    <div class="container">
      <div id="project">
        <div class="title relative">
          <h1>项目介绍</h1>
        </div>
        <!--项目列表 start-->
        <ul class="projectContent clear">
            <li v-for="(item,index) in items" :key="index">
                <router-link :to="{path:'detail',query:{id:item.id}}">
                    <div class="pro_img flex-center"><img :src="item.img"></div>
                    <h1 class="font-hide">{{item.title}}</h1>
                    <p class="morefont">{{item.text}}</p>
                    <span>了解详情<i class="el-icon-right"></i></span>
                </router-link>
            </li>
        </ul>
        <Pagination :value="number" :current="cur"/>
        <!--项目列表 end-->
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Pagination from '../components/page';
import Footer from "../components/footer";
import Navbar from "../components/navbar";
export default {
  components: { Footer, Navbar,Pagination },
  data() {
    return {
      number:100,
      cur:1,
      items:[
          {id:1,img:require('../../static/images/news.jpg'),title:'广州将设立绿色金融服务中心',text:'近日,广州市印发《广州市绿色金融改革创新试验区绿色企业与项目库管理实施细则(试行)》'},
          {id:2,img:require('../../static/images/project.jpg'),title:'广州将设立绿色金融服务中心',text:'近日,广州市印发《广州市绿色金融改革创新试验区绿色企业与项目库管理实施细则(试行)》'},
          {id:3,img:require('../../static/images/project.jpg'),title:'广州将设立绿色金融服务中心',text:'近日,广州市印发《广州市绿色金融改革创新试验区绿色企业与项目库管理实施细则(试行)》'},
          {id:4,img:require('../../static/images/project.jpg'),title:'广州将设立绿色金融服务中心',text:'近日,广州市印发《广州市绿色金融改革创新试验区绿色企业与项目库管理实施细则(试行)》'},
          {id:5,img:require('../../static/images/project.jpg'),title:'广州将设立绿色金融服务中心',text:'近日,广州市印发《广州市绿色金融改革创新试验区绿色企业与项目库管理实施细则(试行)》'},
          {id:6,img:require('../../static/images/project.jpg'),title:'广州将设立绿色金融服务中心',text:'近日,广州市印发《广州市绿色金融改革创新试验区绿色企业与项目库管理实施细则(试行)》'},
          {id:7,img:require('../../static/images/project.jpg'),title:'广州将设立绿色金融服务中心',text:'近日,广州市印发《广州市绿色金融改革创新试验区绿色企业与项目库管理实施细则(试行)》'},
          {id:8,img:require('../../static/images/project.jpg'),title:'广州将设立绿色金融服务中心',text:'近日,广州市印发《广州市绿色金融改革创新试验区绿色企业与项目库管理实施细则(试行)》'},

      ]
    };
  },
  created() {},
  methods: {},
};
</script>
<style scoped></style>
