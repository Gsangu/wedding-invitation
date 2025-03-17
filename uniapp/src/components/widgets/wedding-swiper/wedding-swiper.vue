<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2022-04-13 09:40:59
 * @LastEditTime: 2023-08-29 10:44:03
 * @LastEditors: zouyaoji 370681295@qq.com
 * @Description:
 * @FilePath: \wedding-invitation\src\component\index-swiper.vue
-->
<template>
    <div class="box" v-if="content.enabled">
        <swiper :autoplay="content.autoplay || '3000'" class="swiper" circular :vertical="true" :duration="250"
            :interval="6000" @change="change" @animationfinish="animationfinish">
            <block v-for="(item, index) in photoList" :key="index">
                <swiper-item class="item">
                    <div v-show="item.show" class="animate-ele-warp">
                        <div class="animate-ele animated" :class="[item.class]"
                            style="top: 0; left: 0; animation-delay: 0.2s">
                            <image mode="aspectFill" lazy-load :src="item.url" class="animate-img slide-image" />
                        </div>
                    </div>
                    <!-- 第一张动画 -->
                    <div v-if="showOverlay0" class="animate-ele-warp">
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
                                    <h6 class="info-title">{{ content.info.name }}</h6>
                                    <p class="info-content">{{ content.info.date }}</p>
                                    <p class="info-content">{{ content.info.time }}</p>
                                    <p class="info-content">{{ content.info.hotel }}</p>
                                    <p class="info-content">{{ content.info.detail }}</p>
                                    <image src="@/static/images/wedding/we.png" class="img_footer" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 第二张动画 -->
                    <div v-if="showOverlay1" class="animate-ele-warp">
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
                    <div v-if="showOverlay2" class="animate-ele-warp">
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
                    <div v-if="showOverlay3" class="animate-ele-warp">
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
                    <div v-if="showOverlay4" class="animate-ele-warp">
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
                    <div v-if="showOverlay5" class="animate-ele-warp">
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
                    :key="index">
                    <span class="greetings-name">{{ item.name }}：</span>{{ item.desc || '新婚快乐' }}
                </div>
            </div>
            <div class="controller">
                <div class="controller-btn">
                    <image @tap="handleMessage" src="@/static/images/wedding/write.png" mode="widthFix" />
                </div>
            </div>
        </div>
        <div class="dialog" v-show="showMessage">
            <input class="input" type="text" v-model="name" placeholder="昵称" placeholder-style="color:#ccc;" />
            <textarea class="desc" placeholder="在这里输入您想要说的话" placeholder-style="color:#ccc;" v-model="desc" />
            <div class="btn">
                <button class="left" @tap="sendMessage">发送留言</button>
                <button class="right" @tap="cancelMessage">取消</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { PropType, ref, onMounted, nextTick, onUnmounted } from 'vue'
import config from '@/config'
import { useAppStore } from '@/stores/app'
import { useUserStore } from '@/stores/user'
import { showToast } from '@/utils'
import { addMessage, getAllMessageList, getPresentList } from '@/api/wedding'

const props = defineProps({
    content: {
        type: Object,
        default: () => ({})
    },
    styles: {
        type: Object,
        default: () => ({})
    }
    // list: Array as PropType<any[]>,
    // info: Object as PropType<any>,
    // autoplay: {
    //     type: Boolean,
    //     default: true
    // }
})
console.log('swipe', props.content)
const { getImageUrl } = useAppStore()
const showOverlay0 = ref(false)
const showOverlay1 = ref(false)
const showOverlay2 = ref(false)
const showOverlay3 = ref(false)
const showOverlay4 = ref(false)
const showOverlay5 = ref(false)
const changeFlag = ref(false)
const lastIndex = ref(0)
const lastRadom = ref(-1)
const photoList = ref(
    props.content.data?.map((item) => {
        return {
            ...item,
            url: getImageUrl(item.url || item.image),
            show: false
        }
    }) || []
)
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
const showGreeting = ref(props.content.info?.showGreeting || false)
console.log('showGreeting', showGreeting.value)

const interval = setInterval(() => {
    console.log('111')

    if (greetIndex.value >= greetings.value.length - 1) {
        greetIndex.value = 0
    } else {
        greetIndex.value++
    }
}, 5000)
onUnmounted(() => {
    clearInterval(interval)
})
const userStore = useUserStore()
const showMessage = ref(false)
const name = ref('')
const desc = ref('')
const getMessageList = () => {
    getAllMessageList().then((res) => {
        console.log(res)
        greetings.value = res.lists
    })
}
getMessageList()
const handleMessage = () => {
    if (!userStore.isLogin) {
        uni.navigateTo({
            url: '/pages/login/login'
        })
        return
    }
    name.value = userStore.userInfo.nickname
    showMessage.value = true
}
const cancelMessage = () => {
    showMessage.value = false
}

const sendMessage = () => {
    console.log(userStore.userInfo)

    if (desc.value) {
        addMessage({
            desc: desc.value,
            avatar: userStore.userInfo.avatarUrl,
            name: name.value
        }).then((res) => {
            showMessage.value = false
            desc.value = ''
            getMessageList()
        })
    } else {
        showToast('说点什么吧~')
    }
}
// onMounted(() => {

// })
setTimeout(() => {
    console.log('111', props.content, photoList.value)
    photoList.value[0].show = true
    showOverlay0.value = true
}, 1500)
const change = async (val) => {
    showOverlay0.value = false
    showOverlay1.value = false
    showOverlay2.value = false
    showOverlay3.value = false
    showOverlay4.value = false
    showOverlay5.value = false
    changeFlag.value = true
    await nextTick()
    console.log(val)
    const index = val.target?.current || val.detail?.current || 0
    const item = photoList.value[index]
    showOverlay0.value = item.animate === 0
    showOverlay1.value = item.animate === 1
    showOverlay2.value = item.animate === 2
    showOverlay3.value = item.animate === 3
    showOverlay4.value = item.animate === 4
    showOverlay5.value = item.animate === 5
    item.show = false
    item.show = true
    lastIndex.value = index
}

const animationfinish = (val: any) => {
    if (!changeFlag.value || !props.content.list) {
        return
    }
    const index = val.target?.current || val.detail?.current || 0
    const item = photoList.value[index]
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
    width: 100%;
    height: calc(100vh - 100rpx);

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
        bottom: 220rpx;
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

    .controller {
        display: flex;
        gap: 16rpx;
        margin-left: auto;
        margin-bottom: 2rpx;

        image {
            width: 40rpx;
        }
    }

    .controller-btn {
        width: 60rpx;
        height: 60rpx;
        background-color: rgba(133, 22, 14, 1);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0.7;
    }

    .dialog {
        position: fixed;
        bottom: 0;
        left: 0;
        padding: 30rpx;
        z-index: 6669;
        background: #fff;
        width: 100%;

        .avatar-wrapper {
            padding: 0;
            width: 56px !important;
            border-radius: 8px;
            margin-top: 40px;
            margin-bottom: 40px;
        }

        .avatar {
            display: block;
            width: 56px;
            height: 56px;
        }

        .input {
            width: 690rpx;
            background: #f5f5f5;
            padding: 0 30rpx;
            margin-bottom: 20rpx;
            height: 80rpx;
            line-height: 80rpx;
        }

        textarea {
            height: 200rpx;
            line-height: 42rpx;
            font-size: 30rpx;
            color: #333;
            resize: none;
            outline: none;
            padding: 30rpx;
            width: 690rpx;
            background: #f5f5f5;

            &::-webkit-input-placeholder {
                font-size: 30rpx;
                color: #999;
            }
        }

        .btn {
            height: 120rpx;
            display: flex;
            justify-content: center;
            align-items: center;

            .left,
            .right {
                height: 80rpx;
                line-height: 80rpx;
                font-size: 28rpx;
                flex: 2;
                color: #fff;
                background: #ed695d;
                margin: 0 20rpx 0 30rpx;
            }

            .right {
                flex: 1;
            }
        }
    }
}
</style>
