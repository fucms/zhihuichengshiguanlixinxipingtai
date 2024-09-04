<template>
  <div class="special-data-management">
    <el-row :gutter="20">
      <!-- 专题图类型选择 -->
      <el-col :span="8">
        <el-card class="box-card">
          <h3>专题图类型选择</h3>
          <el-select v-model="selectedType" placeholder="请选择专题图类型" @change="handleTypeChange">
            <el-option v-for="type in types" :key="type.value" :label="type.label" :value="type.value" />
          </el-select>
        </el-card>
      </el-col>

      <!-- 专题数据展示 -->
      <el-col :span="16">
        <el-card class="box-card">
          <h3>{{ selectedTypeLabel }} 数据展示</h3>
          <el-table v-if="tableData.length" :data="tableData">
            <el-table-column prop="name" label="区域名称" width="150" />
            <el-table-column prop="value" label="数据值" width="150" />
          </el-table>
          <p v-else>请选择专题图类型以查看数据</p>
        </el-card>
      </el-col>
    </el-row>

    <!-- 图表渲染 -->
    <el-row v-if="selectedType" :gutter="20" class="chart-row">
      <el-col :span="24">
        <el-card>
          <div ref="chart" style="height: 400px;" />
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import * as echarts from 'echarts'

export default {
  data() {
    return {
      selectedType: 'singleValue',
      selectedTypeLabel: '',
      types: [
        { label: '单值图', value: 'singleValue' },
        { label: '分段图', value: 'classified' },
        { label: '等级符号图', value: 'graduatedSymbol' },
        { label: '统计专题图', value: 'statistical' }
      ],
      tableData: []
    }
  },
  mounted() {
    this.selectedTypeLabel = this.types.find(type => type.value === this.selectedType).label
    this.loadTableData(this.selectedType)
    this.renderChart(this.selectedType)
  },
  methods: {
    handleTypeChange(value) {
      this.selectedTypeLabel = this.types.find(type => type.value === value).label
      this.loadTableData(value) // 切换表格
      if (this.chart) { this.chart.dispose() }

      this.$nextTick(() => {
        this.renderChart(value) // 切换图表，图表第一次无法渲染出来，dom异步更新
      })
    },
    loadTableData(type) {
      // 模拟不同专题图类型的表格数据
      if (type === 'singleValue') {
        this.tableData = [
          { name: '区域A', value: 120 },
          { name: '区域B', value: 90 },
          { name: '区域C', value: 70 }
        ]
      } else if (type === 'classified') {
        this.tableData = [
          { name: '区域A', value: 5 },
          { name: '区域B', value: 3 },
          { name: '区域C', value: 1 }
        ]
      } else if (type === 'graduatedSymbol') {
        this.tableData = [
          { name: '区域A', value: 150 },
          { name: '区域B', value: 200 },
          { name: '区域C', value: 100 }
        ]
      } else if (type === 'dotDensity') {
        this.tableData = [
          { name: '区域A', value: 50 },
          { name: '区域B', value: 40 },
          { name: '区域C', value: 30 }
        ]
      } else if (type === 'statistical') {
        this.tableData = [
          { name: '区域A', value: 300 },
          { name: '区域B', value: 250 },
          { name: '区域C', value: 400 }
        ]
      }
    },
    renderChart(type) {
      this.chart = echarts.init(this.$refs.chart)
      let option = {}

      if (type === 'singleValue' || type === 'classified' || type === 'graduatedSymbol') {
        option = {
          title: { text: `${this.selectedTypeLabel} 图表` },
          xAxis: { type: 'category', data: this.tableData.map(item => item.name) },
          yAxis: { type: 'value' },
          series: [{ data: this.tableData.map(item => item.value), type: 'bar' }]
        }
      } else if (type === 'dotDensity') {
        option = {
          title: { text: `${this.selectedTypeLabel} 图表` },
          series: [{
            symbol: 'circle', // 确保正确的符号类型
            symbolSize: 10, // 设置符号大小
            type: 'scatter',
            data: this.tableData.map(item => [item.name, item.value])
          }]
        }
      } else if (type === 'statistical') {
        option = {
          title: { text: `${this.selectedTypeLabel} 图表` },
          series: [{
            type: 'pie',
            data: this.tableData.map(item => ({ name: item.name, value: item.value }))
          }]
        }
      }

      this.chart.setOption(option)
    }
  }
}

</script>

<style scoped>
.special-data-management {
  padding: 20px;
}

.chart-row {
  margin-top: 20px;
}

.box-card {
  height: 250px;
  margin-bottom: 20px;
}
</style>
