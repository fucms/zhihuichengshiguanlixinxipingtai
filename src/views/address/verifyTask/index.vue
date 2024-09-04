<template>
  <div class="verification-task">
    <el-row :gutter="20">
      <!-- 核实任务下发 -->
      <el-col :span="12">
        <el-card>
          <h3>核实任务下发</h3>
          <el-form :model="verifyTaskForm" label-width="120px">
            <el-form-item label="案卷编号">
              <el-input v-model="verifyTaskForm.caseId" />
            </el-form-item>
            <el-form-item label="案卷描述">
              <el-input v-model="verifyTaskForm.description" type="textarea" rows="4" />
            </el-form-item>
            <el-form-item label="选择监督员">
              <el-select v-model="verifyTaskForm.supervisor" placeholder="选择监督员">
                <el-option label="监督员1" value="supervisor1" />
                <el-option label="监督员2" value="supervisor2" />
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="assignVerifyTask">下发核实任务</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>

      <!-- 核查任务下发 -->
      <el-col :span="12">
        <el-card>
          <h3>核查任务下发</h3>
          <el-form :model="checkTaskForm" label-width="120px">
            <el-form-item label="案卷编号">
              <el-input v-model="checkTaskForm.caseId" />
            </el-form-item>
            <el-form-item label="案卷描述">
              <el-input v-model="checkTaskForm.description" type="textarea" rows="4" />
            </el-form-item>
            <el-form-item label="选择监督员">
              <el-select v-model="checkTaskForm.supervisor" placeholder="选择监督员">
                <el-option label="监督员1" value="supervisor1" />
                <el-option label="监督员2" value="supervisor2" />
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="assignCheckTask">下发核查任务</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
    </el-row>

    <!-- 任务反馈 -->
    <el-row :gutter="20" style="margin-top: 20px;">
      <el-col :span="24">
        <el-card>
          <h3>任务反馈</h3>
          <el-table :data="feedbackData" style="width: 100%">
            <el-table-column prop="taskId" label="任务编号" width="150" />
            <el-table-column prop="caseId" label="案卷编号" width="150" />
            <el-table-column prop="taskType" label="任务类型" width="120" />
            <el-table-column prop="status" label="状态" width="120">
              <template slot-scope="scope">
                <el-tag :type="getStatusTagType(scope.row.status)">
                  {{ scope.row.status }}
                </el-tag>
              </template>
            </el-table-column>
            <el-table-column prop="supervisor" label="监督员" />
            <el-table-column prop="feedback" label="反馈信息" />
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
      verifyTaskForm: {
        caseId: '',
        description: '',
        supervisor: ''
      },
      checkTaskForm: {
        caseId: '',
        description: '',
        supervisor: ''
      },
      feedbackData: [
        {
          taskId: 'T001',
          caseId: 'C001',
          taskType: '核实',
          status: '完成',
          supervisor: '监督员1',
          feedback: '问题已核实，无异常'
        },
        {
          taskId: 'T002',
          caseId: 'C002',
          taskType: '核查',
          status: '进行中',
          supervisor: '监督员2',
          feedback: '正在处理中'
        }
      ]
    }
  },
  methods: {
    assignVerifyTask() {
      this.$message.success('核实任务已下发')
      // 在这里添加下发核实任务的逻辑
    },
    assignCheckTask() {
      this.$message.success('核查任务已下发')
      // 在这里添加下发核查任务的逻辑
    },
    getStatusTagType(status) {
      switch (status) {
        case '完成':
          return 'success'
        case '进行中':
          return 'warning'
        default:
          return 'info'
      }
    }
  }
}
</script>

<style scoped>
.verification-task {
  padding: 20px;
}
</style>
