<template>
  <div class="data-exchange">
    <el-row :gutter="20">
      <!-- 接口管理区 -->
      <el-col :span="24">
        <el-card class="box-card">
          <h3>接口管理</h3>
          <el-form :model="interfaceForm" label-width="120px" class="interface-form">
            <el-form-item label="接口名称">
              <el-input v-model="interfaceForm.name" placeholder="请输入接口名称" />
            </el-form-item>
            <el-form-item label="接口类型">
              <el-select v-model="interfaceForm.type" placeholder="请选择接口类型">
                <el-option label="内网接口" value="internal" />
                <el-option label="外网接口" value="external" />
              </el-select>
            </el-form-item>
            <el-form-item label="接口地址">
              <el-input v-model="interfaceForm.url" placeholder="请输入接口地址" />
            </el-form-item>
            <el-form-item label="描述">
              <el-input v-model="interfaceForm.description" type="textarea" placeholder="请输入描述" />
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="addInterface">添加接口</el-button>
            </el-form-item>
          </el-form>
          <el-table :data="interfaces" style="margin-top: 20px;">
            <el-table-column prop="name" label="接口名称" />
            <el-table-column prop="type" label="接口类型" />
            <el-table-column prop="url" label="接口地址" />
            <el-table-column prop="description" label="描述" />
          </el-table>
        </el-card>
      </el-col>

      <!-- 数据交换记录区 -->
      <el-col :span="24">
        <el-card class="box-card">
          <h3>数据交换记录</h3>
          <el-scroller>
            <el-table :data="exchangeRecords" style="margin-top: 20px;">
              <el-table-column prop="recordId" label="记录编号" />
              <el-table-column prop="timestamp" label="时间戳" />
              <el-table-column prop="dataType" label="数据类型" />
              <el-table-column prop="status" label="状态" />
            </el-table>
          </el-scroller>
        </el-card>
      </el-col>

      <!-- 发布状态区 -->
      <el-col :span="24">
        <el-card class="box-card">
          <h3>发布状态</h3>
          <el-table :data="publishStatus" style="margin-top: 20px;">
            <el-table-column prop="eventId" label="事件编号" />
            <el-table-column prop="status" label="处理状态" />
            <el-table-column prop="lastUpdate" label="最后更新" />
          </el-table>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      interfaceForm: {
        name: '',
        type: '',
        url: '',
        description: ''
      },
      interfaces: [
        { name: '内网接口1', type: 'internal', url: 'http://internal.api/1', description: '描述1' },
        { name: '外网接口1', type: 'external', url: 'http://external.api/1', description: '描述2' }
      ],
      exchangeRecords: [
        { recordId: '001', timestamp: '2024-09-01 10:00', dataType: '投诉举报', status: '成功' },
        { recordId: '002', timestamp: '2024-09-01 11:00', dataType: '事件办理', status: '失败' },
        { recordId: '001', timestamp: '2024-09-01 10:00', dataType: '投诉举报', status: '成功' },
        { recordId: '002', timestamp: '2024-09-01 11:00', dataType: '事件办理', status: '失败' }
      ],
      publishStatus: [
        { eventId: 'EV001', status: '已发布', lastUpdate: '2024-09-01 12:00' },
        { eventId: 'EV002', status: '待发布', lastUpdate: '2024-09-01 13:00' },
        { eventId: 'EV001', status: '已发布', lastUpdate: '2024-09-01 12:00' },
        { eventId: 'EV002', status: '待发布', lastUpdate: '2024-09-01 13:00' }
      ]
    }
  },
  methods: {
    addInterface() {
      if (this.interfaceForm.name && this.interfaceForm.url) {
        this.interfaces.push({ ...this.interfaceForm })
        this.interfaceForm = { name: '', type: '', url: '', description: '' }
      } else {
        this.$message.error('接口名称和地址不能为空')
      }
    }
  }
}
</script>

<style scoped>
.data-exchange {
  padding: 20px;
}

.box-card {
  margin-bottom: 10px;
}

.interface-form {
  margin-bottom: 20px;
}
</style>
