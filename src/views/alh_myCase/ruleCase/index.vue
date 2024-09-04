<template>
  <div class="case-query">
    <el-card>
      <h2>案卷查询</h2>

      <!-- 查询条件表单 -->
      <el-form :inline="true" :model="queryForm" class="demo-form-inline">
        <el-form-item label="案卷名称">
          <el-input v-model="queryForm.caseName" placeholder="请输入案卷名称" />
        </el-form-item>
        <el-form-item label="任务号">
          <el-input v-model="queryForm.taskNumber" placeholder="请输入任务号" />
        </el-form-item>
        <el-form-item label="案卷描述">
          <el-input v-model="queryForm.caseDescription" placeholder="请输入案卷描述" />
        </el-form-item>
        <el-form-item label="案卷来源">
          <el-select v-model="queryForm.caseSource" placeholder="请选择案卷来源">
            <el-option label="市民举报" value="市民举报" />
            <el-option label="巡查发现" value="巡查发现" />
            <el-option label="部门反馈" value="部门反馈" />
          </el-select>
        </el-form-item>
        <el-form-item label="案卷状态">
          <el-select v-model="queryForm.caseStatus" placeholder="请选择案卷状态">
            <el-option label="未处理" value="未处理" />
            <el-option label="处理中" value="处理中" />
            <el-option label="已结案" value="已结案" />
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleQuery">查询</el-button>
          <el-button @click="handleReset">重置</el-button>
        </el-form-item>
      </el-form>

      <!-- 查询结果表格 -->
      <el-table :data="tableData" style="width: 100%; margin-top: 20px;">
        <el-table-column prop="caseName" label="案卷名称" width="180" />
        <el-table-column prop="taskNumber" label="任务号" width="120" />
        <el-table-column prop="caseDescription" label="案卷描述" />
        <el-table-column prop="caseSource" label="案卷来源" width="120" />
        <el-table-column prop="caseStatus" label="案卷状态" width="100" />
        <el-table-column prop="operation" label="操作" width="120">
          <template slot-scope="scope">
            <el-button size="small" @click="handleView(scope.row)">查看</el-button>
          </template>
        </el-table-column>
      </el-table>

      <!-- 分页 -->
      <el-pagination
        layout="prev, pager, next"
        :total="total"
        style="margin-top: 20px; text-align: right;"
        @current-change="handlePageChange"
      />
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      queryForm: {
        caseName: '',
        taskNumber: '',
        caseDescription: '',
        caseSource: '',
        caseStatus: ''
      },
      tableData: [], // 查询结果数据
      total: 0 // 总数据条数，用于分页
    }
  },
  methods: {
    handleQuery() {
      // 这里可以添加查询逻辑，模拟查询时可以调用API或者过滤静态数据
      this.tableData = [
        {
          caseName: '市政设施损坏',
          taskNumber: '202409030001',
          caseDescription: '某市政设施损坏严重，影响行人安全。',
          caseSource: '市民举报',
          caseStatus: '未处理'
        },
        {
          caseName: '违法建筑举报',
          taskNumber: '202409030002',
          caseDescription: '某地存在未取得审批的违法建筑。',
          caseSource: '巡查发现',
          caseStatus: '处理中'
        },
        {
          caseName: '垃圾未及时清理',
          taskNumber: '202409030003',
          caseDescription: '某区域垃圾堆积，未及时清理。',
          caseSource: '部门反馈',
          caseStatus: '已结案'
        }
      ]
      this.total = this.tableData.length
    },
    handleReset() {
      // 重置表单
      this.queryForm = {
        caseName: '',
        taskNumber: '',
        caseDescription: '',
        caseSource: '',
        caseStatus: ''
      }
    },
    handleView(row) {
      // 查看案卷详情
      this.$message.info(`查看案卷：${row.caseName}`)
    },
    handlePageChange(page) {
      // 处理分页
      console.log('当前页:', page)
    }
  }
}
</script>

  <style scoped>
  .case-query {
    padding: 20px;
  }
  </style>
