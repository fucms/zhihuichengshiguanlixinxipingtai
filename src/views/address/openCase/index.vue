<template>
  <div class="case-approval">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>立案及案卷审批</span>
      </div>

      <el-form :model="caseForm" label-width="120px">
        <el-form-item label="案卷编号">
          <el-input v-model="caseForm.caseNumber" placeholder="请输入案卷编号" />
        </el-form-item>
        <el-form-item label="案卷名称">
          <el-input v-model="caseForm.caseName" placeholder="请输入案卷名称" />
        </el-form-item>
        <el-form-item label="立案意见">
          <el-input v-model="caseForm.approvalComments" type="textarea" rows="4" placeholder="请输入立案意见" />
        </el-form-item>
        <el-form-item label="审核状态">
          <el-radio-group v-model="caseForm.status">
            <el-radio label="通过">通过</el-radio>
            <el-radio label="不通过">不通过</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitCase">提交审批</el-button>
          <el-button @click="resetForm">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      caseForm: {
        caseNumber: '',
        caseName: '',
        approvalComments: '',
        status: ''
      }
    }
  },
  methods: {
    submitCase() {
      if (this.caseForm.caseNumber && this.caseForm.caseName && this.caseForm.approvalComments && this.caseForm.status) {
        this.$message.success('案卷审批已提交')
        this.resetForm()
      } else {
        this.$message.error('请填写完整信息')
      }
    },
    resetForm() {
      this.caseForm = {
        caseNumber: '',
        caseName: '',
        approvalComments: '',
        status: ''
      }
    }
  }
}
</script>

<style scoped>
.case-approval {
  padding: 20px;
}
</style>
