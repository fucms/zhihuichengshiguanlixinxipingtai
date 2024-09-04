<template>
  <div class="management">
    <!-- 监督员分组管理 -->
    <el-card class="box-card">
      <h3>监督员分组管理</h3>
      <el-button type="primary" @click="showGroupDialog('add')">添加分组</el-button>
      <el-table :data="groups" stripe height="200px">
        <el-table-column prop="groupName" label="分组名称" />
        <el-table-column prop="groupLeader" label="组长" />
        <el-table-column prop="supervisors" label="监督员" />
        <el-table-column prop="actions" label="操作">
          <template slot-scope="scope">
            <el-button size="small" @click="showGroupDialog('edit', scope.row)">编辑</el-button>
            <el-button type="danger" size="small" @click="deleteGroup(scope.row.id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>

    <!-- 监督员责任区管理 -->
    <el-card class="box-card" style="margin-top: 20px;">
      <h3>监督员责任区管理</h3>
      <el-button type="primary" @click="showAreaDialog('add')">添加责任区</el-button>
      <el-table :data="areas" stripe height="200px">
        <el-table-column prop="areaName" label="责任区名称" />
        <el-table-column prop="supervisors" label="监督员" />
        <el-table-column prop="grids" label="网格" />
        <el-table-column prop="actions" label="操作">
          <template slot-scope="scope">
            <el-button size="small" @click="showAreaDialog('edit', scope.row)">编辑</el-button>
            <el-button type="danger" size="small" @click="deleteArea(scope.row.id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>

    <!-- 监督员分组管理对话框 -->
    <el-dialog :visible.sync="groupDialogVisible" title="管理分组" @close="resetGroupForm">
      <el-form :model="currentGroup" label-width="100px">
        <el-form-item label="分组名称">
          <el-input v-model="currentGroup.groupName" />
        </el-form-item>
        <el-form-item label="组长">
          <el-input v-model="currentGroup.groupLeader" />
        </el-form-item>
        <el-form-item label="监督员">
          <el-input v-model="currentGroup.supervisors" />
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="groupDialogVisible = false">取消</el-button>
        <el-button type="primary" @click="saveGroup">确定</el-button>
      </span>
    </el-dialog>

    <!-- 监督员责任区管理对话框 -->
    <el-dialog :visible.sync="areaDialogVisible" title="管理责任区" @close="resetAreaForm">
      <el-form :model="currentArea" label-width="100px">
        <el-form-item label="责任区名称">
          <el-input v-model="currentArea.areaName" />
        </el-form-item>
        <el-form-item label="监督员">
          <el-input v-model="currentArea.supervisors" />
        </el-form-item>
        <el-form-item label="网格">
          <el-input v-model="currentArea.grids" />
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="areaDialogVisible = false">取消</el-button>
        <el-button type="primary" @click="saveArea">确定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      groups: [
        { id: 1, groupName: '分组A', groupLeader: '张三', supervisors: '李四, 王五' },
        { id: 2, groupName: '分组B', groupLeader: '李四', supervisors: '赵六, 钱七' }
      ],
      areas: [
        { id: 1, areaName: '责任区A', supervisors: '张三, 李四', grids: '网格1, 网格2' },
        { id: 2, areaName: '责任区B', supervisors: '王五, 赵六', grids: '网格3, 网格4' }
      ],
      groupDialogVisible: false,
      areaDialogVisible: false,
      currentGroup: {},
      currentArea: {},
      dialogMode: 'add'
    }
  },
  methods: {
    showGroupDialog(mode, group) {
      this.dialogMode = mode
      this.currentGroup = mode === 'edit' ? { ...group } : { groupName: '', groupLeader: '', supervisors: '' }
      this.groupDialogVisible = true
    },
    showAreaDialog(mode, area) {
      this.dialogMode = mode
      this.currentArea = mode === 'edit' ? { ...area } : { areaName: '', supervisors: '', grids: '' }
      this.areaDialogVisible = true
    },
    saveGroup() {
      if (this.dialogMode === 'add') {
        this.groups.push({ id: Date.now(), ...this.currentGroup })
      } else {
        const index = this.groups.findIndex(group => group.id === this.currentGroup.id)
        if (index !== -1) {
          this.$set(this.groups, index, this.currentGroup)
        }
      }
      this.groupDialogVisible = false
    },
    saveArea() {
      if (this.dialogMode === 'add') {
        this.areas.push({ id: Date.now(), ...this.currentArea })
      } else {
        const index = this.areas.findIndex(area => area.id === this.currentArea.id)
        if (index !== -1) {
          this.$set(this.areas, index, this.currentArea)
        }
      }
      this.areaDialogVisible = false
    },
    deleteGroup(id) {
      this.groups = this.groups.filter(group => group.id !== id)
    },
    deleteArea(id) {
      this.areas = this.areas.filter(area => area.id !== id)
    },
    resetGroupForm() {
      this.currentGroup = {}
    },
    resetAreaForm() {
      this.currentArea = {}
    }
  }
}
</script>

  <style scoped>
  .management {
    padding: 20px;
  }

  .box-card {
    margin-bottom: 20px;
  }
  </style>
