<template>
  <div>
    <div v-if="form.label">
      <el-input
        v-model="listQuery.filter"
        style="width: 200px"
        class="filter-item"
        @keyup.enter.native="handleFilter"
      />
      <el-button class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">
        搜索
      </el-button>
      <el-button
        class="filter-item"
        style="margin-left: 10px"
        type="primary"
        icon="el-icon-plus"
        @click="handleCreate"
      >新增</el-button>
      <el-button
        class="filter-item"
        style="margin-left: 10px"
        type="primary"
        icon="el-icon-bottom"
        @click="handleImport"
      >导入</el-button>
      <el-button
        class="filter-item"
        style="margin-left: 10px;"
        type="primary"
        icon="el-icon-top"
        @click="handleDownload"
      >导出</el-button>
      <el-button type="success" plain style="display: flex;float: right;" :disabled="true">{{ form.label }}</el-button>
      <hr>
    </div>

    <el-table :key="tableKey" v-loading="listLoading" :data="list" border fit highlight-current-row style="width: 100%">
      <el-table-column label="客户名称" prop="customerName" align="center">
        <template slot-scope="{ row }">
          <span class="nameClass" @click="handleCustomerName(row)">{{ row.customerName }}</span>
        </template>
      </el-table-column>
      <el-table-column label="销售线索编号" prop="salesLeads" align="center">
        <template slot-scope="{ row }">
          <span>{{ row.salesLeads }}</span>
        </template>
      </el-table-column>
      <el-table-column label="联系人" prop="liaison" align="center">
        <template slot-scope="{ row }">
          <span>{{ row.liaison }}</span>
        </template>
      </el-table-column>
      <el-table-column label="商机来源" prop="source" align="center">
        <template slot-scope="{ row }">
          <el-tag :style="row.sourceTypeColor">{{ row.source | sourceTypeText }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="省份" prop="province" align="center">
        <template slot-scope="{ row }">
          <span>{{ row.province }}</span>
        </template>
      </el-table-column>
      <el-table-column label="城市" prop="city" align="center">
        <template slot-scope="{ row }">
          <span>{{ row.city }}</span>
        </template>
      </el-table-column>
      <el-table-column label="负责人" prop="header" align="center">
        <template slot-scope="{ row }">
          <span>{{ row.header }}</span>
        </template>
      </el-table-column>
    </el-table>

    <CustNameDraeer ref="CustNameDraeer" />
  </div>
</template>

<script>
import { getList } from '@/api/aboutDocument'
import { sourceTypeColor } from '@/filters/components/customerType'
import CustNameDraeer from '../drawer/index.vue'
import bus from '@/views/bus'
export default {
  components: {
    CustNameDraeer
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
    handleCustomerName(val) {
      this.$refs.CustNameDraeer.show(val)
    }
  }
}
</script>

<style lang="scss" scoped>
.el-tag {
  color: #ffffff;
  font-weight: 600;
}
</style>
