<template>
  <div class="consultation">
    <el-card>
      <h2>咨询解答</h2>
      <el-form :model="consultationForm" label-width="120px">
        <el-form-item label="咨询方式">
          <el-select v-model="consultationForm.method" placeholder="请选择咨询方式">
            <el-option label="电话" value="phone" />
            <el-option label="邮件" value="email" />
            <el-option label="在线" value="online" />
          </el-select>
        </el-form-item>

        <el-form-item label="咨询人姓名">
          <el-input v-model="consultationForm.name" placeholder="请输入咨询人姓名" />
        </el-form-item>

        <el-form-item label="联系方式">
          <el-input v-model="consultationForm.contact" placeholder="请输入联系方式" />
        </el-form-item>

        <el-form-item label="咨询内容">
          <el-input v-model="consultationForm.content" type="textarea" rows="4" placeholder="请输入咨询内容" />
        </el-form-item>

        <el-form-item label="问题发生地点">
          <el-button type="primary" @click="openMap">选择位置</el-button>
          <span>{{ consultationForm.location }}</span>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitConsultation">提交</el-button>
          <el-button @click="resetForm">重置</el-button>
        </el-form-item>
      </el-form>

      <!-- 地图选择对话框 -->
      <el-dialog title="选择位置" :visible.sync="mapDialogVisible">
        <p>这里是地图选择组件的内容</p>
        <el-button type="primary" @click="selectLocation">确定</el-button>
        <el-button @click="mapDialogVisible = false">取消</el-button>
      </el-dialog>
    </el-card>

    <!-- 咨询记录 -->
    <el-card style="margin-top: 20px;">
      <h2>咨询记录</h2>
      <el-table :data="consultationRecords" style="width: 100%">
        <el-table-column prop="id" label="记录编号" width="120" />
        <el-table-column prop="method" label="咨询方式" width="100" />
        <el-table-column prop="name" label="咨询人姓名" width="150" />
        <el-table-column prop="content" label="咨询内容" />
        <el-table-column prop="location" label="地点" />
        <el-table-column label="操作" width="120">
          <template slot-scope="scope">
            <el-button type="text" @click="viewRecord(scope.row)">查看</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      consultationForm: {
        method: '',
        name: '',
        contact: '',
        content: '',
        location: ''
      },
      consultationRecords: [
        {
          id: 'C001',
          method: '电话',
          name: '张三',
          content: '咨询城市管理相关问题。',
          location: '某某街道'
        },
        {
          id: 'C002',
          method: '邮件',
          name: '李四',
          content: '关于城市基础设施的维护问题。',
          location: '某某路段'
        }
      ],
      mapDialogVisible: false
    }
  },
  methods: {
    openMap() {
      this.mapDialogVisible = true
    },
    selectLocation() {
      this.consultationForm.location = '选定的位置'
      this.mapDialogVisible = false
    },
    submitConsultation() {
      if (this.consultationForm.method && this.consultationForm.name && this.consultationForm.contact && this.consultationForm.content) {
        this.consultationRecords.push({
          id: `C00${this.consultationRecords.length + 1}`,
          method: this.consultationForm.method,
          name: this.consultationForm.name,
          content: this.consultationForm.content,
          location: this.consultationForm.location
        })
        this.$message.success('咨询记录已提交')
        this.resetForm()
      } else {
        this.$message.error('请填写所有必填字段')
      }
    },
    resetForm() {
      this.consultationForm = {
        method: '',
        name: '',
        contact: '',
        content: '',
        location: ''
      }
    },
    viewRecord(record) {
      this.$message.info(`查看记录：${record.content}`)
    }
  }
}
</script>

<style scoped>
.consultation {
  padding: 20px;
}
</style>
