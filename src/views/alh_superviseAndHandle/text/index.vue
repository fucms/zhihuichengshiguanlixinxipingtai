<template>
  <div class="city-management">
    <el-tabs v-model="activeTab" type="card">
      <!-- 问题上报 -->
      <el-tab-pane label="问题上报" name="report">
        <el-form :model="reportForm" label-width="120px">
          <el-form-item label="事件类型">
            <el-select v-model="reportForm.type" placeholder="选择类型">
              <el-option label="类型1" value="type1" />
              <el-option label="类型2" value="type2" />
            </el-select>
            <el-select v-model="reportForm.subType" placeholder="选择子类型">
              <el-option label="子类型1" value="subType1" />
              <el-option label="子类型2" value="subType2" />
            </el-select>
          </el-form-item>
          <el-form-item label="地图选择">
            <el-button type="primary" @click="openMap">选择位置</el-button>
            <span>{{ reportForm.location }}</span>
          </el-form-item>
          <el-form-item label="选择照片">
            <el-upload
              class="upload-demo"
              drag
              action="#"
              :on-change="handlePhotoChange"
              :show-file-list="false"
            >
              <i class="el-icon-upload" />
              <div class="el-upload__text">将照片拖到此处，或<em>点击上传</em></div>
            </el-upload>
            <el-image
              v-if="reportForm.photo"
              :src="reportForm.photo"
              fit="cover"
              style="width: 100px; height: 100px; margin-top: 10px;"
            />
          </el-form-item>
          <el-form-item label="声音选择">
            <el-upload
              class="upload-demo"
              drag
              action="#"
              :on-change="handleAudioChange"
              :show-file-list="false"
            >
              <i class="el-icon-upload" />
              <div class="el-upload__text">将音频拖到此处，或<em>点击上传</em></div>
            </el-upload>
          </el-form-item>
          <el-form-item label="描述">
            <el-input v-model="reportForm.description" type="textarea" rows="4" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitReport">提交问题</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>

      <!-- 任务中心 -->
      <el-tab-pane label="任务中心" name="tasks">
        <el-table :data="taskData" style="width: 100%">
          <el-table-column prop="taskId" label="任务编号" width="150" />
          <el-table-column prop="taskType" label="任务类型" width="150" />
          <el-table-column prop="taskStatus" label="状态" width="120">
            <template slot-scope="scope">
              <el-tag :type="getTaskTagType(scope.row.taskStatus)">
                {{ scope.row.taskStatus }}
              </el-tag>
            </template>
          </el-table-column>
          <el-table-column prop="description" label="任务描述" />
        </el-table>
      </el-tab-pane>

      <!-- 采集记录 -->
      <el-tab-pane label="采集记录" name="records">
        <el-table :data="recordData" style="width: 100%">
          <el-table-column prop="recordId" label="记录编号" width="150" />
          <el-table-column prop="status" label="状态" width="120">
            <template slot-scope="scope">
              <el-tag :type="getRecordTagType(scope.row.status)">
                {{ scope.row.status }}
              </el-tag>
            </template>
          </el-table-column>
          <el-table-column prop="details" label="记录详情" />
          <el-table-column label="办理过程">
            <template slot-scope="scope">
              <el-button type="text" @click="viewProcess(scope.row.recordId)">查看</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>

    <!-- 地图选择对话框 -->
    <el-dialog title="选择位置" :visible.sync="mapDialogVisible">
      <p>这里是地图选择组件的内容</p>
      <el-button type="primary" @click="selectLocation">确定</el-button>
      <el-button @click="mapDialogVisible = false">取消</el-button>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 'report',
      reportForm: {
        type: '',
        subType: '',
        location: '',
        photo: null,
        audio: null,
        description: ''
      },
      taskData: [
        { taskId: 'T001', taskType: '问题核查', taskStatus: '待处理', description: '检查报告中提到的问题' },
        { taskId: 'T002', taskType: '问题核实', taskStatus: '已完成', description: '验证市民反映的问题' }
      ],
      recordData: [
        { recordId: 'R001', status: '成功', details: '上报问题详细信息' },
        { recordId: 'R002', status: '失败', details: '上报问题失败信息' }
      ],
      mapDialogVisible: false
    }
  },
  methods: {
    handlePhotoChange(file, fileList) {
      this.reportForm.photo = URL.createObjectURL(file.raw)
    },
    handleAudioChange(file, fileList) {
      this.reportForm.audio = URL.createObjectURL(file.raw)
    },
    submitReport() {
      this.$message.success('问题已提交')
    },
    openMap() {
      this.mapDialogVisible = true
    },
    selectLocation() {
      this.reportForm.location = ''
      this.mapDialogVisible = false
    },
    viewProcess(recordId) {
      this.$message.info(`查看记录 ${recordId} 的办理过程`)
    },
    getTaskTagType(status) {
      switch (status) {
        case '待处理':
          return 'warning'
        case '已完成':
          return 'success'
        default:
          return 'info'
      }
    },
    getRecordTagType(status) {
      switch (status) {
        case '成功':
          return 'success'
        case '失败':
          return 'danger'
        default:
          return 'info'
      }
    }
  }
}
</script>

  <style scoped>
  .city-management {
    padding: 20px;
  }
  </style>
