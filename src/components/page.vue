<template>
  <div>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="value"
      :current-page="current"
      @current-change="handleCurrentChange"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: ["value",],
  components: {},
  data() {
    return {
        current:1,
    };
  },
  created() {},
  methods: {
    handleCurrentChange(val) {
      this.current = val;
      console.log(this.current);
    },
  },
};
</script>
<style>
.el-pagination {
  margin-bottom: 30px;
  text-align: center;
}
.el-pagination.is-background .el-pager li:not(.disabled).active,
.el-pagination.is-background .el-pager li:not(.disabled):hover {
  background: #164545;
  color: white;
}
.el-pagination.is-background .btn-next, .el-pagination.is-background .btn-prev, .el-pagination.is-background .el-pager li{
    background: white;
    color: #5f5f5f;
    border:1px solid #eee;
}
</style>
