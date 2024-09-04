<template>
  <div class="coordinate-converter">
    <el-row :gutter="20">
      <!-- 坐标输入区 -->
      <el-col :span="24">
        <el-card class="box-card">
          <h3>空间坐标转换为地址名称</h3>
          <el-form :model="form" label-width="120px">
            <el-form-item label="经度">
              <el-input v-model="form.longitude" placeholder="请输入经度" />
            </el-form-item>
            <el-form-item label="纬度">
              <el-input v-model="form.latitude" placeholder="请输入纬度" />
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="convertCoordinates">转换地址</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
    </el-row>

    <!-- 地址显示区 -->
    <el-col :span="24">
      <el-card class="box-card">
        <h3>转换后的地址</h3>
        <el-form :model="address" label-width="120px">
          <el-form-item label="地址名称">
            <el-input v-model="address.name" readonly />
          </el-form-item>
          <el-form-item label="详细地址">
            <el-input v-model="address.details" readonly />
          </el-form-item>
        </el-form>
      </el-card>
    </el-col>

  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        longitude: '',
        latitude: ''
      },
      address: {
        name: '',
        details: ''
      }
    }
  },
  methods: {
    async convertCoordinates() {
      const { longitude, latitude } = this.form
      if (!longitude || !latitude) {
        this.$message.error('经度和纬度不能为空')
        return
      }

      try {
        // 调用地理编码 API 服务（假设是高德地图 API）
        const response = await this.getAddressFromCoordinates(longitude, latitude)
        if (response && response.status === '1') {
          this.address.name = response.regeocode.formatted_address
          this.address.details = response.regeocode.addressComponent
        } else {
          this.$message.error('地址转换失败')
        }
      } catch (error) {
        this.$message.error('地址转换出现错误')
      }
    },
    getAddressFromCoordinates(longitude, latitude) {
      // 替换成实际的 API 调用
      const key = 'YOUR_API_KEY'
      const url = `https://restapi.amap.com/v3/geocode/regeo?key=${key}&location=${longitude},${latitude}`

      return fetch(url)
        .then(response => response.json())
        .then(data => data)
    }
  }
}
</script>

<style scoped>
.coordinate-converter {
  padding: 20px;
}

.box-card {
  margin-bottom: 20px;
}
</style>
