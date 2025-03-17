<template>
    <div class="shop-pages h-[530px]">
        <div class="link-list flex flex-wrap">
            <div class="link-item border border-br px-5 py-[5px] rounded-[3px] cursor-pointer mr-[10px] mb-[10px]"
                v-for="(item, index) in linkList" :class="{
                    'border-primary text-primary':
                        modelValue.path == item.path && modelValue.name == item.name
                }" :key="index" @click="handleSelect(item)">
                {{ item.name }}
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'

import { type Link, LinkTypeEnum } from '.'

defineProps({
    modelValue: {
        type: Object as PropType<Link>,
        default: () => ({})
    }
})
const emit = defineEmits<{
    (event: 'update:modelValue', value: Link): void
}>()

const linkList = ref([
    {
        path: '/pages/wedding/index',
        name: '婚礼邀请函',
        type: LinkTypeEnum.WEDDING_PAGES,
        canTab: true
    },
    {
        path: '/pages/wedding/alumn',
        name: '相册',
        type: LinkTypeEnum.WEDDING_PAGES,
        canTab: true
    },
    {
        path: '/pages/wedding/map',
        name: '酒店导航',
        type: LinkTypeEnum.WEDDING_PAGES,
        canTab: true
    },
    {
        path: '/pages/wedding/greet',
        name: '好友祝福',
        type: LinkTypeEnum.WEDDING_PAGES,
        canTab: true
    },
    {
        path: '/pages/wedding/message',
        name: '留言评价',
        type: LinkTypeEnum.WEDDING_PAGES,
        canTab: true
    }
])

const handleSelect = (value: Link) => {
    emit('update:modelValue', value)
}
</script>
