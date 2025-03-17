<template>
    <u-tabbar v-if="showTabbar" v-model="current" v-bind="tabbarStyle" :list="tabbarList" @change="handleChange"
        :hide-tab-bar="true"></u-tabbar>
    <div class="bg_music" v-if="musicList.length && isPlaying" @tap="audioPlay">
        <image src="../../static/images/wedding/music_icon.png" class="musicImg music_icon" />
        <image src="../../static/images/wedding/music_play.png" class="music_play pauseImg" />
    </div>
    <div class="bg_music" v-else-if="musicList.length" @tap="audioPlay">
        <image src="../../static/images/wedding/music_icon.png" class="musicImg" />
        <image src="../../static/images/wedding/music_play.png" class="music_play playImg" />
    </div>
</template>

<script lang="ts" setup>
import { useAppStore } from '@/stores/app'
import { navigateTo } from '@/utils/util'
import { computed, ref, onMounted, onUnmounted } from 'vue'

const current = ref()
const appStore = useAppStore()
const tabbarList = computed(() => {
    return appStore.getTabbarConfig
        ?.filter((item: any) => item.is_show == 1)
        .map((item: any) => {
            return {
                iconPath: item.unselected,
                selectedIconPath: item.selected,
                text: item.name,
                link: item.link,
                pagePath: item.link.path
            }
        })
})
const showTabbar = computed(() => {
    const currentPages = getCurrentPages()
    const currentPage = currentPages[currentPages.length - 1]
    const current = tabbarList.value.findIndex((item: any) => {
        return item.pagePath === '/' + currentPage.route
    })
    return current >= 0
})

const tabbarStyle = computed(() => ({
    activeColor: appStore.getStyleConfig.selected_color,
    inactiveColor: appStore.getStyleConfig.default_color
}))

const nativeTabbar = [
    '/pages/index/index',
    '/pages/news/news',
    '/pages/user/user',
    '/pages/wedding/map',
    '/pages/wedding/message',
    '/pages/wedding/alumn'
]
const handleChange = (index: number) => {
    const selectTab = tabbarList.value[index]
    const navigateType = nativeTabbar.includes(selectTab.link.path) ? 'switchTab' : 'reLaunch'
    navigateTo(selectTab.link, navigateType)
}
const isPlaying = ref(false)
const musicList = ref([] as any[])
const playIndex = ref(0)
let innerAudioContext: UniNamespace.InnerAudioContext = appStore.innerAudioContext

onMounted(async () => {
    await appStore.getConfig()
    const data = await appStore.getIndexConfig()
    const pages = JSON.parse(data?.page?.data)
    // console.log(data)
    const list = (
        pages.find((item) => item.name === 'wedding-swiper')?.content.musicList || []
    ).map((item) => ({
        ...item,
        url: appStore.getImageUrl(item.url)
    }))
    musicList.value = list
    if (list.length <= 0 || appStore.innerAudioContext) return
    console.log('init music', list)

    innerAudioContext = uni.createInnerAudioContext()
    appStore.setMusic(innerAudioContext)
    innerAudioContext.src = list[playIndex.value].url
    innerAudioContext.autoplay = true
    innerAudioContext.loop = true
    innerAudioContext.onPlay(() => {
        isPlaying.value = true
    })
    innerAudioContext.onPause(() => {
        isPlaying.value = false
    })
    innerAudioContext.onEnded(() => {
        // isPlaying.value = false
        if (playIndex.value++ >= musicList.value.length) {
            playIndex.value = 0
        }
        innerAudioContext.src = musicList.value[playIndex.value]?.url
    })
    innerAudioContext.onError((res) => {
        console.log('播放错误', res)
    })
})
const audioPlay = () => {
    console.log('audioPlay', appStore.innerAudioContext)

    if (innerAudioContext.paused) {
        appStore.innerAudioContext.play()
        uni.showToast({
            title: '背景音乐已开启~'
        })
    } else {
        innerAudioContext.pause()
        uni.showToast({
            title: '您已暂停音乐播放~'
        })
    }
}
</script>

<style lang="scss" scoped>
@keyframes musicRotate {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}

@keyframes musicRotate {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}

@keyframes musicStop {
    from {
        transform: rotate(20deg);
    }

    to {
        transform: rotate(0deg);
    }
}

@keyframes musicStart {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(20deg);
    }
}

@keyframes infoAnimation {
    0% {
        transform: scale(1) translate(0, 0);
    }

    50% {
        transform: scale(0.9) translate(5px, 5px);
    }

    100% {
        transform: scale(1) translate(0, 0);
    }
}

.bg_music {
    position: fixed;
    right: 10rpx;
    top: 200rpx;
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
        transform: rotate(20deg);
    }

    .playImg {
        animation: musicStop 1s linear forwards;
    }

    .pauseImg {
        animation: musicStart 1s linear forwards;
    }
}
</style>
