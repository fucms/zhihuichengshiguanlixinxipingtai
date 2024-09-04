<template>
  <div class="case-closure">
    <el-card v-for="caseItem in caseData" :key="caseItem.caseId" class="box-card" shadow="always">
      <div slot="header" class="clearfix">
        <span>案卷编号: {{ caseItem.caseId }}</span>
        <el-button style="float: right; padding: 3px 0" type="text" @click="toggleDetails(caseItem.caseId)">
          {{ caseItem.showDetails ? '隐藏详情' : '显示详情' }}
        </el-button>
      </div>
      <el-collapse :value="caseItem.showDetails ? [caseItem.caseId] : []">
        <el-collapse-item :name="caseItem.caseId">
          <el-timeline>
            <el-timeline-item
              v-for="step in caseItem.process"
              :key="step.timestamp"
              :timestamp="step.timestamp"
              :color="getStatusColor(step.status)"
            >
              <h4>{{ step.stepName }}</h4>
              <p>办理意见: {{ step.comment }}</p>
              <p>办理人: {{ step.handler }}</p>
            </el-timeline-item>
          </el-timeline>
        </el-collapse-item>
      </el-collapse>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      caseData: [
        {
          caseId: 'A001',
          showDetails: false,
          process: [
            { stepName: '受理', timestamp: '2024-08-01 10:00', status: '已完成', comment: '已受理', handler: '张三' },
            { stepName: '审核', timestamp: '2024-08-02 11:30', status: '已完成', comment: '审核通过', handler: '李四' },
            { stepName: '立案', timestamp: '2024-08-03 09:45', status: '已完成', comment: '已立案', handler: '王五' },
            { stepName: '结案', timestamp: '2024-08-10 15:20', status: '已完成', comment: '结案归档', handler: '赵六' }
          ]
        },
        {
          caseId: 'A002',
          showDetails: false,
          process: [
            { stepName: '受理', timestamp: '2024-08-05 08:20', status: '已完成', comment: '已受理', handler: '张三' },
            { stepName: '审核', timestamp: '2024-08-06 14:10', status: '已完成', comment: '审核通过', handler: '李四' },
            { stepName: '立案', timestamp: '2024-08-07 10:30', status: '处理中', comment: '处理中', handler: '王五' }
          ]
        }
      ]
    }
  },
  methods: {
    toggleDetails(caseId) {
      const caseItem = this.caseData.find(c => c.caseId === caseId)
      if (caseItem) {
        caseItem.showDetails = !caseItem.showDetails
      }
    },
    getStatusColor(status) {
      switch (status) {
        case '已完成':
          return 'green'
        case '处理中':
          return 'blue'
        case '待处理':
          return 'orange'
        default:
          return 'gray'
      }
    }
  }
}
</script>

<style scoped>
.case-closure {
  padding: 20px;
}

.el-card {
  margin-bottom: 20px;
}
</style>
