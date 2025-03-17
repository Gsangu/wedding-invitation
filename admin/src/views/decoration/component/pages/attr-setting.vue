<template>
    <div class="pages-setting">
        <el-card shadow="never" class="!border-none flex">
            <div
                class="title flex items-center before:w-[3px] before:h-[14px] before:block before:bg-primary before:mr-2 text-xl font-medium">
                {{ widget?.title }}
            </div>
        </el-card>
        <el-scrollbar class="w-full" style="height: calc(100% - 60px)" v-if="widget">
            <el-card shadow="never" class="!border-none flex mt-2">
                <div class="flex items-end mb-4">
                    <div class="text-base dark:text-[#ffffff] text-[#101010] font-medium">
                        是否显示
                    </div>
                </div>
                <el-radio-group v-model="widget.content!.enabled">
                    <el-radio :value="1">是</el-radio>
                    <el-radio :value="0">否</el-radio>
                </el-radio-group>
            </el-card>
            <keep-alive>
                <component :is="widgets[widget?.name]?.attr" :content="widget?.content" :styles="widget?.styles"
                    :type="type" @update:content="handleUpdateContent" />
            </keep-alive>
        </el-scrollbar>
    </div>
</template>
<script lang="ts" setup>
import type { PropType } from 'vue'

import widgets from '../widgets'

const emits = defineEmits(['update:content'])
const handleUpdateContent = (data: any) => {
    emits('update:content', data)
}

defineProps({
    widget: {
        type: Object as PropType<Record<string, any>>,
        default: () => ({})
    },
    type: {
        type: String as PropType<'mobile' | 'pc'>,
        default: 'mobile'
    }
})
</script>
