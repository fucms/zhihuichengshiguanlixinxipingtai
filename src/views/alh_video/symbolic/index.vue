<template>
  <div class="symbolization-management">
    <el-row :gutter="20">
      <!-- 图层列表 -->
      <el-col :span="8">
        <el-card class="box-card">
          <h3>图层列表</h3>
          <el-tree
            :data="layerList"
            :props="defaultProps"
            highlight-current
            @node-click="handleNodeClick"
          />
        </el-card>
      </el-col>

      <!-- 符号化设置 -->
      <el-col :span="8">
        <el-card class="box-card">
          <h3>符号化设置</h3>
          <div v-if="selectedLayer">
            <el-form :model="symbolSettings">
              <el-form-item label="颜色">
                <el-color-picker v-model="symbolSettings.color" />
              </el-form-item>
              <el-form-item label="大小">
                <el-slider v-model="symbolSettings.size" :min="1" :max="20" style="margin-top: 20px;" />
              </el-form-item>
              <el-form-item label="形状">
                <el-select v-model="symbolSettings.shape" placeholder="选择形状">
                  <el-option label="圆形" value="circle" />
                  <el-option label="方形" value="square" />
                  <el-option label="三角形" value="triangle" />
                </el-select>
              </el-form-item>
            </el-form>
          </div>
          <div v-else>
            <p>请选择一个图层进行符号化设置</p>
          </div>
        </el-card>
      </el-col>

      <!-- 属性管理 -->
      <el-col :span="8">
        <el-card class="box-card">
          <h3>属性管理</h3>
          <div v-if="selectedLayer">
            <el-form :model="selectedLayer">
              <el-form-item label="图层名称">
                <el-input v-model="selectedLayer.label" />
              </el-form-item>
              <el-form-item label="可见性">
                <el-switch v-model="selectedLayer.visible" />
              </el-form-item>
            </el-form>
          </div>
          <div v-else>
            <p>请选择一个图层进行属性管理s</p>
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
      layerList: [
        {
          label: '道路图层',
          id: 1,
          visible: true,
          children: [
            { label: '主干道', id: 2, visible: true },
            { label: '次干道', id: 3, visible: true }
          ]
        },
        {
          label: '建筑图层',
          id: 4,
          visible: true,
          children: [
            { label: '住宅', id: 5, visible: true },
            { label: '商业', id: 6, visible: true }
          ]
        }
      ],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      selectedLayer: null,
      symbolSettings: {
        color: '#409EFF',
        size: 10,
        shape: 'circle'
      }
    }
  },
  methods: {
    handleNodeClick(data) {
      this.selectedLayer = data
    }
  }
}
</script>

<style scoped>
.symbolization-management {
  padding: 20px;
}

.box-card {
  height: 300px;
  margin-bottom: 20px;
}
</style>
