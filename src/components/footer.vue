<template>
  <div>
    <div id="footer">
      <div class="container">
        <div class="footerContent">
          <div class="listname">
            <router-link
              :to="foot.url"
              v-for="(foot, index) in foots"
              :key="index"
              >{{ foot.name }}</router-link
            >
          </div>
          <div class="listname">
            <router-link
              :to="foot.url"
              v-for="(foot, index) in footers"
              :key="index"
              >{{ foot.name }}</router-link
            >
          </div>
          <div class="copy">
              <p>Copyright © 2012 ceda.eco.gov.cn Inc. All Rights Reserved. 绿色金融委员会 版权所有</p>
              <p>京ICP备12047798号—1</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  components: {},
  data() {
    return {
      foots: [
        { url: "", name: "中国人民共和国资源部" },
        { url: "", name: "中华人民共和国工业和信息化部" },
        { url: "", name: "中华人民共和国民政部" },
      ],
      footers: [
        { url: "", name: "中华人民共和国农业农村部" },
        { url: "", name: "中华人民共和国水利部" },
        { url: "", name: "中华人民共和国生态环境部" },
        { url: "", name: "中国林业生态发展促进会" },
        { url: "", name: "生态中国网" },
      ],
    };
  },
  created() {},
  methods: {},
};
</script>
<style scoped>
</style>f