<template>
  <div class="workflow-viewer">
    <el-card class="box-card">
      <h3>案卷流程查看</h3>
      <el-row :gutter="20">
        <el-col :span="24">
          <!-- 流程图展示 -->
          <div class="workflow-container">
            <el-timeline>
              <el-timeline-item
                v-for="(step, index) in workflowSteps"
                :key="index"
                :timestamp="step.time"
                :color="step.status === 'completed' ? 'green' : 'blue'"
              >
                <template v-slot-dot>
                  <i :class="getStatusIcon(step.status)" />
                </template>
                <el-card>
                  <h4>{{ step.title }}</h4>
                  <p>{{ step.description }}</p>
                  <p v-if="step.operator">操作人员: {{ step.operator }}</p>
                  <p v-if="step.department">部门: {{ step.department }}</p>
                </el-card>
              </el-timeline-item>
            </el-timeline>
          </div>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      workflowSteps: [
        {
          time: '2024-08-01 10:00',
          title: '立案',
          description: '案卷由XXX部门立案',
          operator: '张三',
          department: '立案科',
          status: 'completed'
        },
        {
          time: '2024-08-02 14:30',
          title: '初步审核',
          description: '案卷已通过初步审核',
          operator: '李四',
          department: '审核科',
          status: 'completed'
        },
        {
          time: '2024-08-03 09:15',
          title: '复审',
          description: '案卷正在复审中',
          operator: '王五',
          department: '复审科',
          status: 'in-progress'
        },
        {
          time: '2024-08-04 16:45',
          title: '终审',
          description: '等待终审',
          status: 'pending'
        },
        {
          time: '2024-08-05 11:00',
          title: '归档',
          description: '案卷归档',
          status: 'pending'
        }
      ]
    }
  },
  methods: {
    getStatusIcon(status) {
      if (status === 'completed') return 'el-icon-check'
      if (status === 'in-progress') return 'el-icon-loading'
      return 'el-icon-time'
    }
  }
}
</script>

  <style scoped>
  .workflow-viewer {
    padding: 20px;
  }

  .workflow-container {
    margin-top: 20px;
  }

  .el-timeline-item .el-card {
    background: #f9f9f9;
  }

  .el-timeline-item .el-card h4 {
    margin-bottom: 10px;
    font-size: 16px;
    font-weight: bold;
  }
  </style>
