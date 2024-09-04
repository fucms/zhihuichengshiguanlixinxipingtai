<template>
  <div class="work-time-management">
    <el-row :gutter="20">
      <!-- 工作时间列表 -->
      <el-col :span="24">
        <el-card class="box-card">
          <h3>工作时间管理</h3>
          <el-button type="primary" @click="showAddDialog">添加工作时间</el-button>
          <el-table :data="workTimes" height="400px" style="width: 100%;" stripe>
            <el-table-column prop="department" label="部门" />
            <el-table-column prop="employee" label="员工" />
            <el-table-column prop="startTime" label="上班时间" />
            <el-table-column prop="endTime" label="下班时间" />
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button size="mini" @click="showEditDialog(scope.row)">编辑</el-button>
                <el-button type="danger" size="mini" @click="handleDelete(scope.row)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
    </el-row>

    <!-- 添加/编辑对话框 -->
    <el-dialog
      title="工作时间管理"
      :visible.sync="dialogVisible"
      width="30%"
      @close="resetForm"
    >
      <el-form ref="form" :model="currentWorkTime" label-width="120px">
        <el-form-item label="部门">
          <el-input v-model="currentWorkTime.department" />
        </el-form-item>
        <el-form-item label="员工">
          <el-input v-model="currentWorkTime.employee" />
        </el-form-item>
        <el-form-item label="上班时间">
          <!-- value-format 指定v-model绑定值的格式，不指定则默认为Date格式 -->
          <el-time-picker
            v-model="currentWorkTime.startTime"
            format="HH:mm"
            placeholder="选择上班时间"
            value-format="HH:mm"
          />
        </el-form-item>
        <el-form-item label="下班时间">
          <el-time-picker
            v-model="currentWorkTime.endTime"
            format="HH:mm"
            placeholder="选择下班时间"
            value-format="HH:mm"
          />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="handleSave">保存</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
      isEdit: false,
      currentWorkTime: {
        department: '',
        employee: '',
        startTime: '',
        endTime: ''
      },
      workTimes: [
        // 示例数据
        { department: '技术部', employee: '张三', startTime: '09:00', endTime: '17:00' },
        { department: '财务部', employee: '李四', startTime: '08:30', endTime: '17:30' },
        { department: '技术部', employee: '张三', startTime: '09:00', endTime: '17:00' },
        { department: '财务部', employee: '李四', startTime: '08:30', endTime: '17:30' },
        { department: '技术部', employee: '张三', startTime: '09:00', endTime: '17:00' },
        { department: '财务部', employee: '李四', startTime: '08:30', endTime: '17:30' }
      ]
    }
  },
  methods: {
    showAddDialog() {
      this.isEdit = false
      this.currentWorkTime = { department: '', employee: '', startTime: '', endTime: '' }
      this.dialogVisible = true
    },
    showEditDialog(row) {
      this.isEdit = true
      this.currentWorkTime = { ...row }
      this.dialogVisible = true
    },
    handleSave() {
      if (this.isEdit) {
        // 编辑模式
        const index = this.workTimes.findIndex(
          (item) => item.department === this.currentWorkTime.department && item.employee === this.currentWorkTime.employee
        )
        if (index !== -1) {
          // 在 this.workTimes 数组的指定 index 位置上，使用 this.currentWorkTime 中的数据更新该位置的元素。
          this.$set(this.workTimes, index, { ...this.currentWorkTime })
        }
      } else {
        // 添加模式
        this.workTimes.push({ ...this.currentWorkTime })
      }
      this.dialogVisible = false
    },
    handleDelete(row) {
      this.$confirm('确认删除该工作时间记录吗?', '警告', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.workTimes = this.workTimes.filter(item => item !== row)
        this.$message.success('删除成功')
      })
    },
    resetForm() {
      this.$refs.form.resetFields()
    }
  }
}
</script>

  <style scoped>
  .work-time-management {
    padding: 20px;
  }

  .box-card {
    margin-bottom: 20px;
  }
  </style>
