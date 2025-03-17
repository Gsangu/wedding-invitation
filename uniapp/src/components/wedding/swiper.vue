<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2022-04-14 11:20:59
 * @LastEditTime: 2022-04-14 11:44:14
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \wedding-invitation\src\component\swiper.vue
-->
<template>
    <div class="box">
        <swiper class="swiper" :autoplay="autoplay" :circular="true" :indicator-dots="true" :duration="250"
            @change="change" @animationfinish="animationfinish">
            <block v-for="(item, index) in imageList" :key="index">
                <swiper-item class="item">
                    <div v-if="item.show" class="animate-ele-warp">
                        <div class="animate-ele animated" :class="[item.class]"
                            style="top: 0; left: 0; animation-delay: 0.2s">
                            <image mode="aspectFill" lazy-load :src="item.url" class="animate-img slide-image" />
                        </div>
                    </div>
                </swiper-item>
            </block>
        </swiper>
        <!-- <image v-if="isGif" class="img" src="@/static/images/save_the_date_pu.gif"/> -->
    </div>
</template>

<script lang="ts" setup>
import { onHide } from '@dcloudio/uni-app'
import { GlobalData } from '@/types'
import { getCurrentInstance, PropType, ref, watch } from 'vue'
import { useAppStore } from '@/stores/app'
const { getImageUrl } = useAppStore()

const props = defineProps({
    list: Array as PropType<any>,
    isGif: Boolean,
    autoplay: {
        type: Boolean,
        default: false
    }
})
const imageList = ref(
    props.list?.map((item) => {
        return {
            show: false,
            ...item,
            url: getImageUrl(item.image || item.url)
        }
    }) || []
)

setTimeout(() => {
    console.log(imageList.value, props.list)

    imageList.value[0].show = true
}, 100)
const changeFlag = ref(false)
const lastIndex = ref(0)
const lastRadom = ref(-1)

const instance = getCurrentInstance()
const globalData: GlobalData = instance?.appContext.config.globalProperties.globalData

onHide(() => {
    // this.$root.$mp.page.setData({'$root[0].autoplay': false})
})

const change = (val) => {
    changeFlag.value = true
}

const animationfinish = (val) => {
    if (!changeFlag.value) {
        return
    }
    const current = val.target?.current || val.detail?.current || 0

    imageList.value[lastIndex.value].show = false
    imageList.value[current].show = true
    // const index = randomNum()
    // props.list[current].class = globalData.animations[index]
    lastIndex.value = current
    changeFlag.value = false
}

const randomNum = () => {
    const minNum = 0
    const maxNum = globalData.animations.length
    let result = parseInt(String(Math.random() * (maxNum - minNum + 1) + minNum), 10)
    while (lastRadom.value === result) {
        result = parseInt(String(Math.random() * (maxNum - minNum + 1) + minNum), 10)
    }
    lastRadom.value = result
    return result
}
</script>

<style lang="scss" scoped>
.box {
    position: relative;
    height: 100%;
    height: calc(100vh - 100rpx);

    .slide-image {
        width: 100%;
        height: 100%;
    }

    .swiper {
        height: 100%;
        width: 100%;

        .item {
            width: 100%;
            height: 100%;

            .animate-ele-warp {
                width: 100%;
                height: 100%;
                transform-origin: center top;
                position: absolute;
                z-index: 3;
                transform: translate3d(0px, 0px, 3px);
                pointer-events: none;

                .animate-ele {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    left: 20rpx;
                    top: 20rpx;
                    z-index: 3;
                    pointer-events: none;

                    .animate-img {
                        position: absolute;
                    }
                }
            }

            image {
                width: 100%;
                height: 100%;
                display: block;
            }
        }
    }

    .img {
        position: absolute;
        bottom: 50rpx;
        left: 50rpx;
        z-index: 99;
    }
}
</style>
