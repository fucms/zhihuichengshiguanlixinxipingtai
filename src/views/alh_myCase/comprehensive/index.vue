<template>
  <div class="timing-management">
    <el-card>
      <el-row>
        <el-col :span="24">
          <el-table :data="caseList" style="width: 100%">
            <el-table-column prop="caseId" label="案卷编号" width="180" />
            <el-table-column prop="caseName" label="案卷名称" width="250" />
            <el-table-column prop="currentStage" label="当前阶段" width="150" />
            <el-table-column prop="timeLimit" label="办理时限" width="150">
              <template slot-scope="scope">
                <span :class="getStatusClass(scope.row.remainingTime)">
                  {{ scope.row.timeLimit }}
                </span>
              </template>
            </el-table-column>
            <el-table-column prop="remainingTime" label="剩余时间" width="150">
              <template slot-scope="scope">
                <span :class="getStatusClass(scope.row.remainingTime)">
                  {{ scope.row.remainingTime }} 小时
                </span>
              </template>
            </el-table-column>
            <el-table-column prop="status" label="状态" width="100">
              <template slot-scope="scope">
                <el-tag :type="getStatusType(scope.row.remainingTime)">
                  {{ getStatusText(scope.row.remainingTime) }}
                </el-tag>
              </template>
            </el-table-column>
            <el-table-column label="操作" width="120">
              <template slot-scope="scope">
                <el-button type="primary" size="small" @click="催办(scope.row)">
                  催办
                </el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      caseList: [
        {
          caseId: '20230901001',
          caseName: '市政道路维修',
          currentStage: '审批中',
          timeLimit: 48,
          remainingTime: 36
        },
        {
          caseId: '20230901002',
          caseName: '园区绿化改造',
          currentStage: '办理中',
          timeLimit: 24,
          remainingTime: 5
        },
        {
          caseId: '20230901003',
          caseName: '违建拆除',
          currentStage: '已派遣',
          timeLimit: 72,
          remainingTime: -2
        },
        {
          caseId: '20230901004',
          caseName: '市政道路维修',
          currentStage: '审批中',
          timeLimit: 48,
          remainingTime: 36
        },
        {
          caseId: '20230901005',
          caseName: '园区绿化改造',
          currentStage: '办理中',
          timeLimit: 24,
          remainingTime: 5
        },
        {
          caseId: '20230901006',
          caseName: '违建拆除',
          currentStage: '已派遣',
          timeLimit: 72,
          remainingTime: -2
        }
      ]
    }
  },
  methods: {
    getStatusClass(remainingTime) {
      if (remainingTime > 24) {
        return 'green-text'
      } else if (remainingTime > 0 && remainingTime <= 24) {
        return 'yellow-text'
      } else {
        return 'red-text'
      }
    },
    getStatusType(remainingTime) {
      if (remainingTime > 24) {
        return 'success'
      } else if (remainingTime > 0 && remainingTime <= 24) {
        return 'warning'
      } else {
        return 'danger'
      }
    },
    getStatusText(remainingTime) {
      if (remainingTime > 24) {
        return '正常'
      } else if (remainingTime > 0 && remainingTime <= 24) {
        return '即将到期'
      } else {
        return '超期'
      }
    },
    催办(row) {
      this.$message({
        message: `已对案卷 ${row.caseName} 进行催办通知！`,
        type: 'warning'
      })
    }
  }
}
</script>

  <style scoped>
  .timing-management{
    margin: 20px;
  }
  .green-text {
    color: green;
  }

  .yellow-text {
    color: orange;
  }

  .red-text {
    color: red;
  }
  </style>
