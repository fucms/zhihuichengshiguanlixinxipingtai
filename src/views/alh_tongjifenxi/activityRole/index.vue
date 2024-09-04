<template>
  <div class="activity-role-management">
    <el-row :gutter="20">
      <!-- 活动角色管理 -->
      <el-col :span="12">
        <el-card class="box-card">
          <h3>活动角色对应</h3>
          <el-table :data="activities" stripe height="350px">
            <el-table-column prop="activity" label="活动" />
            <el-table-column prop="role" label="角色" />
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button size="small" type="primary" @click="editRole(scope.row)">编辑</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>

      <!-- 活动角色配置 -->
      <el-col :span="12">
        <el-card class="box-card">
          <h3>配置角色</h3>
          <el-form ref="form" :model="form" label-width="120px">
            <el-form-item label="选择活动">
              <el-select v-model="form.selectedActivity" placeholder="请选择活动">
                <el-option
                  v-for="item in activityOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>
            <el-form-item label="选择角色">
              <el-select v-model="form.selectedRole" placeholder="请选择角色">
                <el-option
                  v-for="item in roleOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="saveRole">保存</el-button>
              <el-button @click="resetForm">重置</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activities: [
        { activity: '受理', role: '城市管理部' },
        { activity: '审核', role: '审查部门' },
        { activity: '立案', role: '立案组' },
        { activity: '任务派遣', role: '任务分配组' },
        { activity: '任务执行', role: '执行组' },
        { activity: '核查', role: '核查组' },
        { activity: '结案归档', role: '归档组' }
      ],
      activityOptions: [
        { value: '受理', label: '受理' },
        { value: '审核', label: '审核' },
        { value: '立案', label: '立案' },
        { value: '任务派遣', label: '任务派遣' },
        { value: '任务执行', label: '任务执行' },
        { value: '核查', label: '核查' },
        { value: '结案归档', label: '结案归档' }
      ],
      roleOptions: [
        { value: '城市管理部', label: '城市管理部' },
        { value: '审查部门', label: '审查部门' },
        { value: '立案组', label: '立案组' },
        { value: '任务分配组', label: '任务分配组' },
        { value: '执行组', label: '执行组' },
        { value: '核查组', label: '核查组' },
        { value: '归档组', label: '归档组' }
      ],
      form: {
        selectedActivity: '',
        selectedRole: ''
      },
      editingIndex: null
    }
  },
  methods: {
    editRole(row) {
      this.form.selectedActivity = row.activity
      this.form.selectedRole = row.role
      this.editingIndex = this.activities.indexOf(row)
    },
    saveRole() {
      if (this.editingIndex !== null) {
        // Update existing role
        this.activities[this.editingIndex].role = this.form.selectedRole
        this.editingIndex = null
      } else {
        // Add new role
        this.activities.push({
          activity: this.form.selectedActivity,
          role: this.form.selectedRole
        })
      }
      this.resetForm()
    },
    resetForm() {
      this.form.selectedActivity = ''
      this.form.selectedRole = ''
      this.editingIndex = null
    }
  }
}
</script>

  <style scoped>
  .activity-role-management {
    padding: 20px;
  }

  .box-card {
    margin-bottom: 20px;
  }

  .el-form-item {
    margin-bottom: 15px;
  }
  </style>
