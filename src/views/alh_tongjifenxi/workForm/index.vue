<template>
  <div class="form-definition">
    <el-row :gutter="20">
      <!-- 表单字段配置区 -->
      <el-col :span="24">
        <el-card class="box-card">
          <h3>字段配置</h3>
          <el-form :model="fieldForm" label-width="120px">
            <el-form-item label="字段名称">
              <el-input v-model="newField.name" placeholder="请输入字段名称" />
            </el-form-item>
            <el-form-item label="字段类型">
              <el-select v-model="newField.type" placeholder="选择字段类型">
                <el-option label="文本" value="text" />
                <el-option label="数字" value="number" />
                <el-option label="日期" value="date" />
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="addField">添加字段</el-button>
              <el-button type="success" @click="saveForm">保存表单配置</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>

      <!-- 表单预览区 -->
      <el-col :span="24">
        <el-card class="box-card">
          <h3>表单预览</h3>
          <el-form :model="formModel" label-width="120px">
            <el-form-item v-for="(field, index) in fields" :key="index" :label="field.name">
              <component
                :is="getFieldComponent(field.type)"
                v-model="formModel[field.name]"
                :placeholder="'请输入' + field.name"
                :type="field.type === 'number' ? 'number' : 'text'"
                :options="field.options"
              />
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
      fields: [], // 动态表单字段列表
      fieldForm: {
        name: '',
        type: ''
      },
      newField: {
        name: '',
        type: '',
        options: []
      },
      formModel: {} // 动态表单绑定的值
    }
  },
  methods: {
    // 添加字段到动态字段列表
    addField() {
      if (this.newField.name && this.newField.type) {
        this.fields.push({
          name: this.newField.name,
          type: this.newField.type,
          options: this.newField.options
        })
        this.newField.name = ''
        this.newField.type = ''
        this.newField.options = []
        this.updateFormModel()
      } else {
        this.$message.error('字段名称和类型是必填的')
      }
    },
    // 获取字段组件
    getFieldComponent(type) {
      switch (type) {
        case 'text':
        case 'number':
          return 'el-input'
        case 'date':
          return 'el-date-picker'
        default:
          return 'el-input'
      }
    },
    // 更新表单模型
    updateFormModel() {
      this.formModel = this.fields.reduce((model, field) => {
        model[field.name] = ''
        return model
      }, {})
    },
    // 保存表单配置
    saveForm() {
      console.log('保存的表单配置:', this.fields)
      this.$message.success('表单配置已保存')
    }
  }
}
</script>

  <style scoped>
  .form-definition {
    padding: 20px;
  }

  .box-card {
    margin-bottom: 20px;
  }
  </style>
