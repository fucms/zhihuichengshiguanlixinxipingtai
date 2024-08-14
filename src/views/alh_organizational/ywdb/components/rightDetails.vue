<template>
  <div>
    <div v-if="form.label">
      <el-input v-model="listQuery.filter" style="width: 200px" class="filter-item"
        @keyup.enter.native="handleFilter" />
      <el-button class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">
        搜索
      </el-button>
      <el-button class="filter-item" style="margin-left: 10px" type="primary" icon="el-icon-plus"
        @click="handleCreate">新增</el-button>
      <el-button class="filter-item" style="margin-left: 10px" type="primary" icon="el-icon-bottom"
        @click="handleImport">导入</el-button>
      <el-button class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-top"
        @click="handleDownload">导出</el-button>
      <el-button type="success" plain style="display: flex;float: right;" :disabled="true">{{ form.label }}</el-button>
      <hr>
    </div>

    <el-table :key="tableKey" v-loading="listLoading" :data="list" border fit highlight-current-row style="width: 100%">
      <el-table-column label="角色名称" prop="index" align="center" min-width="50">
        <template slot-scope="{ row }">
          <span>{{ row.index }}</span>
        </template>
      </el-table-column>
      <el-table-column label="角色状态" prop="index" align="center" min-width="50">
        <template slot-scope="{ row }">
          <span>{{ row.index }}</span>
        </template>
      </el-table-column>
      <el-table-column label="角色序号" prop="code" align="center">
        <template slot-scope="{ row }">
          <span>{{ row.code }}</span>
        </template>
      </el-table-column>
      <el-table-column label="角色描述" prop="code" align="center">
        <template slot-scope="{ row }">
          <span>{{ row.code }}</span>
        </template>
      </el-table-column>
      <el-table-column label="角色类型" prop="code" align="center">
        <template slot-scope="{ row }">
          <span>{{ row.code }}</span>
        </template>
      </el-table-column>
      <el-table-column label="上级角色" prop="code" align="center">
        <template slot-scope="{ row }">
          <span>{{ row.code }}</span>
        </template>
      </el-table-column>
      <el-table-column label="系统管理员" prop="code" align="center">
        <template slot-scope="{ row }">
          <span>{{ row.code }}</span>
        </template>
      </el-table-column>
      <el-table-column label="领导角色" prop="code" align="center">
        <template slot-scope="{ row }">
          <span>{{ row.code }}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getList } from '@/api/aboutDocument'
import { sourceTypeColor } from '@/filters/components/customerType'
import bus from '@/views/bus'
export default {
  components: {
  },
  data() {
    return {
      tableKey: 0,
      list: [],
      listLoading: false,
      form: {
        label: '',
        id: ''
      },
      listQuery: {}
    }
  },
  mounted() {
    bus.$on('getMoldBOM', msg => {
      // debugger
      this.form.label = msg.label
      this.form.id = msg.id
      this.getList()
    })
  },
  methods: {
    getList() {
      this.listLoading = true
      getList().then(res => {
        this.list = res.items.map(item => {
          item.sourceTypeColor = sourceTypeColor(item.source)
          return item
        })
        this.total = res.total
        this.listLoading = false
      })
    },
    handleFilter() { },
    handleCreate() { },
    handleImport() { },
    handleDownload() { },
  }
}
</script>

<style lang="scss" scoped>
.el-tag {
  color: #ffffff;
  font-weight: 600;
}
</style>
