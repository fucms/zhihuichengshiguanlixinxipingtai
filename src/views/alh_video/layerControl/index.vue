<template>
  <div class="layer-control">
    <el-card>
      <h3>图层控制</h3>
      <el-tree
        :data="layerData"
        :props="defaultProps"
        :default-expand-all="true"
        show-checkbox
        @node-click="handleNodeClick"
        @check-change="handleCheckChange"
      >
        <span slot-scope="{ data }">
          {{ data.label }}
          <el-button v-if="data.children" type="text" style="margin-left: 20px" @click="editLayerStyle(data)">编辑风格</el-button>
        </span>
      </el-tree>
    </el-card>

    <!-- 图层风格设置的模态框 -->
    <el-dialog title="图层风格设置" :visible.sync="dialogVisible">
      <el-form :model="currentLayerStyle">
        <el-form-item label="颜色">
          <el-color-picker v-model="currentLayerStyle.color" />
        </el-form-item>
        <el-form-item label="透明度">
          <el-slider v-model="currentLayerStyle.opacity" :min="0" :max="1" step="0.1" style="margin-top: 10px;" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="saveLayerStyle">保存</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      layerData: [
        {
          id: 1,
          label: '基础图层',
          visible: true,
          style: { color: '#409EFF', opacity: 1 },
          children: [
            { id: 2, label: '道路图层', visible: true, style: { color: '#67C23A', opacity: 1 }},
            { id: 3, label: '建筑图层', visible: true, style: { color: '#E6A23C', opacity: 1 }}
          ]
        },
        {
          id: 4,
          label: '功能图层',
          visible: false,
          style: { color: '#F56C6C', opacity: 0.8 },
          children: [
            { id: 5, label: '河流水系图层', visible: false, style: { color: '#909399', opacity: 0.5 }},
            { id: 6, label: '绿地图层', visible: false, style: { color: '#1F2D3D', opacity: 0.7 }}
          ]
        }
      ],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      dialogVisible: false,
      currentLayer: null,
      currentLayerStyle: {
        color: '',
        opacity: 1
      }
    }
  },
  methods: {
    handleNodeClick(data) {
      console.log(data)
    },
    handleCheckChange(data, checked, indeterminate) {
      data.visible = checked
      this.toggleLayerVisibility(data)
    },
    toggleLayerVisibility(layer) {
      console.log(`图层 ${layer.label} 的显示状态: ${layer.visible}`)
      // 在这里添加控制图层显示的逻辑
    },
    editLayerStyle(layer) {
      this.currentLayer = layer
      this.currentLayerStyle = { ...layer.style }
      this.dialogVisible = true
    },
    saveLayerStyle() {
      if (this.currentLayer) {
        this.currentLayer.style = { ...this.currentLayerStyle }
        this.dialogVisible = false
        console.log(`图层 ${this.currentLayer.label} 的风格已更新:`, this.currentLayer.style)
        // 在这里添加保存图层风格的逻辑
      }
    }
  }
}
</script>

<style scoped>
.layer-control {
  padding: 20px;
}
</style>
