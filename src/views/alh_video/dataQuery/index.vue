<template>
  <div class="data-query">
    <el-row :gutter="20">
      <!-- 图查属性 -->
      <el-col :span="8">
        <el-card class="box-card">
          <h3>图查属性</h3>
          <div id="map1" class="map-container">
            <el-amap :zoom="zoom" :center="center" class="amap-demo">
              <el-amap-marker
                v-for="(marker, index) in markers"
                :key="index"
                :position="marker.position"
                @click="(e) => { clickArrayMarker(marker, e) }"
              />
            </el-amap>
          </div>
          <el-input v-model="selectedFeature" placeholder="点击地图选择空间对象" readonly style="margin-top: 10px;" />
        </el-card>
      </el-col>

      <!-- 属性查图 -->
      <el-col :span="8">
        <el-card class="box-card">
          <h3>属性查图</h3>
          <el-form :model="queryForm" label-width="120px">
            <el-form-item label="属性名">
              <el-input v-model="queryForm.attributeName" />
            </el-form-item>
            <el-form-item label="属性值">
              <el-input v-model="queryForm.attributeValue" />
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="performAttributeQuery">查询</el-button>
            </el-form-item>
          </el-form>
          <div id="map2" class="map-container">
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

      <!-- 空间查询 -->
      <el-col :span="8">
        <el-card class="box-card">
          <h3>空间查询</h3>
          <el-form :model="spatialQueryForm" label-width="120px">
            <el-form-item label="几何类型">
              <el-select v-model="spatialQueryForm.geometryType" placeholder="选择几何类型">
                <el-option label="点" value="point" />
                <el-option label="线" value="line" />
                <el-option label="面" value="polygon" />
              </el-select>
            </el-form-item>
            <el-form-item label="缓冲区">
              <el-input v-model="spatialQueryForm.buffer" type="number" />
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="performSpatialQuery">查询</el-button>
            </el-form-item>
          </el-form>
          <div id="map3" class="map-container">
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
      selectedFeature: '',
      queryForm: {
        attributeName: '',
        attributeValue: ''
      },
      spatialQueryForm: {
        geometryType: '',
        buffer: 0
      },
      zoom: 14,
      center: [121.5273285, 31.21515044],
      markers: [
        {
          position: [121.5273285, 31.21515044],
          id: 1
        }
      ],
      map1: null,
      map2: null,
      map3: null
    }
  },
  mounted() {
  },
  methods: {

    handleMap1Click(e) {
      // Example: show a popup with the clicked location
      const latlng = e.latlng
      this.selectedFeature = `Latitude: ${latlng.lat}, Longitude: ${latlng.lng}`
    },
    performAttributeQuery() {
      // Example: Perform a query and display results on map2
      // This is a placeholder for actual query implementation
      console.log('Perform attribute query with:', this.queryForm)
    },
    performSpatialQuery() {
      // Example: Perform a spatial query and display results on map3
      // This is a placeholder for actual query implementation
      console.log('Perform spatial query with:', this.spatialQueryForm)
    }
  }
}
</script>

<style scoped>
.data-query {
  padding: 20px;
}

.map-container {
  height: 300px;
  margin-top: 10px;
  margin-bottom: 10px;
}

.box-card {
  height: 480px;
  margin-bottom: 20px;
}
</style>
