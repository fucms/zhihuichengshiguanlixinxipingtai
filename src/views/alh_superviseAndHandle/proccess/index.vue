<template>
  <div class="server-data-management">
    <el-row :gutter="20">
      <!-- 服务器端数据展示 -->
      <el-col :span="24">
        <el-card>
          <h3>服务器端数据管理</h3>
          <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="id" label="数据ID" width="120" />
            <el-table-column prop="timestamp" label="时间戳" width="180" />
            <el-table-column prop="location" label="位置" width="200" />
            <el-table-column prop="dataType" label="数据类型" width="150" />
            <el-table-column prop="dataValue" label="数据值" width="150" />
            <el-table-column prop="status" label="状态" width="100">
              <template slot-scope="scope">
                <el-tag :type="getStatusTagType(scope.row.status)">{{ scope.row.status }}</el-tag>
              </template>
            </el-table-column>
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
      // 静态数据
      tableData: [
        { id: '001', timestamp: '2024-08-30 08:00:00', location: '城区东部', dataType: '湿度', dataValue: '85%', status: '正常' },
        { id: '002', timestamp: '2024-08-30 08:15:00', location: '城区西部', dataType: '温度', dataValue: '30°C', status: '警告' },
        { id: '003', timestamp: '2024-08-30 08:30:00', location: '城区南部', dataType: '降水量', dataValue: '10mm', status: '正常' },
        { id: '004', timestamp: '2024-08-30 08:45:00', location: '城区北部', dataType: '风速', dataValue: '5m/s', status: '异常' }
      ]
    }
  },
  methods: {
    getStatusTagType(status) {
      switch (status) {
        case '正常':
          return 'success'
        case '警告':
          return 'warning'
        case '异常':
          return 'danger'
        default:
          return 'info'
      }
    }
  }
}
</script>

  <style scoped>
  .server-data-management {
    padding: 20px;
  }
  </style>
