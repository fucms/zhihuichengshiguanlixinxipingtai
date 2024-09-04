<template>
  <div class="role-authorization">
    <!-- 侧边栏 -->
    <el-aside width="200px" class="sidebar">
      <el-menu
        default-active="1"
        class="el-menu-vertical-demo"
        :background-color="'#f4f4f4'"
        :text-color="'#333'"
        :active-text-color="'#409EFF'"
      >
        <el-menu-item index="1">角色管理</el-menu-item>
        <el-menu-item index="2">模块管理</el-menu-item>
        <el-menu-item index="3">权限配置</el-menu-item>
        <el-menu-item index="4">操作日志</el-menu-item>
      </el-menu>
    </el-aside>

    <!-- 主体内容区 -->
    <el-container>
      <el-header>
        <el-breadcrumb separator="/">
          <el-breadcrumb-item>首页</el-breadcrumb-item>
          <el-breadcrumb-item>角色授权管理</el-breadcrumb-item>
        </el-breadcrumb>
      </el-header>

      <el-main>
        <el-row :gutter="20">
          <!-- 角色选择区 -->
          <el-col :span="6">
            <el-card class="box-card">
              <h3>角色选择</h3>
              <el-input
                v-model="roleSearch"
                placeholder="搜索角色"
                suffix-icon="el-icon-search"
                clearable
                @input="filterRoles"
              />
              <el-tree
                :data="filteredRoles"
                :props="treePropsRoles"
                :default-expand-all="true"
                :highlight-current="true"
                class="role-tree"
                @node-click="handleRoleClick"
              />
            </el-card>
          </el-col>

          <!-- 模块分配区 -->
          <el-col :span="18">
            <el-card class="box-card">
              <h3>模块分配</h3>
              <el-input
                v-model="moduleSearch"
                placeholder="搜索模块"
                suffix-icon="el-icon-search"
                clearable
                @input="filterModules"
              />
              <el-row>
                <el-col :span="12">
                  <el-tree
                    ref="tree"
                    :data="filteredModules"
                    :props="treePropsModules"
                    show-checkbox
                    node-key="id"
                    :default-checked-keys="checkedModuleKeys"
                    class="module-tree"
                  >
                    <span slot-scope="{ data }" class="custom-tree-node">
                      <span>{{ data.label }}</span>
                      <el-tooltip
                        class="item"
                        effect="dark"
                        :content="data.description"
                        placement="top"
                      >
                        <i class="el-icon-info" />
                      </el-tooltip>
                    </span>
                  </el-tree>
                </el-col>
              </el-row>
              <el-button type="primary" @click="saveChanges">保存修改</el-button>
              <el-button @click="cancelChanges">取消</el-button>
            </el-card>
          </el-col>
        </el-row>

        <!-- 操作提示 -->
        <el-row>
          <el-col :span="24">
            <el-alert
              v-if="operationMessage"
              :title="operationMessage"
              type="info"
              show-icon
            />
          </el-col>
        </el-row>

        <!-- 操作历史记录 -->
        <el-row>
          <el-col :span="24">
            <el-card class="box-card">
              <h3>操作历史记录</h3>
              <el-table :data="operationLogs" stripe>
                <el-table-column prop="timestamp" label="时间" width="180" />
                <el-table-column prop="user" label="操作人员" width="150" />
                <el-table-column prop="action" label="操作" />
                <el-table-column prop="details" label="详情" />
              </el-table>
            </el-card>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      roles: [
        { id: '1', name: '管理员' },
        { id: '2', name: '编辑' },
        { id: '3', name: '查看者' }
      ],
      modules: [
        { id: '1', label: '用户管理', description: '管理用户信息' },
        { id: '2', label: '内容管理', description: '管理内容发布' },
        { id: '3', label: '系统设置', description: '系统配置与设置' },
        { id: '4', label: '报告生成', description: '生成各种报告' }
      ],
      filteredRoles: [],
      filteredModules: [],
      roleSearch: '',
      moduleSearch: '',
      selectedRole: null,
      selectedModule: null,
      checkedModuleKeys: [],
      operationMessage: '',
      operationLogs: [
        { timestamp: '2024-09-01 10:00:00', user: '张三', action: '分配权限', details: '分配了用户管理模块给管理员角色' },
        { timestamp: '2024-09-02 11:30:00', user: '李四', action: '修改权限', details: '修改了内容管理模块权限' }
      ],
      treePropsRoles: {
        children: 'children',
        label: 'name'
      },
      treePropsModules: {
        children: 'children',
        label: 'label'
      }
    }
  },
  mounted() {
    this.filteredRoles = this.roles
    this.filteredModules = this.modules
  },
  methods: {
    filterRoles() {
      this.filteredRoles = this.roles.filter(role =>
        role.name.includes(this.roleSearch)
      )
    },
    filterModules() {
      this.filteredModules = this.modules.filter(module =>
        module.label.includes(this.moduleSearch)
      )
    },
    handleRoleClick(role) {
      this.selectedRole = role.id
      this.fetchRoleModules()
    },
    fetchRoleModules() {
      // Simulate fetching role's assigned modules from a server
      const roleModules = {
        '1': ['1', '2', '3'],
        '2': ['2', '4'],
        '3': ['3']
      }
      this.checkedModuleKeys = roleModules[this.selectedRole] || []
    },
    handleModuleCheckChange(checkedKeys) {
      // Handle changes to the checked modules
      this.checkedModuleKeys = checkedKeys
    },
    saveChanges() {
      const checkedNodes = this.$refs.tree.getCheckedNodes()
      const checkedKeys = checkedNodes.map(node => node.id)
      // Simulate saving selected modules for the role
      console.log('保存修改:', this.selectedRole, checkedKeys)
      this.operationMessage = '修改保存成功'
    },
    cancelChanges() {
      this.operationMessage = '操作已取消'
    },
    showModuleDetails(module) {
      this.selectedModule = module
    }
  }
}
</script>

  <style scoped>
  .role-authorization {
    padding: 20px;
    display: flex;
  }

  .sidebar {
    background-color: #f4f4f4;
    border-right: 1px solid #ddd;
  }

  .el-menu-vertical-demo {
    width: 100%;
  }

  .box-card {
    height: 250px;
    margin-bottom: 20px;
  }

  .el-tree {
    max-height: 400px;
    overflow: auto;
  }

  .custom-tree-node {
    display: flex;
    align-items: center;
  }

  .el-tooltip {
    margin-left: 10px;
  }

  .info-card {
    margin-top: 20px;
  }

  .el-table {
    width: 100%;
  }
  </style>
