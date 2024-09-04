<template>
  <div class="data-exchange">
    <el-row :gutter="20">
      <!-- 任务上报区 -->
      <el-col :span="8">
        <el-card class="box-card">
          <h3>任务上报</h3>
          <el-form :model="reportForm" label-width="120px">
            <el-form-item label="问题类型">
              <el-select v-model="reportForm.issueType" placeholder="请选择问题类型">
                <el-option label="道路破损" value="road_damage" />
                <el-option label="垃圾堆积" value="garbage_pileup" />
                <el-option label="违章建筑" value="illegal_building" />
              </el-select>
            </el-form-item>
            <el-form-item label="位置描述">
              <el-input v-model="reportForm.location" placeholder="请输入位置描述" />
            </el-form-item>
            <el-form-item label="图片上传">
              <el-upload
                action="#"
                list-type="picture-card"
                :on-preview="handlePicturePreview"
                :on-remove="handlePictureRemove"
              >
                <i class="el-icon-plus" />
              </el-upload>
            </el-form-item>
            <el-form-item label="语音上传">
              <el-upload
                action="#"
                list-type="text"
                :on-preview="handleAudioPreview"
                :on-remove="handleAudioRemove"
              >
                <el-button slot="trigger" size="small" type="primary">上传语音</el-button>
              </el-upload>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitReport">提交上报</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>

      <!-- 任务接收区 -->
      <el-col :span="8">
        <el-card class="box-card">
          <h3>任务接收</h3>
          <el-button type="primary" @click="fetchTasks">获取任务</el-button>
          <el-table v-if="tasks.length" :data="tasks">
            <el-table-column prop="taskId" label="任务ID" />
            <el-table-column prop="taskName" label="任务名称" />
            <el-table-column prop="taskStatus" label="任务状态" />
          </el-table>
          <div v-else>
            <p>暂无任务</p>
          </div>
        </el-card>
      </el-col>

      <!-- 任务查询区 -->
      <el-col :span="8">
        <el-card class="box-card">
          <h3>任务查询</h3>
          <el-input v-model="searchQuery" placeholder="请输入任务名称或ID" />
          <el-button type="primary" style="margin-top: 10px" @click="searchTasks">查询任务</el-button>
          <el-table v-if="filteredTasks.length" :data="filteredTasks">
            <el-table-column prop="taskId" label="任务ID" />
            <el-table-column prop="taskName" label="任务名称" />
            <el-table-column prop="taskStatus" label="任务状态" />
          </el-table>
          <div v-else>
            <p>没有找到相关任务</p>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      reportForm: {
        issueType: '',
        location: '',
        images: [],
        audio: []
      },
      tasks: [],
      searchQuery: '',
      filteredTasks: []
    }
  },
  methods: {
    // 模拟提交上报
    submitReport() {
      this.$message.success('任务上报成功！')
    },
    // 模拟获取任务
    fetchTasks() {
      this.tasks = [
        { taskId: 'T001', taskName: '巡查垃圾堆积', taskStatus: '待处理' },
        { taskId: 'T002', taskName: '违章建筑核实', taskStatus: '处理中' },
        { taskId: 'T003', taskName: '道路破损修复', taskStatus: '已完成' }
      ]
    },
    // 模拟任务查询
    searchTasks() {
      this.filteredTasks = this.tasks.filter(
        task =>
          task.taskName.includes(this.searchQuery) || task.taskId.includes(this.searchQuery)
      )
    },
    handlePicturePreview(file) {
      this.$alert('预览图片：' + file.name)
    },
    handlePictureRemove(file) {
      this.$message.warning('已删除图片：' + file.name)
    },
    handleAudioPreview(file) {
      this.$alert('预览音频：' + file.name)
    },
    handleAudioRemove(file) {
      this.$message.warning('已删除音频：' + file.name)
    }
  }
}
</script>

<style scoped>
.data-exchange {
  padding: 20px;
}

.box-card {
  height: 480px;
  margin-bottom: 20px;
}
</style>
