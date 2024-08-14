<template>
  <div>
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item name="1">
        <template slot="title">
          <i class="header-icon el-icon-star-on" />基本信息
        </template>
        <div>
          <el-descriptions class="margin-top" :column="4" size="" border direction="vertical">
            <el-descriptions-item label="客户名称">{{ cusDetails.customerName }}</el-descriptions-item>
            <el-descriptions-item label="销售线索编号">{{ cusDetails.salesLeads }}</el-descriptions-item>
            <el-descriptions-item label="联系人">{{ cusDetails.liaison }}</el-descriptions-item>
            <el-descriptions-item label="商机来源">
              <el-tag :style="cusDetails.sourceTypeColor">{{ cusDetails.source | sourceTypeText
              }}</el-tag>
            </el-descriptions-item>
            <el-descriptions-item label="商机状态"><el-tag effect="dark" type="">{{ '进行中'
            }}</el-tag></el-descriptions-item>
            <el-descriptions-item label="公海状态"><el-tag type="" effect="dark">{{ '进行中'
            }}</el-tag></el-descriptions-item>
            <el-descriptions-item label="创建时间">{{ cusDetails.createTime }}</el-descriptions-item>
            <el-descriptions-item label="创建人">{{ }}</el-descriptions-item>
            <el-descriptions-item label="负责人">{{ cusDetails.header }}</el-descriptions-item>
            <el-descriptions-item label="地址">{{ cusDetails.province + cusDetails.city
            }}江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item>
          </el-descriptions>
        </div>
      </el-collapse-item>

      <el-collapse-item name="2">
        <template slot="title">
          <i class="header-icon el-icon-star-on" />动态信息
        </template>
        <div>
          <el-descriptions class="margin-top" :column="4" size="" border direction="vertical">
            <el-descriptions-item label="未联系天数">{{ cusDetails.days }}</el-descriptions-item>
            <el-descriptions-item label="最新进展">{{ cusDetails.proccess }}</el-descriptions-item>
            <el-descriptions-item label="最新推进时间">{{ cusDetails.createTime }}</el-descriptions-item>
            <el-descriptions-item label="最新联系时间">{{ cusDetails.createTime }}</el-descriptions-item>
          </el-descriptions>
        </div>
      </el-collapse-item>
      <el-collapse-item name="3">
        <template slot="title">
          <i class="header-icon el-icon-star-on" />地址信息
        </template>
        <div>
          <el-descriptions class="margin-top" :column="4" size="" border direction="vertical">
            <el-descriptions-item label="国家">{{ cusDetails.country }}</el-descriptions-item>
            <el-descriptions-item label="省份">{{ cusDetails.province }}</el-descriptions-item>
            <el-descriptions-item label="城市">{{ cusDetails.city }}</el-descriptions-item>
            <el-descriptions-item label="区域">{{ cusDetails.city }}</el-descriptions-item>
            <el-descriptions-item label="地址">{{ cusDetails.address }}</el-descriptions-item>
          </el-descriptions>
        </div>
      </el-collapse-item>
      <el-collapse-item name="4">
        <template slot="title">
          <i class="header-icon el-icon-star-on" />备注信息
        </template>
        <div>
          <el-descriptions class="margin-top" :column="1" size="" border direction="vertical">
            <el-descriptions-item label="备注">{{ cusDetails.title }}</el-descriptions-item>
          </el-descriptions>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {
  props: {
    cusDetails: {
      type: Object
      // default: {}
    }
  },
  data() {
    return {
      activeNames: ['1', '2', '3', '4']
    }
  },
  methods: {
    handleChange(val) {
      console.log(val)
    }
  }
}
</script>

<style lang="scss" scoped>
.el-tag {
    color: #ffffff;
    font-weight: 600;
}
</style>
