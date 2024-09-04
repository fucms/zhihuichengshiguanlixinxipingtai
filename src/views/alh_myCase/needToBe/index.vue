<template>
  <div class="case-handling">
    <el-card>

      <!-- 案卷基本信息展示 -->
      <el-form :model="caseInfo" label-width="120px">
        <el-form-item label="案卷编号">
          <el-input v-model="caseInfo.id" disabled />
        </el-form-item>
        <el-form-item label="案卷名称">
          <el-input v-model="caseInfo.name" disabled />
        </el-form-item>
        <el-form-item label="案卷来源">
          <el-input v-model="caseInfo.source" disabled />
        </el-form-item>
        <el-form-item label="大类">
          <el-input v-model="caseInfo.majorCategory" disabled />
        </el-form-item>
        <el-form-item label="小类">
          <el-input v-model="caseInfo.minorCategory" disabled />
        </el-form-item>
        <el-form-item label="案卷状态">
          <el-input v-model="caseInfo.status" disabled />
        </el-form-item>
        <el-form-item label="案卷描述">
          <el-input v-model="caseInfo.description" type="textarea" disabled />
        </el-form-item>
      </el-form>

      <!-- 办理表单 -->
      <el-form :model="handlingInfo" label-width="120px" style="margin-top: 20px;">
        <el-form-item label="办理意见">
          <el-input v-model="handlingInfo.comments" type="textarea" />
        </el-form-item>
        <el-form-item label="办理情况">
          <el-input v-model="handlingInfo.status" type="textarea" />
        </el-form-item>
      </el-form>

      <!-- 操作按钮 -->
      <el-row :gutter="20" style="margin-top: 20px;" type="flex" justify="center">
        <el-col :span="5">
          <el-button type="primary" @click="queryLocation">位置查询</el-button>
        </el-col>
        <el-col :span="5">
          <el-button type="primary" @click="printCaseInfo">打印案卷信息</el-button>
        </el-col>
        <el-col :span="5">
          <el-button type="success" @click="submitHandlingInfo">提交办理信息</el-button>
        </el-col>
      </el-row>
    </el-card>

    <!-- 位置查询对话框 -->
    <el-dialog title="位置查询" :visible.sync="locationDialogVisible">
      <div>
        <!-- 这里可以集成地图组件，展示位置查询 -->
        <p>位置查询功能尚未实现。</p>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="locationDialogVisible = false">关闭</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 案卷基本信息
      caseInfo: {
        id: '2024001',
        name: '路面修复',
        source: '市民举报',
        majorCategory: '基础设施',
        minorCategory: '道路维护',
        status: '待处理',
        description: '该路段存在严重的坑洼现象，影响交通安全。'
      },
      // 办理信息
      handlingInfo: {
        comments: '',
        status: ''
      },
      locationDialogVisible: false
    }
  },
  methods: {
    queryLocation() {
      this.locationDialogVisible = true
    },
    printCaseInfo() {
      window.print()
    },
    submitHandlingInfo() {
      console.log('提交办理信息:', this.handlingInfo)
      this.$message.success('办理信息提交成功')
    }
  }
}
</script>

  <style scoped>
  .case-handling {
    padding: 20px;
  }

  .el-card {
    width: 100%;
  }

  .el-form {
    margin-bottom: 20px;
  }

  .el-row {
    margin-top: 20px;
  }

  .el-dialog {
    text-align: center;
  }
  </style>
