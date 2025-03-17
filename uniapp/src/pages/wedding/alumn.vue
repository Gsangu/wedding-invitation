<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2022-04-13 09:29:23
 * @LastEditTime: 2023-08-19 23:40:38
 * @LastEditors: zouyaoji 370681295@qq.com
 * @Description:
 * @FilePath: \wedding-invitation\src\pages\photo\index.vue
-->
<template>
    <div class="photo">
        <!-- <image class="bg-image" :src="background" /> -->
        <h-swiper v-if="list.length > 0" :list="list" :isGif="isGif" :autoplay="autoplay"></h-swiper>
        <tabbar />
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import HSwiper from '@/components/wedding/swiper.vue'
import { onHide, onShow } from '@dcloudio/uni-app'
import { getResouces, getCommonConfig } from '@/api/wedding'
import { useAppStore } from '@/stores/app'
const appStore = useAppStore()
const list = ref([])
const isGif = ref(false)
const background = ref('')
const autoplay = ref(false)

onMounted(() => {
    getList()

    // getCommonConfig().then((res) => {
    //     background.value = res.data.background
    // })
})

onShow(() => {
    autoplay.value = true
})

onHide(() => {
    autoplay.value = false
})

const getList = async () => {
    const data = await appStore.getIndexConfig()
    const pages = JSON.parse(data?.page?.data)
    // console.log(data)

    list.value = pages.find((item) => item.name === 'wedding-swiper')?.content.albumn || []
}
</script>

<style lang="scss" scoped>
.photo {
    height: 100%;
}
</style>
