<template>
  <div class="info-prompt">
    <el-row :gutter="20">
      <el-col :span="16">
        <el-card>
          <h3>任务中心</h3>
          <!-- 任务列表 -->
          <el-table :data="taskList" style="width: 100%">
            <el-table-column prop="taskName" label="任务名称" width="200" />
            <el-table-column prop="taskType" label="任务类型" width="150" />
            <el-table-column prop="assignedBy" label="指派人" width="150" />
            <el-table-column prop="deadline" label="截止时间" width="200" />
            <el-table-column prop="status" label="状态" width="120">
              <template slot-scope="scope">
                <el-tag :type="scope.row.status === '未完成' ? 'warning' : 'success'">{{ scope.row.status }}</el-tag>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      taskList: [
        {
          taskName: '核查案卷001',
          taskType: '核查任务',
          assignedBy: '值班长',
          deadline: '2024-09-15 17:00',
          status: '未完成'
        },
        {
          taskName: '核实案卷002',
          taskType: '核实任务',
          assignedBy: '值班长',
          deadline: '2024-09-16 14:00',
          status: '已完成'
        },
        {
          taskName: '核查案卷001',
          taskType: '核查任务',
          assignedBy: '值班长',
          deadline: '2024-09-15 17:00',
          status: '未完成'
        },
        {
          taskName: '核实案卷002',
          taskType: '核实任务',
          assignedBy: '值班长',
          deadline: '2024-09-16 14:00',
          status: '已完成'
        },
        {
          taskName: '核查案卷001',
          taskType: '核查任务',
          assignedBy: '值班长',
          deadline: '2024-09-15 17:00',
          status: '未完成'
        },
        {
          taskName: '核实案卷002',
          taskType: '核实任务',
          assignedBy: '值班长',
          deadline: '2024-09-16 14:00',
          status: '已完成'
        },
        {
          taskName: '核查案卷001',
          taskType: '核查任务',
          assignedBy: '值班长',
          deadline: '2024-09-15 17:00',
          status: '未完成'
        },
        {
          taskName: '核实案卷002',
          taskType: '核实任务',
          assignedBy: '值班长',
          deadline: '2024-09-16 14:00',
          status: '已完成'
        }
      ]
    }
  },
  mounted() {
    // 模拟新案卷到达的提示
    this.$notify({
      title: '新案卷到达',
      message: '案卷编号123456已到达，请及时处理。',
      type: 'info'
    })

    // 模拟案卷超期的提示
    setTimeout(() => {
      this.$alert('案卷编号123456已超期，请尽快处理！', '案卷超期', {
        confirmButtonText: '确定',
        type: 'warning'
      })
    }, 5000) // 5秒后弹出超期提示
  }
}
</script>

  <style scoped>
  .info-prompt {
    padding: 20px;
  }

  .el-card {
    margin-bottom: 20px;
  }
  </style>
