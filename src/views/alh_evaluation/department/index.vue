<template>
  <div class="data-sharing-exchange">
    <el-row :gutter="20">
      <!-- 数据资源展示区 -->
      <el-col :span="12">
        <el-card class="box-card">
          <h2>数据资源展示</h2>
          <el-table :data="dataResources" style="width: 100%" height="180px">
            <el-table-column prop="name" label="数据名称" />
            <el-table-column prop="type" label="数据类型" />
            <el-table-column prop="size" label="数据大小" />
            <el-table-column prop="date" label="更新时间" />
          </el-table>
        </el-card>
      </el-col>

      <!-- 数据共享操作区 -->
      <el-col :span="12">
        <el-card class="box-card">
          <h2>数据共享操作</h2>
          <el-form :model="shareOptions">
            <el-form-item label="选择共享方式">
              <el-radio-group v-model="shareOptions.shareMethod">
                <el-radio label="file">文件拷贝形式</el-radio>
                <el-radio label="database">数据库直接访问</el-radio>
                <el-radio label="webservice">Web Service方式</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="选择数据资源">
              <el-select v-model="shareOptions.selectedResource" placeholder="请选择数据资源">
                <el-option
                  v-for="item in dataResources"
                  :key="item.name"
                  :label="item.name"
                  :value="item.name"
                />
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="handleShare">执行共享</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="20" class="section-row">
      <!-- 数据导出功能 -->
      <el-col :span="12">
        <el-card class="box-card">
          <h2>数据导出</h2>
          <el-form>
            <el-form-item label="选择导出格式">
              <el-radio-group v-model="exportFormat">
                <el-radio label="csv">CSV格式</el-radio>
                <el-radio label="json">JSON格式</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="handleExport">导出数据</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>

      <!-- 共享日志 -->
      <el-col :span="12">
        <el-card class="box-card">
          <h2>共享日志</h2>
          <el-table :data="shareLogs" style="width: 100%" height="180px">
            <el-table-column prop="timestamp" label="操作时间" />
            <el-table-column prop="resource" label="数据资源" />
            <el-table-column prop="method" label="共享方式" />
            <el-table-column prop="status" label="状态" />
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
      dataResources: [
        { name: '地理空间数据1', type: 'Shapefile', size: '500MB', date: '2024-09-01' },
        { name: '地理空间数据2', type: 'GeoJSON', size: '200MB', date: '2024-09-02' },
        { name: '影像数据', type: 'TIFF', size: '2GB', date: '2024-09-03' }
      ],
      shareOptions: {
        shareMethod: '',
        selectedResource: ''
      },
      exportFormat: 'csv',
      shareLogs: [
        { timestamp: '2024-09-01 10:00', resource: '地理空间数据1', method: '文件拷贝形式', status: '成功' },
        { timestamp: '2024-09-02 11:00', resource: '地理空间数据2', method: '数据库直接访问', status: '成功' }
      ]
    }
  },
  methods: {
    handleShare() {
      const logEntry = {
        timestamp: new Date().toLocaleString(),
        resource: this.shareOptions.selectedResource,
        method: this.getShareMethodName(this.shareOptions.shareMethod),
        status: '成功'
      }
      this.shareLogs.push(logEntry)
      this.$message.success('数据共享成功')
    },
    handleExport() {
      this.$message.success(`数据已导出为${this.exportFormat.toUpperCase()}格式`)
    },
    getShareMethodName(method) {
      switch (method) {
        case 'file':
          return '文件拷贝形式'
        case 'database':
          return '数据库直接访问'
        case 'webservice':
          return 'Web Service方式'
        default:
          return ''
      }
    }
  }
}
</script>

<style scoped>
.data-sharing-exchange {
  padding: 20px;
}

.section-row {
  margin-top: 20px;
}

.box-card {
  margin-bottom: 20px;
  height: 300px;
}
</style>
