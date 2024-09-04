<template>
  <div class="monitoring-page">
    <el-card class="box-card">
      <h2>城市监督管理员实时监控</h2>
      <el-row :gutter="20">
        <!-- 搜索和过滤条件 -->
        <el-col :span="6">
          <el-form :inline="true" :model="searchForm" class="demo-form-inline">
            <el-form-item label="名称">
              <el-input v-model="searchForm.name" placeholder="输入名称" />
            </el-form-item>
            <el-form-item label="编号">
              <el-input v-model="searchForm.id" placeholder="输入编号" />
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="handleSearch">查询</el-button>
            </el-form-item>
          </el-form>
          <!-- 显示监督员基本信息 -->
          <el-card v-if="selectedSupervisor" class="supervisor-info">
            <h4>{{ selectedSupervisor.name }} - {{ selectedSupervisor.id }}</h4>
            <p>部门: {{ selectedSupervisor.department }}</p>
            <p>当前位置: {{ selectedSupervisor.currentLocation }}</p>
            <p>在岗情况: {{ selectedSupervisor.status }}</p>
            <el-button type="primary" @click="showTrack(selectedSupervisor.id)">查看轨迹</el-button>
          </el-card>
        </el-col>
        <!-- 地图展示区域 -->
        <el-col :span="18">
          <div id="map" class="map-container">
            <el-amap :zoom="zoom" :center="center" class="amap-demo">
              <el-amap-marker
                :position="componentMarker.position"
                :visible="componentMarker.visible"
                :draggable="componentMarker.draggable"
                @init="markerInit"
                @click="clickMarker"
              >
                <div style="padding: 5px 10px;white-space: nowrap;background: blue;color: #fff;">{{
                  componentMarker.text }}</div>
              </el-amap-marker>
              <el-amap-marker
                v-for="(marker, index) in markers"
                :key="index"
                :position="marker.position"
                @click="(e) => { clickArrayMarker(marker, e) }"
              />
            </el-amap>
          </div>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchForm: {
        name: '张三',
        id: '001'
      },
      selectedSupervisor: null,
      supervisors: [
        {
          id: '001',
          name: '张三',
          department: '东区监督管理',
          currentLocation: '东区广场',
          status: '在岗'
        },
        {
          id: '002',
          name: '李四',
          department: '西区监督管理',
          currentLocation: '西区公园',
          status: '离岗'
        }
        // ... 其他监督员
      ],
      zoom: 14,
      center: [121.5273285, 31.21515044],
      markers: [
        {
          position: [121.5273285, 31.21515044],
          id: 1
        }
      ],
      componentMarker: {
        position: [121.5273285, 31.21315058],
        visible: true,
        draggable: false
      }
    }
  },
  mounted() {
    this.initMap()
  },
  methods: {
    initMap() {
      // 初始化地图逻辑（例如使用高德地图或百度地图）
      // 这里只展示布局，可以使用 Vue-Amap 或其他地图库进行集成
    },
    handleSearch() {
      // 查询监督员逻辑
      const found = this.supervisors.find(
        (supervisor) =>
          supervisor.name === this.searchForm.name ||
          supervisor.id === this.searchForm.id
      )
      if (found) {
        this.selectedSupervisor = found
        // 这里还可以实现定位到地图上的功能
      } else {
        this.$message.error('未找到对应的监督员')
      }
    },
    showTrack(supervisorId) {
      // 展示监督员的轨迹逻辑
      this.$message.info(`展示监督员 ${supervisorId} 的轨迹`)
    }
  }
}
</script>

<style scoped>
.monitoring-page {
  padding: 20px;
}
.map-container {
  width: 100%;
  height: 400px;
  background-color: #f0f0f0;
}
.supervisor-info {
  margin-top: 20px;
}
</style>
