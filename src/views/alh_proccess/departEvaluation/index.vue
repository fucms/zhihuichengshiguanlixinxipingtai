<template>
  <div class="department-evaluation">
    <el-card class="box-card">
      <h2>专业部门评价</h2>
      <el-table
        :data="departmentEvaluations"
        border
        stripe
        :header-cell-style="{ background: '#f5f5f5' }"
      >
        <el-table-column
          prop="departmentName"
          label="部门名称"
          width="150"
        />
        <el-table-column
          prop="evaluationScore"
          label="评价分数"
          width="150"
          :sortable="true"
          align="center"
        />
        <el-table-column
          prop="evaluationDate"
          label="评价日期"
          width="180"
          align="center"
        />
        <el-table-column
          prop="comments"
          label="评论"
          width="300"
        />
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      departmentEvaluations: [
        {
          departmentName: '环境保护部',
          evaluationScore: 85,
          evaluationDate: '2024-09-01',
          comments: '表现良好，处理问题迅速。'
        },
        {
          departmentName: '市政工程部',
          evaluationScore: 78,
          evaluationDate: '2024-08-28',
          comments: '需加强项目管理，处理速度慢。'
        },
        {
          departmentName: '公共安全部',
          evaluationScore: 92,
          evaluationDate: '2024-09-03',
          comments: '优秀的应急响应能力。'
        },
        {
          departmentName: '交通管理部',
          evaluationScore: 80,
          evaluationDate: '2024-09-02',
          comments: '整体表现不错，但有些细节需改进。'
        },
        {
          departmentName: '环境保护部',
          evaluationScore: 85,
          evaluationDate: '2024-09-01',
          comments: '表现良好，处理问题迅速。'
        },
        {
          departmentName: '市政工程部',
          evaluationScore: 78,
          evaluationDate: '2024-08-28',
          comments: '需加强项目管理，处理速度慢。'
        },
        {
          departmentName: '公共安全部',
          evaluationScore: 92,
          evaluationDate: '2024-09-03',
          comments: '优秀的应急响应能力。'
        },
        {
          departmentName: '交通管理部',
          evaluationScore: 80,
          evaluationDate: '2024-09-02',
          comments: '整体表现不错，但有些细节需改进。'
        }
      ]
    }
  }
}
</script>

<style scoped>
.department-evaluation {
  padding: 20px;
}
.box-card {
  margin-top: 20px;
}
</style>
