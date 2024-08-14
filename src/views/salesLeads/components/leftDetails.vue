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
                    label: '全部数据',
                    children: [
                        {
                            id: 1.1,
                            label: '电话来访'
                        },
                        {
                            id: 1.2,
                            label: '公司分配'
                        },
                        {
                            id: 1.3,
                            label: '客户介绍'
                        },
                        {
                            id: 1.4,
                            label: '独立开发'
                        },
                        {
                            id: 1.5,
                            label: '朋友介绍'
                        },
                        {
                            id: 1.6,
                            label: '广告宣传'
                        },
                        {
                            id: 1.7,
                            label: '市场活动'
                        },
                        {
                            id: 1.8,
                            label: '合作伙伴'
                        },
                        {
                            id: 1.9,
                            label: '公开招标'
                        },
                        {
                            id: 2.0,
                            label: '老客户'
                        },
                        {
                            id: 2.1,
                            label: '代理商'
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