<template>
    <div class="index">
        <image class="bg-image" :src="background" />
        <div class="bg-swiper">
            <index-swiper :list="list" :info="info" :autoplay="autoplay"></index-swiper>
        </div>
        <tabbar />
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, getCurrentInstance } from 'vue'
import IndexSwiper from '@/components/wedding/index-swiper.vue'
import { onHide, onLoad, onShareAppMessage, onShow, onUnload } from '@dcloudio/uni-app'
import { GlobalData } from '@/types'
import { showToast } from '@/utils'
import { getCommonConfig, getResouces } from '@/api/wedding'

const isPlaying = ref(false)
const list = ref([])
const info = ref({})
const autoplay = ref(false)

const instance = getCurrentInstance()
const globalData: GlobalData = instance?.appContext.config.globalProperties.globalData
const innerAudioContext = globalData.innerAudioContext
const background = ref('')
const videoUrl = ref('')

onLoad(() => {
    innerAudioContext.onEnded(onEnded)
    innerAudioContext.onPlay(onPlay)
    innerAudioContext.onPause(onPause)

    getCommonConfig().then((res) => {
        background.value = res.data.background
        info.value = res.data.info
        videoUrl.value = res.data.videoUrl

        if (videoUrl.value && innerAudioContext) {
            console.log(innerAudioContext, globalData)
            innerAudioContext.src = globalData.musicList[0].url
            console.log(globalData)
        }
    })

    getBannerList()
})

onShow(() => {
    autoplay.value = true
})

onHide(() => {
    autoplay.value = false
})

const audioPlay = () => {
    if (innerAudioContext.paused) {
        innerAudioContext.play()
        showToast('背景音乐已开启~')
    } else {
        innerAudioContext.pause()
        showToast('您已暂停音乐播放~')
    }
}
const onPlay = () => {
    isPlaying.value = true
}
const onPause = () => {
    isPlaying.value = false
}
const onEnded = () => {
    if (globalData.musicIndex >= globalData.musicList.length) {
        globalData.musicIndex = 0
    }
    globalData.innerAudioContext.src = globalData.musicList[globalData.musicIndex].url
    globalData.musicIndex += 1
}

const getBannerList = () => {
    getResouces('index-banner').then((res) => {
        const result = []
        const animations = [
            'fadeInLeft',
            'slideInDown',
            'rotateInDownRight',
            'rollIn',
            'jackInTheBox',
            'flip'
        ]
        for (let i = 0; i < res.data.length; i++) {
            result.push({
                url: res.data[i].url,
                show: i === 0,
                class: animations[i]
            })
        }
        console.log('result', result)
        list.value = result
    })
}

onShareAppMessage(() => {
    return {
        path: '/pages/index/index'
    }
})
</script>

<style lang="scss">
@-webkit-keyframes musicRotate {
    from {
        -webkit-transformb: rotate(0deg);
    }

    to {
        -webkit-transform: rotate(360deg);
    }
}

@-moz-keyframes musicRotate {
    from {
        -webkit-transformb: rotate(0deg);
    }

    to {
        -webkit-transform: rotate(360deg);
    }
}

@-ms-keyframes musicRotate {
    from {
        -webkit-transformb: rotate(0deg);
    }

    to {
        -webkit-transform: rotate(360deg);
    }
}

@-o-keyframes musicRotate {
    from {
        -webkit-transformb: rotate(0deg);
    }

    to {
        -webkit-transform: rotate(360deg);
    }
}

@keyframes musicRotate {
    from {
        -webkit-transformb: rotate(0deg);
    }

    to {
        -webkit-transform: rotate(360deg);
    }
}

@-webkit-keyframes musicStop {
    from {
        -webkit-transform: rotate(20deg);
    }

    to {
        -webkit-transform: rotate(0deg);
    }
}

@-moz-keyframes musicStop {
    from {
        -webkit-transform: rotate(20deg);
    }

    to {
        -webkit-transform: rotate(0deg);
    }
}

@-ms-keyframes musicStop {
    from {
        -webkit-transform: rotate(20deg);
    }

    to {
        -webkit-transform: rotate(0deg);
    }
}

@-o-keyframes musicStop {
    from {
        -webkit-transform: rotate(20deg);
    }

    to {
        -webkit-transform: rotate(0deg);
    }
}

@keyframes musicStop {
    from {
        -webkit-transform: rotate(20deg);
    }

    to {
        -webkit-transform: rotate(0deg);
    }
}

@-webkit-keyframes musicStart {
    from {
        -webkit-transform: rotate(0deg);
    }

    to {
        -webkit-transform: rotate(20deg);
    }
}

@-moz-keyframes musicStart {
    from {
        -webkit-transform: rotate(0deg);
    }

    to {
        -webkit-transform: rotate(20deg);
    }
}

@-ms-keyframes musicStart {
    from {
        -webkit-transform: rotate(0deg);
    }

    to {
        -webkit-transform: rotate(20deg);
    }
}

@-o-keyframes musicStart {
    from {
        -webkit-transform: rotate(0deg);
    }

    to {
        -webkit-transform: rotate(20deg);
    }
}

@keyframes musicStart {
    from {
        -webkit-transform: rotate(0deg);
    }

    to {
        -webkit-transform: rotate(20deg);
    }
}

@-webkit-keyframes infoAnimation {
    0% {
        -webkit-transform: scale(1) translate(0, 0);
    }

    50% {
        -webkit-transform: scale(0.9) translate(5px, 5px);
    }

    100% {
        -webkit-transform: scale(1) translate(0, 0);
    }
}

@-moz-keyframes infoAnimation {
    0% {
        -webkit-transform: scale(1) translate(0, 0);
    }

    50% {
        -webkit-transform: scale(0.9) translate(5px, 5px);
    }

    100% {
        -webkit-transform: scale(1) translate(0, 0);
    }
}

@-ms-keyframes infoAnimation {
    0% {
        -webkit-transform: scale(1) translate(0, 0);
    }

    50% {
        -webkit-transform: scale(0.9) translate(5px, 5px);
    }

    100% {
        -webkit-transform: scale(1) translate(0, 0);
    }
}

@-o-keyframes infoAnimation {
    0% {
        -webkit-transform: scale(1) translate(0, 0);
    }

    50% {
        -webkit-transform: scale(0.9) translate(5px, 5px);
    }

    100% {
        -webkit-transform: scale(1) translate(0, 0);
    }
}

@keyframes infoAnimation {
    0% {
        -webkit-transform: scale(1) translate(0, 0);
    }

    50% {
        -webkit-transform: scale(0.9) translate(5px, 5px);
    }

    100% {
        -webkit-transform: scale(1) translate(0, 0);
    }
}

.index {
    height: 100%;
    position: relative;

    .img {
        width: 100%;
        // height: 100%;
    }

    .bg-swiper {
        width: 100%;
        height: 100%;
    }

    .inv {
        position: absolute;
        top: 20rpx;
        left: 89rpx;
        width: 572rpx;
        height: 69rpx;
        z-index: 9;
    }

    .bg_music {
        position: fixed;
        right: 10rpx;
        top: 100rpx;
        width: 100rpx;
        z-index: 99;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;

        .musicImg {
            width: 60rpx;
            height: 60rpx;
        }

        .music_icon {
            animation: musicRotate 3s linear infinite;
        }

        .music_play {
            width: 28rpx;
            height: 60rpx;
            margin-left: -10rpx;
            transform-origin: top;
            -webkit-transform: rotate(20deg);
        }

        .playImg {
            animation: musicStop 1s linear forwards;
        }

        .pauseImg {
            animation: musicStart 1s linear forwards;
        }
    }
}
</style>
