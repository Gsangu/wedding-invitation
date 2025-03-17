<template>
    <el-form label-width="70px">
        <el-card shadow="never" class="!border-none flex mt-2">
            <div class="flex items-end mb-4">
                <div class="text-base text-[#101010] dark:text-[#ffffff] font-medium">名称</div>
            </div>
            <el-input v-model="contentData.info.name" />
        </el-card>
        <el-card shadow="never" class="!border-none flex mt-2">
            <div class="flex items-end mb-4">
                <div class="text-base text-[#101010] dark:text-[#ffffff] font-medium">日期</div>
            </div>
            <el-input v-model="contentData.info.date" />
        </el-card>
        <el-card shadow="never" class="!border-none flex mt-2">
            <div class="flex items-end mb-4">
                <div class="text-base text-[#101010] dark:text-[#ffffff] font-medium">时间</div>
            </div>
            <el-input v-model="contentData.info.time" />
        </el-card>
        <el-card shadow="never" class="!border-none flex mt-2">
            <div class="flex items-end mb-4">
                <div class="text-base text-[#101010] dark:text-[#ffffff] font-medium">酒店</div>
            </div>
            <el-input v-model="contentData.info.hotel" />
        </el-card>
        <el-card shadow="never" class="!border-none flex mt-2">
            <div class="flex items-end mb-4">
                <div class="text-base text-[#101010] dark:text-[#ffffff] font-medium">酒店详情</div>
            </div>
            <el-input v-model="contentData.info.detail" />
        </el-card>
        <el-card shadow="never" class="!border-none flex mt-2">
            <div class="flex items-end mb-4">
                <div class="text-base text-[#101010] dark:text-[#ffffff] font-medium">显示留言</div>
            </div>
            <el-switch v-model="contentData.info.showGreeting"></el-switch>
        </el-card>
        <el-card shadow="never" class="!border-none flex-1 mt-2">
            <div class="flex items-end">
                <div class="text-base text-[#101010] dark:text-[#ffffff] font-medium">
                    首页轮播图片
                </div>
                <div class="text-xs text-tx-secondary ml-2">
                    最多添加{{ limit }}张,建议图片尺寸：750px*1100px
                </div>
            </div>
            <div class="flex-1">
                <draggable class="draggable" v-model="contentData.data" animation="300" handle=".drag-move"
                    item-key="index">
                    <template v-slot:item="{ element: item, index }">
                        <del-wrap :key="index" @close="handleDelete(index)" class="w-full">
                            <div class="bg-fill-light w-full p-4 mt-4">
                                <div class="flex justify-center w-[467px]">
                                    <material-picker class="ml-[40px]" size="122px" v-model="item.image"
                                        upload-class="bg-body" exclude-domain>
                                        <template #upload>
                                            <div class="w-[122px] h-[122px] banner-upload-btn">
                                                图片
                                            </div>
                                        </template>
                                    </material-picker>
                                    <div class="drag-move cursor-move ml-auto">
                                        <icon name="el-icon-Rank" size="18" />
                                    </div>
                                </div>
                                <div class="flex-1">
                                    <el-form-item class="mt-[18px]" label="动画">
                                        <el-select v-model="item.class" filterable placeholder="请选择">
                                            <el-option-group v-for="group in animate.Animate" :key="group.label"
                                                :label="group.label">
                                                <el-option v-for="item in group.options" :key="item.value"
                                                    :label="item.label" :value="item.value">
                                                </el-option>
                                            </el-option-group>
                                        </el-select>
                                    </el-form-item>
                                    <el-form-item class="mt-[18px]" label="外框动效">
                                        <el-select v-model="item.animate" style="width: 300px">
                                            <el-option v-for="item in animates" :key="item.value" :label="item.label"
                                                :value="item.value" />
                                        </el-select>
                                    </el-form-item>
                                </div>
                            </div>
                        </del-wrap>
                    </template>
                </draggable>
            </div>
            <div class="mt-4" v-if="content.data?.length < limit">
                <el-button class="w-full" type="primary" @click="handleAdd">添加图片</el-button>
            </div>
            <div class="flex items-end">
                <div class="text-base text-[#101010] dark:text-[#ffffff] font-medium">相册图片</div>
                <div class="text-xs text-tx-secondary ml-2">建议图片尺寸：750px*1100px</div>
            </div>
            <div class="flex-1">
                <draggable class="draggable" v-model="contentData.albumn" animation="300" handle=".drag-move"
                    item-key="index">
                    <template v-slot:item="{ element: item, index }">
                        <del-wrap :key="index" @close="handleDeleteAlbumn(index)" class="w-full">
                            <div class="bg-fill-light w-full p-4 mt-4">
                                <div class="flex justify-center w-[467px]">
                                    <material-picker class="ml-[40px]" size="122px" v-model="item.image"
                                        upload-class="bg-body" exclude-domain>
                                        <template #upload>
                                            <div class="w-[122px] h-[122px] banner-upload-btn">
                                                图片
                                            </div>
                                        </template>
                                    </material-picker>
                                    <div class="drag-move cursor-move ml-auto">
                                        <icon name="el-icon-Rank" size="18" />
                                    </div>
                                </div>
                                <div class="flex-1">
                                    <el-form-item class="mt-[18px]" label="动画">
                                        <el-select v-model="item.class" filterable placeholder="请选择">
                                            <el-option-group v-for="group in animate.Animate" :key="group.label"
                                                :label="group.label">
                                                <el-option v-for="item in group.options" :key="item.value"
                                                    :label="item.label" :value="item.value">
                                                </el-option>
                                            </el-option-group>
                                        </el-select>
                                    </el-form-item>
                                </div>
                            </div>
                        </del-wrap>
                    </template>
                </draggable>
            </div>
            <div class="mt-4">
                <el-button class="w-full" type="primary" @click="handleAddAlbumn">添加图片</el-button>
            </div>
            <div class="flex-1">
                <draggable class="draggable" v-model="contentData.musicList" animation="300" handle=".drag-move"
                    item-key="index">
                    <template v-slot:item="{ element: item, index }">
                        <del-wrap :key="index" @close="handleDeleteMusic(index)" class="w-full">
                            <div class="bg-fill-light w-full p-4 mt-4">
                                <div class="flex justify-center w-[467px]">
                                    <material-picker class="ml-[40px]" size="122px" v-model="item.url" type="audio"
                                        upload-class="bg-body" exclude-domain>
                                        <template #upload>
                                            <div class="w-[122px] h-[122px] banner-upload-btn">
                                                音乐
                                            </div>
                                        </template>
                                    </material-picker>
                                    <div class="drag-move cursor-move ml-auto">
                                        <icon name="el-icon-Rank" size="18" />
                                    </div>
                                </div>
                            </div>
                        </del-wrap>
                    </template>
                </draggable>
            </div>
            <div class="mt-4">
                <el-button class="w-full" type="primary" @click="handleAddMusic">添加音乐</el-button>
            </div>
        </el-card>
    </el-form>
</template>
<script lang="ts" setup>
import { cloneDeep } from 'lodash-es'
import type { PropType } from 'vue'
import Draggable from 'vuedraggable'

import animate from '@/animate'
import feedback from '@/utils/feedback'

import type options from './options'

type OptionsType = ReturnType<typeof options>
const emits = defineEmits<(event: 'update:content', data: OptionsType['content']) => void>()
const animates = ref([
    {
        label: '效果1',
        value: 0
    },
    {
        label: '效果2',
        value: 1
    },
    {
        label: '效果3',
        value: 2
    },
    {
        label: '效果4',
        value: 3
    },
    {
        label: '效果5',
        value: 4
    },
    {
        label: '效果6',
        value: 5
    }
])
const limit = 10
const limitAlbumn = 30
const props = defineProps({
    content: {
        type: Object as PropType<OptionsType['content']>,
        default: () => ({})
    },
    styles: {
        type: Object as PropType<OptionsType['styles']>,
        default: () => ({})
    }
})

const contentData = computed({
    get: () => props.content,
    set: (newValue) => {
        emits('update:content', newValue)
    }
})

const handleAdd = () => {
    if (props.content.data?.length < limit) {
        const content = cloneDeep(props.content)
        content.data.push({
            image: '',
            animate: 0,
            class: ''
        })
        if (!content.musicList) {
            content.musicList = []
        }
        emits('update:content', content)
    } else {
        feedback.msgError(`最多添加${limit}张图片`)
    }
}
const handleDelete = (index: number) => {
    if (props.content.data?.length <= 1) {
        return feedback.msgError('最少保留一张图片')
    }
    const content = cloneDeep(props.content)
    content.data.splice(index, 1)
    emits('update:content', content)
}
const handleAddAlbumn = () => {
    const content = cloneDeep(props.content)
    if (!content.albumn) {
        content.albumn = []
    }
    content.albumn.push({
        image: '',
        class: ''
    })
    emits('update:content', content)
}
const handleDeleteAlbumn = (index: number) => {
    // if (props.content.albumn?.length <= 1) {
    //     return feedback.msgError('最少保留一张图片')
    // }
    const content = cloneDeep(props.content)
    content.albumn.splice(index, 1)
    emits('update:content', content)
}
const limitMusic = 5

const handleAddMusic = () => {
    console.log(props.content.musicList)

    if (props.content.musicList?.length < limitMusic) {
        const content = cloneDeep(props.content)
        content.musicList.push({
            url: ''
        })
        emits('update:content', content)
    } else {
        feedback.msgError(`最多添加${limitMusic}首音乐`)
    }
}
const handleDeleteMusic = (index: number) => {
    const content = cloneDeep(props.content)
    content.musicList.splice(index, 1)
    emits('update:content', content)
}
</script>

<style lang="scss" scoped>
.material-select {

    .material-upload,
    .material-preview {
        position: relative;
        border-radius: 4px;
        cursor: pointer;
        margin-right: 8px;
        margin-bottom: 8px;
        box-sizing: border-box;
        float: left;

        &.is-disabled {
            cursor: not-allowed;
        }

        &.is-one {
            margin-bottom: 0;
        }

        &:hover {
            .operation-btns {
                display: block;
            }
        }

        .operation-btns {
            display: none;
            position: absolute;
            bottom: 0;
            border-radius: 4px;
            width: 100%;
            line-height: 2;
            color: #fff;
            background-color: rgba(0, 0, 0, 0.3);
        }
    }

    .material-upload {
        :deep(.upload-btn) {
            @apply text-tx-secondary box-border rounded border-br border-dashed border flex flex-col justify-center items-center;
        }
    }
}

.material-wrap {
    min-width: 720px;
    height: 560px;
    @apply border-t border-b border-br;
}

.banner-upload-btn {
    @apply text-tx-secondary box-border rounded border-br border-dashed border flex flex-col justify-center items-center;
}
</style>
