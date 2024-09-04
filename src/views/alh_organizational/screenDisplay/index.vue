<template>
  <div class="dashboard">
    <el-row :gutter="20">
      <!-- 案卷滚动信息区 -->
      <el-col :span="8">
        <el-card class="box-card">
          <h3>案卷信息</h3>
          <el-scrollbar class="scroll-container">
            <el-table :data="cases" @row-click="handleRowClick">
              <el-table-column prop="caseNumber" label="案卷编号" />
              <el-table-column prop="caseName" label="案卷名称" />
              <el-table-column prop="status" label="状态" />
              <el-table-column prop="updatedTime" label="更新时间" />
            </el-table>
          </el-scrollbar>
        </el-card>
      </el-col>

      <!-- 详细信息显示区 -->
      <el-col :span="16">
        <el-card class="box-card">
          <h3>案卷详细信息</h3>
          <div v-if="selectedCase">
            <el-row>
              <el-col :span="6"><strong>案卷编号:</strong></el-col>
              <el-col :span="18">{{ selectedCase.caseNumber }}</el-col>
            </el-row>
            <el-row>
              <el-col :span="6"><strong>案卷名称:</strong></el-col>
              <el-col :span="18">{{ selectedCase.caseName }}</el-col>
            </el-row>
            <el-row>
              <el-col :span="6"><strong>状态:</strong></el-col>
              <el-col :span="18">{{ selectedCase.status }}</el-col>
            </el-row>
            <el-row>
              <el-col :span="6"><strong>描述:</strong></el-col>
              <el-col :span="18">{{ selectedCase.description }}</el-col>
            </el-row>
            <el-row>
              <el-col :span="6"><strong>更新时间:</strong></el-col>
              <el-col :span="18">{{ selectedCase.updatedTime }}</el-col>
            </el-row>
          </div>
          <div v-else>
            <p>请选择一个案卷查看详细信息。</p>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <!-- 统计图表区 -->
    <el-row :gutter="20" class="chart-row">
      <el-col :span="8">
        <el-card class="box-card">
          <div id="bar-chart" style="height: 300px;" />
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="box-card">
          <div id="pie-chart" style="height: 300px;" />
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="box-card">
          <div id="gauge-chart" style="height: 300px;" />
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import echarts from 'echarts'

export default {
  data() {
    return {
      cases: [
        { caseNumber: '001', caseName: '案卷一', status: '处理中', updatedTime: '2024-09-01 10:00' },
        { caseNumber: '002', caseName: '案卷二', status: '已解决', updatedTime: '2024-09-01 11:00' },
        { caseNumber: '003', caseName: '案卷三', status: '待处理', updatedTime: '2024-09-01 12:00' }
      ],
      selectedCase: null
    }
  },
  mounted() {
    this.initCharts()
  },
  methods: {
    handleRowClick(row) {
      this.selectedCase = row
    },
    initCharts() {
      // 初始化柱状图
      const barChart = echarts.init(document.getElementById('bar-chart'))
      barChart.setOption({
        title: { text: '当日案卷立案情况' },
        xAxis: { type: 'category', data: ['类别A', '类别B', '类别C'] },
        yAxis: { type: 'value' },
        series: [{ data: [10, 20, 30], type: 'bar' }]
      })

      // 初始化饼图
      const pieChart = echarts.init(document.getElementById('pie-chart'))
      pieChart.setOption({
        title: { text: '案卷分类排行统计' },
        series: [{
          type: 'pie',
          data: [
            { value: 40, name: '分类A' },
            { value: 30, name: '分类B' },
            { value: 20, name: '分类C' },
            { value: 10, name: '分类D' }
          ]
        }]
      })

      // 初始化仪表盘
      const gaugeChart = echarts.init(document.getElementById('gauge-chart'))
      gaugeChart.setOption({
        title: { text: '网格员上报统计图' },
        series: [{
          type: 'gauge',
          detail: { formatter: '{value}%' },
          data: [{ value: 60, name: '上报率' }]
        }]
      })
    }
  }
}
</script>

  <style scoped>
  .dashboard {
    padding: 20px;
  }

  .scroll-container {
    max-height: 500px;
  }

  .chart-row {
    margin-top: 20px;
  }

  .box-card {
    margin-bottom: 20px;
  }
  </style>
