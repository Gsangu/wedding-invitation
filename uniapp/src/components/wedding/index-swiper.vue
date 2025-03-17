<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2022-04-13 09:40:59
 * @LastEditTime: 2023-08-29 10:44:03
 * @LastEditors: zouyaoji 370681295@qq.com
 * @Description:
 * @FilePath: \wedding-invitation\src\component\index-swiper.vue
-->
<template>
    <div class="box">
        <swiper :autoplay="autoplay" class="swiper" circular :vertical="true" :duration="250" :interval="6000"
            @change="change" @animationfinish="animationfinish">
            <block v-for="(item, index) in photoList" :key="index">
                <swiper-item class="item">
                    <div v-show="item.show" class="animate-ele-warp">
                        <div class="animate-ele animated" :class="[item.class]"
                            style="top: 0; left: 0; animation-delay: 0.2s">
                            <image mode="aspectFill" lazy-load :src="item.url" class="animate-img slide-image" />
                        </div>
                    </div>
                    <!-- 第一张动画 -->
                    <div v-if="showOverlay0 && item.animate === 0" class="animate-ele-warp">
                        <div class="animate-ele animated zoomIn" style="animation-duration: 3s; animation-delay: 0.2s">
                            <image class="animate-img" src="@/static/images/wedding/invitation.png"
                                style="width: 710rpx; height: 95%" />
                        </div>
                        <div class="animate-ele animated fadeInUp"
                            style="animation-duration: 1.5s; animation-delay: 1.8s">
                            <image class="animate-img" src="@/static/images/wedding/loveistrue.png"
                                style="bottom: 80rpx; left: 12rpx; width: 687rpx; height: 17rpx" />
                        </div>
                        <div class="animate-ele animated fadeInRight"
                            style="left: 0; animation-duration: 1.5s; animation-delay: 1.8s">
                            <div class="info">
                                <div class="content">
                                    <h6 class="info-title">{{ info.name }}</h6>
                                    <p class="info-content">{{ info.date }}</p>
                                    <p class="info-content">{{ info.time }}</p>
                                    <p class="info-content">{{ info.hotel }}</p>
                                    <p class="info-content">{{ info.detail }}</p>
                                    <image src="@/static/images/wedding/we.png" class="img_footer" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 第二张动画 -->
                    <div v-if="showOverlay1 && item.animate === 1" class="animate-ele-warp">
                        <div class="animate-ele animated zoomIn"
                            style="animation-duration: 2.5s; animation-delay: 0.2s">
                            <image class="animate-img" src="@/static/images/wedding/zoomBack.png"
                                style="height: 97%; width: 710rpx" />
                        </div>
                        <div class="animate-ele animated delay-1s fadeInUp"
                            style="height: 25%; left: 65rpx; animation-duration: 1.5s">
                            <image class="animate-img" src="@/static/images/wedding/thelove.png"
                                style="width: 632rpx; height: 150.968rpx" />
                        </div>
                        <div class="animate-ele animated fadeInUp" style="
                                height: 50%;
                                left: 40%;
                                top: 200rpx;
                                animation-duration: 1.5s;
                                animation-delay: 1.5s;
                            ">
                            <image class="animate-img" src="@/static/images/wedding/marryu.png"
                                style="width: 122rpx; height: 158rpx" />
                        </div>
                    </div>
                    <!-- 第三张动画 -->
                    <div v-if="showOverlay2 && item.animate === 2" class="animate-ele-warp">
                        <div class="animate-ele animated fadeIn" style="animation-delay: 0.5s">
                            <image class="animate-img" src="@/static/images/wedding/kuang.png"
                                style="width: 711rpx; height: 97%" />
                        </div>
                        <div class="animate-ele animated fadeInDown"
                            style="animation-duration: 1.5s; animation-delay: 0.8s">
                            <image class="animate-img" src="@/static/images/wedding/loveistrue.png"
                                style="left: 130rpx; top: 25rpx; width: 437rpx; height: 12rpx" />
                        </div>
                        <div class="animate-ele animated fadeInRight"
                            style="animation-duration: 1.5s; animation-delay: 1s">
                            <image class="animate-img" src="@/static/images/wedding/kiss.png" style="
                                    top: 250rpx;
                                    right: 100rpx;
                                    width: 135.968rpx;
                                    height: 387.968rpx;
                                " />
                        </div>
                        <div class="animate-ele animated fadeInUp"
                            style="animation-duration: 1.5s; animation-delay: 1.2s">
                            <image class="animate-img" src="@/static/images/wedding/wonderful.png" style="
                                    right: 70rpx;
                                    bottom: 65rpx;
                                    width: 326rpx;
                                    height: 54.968rpx;
                                " />
                        </div>
                        <div class="animate-ele animated zoomIn" style="nimation-duration: 1.5s; animation-delay: 0.8s">
                            <image class="animate-img" src="@/static/images/wedding/thelove.png"
                                style="width: 534.968rpx; height: 128rpx; left: 77rpx; top: 80rpx" />
                        </div>
                    </div>
                    <!-- 第四张动画 -->
                    <div v-if="showOverlay3 && item.animate === 3" class="animate-ele-warp">
                        <div class="animate-ele animated zoomIn" style="animation-delay: 0.3s">
                            <image class="animate-img" src="@/static/images/wedding/kuang.png"
                                style="width: 711rpx; height: 97%" />
                        </div>
                        <div class="animate-ele animated fadeInLeft"
                            style="animation-duration: 1.5s; animation-delay: 1.2s">
                            <image class="animate-img" src="@/static/images/wedding/happiness.png"
                                style="left: 30rpx; top: 35rpx; width: 380rpx; height: 168.968rpx" />
                        </div>
                        <div class="animate-ele animated fadeInUp"
                            style="animation-duration: 1.5s; animation-delay: 1.5s">
                            <image class="animate-img" src="@/static/images/wedding/goodtime.png"
                                style="bottom: 60rpx; right: 70rpx; width: 294rpx; height: 54rpx" />
                        </div>
                    </div>
                    <!-- 第五张动画 -->
                    <div v-if="showOverlay4 && item.animate === 4" class="animate-ele-warp">
                        <div class="animate-ele animated zoomIn" style="animation-delay: 0.3s">
                            <image class="animate-img" src="@/static/images/wedding/kuang.png"
                                style="width: 711rpx; height: 97%" />
                        </div>
                        <div class="animate-ele animated zoosmIn"
                            style="animation-duration: 1.5s; animation-delay: 0.5s">
                            <image class="animate-img" src="@/static/images/wedding/goodtime2.png" style="
                                    left: 30rpx;
                                    top: 35rpx;
                                    width: 306.968rpx;
                                    height: 468.968rpx;
                                " />
                        </div>
                    </div>
                    <!-- 第六张动画 -->
                    <div v-if="showOverlay5 && item.animate === 5" class="animate-ele-warp">
                        <div class="animate-ele animated fadeIn" style="animation-delay: 1.5s">
                            <image class="animate-img" src="@/static/images/wedding/kuang.png"
                                style="width: 711rpx; height: 97%" />
                        </div>
                        <div class="animate-ele animated zoomIn"
                            style="animation-duration: 1.5s; animation-delay: 0.5s">
                            <image class="animate-img" src="@/static/images/wedding/happiness.png"
                                style="left: 30rpx; top: 35rpx; width: 339rpx; height: 149rpx" />
                        </div>
                        <div class="animate-ele animated fadeInRight"
                            style="animation-duration: 1.5s; animation-delay: 0.8s">
                            <image class="animate-img" src="@/static/images/wedding/freedom.png"
                                style="left: 30rpx; bottom: 250rpx; width: 137rpx; height: 317rpx" />
                        </div>
                        <div class="animate-ele animated fadeInUp"
                            style="animation-duration: 1.5s; animation-delay: 1s">
                            <image class="animate-img" src="@/static/images/wedding/celebaration.png"
                                style="left: 30rpx; bottom: 65rpx; width: 435.968rpx; height: 96rpx" />
                        </div>
                    </div>
                </swiper-item>
            </block>
        </swiper>
        <div v-if="showGreeting" class="greetings">
            <div class="greetings-list">
                <div v-for="(item, index) in greetings" class="greetings-item" :class="{ active: greetIndex === index }"
                    :key="index" @animationfinish="onGreetAnimationend">
                    <span class="greetings-name">{{ item.name }}：</span>{{ item.desc || '新婚快乐' }}
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { PropType, ref, onMounted } from 'vue'

const props = defineProps({
    list: Array as PropType<any[]>,
    info: Object as PropType<any>,
    autoplay: {
        type: Boolean,
        default: true
    }
})

const showOverlay0 = ref(false)
const showOverlay1 = ref(false)
const showOverlay2 = ref(false)
const showOverlay3 = ref(false)
const showOverlay4 = ref(false)
const showOverlay5 = ref(false)
const changeFlag = ref(false)
const lastIndex = ref(0)
const lastRadom = ref(-1)
const photoList =
    props.list?.map((item) => {
        return {
            ...item,
            show: false
        }
    }) || []
const greetings = ref([
    {
        name: '新郎 & 新娘',
        desc: '欢迎大家来见证我们的幸福时刻，我们婚礼上见哦~'
    },
    {
        name: '伴郎 & 伴娘',
        desc: '祝帅气的新郎和美丽的新娘新婚快乐~白头偕老💐'
    }
])
const greetIndex = ref(0)
const showGreeting = ref(true)
console.log('showGreeting', showGreeting.value)

const onGreetAnimationend = () => {
    if (greetIndex.value >= greetings.value.length - 1) {
        greetIndex.value = 0
    } else {
        greetIndex.value++
    }
}
// onMounted(() => {

// })
setTimeout(() => {
    console.log('111', props.list)

    showOverlay0.value = true
}, 100)
const change = () => {
    changeFlag.value = true
}

const animationfinish = (val: any) => {
    if (!changeFlag.value || !props.list) {
        return
    }
    const index = val.target?.current || val.detail?.current || 0
    const item = photoList[index]
    showOverlay0.value = item.animate === 0
    showOverlay1.value = item.animate === 1
    showOverlay2.value = item.animate === 2
    showOverlay3.value = item.animate === 3
    showOverlay4.value = item.animate === 4
    showOverlay5.value = item.animate === 5
    photoList[lastIndex.value].show = false
    item.show = true
    lastIndex.value = index
    changeFlag.value = false
}
</script>

<style lang="scss" scoped>
@keyframes fadeInOutLeft {
    0% {
        opacity: 0;
        transform: translateX(calc(-100% - 40rpx));
    }

    15%,
    85% {
        opacity: 1;
        transform: translateX(0);
    }

    100% {
        opacity: 0;
        transform: translateX(0);
    }
}

.box {
    position: relative;
    height: 100%;

    .swiper {
        height: 100%;
        width: 100%;

        .item {
            width: 100%;
            height: 100%;

            image {
                width: 100%;
                height: 100%;
                display: block;
            }

            .info {
                width: 630rpx;
                background: rgba(255, 255, 255, 0.75);
                z-index: 9;
                position: absolute;
                bottom: 120rpx;
                left: 50rpx;
                padding: 10rpx;
                animation: infoAnimation 12s linear infinite;

                .content {
                    width: 613rpx;
                    border: 1rpx solid #000;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: center;
                    position: relative;
                    padding-bottom: 30rpx;

                    .info-title {
                        font-size: 50rpx;
                        height: 100rpx;
                        line-height: 100rpx;
                    }

                    .info-content {
                        font-size: 24rpx;
                        height: 60rpx;
                        line-height: 60rpx;
                    }

                    .img_footer {
                        position: absolute;
                        bottom: 10rpx;
                        left: 53rpx;
                        z-index: 99;
                        height: 14rpx;
                        width: 520rpx;
                    }
                }
            }
        }
    }

    .greetings {
        position: fixed;
        bottom: 60rpx;
        padding: 0 40rpx;
        display: flex;
        align-items: flex-end;
        width: 100%;
        box-sizing: border-box;
    }

    .greetings-list {
        display: flex;
        flex-direction: column;
        gap: 16rpx;
        pointer-events: none;
        width: 66%;
        position: relative;
    }

    .greetings-item {
        padding: 14rpx 20rpx;
        color: white;
        background: linear-gradient(90deg, rgba(133, 22, 14, 0.8) 0%, rgba(133, 22, 14, 0.5) 100%);
        border-radius: 10rpx;
        width: fit-content;
        word-wrap: break-word;
        word-break: break-all;
        position: absolute;
        left: 0;
        bottom: 0;
        transform: translateX(calc(-100% - 40rpx));
    }

    .greetings-item.active {
        -webkit-animation: fadeInOutLeft 5s linear;
        animation: fadeInOutLeft 5s linear;
    }

    .greetings-name {
        font-weight: 600;
    }
}
</style>
