<template>
  <div class="statistics-analysis">
    <el-row :gutter="20">
      <el-col :span="12">
        <el-card>
          <div ref="categoryChart" class="chart-container" />
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card>
          <div ref="areaChart" class="chart-container" />
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="20" style="margin-top: 20px;">
      <el-col :span="24">
        <el-table :data="caseList" style="width: 100%;" @row-click="handleRowClick">
          <el-table-column prop="caseNumber" label="案卷编号" width="180" />
          <el-table-column prop="caseName" label="案卷名称" width="200" />
          <el-table-column prop="category" label="案卷类别" width="120" />
          <el-table-column prop="region" label="案卷区域" width="120" />
          <el-table-column prop="source" label="案卷来源" width="120" />
          <el-table-column prop="status" label="案卷状态" width="100" />
          <el-table-column prop="description" label="案卷描述" />
        </el-table>
      </el-col>
    </el-row>

    <el-button type="primary" style="margin-top: 20px;" @click="exportExcel">导出Excel</el-button>
  </div>
</template>

<script>
import * as echarts from 'echarts'

export default {
  data() {
    return {
      caseList: [
        {
          caseNumber: 'A001',
          caseName: '道路破损',
          category: '市政设施',
          region: '区域一',
          source: '公众举报',
          status: '待处理',
          description: '区域一主干道路面出现多处破损'
        },
        {
          caseNumber: 'A002',
          caseName: '非法占道',
          category: '交通管理',
          region: '区域二',
          source: '巡查发现',
          status: '处理中',
          description: '区域二发现多处商贩非法占道经营'
        }
        // 更多模拟数据...
      ]
    }
  },
  mounted() {
    this.initCharts()
  },
  methods: {
    initCharts() {
      // 案卷类别统计图
      const categoryChart = echarts.init(this.$refs.categoryChart)
      categoryChart.setOption({
        title: {
          text: '案卷类别统计'
        },
        tooltip: {},
        xAxis: {
          data: ['市政设施', '交通管理', '环境保护', '其他']
        },
        yAxis: {},
        series: [
          {
            name: '案卷数量',
            type: 'bar',
            data: [5, 20, 36, 10]
          }
        ]
      })

      // 案卷区域统计图
      const areaChart = echarts.init(this.$refs.areaChart)
      areaChart.setOption({
        title: {
          text: '案卷区域统计'
        },
        tooltip: {},
        xAxis: {
          data: ['区域一', '区域二', '区域三', '区域四']
        },
        yAxis: {},
        series: [
          {
            name: '案卷数量',
            type: 'bar',
            data: [15, 25, 10, 20]
          }
        ]
      })
    },
    handleRowClick(row) {
      this.$message({
        message: `查看案卷：${row.caseName}`,
        type: 'info'
      })
      // 在此处可以实现查看案卷详情的逻辑
    },
    exportExcel() {
      // 在此处可以实现导出Excel的逻辑
      this.$message({
        message: '导出Excel功能尚未实现',
        type: 'warning'
      })
    }
  }
}
</script>

  <style scoped>
  .statistics-analysis {
    padding: 20px;
  }

  .chart-container {
    height: 400px;
  }
  </style>
