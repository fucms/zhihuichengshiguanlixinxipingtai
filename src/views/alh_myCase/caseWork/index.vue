<template>
  <div class="case-supervision">
    <el-row :gutter="20">
      <el-col :span="24">
        <el-card>
          <h3>业务督办箱</h3>
          <el-table
            :data="caseList"
            border
            style="width: 100%"
            @row-click="handleRowClick"
          >
            <el-table-column prop="caseId" label="案卷编号" width="150" />
            <el-table-column prop="caseName" label="案卷名称" width="200" />
            <el-table-column prop="department" label="承办部门" width="150" />
            <el-table-column prop="status" label="案卷状态" width="120" />
            <el-table-column prop="dueDate" label="办理期限" width="160" />
            <el-table-column prop="overdueDays" label="逾期天数" width="120" />
            <el-table-column label="操作" width="180">
              <template slot-scope="scope">
                <el-button
                  type="primary"
                  @click="approveCase(scope.row)"
                >
                  审批
                </el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
    </el-row>

    <!-- 审批表单模态框 -->
    <el-dialog
      title="案卷审批"
      :visible.sync="dialogVisible"
      width="500px"
    >
      <el-form :model="currentCase" label-width="100px">
        <el-form-item label="案卷编号">
          <el-input v-model="currentCase.caseId" disabled />
        </el-form-item>
        <el-form-item label="案卷名称">
          <el-input v-model="currentCase.caseName" disabled />
        </el-form-item>
        <el-form-item label="督办意见">
          <el-input
            v-model="currentCase.supervisionOpinion"
            type="textarea"
            rows="4"
            placeholder="请输入督办意见"
          />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="submitApproval">提交审批</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
// 模拟案卷数据
const Mock = require('mockjs')

export default {
  data() {
    return {
      dialogVisible: false,
      currentCase: {
        caseId: '',
        caseName: '',
        supervisionOpinion: ''
      },
      caseList: Mock.mock({
        'array|10': [
          {
            caseId: '@id',
            caseName: '@csentence(5, 10)',
            department: '@cword(4)部',
            status: '@pick(["待督办", "已督办", "已结案"])',
            dueDate: '@date("yyyy-MM-dd HH:mm:ss")',
            overdueDays: '@integer(0, 30)'
          }
        ]
      }).array
    }
  },
  methods: {
    // 点击审批按钮时弹出对话框
    approveCase(row) {
      this.currentCase = { ...row, supervisionOpinion: '' }
      this.dialogVisible = true
    },
    // 提交审批
    submitApproval() {
      this.$message.success(`案卷编号 ${this.currentCase.caseId} 的审批已提交！`)
      this.dialogVisible = false
    },
    // 点击行选中案卷
    handleRowClick(row) {
      this.currentCase = { ...row, supervisionOpinion: '' }
      this.dialogVisible = true
    }
  }
}
</script>

  <style scoped>
  .case-supervision {
    padding: 20px;
  }

  .el-card {
    margin-bottom: 20px;
  }
  </style>
