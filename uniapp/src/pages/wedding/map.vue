<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2022-04-13 09:21:48
 * @LastEditTime: 2023-01-30 00:26:35
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \wedding-invitation\src\pages\map\index.vue
-->
<template>
    <div class="map">
        <image mode="aspectFit" class="head-img" src="../../static/images/wedding/t1.png" />
        <map id="map" class="content" :longitude="markers[0].longitude" :latitude="markers[0].latitude"
            :markers="markers" scale="18" @markertap="toNav">
        </map>
        <div class="call">
            <div class="left" @tap="linkHe">
                <image src="../../static/images/wedding/he.png" />
                <span>呼叫新郎</span>
            </div>
            <div class="right" @tap="linkShe">
                <image src="../../static/images/wedding/she.png" />
                <span>呼叫新娘</span>
            </div>
        </div>
        <!-- <button class="message-btn" @tap="handleMessage">去留言</button> -->
        <image class="footer" src="../../static/images/wedding/grren-flower-line.png" />
        <wedding-form v-if="showForm"></wedding-form>
        <tabbar />
    </div>
</template>
<script setup lang="ts">
// import { getCommonConfig } from '@/api/wedding'
import { onMounted, ref } from 'vue'
import { useAppStore } from '@/stores/app'
import WeddingForm from '@/components/wedding/form.vue'
const appStore = useAppStore()

const markers = ref([
    {
        iconPath: '../../static/images/wedding/nav.png',
        id: 0,
        width: 50,
        height: 50,
        latitude: '30',
        longitude: '104'
    }
])

const heNumber = ref('')
const sheNumber = ref('')
const showForm = ref(false)

onMounted(async () => {
    const data = await appStore.getIndexConfig()
    const info = JSON.parse(data?.page?.meta)[0].content
    // console.log(data)
    console.log('info', info)
    showForm.value = info.showForm || false
    heNumber.value = info.heNumber
    sheNumber.value = info.sheNumber
    markers.value[0].latitude = info.location.latitude
    markers.value[0].longitude = info.location.longitude
})

const toNav = () => {
    uni.openLocation({
        latitude: Number(markers.value[0].latitude),
        longitude: Number(markers.value[0].longitude),
        scale: 18
    })
}

const linkHe = () => {
    uni.makePhoneCall({
        phoneNumber: heNumber.value
    })
}
const linkShe = () => {
    uni.makePhoneCall({
        phoneNumber: sheNumber.value
    })
}
</script>

<style lang="scss" scoped>
.map {
    height: 100%;
    background: #fff;
    padding: 0 0 100rpx;

    .message-wrap {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 9999;
    }

    .head-img {
        width: 100%;
        height: 180rpx;
        margin-bottom: 50rpx;
    }

    .content {
        width: 690rpx;
        margin-left: 30rpx;
        height: 600rpx;
        margin-bottom: 30rpx;
        border-radius: 16rpx;
    }

    .message-btn {
        width: 600rpx;
        height: 80rpx;
        line-height: 80rpx;
        font-size: 28rpx;
        color: #fff;
        background: #ed695d;
        margin: 20rpx auto;
    }

    .call {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        margin-bottom: 20rpx;

        .left,
        .right {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            image {
                height: 64rpx;
                width: 64rpx;
            }

            span {
                height: 50rpx;
                line-height: 50rpx;
                font-size: 24rpx;
                color: #6b4f4e;
            }
        }
    }

    .footer {
        height: 80rpx;
        width: 716rpx;
        margin-left: 17rpx;
    }
}
</style>
