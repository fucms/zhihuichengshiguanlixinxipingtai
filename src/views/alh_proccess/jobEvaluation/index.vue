<template>
  <div class="evaluation">
    <el-card class="box-card">
      <h2>岗位评价</h2>
      <el-row :gutter="20">
        <el-col :span="24">
          <!-- 评价表格 -->
          <el-table :data="evaluationData" border stripe>
            <el-table-column prop="role" label="岗位名称" />
            <el-table-column prop="criteria" label="评价标准" />
            <el-table-column prop="score" label="得分" />
            <el-table-column prop="feedback" label="反馈" />
          </el-table>
        </el-col>
      </el-row>

      <!-- 导出按钮 -->
      <el-row>
        <el-col :span="24">
          <el-button type="primary" @click="exportToExcel">导出为Excel</el-button>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>

export default {
  data() {
    return {
      evaluationData: [
        { role: '接线员', criteria: '响应时间', score: 85, feedback: '良好' },
        { role: '接线员', criteria: '处理质量', score: 90, feedback: '优秀' },
        { role: '值班长', criteria: '监督能力', score: 78, feedback: '合格' },
        { role: '值班长', criteria: '任务分配', score: 82, feedback: '良好' },
        { role: '派遣员', criteria: '派遣效率', score: 88, feedback: '优秀' },
        { role: '派遣员', criteria: '工作态度', score: 80, feedback: '良好' },
        { role: '监督员', criteria: '巡查质量', score: 75, feedback: '合格' },
        { role: '监督员', criteria: '报告准确性', score: 85, feedback: '良好' }
      ]
    }
  },
  methods: {
    exportToExcel() {
      // const headers = ['岗位名称', '评价标准', '得分', '反馈']
      // const data = this.evaluationData.map(item => [item.role, item.criteria, item.score, item.feedback])
      // export_json_to_excel({
      //   header: headers,
      //   data: data,
      //   filename: '岗位评价.xlsx'
      // })
    }
  }
}
</script>

<style scoped>
.evaluation {
  padding: 20px;
}

.box-card {
  margin-bottom: 20px;
}
</style>
