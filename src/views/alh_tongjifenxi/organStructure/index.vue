<template>
  <div class="organization-management">
    <el-row :gutter="20">
      <!-- 部门管理 -->
      <el-col :span="12">
        <el-card class="box-card">
          <h3>部门管理</h3>
          <el-tree
            :data="departments"
            :props="treeProps"
            node-key="id"
            @node-click="handleDepartmentClick"
          />
          <el-button type="primary" @click="addDepartment">添加部门</el-button>
        </el-card>
      </el-col>

      <!-- 账号管理 -->
      <el-col :span="12">
        <el-card class="box-card">
          <h3>账号管理</h3>
          <el-table :data="accounts" @row-click="handleAccountClick">
            <el-table-column prop="username" label="账号" />
            <el-table-column prop="department" label="部门" />
            <el-table-column prop="role" label="角色" />
          </el-table>
          <el-button type="primary" @click="addAccount">添加账号</el-button>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="20" class="management-row">
      <!-- 员工管理 -->
      <el-col :span="12">
        <el-card class="box-card">
          <h3>员工管理</h3>
          <el-table :data="employees" @row-click="handleEmployeeClick">
            <el-table-column prop="name" label="姓名" />
            <el-table-column prop="department" label="部门" />
            <el-table-column prop="role" label="角色" />
          </el-table>
          <el-button type="primary" @click="addEmployee">添加员工</el-button>
        </el-card>
      </el-col>

      <!-- 角色管理 -->
      <el-col :span="12">
        <el-card class="box-card">
          <h3>角色管理</h3>
          <el-table :data="roles" @row-click="handleRoleClick">
            <el-table-column prop="roleName" label="角色名称" />
            <el-table-column prop="department" label="部门" />
            <el-table-column prop="description" label="描述" />
          </el-table>
          <el-button type="primary" @click="addRole">添加角色</el-button>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 部门管理数据
      departments: [
        { id: 1, label: '部门A', children: [{ id: 2, label: '子部门A1' }] },
        { id: 3, label: '部门B', children: [{ id: 4, label: '子部门B1' }] }
      ],
      treeProps: {
        children: 'children',
        label: 'label'
      },

      // 账号管理数据
      accounts: [
        { username: 'user1', department: '部门A', role: '管理员' },
        { username: 'user2', department: '部门B', role: '普通用户' }
      ],

      // 员工管理数据
      employees: [
        { name: '张三', department: '部门A', role: '管理员' },
        { name: '李四', department: '部门B', role: '普通用户' }
      ],

      // 角色管理数据
      roles: [
        { roleName: '管理员', department: '部门A', description: '管理权限' },
        { roleName: '普通用户', department: '部门B', description: '基本权限' }
      ]
    }
  },
  methods: {
    handleDepartmentClick(node) {
      // 处理部门点击事件
      console.log('Department clicked:', node)
    },
    handleAccountClick(row) {
      // 处理账号点击事件
      console.log('Account clicked:', row)
    },
    handleEmployeeClick(row) {
      // 处理员工点击事件
      console.log('Employee clicked:', row)
    },
    handleRoleClick(row) {
      // 处理角色点击事件
      console.log('Role clicked:', row)
    },
    addDepartment() {
      // 添加部门逻辑
      console.log('添加部门')
    },
    addAccount() {
      // 添加账号逻辑
      console.log('添加账号')
    },
    addEmployee() {
      // 添加员工逻辑
      console.log('添加员工')
    },
    addRole() {
      // 添加角色逻辑
      console.log('添加角色')
    }
  }
}
</script>

  <style scoped>
  .organization-management {
    padding: 20px;
  }

  .management-row {
    margin-top: 20px;
  }

  .box-card {
    height: 250px;
    margin-bottom: 20px;
  }
  </style>
