<template>
  <div class="workflow-management">
    <!-- 流程定义列表 -->
    <el-row :gutter="20">
      <el-col :span="24">
        <el-card class="box-card">
          <el-row>
            <el-col :span="16">
              <h3>流程定义列表</h3>
              <el-button type="primary" style="margin-bottom: 10px" @click="showCreateDialog">新增流程</el-button>
            </el-col>
          </el-row>
          <el-table :data="workflows" height="170px" @row-click="editWorkflow">
            <el-table-column prop="id" label="流程ID" />
            <el-table-column prop="name" label="流程名称" />
            <el-table-column prop="description" label="流程描述" />
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button size="small" type="warning" @click="editWorkflow(scope.row)">编辑</el-button>
                <el-button size="small" type="danger" @click="deleteWorkflow(scope.row)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
    </el-row>

    <!-- 流程编辑区域 -->
    <el-row :gutter="20">
      <el-col :span="24">
        <el-card class="box-card">
          <h3>流程编辑</h3>
          <el-form ref="workflowForm" :model="currentWorkflow" label-width="120px">
            <el-form-item label="流程名称">
              <el-input v-model="currentWorkflow.name" />
            </el-form-item>
            <el-form-item label="流程描述">
              <el-input v-model="currentWorkflow.description" />
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="saveWorkflow">保存</el-button>
              <el-button @click="cancelEdit">取消</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
    </el-row>

    <!-- 新增流程对话框 -->
    <el-dialog title="新增流程" :visible.sync="createDialogVisible">
      <el-form ref="createForm" :model="newWorkflow" label-width="120px">
        <el-form-item label="流程名称">
          <el-input v-model="newWorkflow.name" />
        </el-form-item>
        <el-form-item label="流程描述">
          <el-input v-model="newWorkflow.description" />
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="createDialogVisible = false">取消</el-button>
        <el-button type="primary" @click="createWorkflow">确定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      workflows: [
        { id: 1, name: '流程一', description: '流程一描述' },
        { id: 2, name: '流程二', description: '流程二描述' }
      ],
      currentWorkflow: {},
      newWorkflow: { name: '', description: '' },
      createDialogVisible: false
    }
  },
  methods: {
    showCreateDialog() {
      this.createDialogVisible = true
    },
    editWorkflow(row) {
      this.currentWorkflow = { ...row }
    },
    deleteWorkflow(row) {
      this.$confirm('确认删除此流程?', '提示', {
        type: 'warning'
      }).then(() => {
        this.workflows = this.workflows.filter(workflow => workflow.id !== row.id)
        this.$message.success('删除成功')
      }).catch(() => {
        this.$message.info('取消删除')
      })
    },
    saveWorkflow() {
      // 实际保存逻辑可以通过 API 调用完成
      const index = this.workflows.findIndex(wf => wf.id === this.currentWorkflow.id)
      if (index > -1) {
        this.$set(this.workflows, index, { ...this.currentWorkflow })
      } else {
        this.currentWorkflow.id = this.workflows.length + 1
        this.workflows.push(this.currentWorkflow)
      }
      this.currentWorkflow = {}
      this.$message.success('保存成功')
    },
    cancelEdit() {
      this.currentWorkflow = {}
    },
    createWorkflow() {
      this.newWorkflow.id = this.workflows.length + 1
      this.workflows.push(this.newWorkflow)
      this.newWorkflow = { name: '', description: '' }
      this.createDialogVisible = false
      this.$message.success('新增成功')
    }
  }
}
</script>

  <style scoped>
  .workflow-management {
    padding: 20px;
  }

  .workflow-visualization {
    margin-top: 20px;
    height: 400px;
    border: 1px solid #ddd;
  }
  .box-card{
    margin-bottom: 10px;
  }
  </style>
