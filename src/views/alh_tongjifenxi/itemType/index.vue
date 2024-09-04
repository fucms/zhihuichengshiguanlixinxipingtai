<template>
  <div class="category-management">
    <!-- 事项类别列表 -->
    <el-card class="box-card">
      <div class="header">
        <h3>事项类别管理</h3>
        <el-button type="primary" @click="showAddDialog">新增事项类别</el-button>
      </div>
      <el-table :data="categories" style="width: 100%" height="350px" @row-click="handleRowClick">
        <el-table-column prop="categoryType" label="类别类型" />
        <el-table-column prop="categoryName" label="类别名称" />
        <el-table-column prop="deadline" label="时限" />
        <el-table-column prop="filingStandard" label="立案标准" />
        <el-table-column prop="closingStandard" label="结案标准" />
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="showEditDialog(scope.row)">编辑</el-button>
            <el-button type="danger" size="mini" @click="deleteCategory(scope.row.categoryId)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>

    <!-- 添加/编辑大类小类对话框 -->
    <el-dialog :title="dialogTitle" :visible.sync="dialogVisible">
      <el-form ref="form" :model="currentCategory" label-width="120px">
        <el-form-item label="类别类型">
          <el-input v-model="currentCategory.categoryType" :disabled="isEdit" />
        </el-form-item>
        <el-form-item label="类别名称">
          <el-input v-model="currentCategory.categoryName" />
        </el-form-item>
        <el-form-item label="时限">
          <el-input v-model="currentCategory.deadline" />
        </el-form-item>
        <el-form-item label="立案标准">
          <el-input v-model="currentCategory.filingStandard" />
        </el-form-item>
        <el-form-item label="结案标准">
          <el-input v-model="currentCategory.closingStandard" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="saveCategory">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [], // 事项类别数据
      currentCategory: {}, // 当前编辑/新增的事项类别
      dialogVisible: false, // 对话框显示状态
      dialogTitle: '新增事项类别', // 对话框标题
      isEdit: false // 是否为编辑状态
    }
  },
  mounted() {
    this.fetchCategories()
  },
  methods: {
    fetchCategories() {
      // 模拟获取事项类别数据
      this.categories = [
        { categoryId: 1, categoryType: '大类', categoryName: '环境污染', deadline: '30天', filingStandard: '详细描述', closingStandard: '处理完成' },
        { categoryId: 2, categoryType: '小类', categoryName: '空气污染', deadline: '15天', filingStandard: '简要描述', closingStandard: '解决问题' },
        { categoryId: 1, categoryType: '大类', categoryName: '环境污染', deadline: '30天', filingStandard: '详细描述', closingStandard: '处理完成' },
        { categoryId: 2, categoryType: '小类', categoryName: '空气污染', deadline: '15天', filingStandard: '简要描述', closingStandard: '解决问题' }
        // 更多数据
      ]
    },
    showAddDialog() {
      this.currentCategory = {}
      this.dialogTitle = '新增事项类别'
      this.isEdit = false
      this.dialogVisible = true
    },
    showEditDialog(category) {
      this.currentCategory = { ...category }
      this.dialogTitle = '编辑事项类别'
      this.isEdit = true
      this.dialogVisible = true
    },
    saveCategory() {
      if (this.isEdit) {
        // 编辑事项类别
        const index = this.categories.findIndex(cat => cat.categoryId === this.currentCategory.categoryId)
        if (index !== -1) {
          this.$set(this.categories, index, { ...this.currentCategory })
        }
      } else {
        // 新增事项类别
        this.currentCategory.categoryId = Date.now() // 使用时间戳作为ID
        this.categories.push({ ...this.currentCategory })
      }
      this.dialogVisible = false
    },
    deleteCategory(categoryId) {
      this.categories = this.categories.filter(cat => cat.categoryId !== categoryId)
    },
    handleRowClick(row) {
      console.log('Clicked row:', row)
    }
  }
}
</script>

  <style scoped>
  .category-management {
    padding: 20px;
  }

  .header {
    margin-bottom: 20px;
  }

  .dialog-footer {
    text-align: right;
  }
  </style>
