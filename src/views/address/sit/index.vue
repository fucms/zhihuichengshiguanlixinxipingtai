<template>
  <div class="agent-management">
    <el-row :gutter="20">
      <!-- 坐席状态控制按钮组 -->
      <el-col :span="24">
        <el-card>
          <div slot="header">
            <span>坐席控制</span>
          </div>
          <div>
            <el-button type="primary" @click="signIn">签入</el-button>
            <el-button type="primary" @click="signOut">签出</el-button>
            <el-button :type="isBusy ? 'warning' : 'primary'" @click="toggleBusy">
              {{ isBusy ? '示闲' : '示忙' }}
            </el-button>
            <el-button :type="isResting ? 'warning' : 'primary'" @click="toggleRest">
              {{ isResting ? '取消休息' : '休息' }}
            </el-button>
            <el-button type="primary" @click="answerCall">代答</el-button>
            <el-button type="primary" @click="transferCall">转出</el-button>
            <el-button :type="isMuted ? 'warning' : 'primary'" @click="toggleMute">
              {{ isMuted ? '取消静音' : '静音' }}
            </el-button>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="20" style="margin-top: 20px;">
      <el-col :span="12">
        <!-- 技能和状态管理 -->
        <el-card>
          <div slot="header">
            <span>技能和状态管理</span>
          </div>
          <el-form :model="skillForm" label-width="120px">
            <el-form-item label="当前技能">
              <el-select v-model="skillForm.currentSkill" placeholder="选择技能">
                <el-option label="技能1" value="skill1" />
                <el-option label="技能2" value="skill2" />
              </el-select>
            </el-form-item>
            <el-form-item label="工作状态">
              <el-select v-model="skillForm.currentState" placeholder="选择状态">
                <el-option label="工作态" value="work" />
                <el-option label="非工作态" value="non-work" />
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="applyChanges">应用变更</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>

      <el-col :span="12">
        <!-- 呼叫管理 -->
        <el-card>
          <div slot="header">
            <span>呼叫管理</span>
          </div>
          <el-button type="primary" @click="makeInternalCall">内部呼叫</el-button>
          <el-button type="primary" @click="holdCall">保持</el-button>
          <el-button type="primary" @click="retrieveHold">取消保持</el-button>
          <el-button type="primary" @click="transferCall">呼叫转移</el-button>
          <el-button type="primary" @click="startQualityCheck">质检功能</el-button>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isBusy: false,
      isResting: false,
      isMuted: false,
      skillForm: {
        currentSkill: '',
        currentState: ''
      }
    }
  },
  methods: {
    signIn() {
      this.$message.success('已签入')
    },
    signOut() {
      this.$message.success('已签出')
    },
    toggleBusy() {
      this.isBusy = !this.isBusy
      this.$message.success(this.isBusy ? '已示忙' : '已示闲')
    },
    toggleRest() {
      this.isResting = !this.isResting
      this.$message.success(this.isResting ? '进入休息状态' : '退出休息状态')
    },
    answerCall() {
      this.$message.success('已代答来电')
    },
    transferCall() {
      this.$message.success('呼叫已转出')
    },
    toggleMute() {
      this.isMuted = !this.isMuted
      this.$message.success(this.isMuted ? '已静音' : '已取消静音')
    },
    applyChanges() {
      this.$message.success('技能和状态已更新')
    },
    makeInternalCall() {
      this.$message.success('内部呼叫已发起')
    },
    holdCall() {
      this.$message.success('呼叫已保持')
    },
    retrieveHold() {
      this.$message.success('已取回保持的呼叫')
    },
    startQualityCheck() {
      this.$message.success('质检功能已启动')
    }
  }
}
</script>

<style scoped>
.agent-management {
  padding: 20px;
}

.el-card {
  padding: 10px;
}
</style>
