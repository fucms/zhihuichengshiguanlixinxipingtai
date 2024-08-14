<template>
  <div>
    <el-drawer :with-header="false" :visible.sync="drawer" size="80%" :append-to-body="true">
      <el-container>
        <el-header>
          <p>{{ customerName }}</p>
        </el-header>
        <el-main>
          <el-tabs v-model="activeName" type="card">
            <el-tab-pane label="详情" name="details">
              <details_customerName ref="details_customerName" :cus-details="cusDetails" />
            </el-tab-pane>
            <el-tab-pane label="跟进记录">
              <record_details ref="record_details" />
            </el-tab-pane>
            <el-tab-pane label="负责人变更历史">
              <header_change_historyVue ref="header_change_historyVue" />
            </el-tab-pane>
            <el-tab-pane label="共享人">
              <sharer_details ref="sharer_details" />
            </el-tab-pane>
            <el-tab-pane label="提醒">
              <remind_details ref="remind_details" />
            </el-tab-pane>
          </el-tabs>
        </el-main>
      </el-container>
    </el-drawer>
  </div>
</template>

<script>
import details_customerName from './details_customerName.vue'
import record_details from '@/views/customerManagement/record/index.vue'
import header_change_historyVue from '../../components/component/header_change_history.vue'
import sharer_details from '../../components/component/sharer_details.vue'
import remind_details from '../../components/component/remind_details.vue'
export default {
  name: 'CustNameDraeer',
  components: {
    details_customerName,
    record_details,
    header_change_historyVue,
    sharer_details,
    remind_details
  },
  data() {
    return {
      activeName: 'details',
      drawer: false,
      customerName: '',
      selectedInner: '',
      cusDetails: {}
    }
  },
  methods: {
    show(val) {
      this.customerName = val.customerName
      this.cusDetails = val
      this.drawer = true
    }
  }
}
</script>

<style lang="less" scoped>
.el-header {
  height: 30px;
  line-height: 35px;
}

.el-main {
  padding: 0 10px;
}

.app-container {
  padding: unset;
}
</style>
