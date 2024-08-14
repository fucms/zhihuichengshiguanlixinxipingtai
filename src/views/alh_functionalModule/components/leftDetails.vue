<template>
    <div>
        <el-tree :data="data" :props="defaultProps" node-key="id" :default-expanded-keys="[1]"
            @node-click="handleNodeClick"></el-tree>
    </div>
</template>

<script>
import bus from '@/views/bus'
export default {
    data() {
        return {
            data: [
                {
                    id: 1,
                    label: '组织机构定义服务',
                    children: [
                        {
                            id: 1.1,
                            label: 'xxxxx'
                        }
                    ]
                },
                {
                    id: 2,
                    label: '监督中心',
                    children: [
                        {
                            id: 1.1,
                            label: '接线员'
                        },
                        {
                            id: 1.2,
                            label: '系统管理员'
                        },
                        {
                            id: 1.3,
                            label: '异常案件审批员'
                        },
                        {
                            id: 1.4,
                            label: '问题库管理员'
                        },
                        {
                            id: 1.5,
                            label: '监督员'
                        },
                        {
                            id: 1.6,
                            label: '值班长'
                        },
                        {
                            id: 1.7,
                            label: '派遣员'
                        },
                        {
                            id: 1.8,
                            label: '民情专用角色'
                        },
                        {
                            id: 1.9,
                            label: '处置员'
                        },
                        {
                            id: 2.0,
                            label: 'cs'
                        },
                    ]
                }
            ],
            defaultProps: {
                children: 'children',
                label: 'label'
            }
        }
    },
    methods: {
        handleNodeClick(data) {
            bus.$emit('getMoldBOM', data)
        }
    }
}
</script>

<style lang="scss" scoped></style>