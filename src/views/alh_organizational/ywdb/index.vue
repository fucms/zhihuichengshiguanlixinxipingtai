<template>
  <div class="app-container">
    <div class="filter-container">
      <el-container>
        <el-aside width="250px">
          <LeftDetails ref="LeftDetails" />
        </el-aside>
        <el-main>
          <RightDetails ref="RightDetails" />
        </el-main>
      </el-container>
    </div>
  </div>
</template>

<script>
import LeftDetails from './components/leftDetails.vue'
import RightDetails from './components/rightDetails.vue'
export default {
  components: {
    LeftDetails,
    RightDetails
  },
  data() {
    return {

    }
  },
  computed: {},
  mounted() {

  },
  methods: {

  }
}
</script>

<style lang="less" scoped>
.el-aside {
    height: 80vh;
    border: 1px solid #eee;
    border-radius: 5px;
    padding: 10px;
    box-sizing: border-box;;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
}

::v-deep .el-tree {
    background: unset;
}

::v-deep .el-tree-node__content {
    padding: 18px;
}

.el-main {
    padding: 0 10px 10px 10px;
}
</style>
