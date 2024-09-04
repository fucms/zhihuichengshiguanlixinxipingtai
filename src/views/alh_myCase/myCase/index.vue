<template>
  <div class="case-dispatch">
    <el-card>
      <h2>案卷派遣管理</h2>

      <!-- 案卷列表 -->
      <el-table :data="caseList" style="width: 100%" @row-click="handleCaseClick">
        <el-table-column prop="caseId" label="案卷编号" width="120" />
        <el-table-column prop="caseName" label="案卷名称" width="180" />
        <el-table-column prop="caseType" label="案卷类型" width="150" />
        <el-table-column prop="department" label="责任单位" width="200" />
        <el-table-column prop="severity" label="严重程度" width="100">
          <template slot-scope="scope">
            <el-tag :type="getSeverityTagType(scope.row.severity)">{{ scope.row.severity }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="status" label="状态" width="100" />
        <el-table-column prop="description" label="案卷描述" />
      </el-table>

      <!-- 操作按钮 -->
      <div style="margin: 20px 0;">
        <el-button type="primary" :disabled="selectedCase === null" @click="autoDispatch">自动派遣</el-button>
        <el-button type="warning" :disabled="selectedCase === null" @click="manualDispatch">手动派遣</el-button>
        <el-button type="danger" :disabled="selectedCase === null || selectedCase.severity !== '严重'" @click="emergencyDispatch">紧急预案</el-button>
      </div>

      <!-- 派遣详情 -->
      <el-dialog :visible.sync="dispatchDialogVisible" title="派遣详情">
        <el-form v-if="selectedCase" :model="selectedCase">
          <el-form-item label="案卷编号" label-width="120px">
            <el-input v-model="selectedCase.caseId" disabled />
          </el-form-item>
          <el-form-item label="案卷名称" label-width="120px">
            <el-input v-model="selectedCase.caseName" disabled />
          </el-form-item>
          <el-form-item label="选择派遣部门" label-width="120px">
            <el-select v-model="selectedDepartment" placeholder="请选择部门">
              <el-option v-for="dept in departments" :key="dept" :label="dept" :value="dept" />
            </el-select>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dispatchDialogVisible = false">取消</el-button>
          <el-button type="primary" @click="confirmDispatch">确认派遣</el-button>
        </span>
      </el-dialog>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      caseList: [], // 存放案卷数据的列表
      selectedCase: null, // 当前选择的案卷
      departments: ['市政部门', '交通管理部门', '环境保护部门', '消防部门'], // 模拟部门列表
      selectedDepartment: '', // 当前选择的派遣部门
      dispatchDialogVisible: false // 派遣详情对话框可见性
    }
  },
  created() {
    this.loadCaseData() // 页面加载时获取案卷数据
  },
  methods: {
    loadCaseData() {
      // 模拟获取案卷数据
      this.caseList = [
        { caseId: '001', caseName: '道路维修', caseType: '市政', department: '市政部门', severity: '中等', status: '待派遣', description: '道路需要修复' },
        { caseId: '002', caseName: '垃圾清理', caseType: '环卫', department: '环境保护部门', severity: '轻微', status: '待派遣', description: '街道垃圾需要清理' },
        { caseId: '003', caseName: '火灾隐患', caseType: '消防', department: '消防部门', severity: '严重', status: '待派遣', description: '存在火灾隐患' }
      ]
    },
    handleCaseClick(row) {
      this.selectedCase = row // 点击选择案卷
    },
    getSeverityTagType(severity) {
      // 根据严重程度返回不同的标签类型
      switch (severity) {
        case '轻微':
          return 'success'
        case '中等':
          return 'warning'
        case '严重':
          return 'danger'
        default:
          return 'info'
      }
    },
    autoDispatch() {
      // 模拟自动派遣逻辑
      this.$message.success(`案卷 ${this.selectedCase.caseName} 已自动派遣至 ${this.selectedCase.department}`)
      this.updateCaseStatus('已派遣')
    },
    manualDispatch() {
      // 手动派遣，显示派遣详情对话框
      this.dispatchDialogVisible = true
    },
    confirmDispatch() {
      // 确认派遣
      if (this.selectedDepartment) {
        this.$message.success(`案卷 ${this.selectedCase.caseName} 已派遣至 ${this.selectedDepartment}`)
        this.updateCaseStatus('已派遣')
        this.dispatchDialogVisible = false
      } else {
        this.$message.error('请选择派遣部门')
      }
    },
    emergencyDispatch() {
      // 模拟紧急预案
      this.$message.error(`案卷 ${this.selectedCase.caseName} 已启动紧急预案`)
      this.updateCaseStatus('紧急处理')
    },
    updateCaseStatus(status) {
      if (this.selectedCase) {
        this.selectedCase.status = status
        this.selectedCase = null // 重置选中状态
      }
    }
  }
}
</script>

<style scoped>
.case-dispatch {
  padding: 20px;
}
.el-card {
  margin-bottom: 20px;
}
.dialog-footer {
  text-align: right;
}
</style>
