<template>
  <div class="address-query">
    <el-row>
      <el-col :span="24">
        <!-- 地址模糊查询 -->
        <el-card class="box-card">
          <h2>地址模糊查询</h2>
          <el-autocomplete
            v-model="query"
            :fetch-suggestions="querySearch"
            placeholder="请输入地址"
            class="autocomplete"
            @select="handleSelect"
          />
        </el-card>
      </el-col>

    </el-row>
    <el-row>
      <el-col :span="24">
        <!-- 地图显示 -->
        <el-card class="box-card">
          <h2>地址定位</h2>
          <div id="map" style="height: 500px;">
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
      query: '',
      addressList: [],
      map: null,
      marker: null,
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
  },
  methods: {
    querySearch(queryString, cb) {
      // 模拟的地址数据，可以替换成实际的地址数据
      const addresses = [
        '人民医院',
        '中医院',
        '大学医院',
        '市中心医院',
        '儿童医院'
      ]

      const results = addresses.filter(address => address.includes(queryString))
      return cb(results)
    },
    handleSelect(item) {
      this.query = item
    }
  }
}
</script>

<style scoped>
.address-query {
  padding: 20px;
}

.autocomplete {
  width: 100%;
}

.box-card {
  margin-bottom: 20px;
}
</style>
