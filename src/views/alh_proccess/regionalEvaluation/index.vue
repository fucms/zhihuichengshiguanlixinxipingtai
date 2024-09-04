<template>
  <div class="area-evaluation">
    <el-card class="filter-card">
      <h3>区域评价</h3>
      <el-row :gutter="20">
        <!-- 时间选择 -->
        <el-col :span="8">
          <el-form :model="filters" label-width="120px">
            <el-form-item label="选择时间段">
              <el-date-picker
                v-model="filters.dateRange"
                type="daterange"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                format="yyyy-MM-dd"
                range-separator="至"
                value-format="yyyy-MM-dd"
                style="width: 100%;"
              />
            </el-form-item>
          </el-form>
        </el-col>

        <!-- 区域选择 -->
        <el-col :span="8">
          <el-form :model="filters" inline>
            <el-form-item label="选择区域">
              <el-select
                v-model="filters.region"
                placeholder="请选择区域"
                style="width: 100%;"
              >
                <el-option
                  v-for="item in regions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>
          </el-form>
        </el-col>

        <!-- 查询按钮 -->
        <el-col :span="8" class="submit-btn">
          <el-button type="primary" @click="fetchEvaluationData">查询</el-button>
        </el-col>
      </el-row>
    </el-card>

    <!-- 评价结果展示 -->
    <el-card class="result-card">
      <h3>评价结果</h3>
      <el-table :data="evaluationData" stripe>
        <el-table-column prop="region" label="区域" />
        <el-table-column prop="caseCount" label="案卷数量" />
        <el-table-column prop="score" label="评分" :formatter="formatScore" />
        <el-table-column label="管理效果">
          <template slot-scope="scope">
            <span :style="{ color: getEffectivenessColor(scope.row.effectiveness) }">
              {{ scope.row.effectiveness }}
            </span>
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
      filters: {
        dateRange: [],
        region: ''
      },
      regions: [
        { label: '区域一', value: 'region1' },
        { label: '区域二', value: 'region2' },
        { label: '区域三', value: 'region3' }
      ],
      evaluationData: []
    }
  },
  methods: {
    fetchEvaluationData() {
      // 模拟数据获取
      this.evaluationData = [
        { region: '区域一', caseCount: 12, score: 85, effectiveness: '良好' },
        { region: '区域二', caseCount: 5, score: 70, effectiveness: '一般' },
        { region: '区域三', caseCount: 20, score: 90, effectiveness: '优秀' }
      ]
    },
    formatScore(row, column, cellValue, index) {
      return `${cellValue} 分`
    },
    getEffectivenessColor(Value) {
      switch (Value) {
        case '优秀':
          return 'green'
        case '良好':
          return 'blue'
        case '一般':
          return 'orange'
        case '差':
          return 'red'
        default:
          return 'gray'
      }
    }
  }
}
</script>

<style scoped>
.area-evaluation {
  padding: 20px;
}

.filter-card,
.result-card {
  margin-bottom: 20px;
}

.submit-btn {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
</style>
