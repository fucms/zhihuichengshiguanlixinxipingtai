<template>
  <div class="advanced-data-maintenance">
    <el-row :gutter="20">
      <!-- 数据类别编辑区 -->
      <el-col :span="12">
        <el-card class="box-card">
          <h3>数据类别编辑</h3>
          <el-form :model="form" label-width="120px">
            <el-form-item label="部件编码">
              <el-input v-model="form.componentCode" placeholder="请输入部件编码" />
            </el-form-item>
            <el-form-item label="单元格编号">
              <el-input v-model="form.cellNumber" placeholder="请输入单元格编号" />
            </el-form-item>
            <el-form-item label="部件名称">
              <el-input v-model="form.componentName" placeholder="请输入部件名称" />
            </el-form-item>
            <el-form-item label="主管单位">
              <el-input v-model="form.supervisoryUnit" placeholder="请输入主管单位" />
            </el-form-item>
            <el-form-item label="维护单位">
              <el-input v-model="form.maintenanceUnit" placeholder="请输入维护单位" />
            </el-form-item>
            <el-form-item label="授权单位">
              <el-input v-model="form.authorizingUnit" placeholder="请输入授权单位" />
            </el-form-item>
            <el-form-item label="部件状态">
              <el-select v-model="form.componentStatus" placeholder="请选择部件状态">
                <el-option label="正常" value="normal" />
                <el-option label="维修中" value="under_repair" />
                <el-option label="停用" value="inactive" />
              </el-select>
            </el-form-item>
            <el-form-item label="数据来源">
              <el-input v-model="form.dataSource" placeholder="请输入数据来源" />
            </el-form-item>
            <el-form-item label="初始日期">
              <el-date-picker v-model="form.initialDate" type="date" placeholder="选择初始日期" />
            </el-form-item>
            <el-form-item label="数据坐标">
              <el-input v-model="form.dataCoordinates" placeholder="请输入数据坐标" />
            </el-form-item>
            <el-form-item label="备注">
              <el-input v-model="form.notes" type="textarea" placeholder="请输入备注" />
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm">提交</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>

      <!-- 地图模式编辑区 -->
      <el-col :span="12">
        <el-card class="box-card">
          <h3>地图模式编辑</h3>
          <el-button type="primary" style="margin-bottom: 20px" @click="editOnMap">编辑地图上的部件</el-button>
          <!-- 假设我们有一个地图组件 -->
          <div id="map" class="map-container">
            <el-amap :zoom="zoom" :center="center" class="amap-demo">
              <el-amap-marker
                v-for="(marker, index) in markers"
                :key="index"
                :position="marker.position"
                @click="(e) => { clickArrayMarker(marker, e) }"
              />
            </el-amap>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        componentCode: '',
        cellNumber: '',
        componentName: '',
        supervisoryUnit: '',
        maintenanceUnit: '',
        authorizingUnit: '',
        componentStatus: '',
        dataSource: '',
        initialDate: '',
        dataCoordinates: '',
        notes: ''
      },
      zoom: 14,
      center: [121.5273285, 31.21515044],
      markers: [
        {
          position: [121.5273285, 31.21515044],
          id: 1
        }
      ]
    }
  },
  mounted() {
    // 初始化地图
    this.initMap()
  },
  methods: {
    submitForm() {
      // 提交表单数据的逻辑
      console.log('Form submitted:', this.form)
    },
    editOnMap() {
      // 地图编辑的逻辑
      console.log('Edit on map')
      // 这里你可以初始化地图并实现编辑功能
      // e.g., 使用 Leaflet、Google Maps API 或其他地图组件库
    }
  }
}
</script>

<style scoped>
.advanced-data-maintenance {
  padding: 20px;
}

.map-container {
  height: 530px;
  background-color: #f5f5f5;
}
</style>
