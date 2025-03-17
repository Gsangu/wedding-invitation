<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2022-04-13 09:29:22
 * @LastEditTime: 2023-08-22 15:51:01
 * @LastEditors: zouyaoji 370681295@qq.com
 * @Description:
 * @FilePath: \wedding-invitation-me\src\pages\message\index.vue
-->
<template>
    <div class="message">
        <scroll-view scroll-y class="box">
            <p class="place"></p>
            <div class="item" v-for="(item, index) in messageList" :key="index">
                <image class="left" :src="item.url" />
                <div class="right">
                    <div class="top">
                        <uni-tag v-if="item.customIndex === 0" text="置顶" type="success" @click="copy(item)" />
                        <span class="top-l">{{ item.name }}</span>
                        <span class="top-r">{{ formatDateTime(item.create_time) }}</span>
                    </div>
                    <p class="con">{{ item.desc }}</p>
                </div>
            </div>
            <p class="place-end"></p>
        </scroll-view>
        <div class="bottom">
            <button class="left" @click="handleSay">说点啥吧</button>
            <button class="right" @click="handleGo">我要出席</button>
            <!-- <button class="left" lang="zh_CN" open-type="getUserInfo" @getuserinfo="toMessage">
                说点啥吧
            </button>
            <button class="right" open-type="getUserInfo" @getuserinfo="toForm">我要出席</button> -->
        </div>
        <div class="dialog" v-show="isOpen">
            <textarea class="desc" placeholder="在这里输入您想要说的话" placeholder-style="color:#ccc;" v-model="desc" />
            <div class="btn">
                <button class="left" @tap="sendMessage">发送留言</button>
                <button class="right" @tap="cancel">取消</button>
            </div>
        </div>
        <!-- <div class="form-dialog" v-if="isLogin" @tap="lookList">
            <image src="../../static/images/wedding/form.png" />
        </div> -->
        <div class="form" v-show="isForm">
            <h-form ref="formRef" @closeForm="closeForm" @getFromlist="getFromlist"></h-form>
        </div>
        <div class="form-list" v-show="isFormlist">
            <h-formlist @closeFormlist="closeFormlist" :formList="formList"></h-formlist>
        </div>
    </div>
    <tabbar v-if="!props.isComponent" />
</template>

<script setup lang="ts">
import { onMounted, ref, computed, getCurrentInstance } from 'vue'
import HForm from '@/components/wedding/form.vue'
import HFormlist from '@/components/wedding/formlist.vue'
import { showToast } from '@/utils'
import { GlobalData } from '@/types'
import UniTag from '@/components/wedding/uni-tag.vue'
import { useUserStore } from '@/stores/user'
import { storeToRefs } from 'pinia'
import { addMessage, getAllMessageList, getPresentList } from '@/api/wedding'
import { onShow } from '@dcloudio/uni-app'

const props = defineProps({
    isComponent: {
        type: Boolean,
        default: false
    }
})

const userStore = useUserStore()
const isOpen = ref(false)
const desc = ref('')
const messageList = ref([])
const isForm = ref(false)
const isVideo = ref(false)
const isFormlist = ref(false)
const formList = ref([])
const formRef = ref(null)
const instance = getCurrentInstance()
const { userInfo, isLogin } = storeToRefs(userStore)

const getMessageList = () => {
    getAllMessageList().then((res) => {
        console.log(res)
        messageList.value = res.lists
    })
}
onShow(() => {
    isVideo.value = false
    isForm.value = false
    isFormlist.value = false
    getMessageList()
})

// onMounted(() => {
//   getVideoUrl()
//   isVideo.value = false
//   isForm.value = false
//   isFormlist.value = false
//   getMessageList()
// })

const handleSay = () => {
    if (!userStore.isLogin) {
        uni.navigateTo({
            url: '/pages/login/login'
        })
    }
    isOpen.value = true
}

const handleGo = () => {
    if (!userStore.isLogin) {
        uni.navigateTo({
            url: '/pages/login/login'
        })
    }
    getIsPresentExist()
}

const formatDateTime = (dateTimeString: string) => {
    const dateObject = new Date(dateTimeString)
    const formattedDateTime = `${dateObject.toISOString().slice(0, 19).replace('T', ' ')}`
    return formattedDateTime
}

const copy = (item) => {
    if (typeof item.customIndex === 'number') {
        uni.setClipboardData({
            data: item.desc,
            success: function () {
                showToast('复制成功')
            }
        })
    }
}

const cancel = () => {
    isOpen.value = false
}

const sendMessage = () => {
    console.log(userStore.userInfo)

    if (desc.value) {
        addMessage({
            desc: desc.value,
            type: 'message',
            time: getNowFormatDate(),
            url: instance!.appContext.config.globalProperties.$MpUserData?.user.avatarUrl,
            name: userStore.userInfo.nickname
        }).then((res) => {
            isOpen.value = false
            desc.value = ''
            getMessageList()
        })
    } else {
        showToast('说点什么吧~')
    }
}

const getNowFormatDate = () => {
    const now = new Date()
    const year = now.getFullYear()
    const month = now.getMonth() + 1
    const day = now.getDate()
    const hh = now.getHours()
    const mm = now.getMinutes()
    const ss = now.getSeconds()
    let clock = year + '-'
    if (month < 10) {
        clock += '0'
    }
    clock += month + '-'
    if (day < 10) {
        clock += '0'
    }
    clock += day + ' '
    if (hh < 10) {
        clock += '0'
    }
    clock += hh + ':'
    if (mm < 10) {
        clock += '0'
    }
    clock += mm + ':'
    if (ss < 10) {
        clock += '0'
    }
    clock += ss
    return clock
}

const closeForm = () => {
    isForm.value = false
}

const getIsPresentExist = () => {
    if (!userStore.isLogin) {
        return
    }
    getPresentList().then((res) => {
        const formData: any = {
            dataFlag: false,
            id: '',
            name: userStore.userInfo.nickName
        }
        if (res?.lists?.length) {
            formData.name = res.lists?.[0]?.name
            formData.phone = res.lists?.[0]?.phone
            formData.count = res.lists?.[0]?.count
            formData.phoneFlag = true
            formData.id = res.lists?.[0]?.id
            formData.desc = res.lists?.[0]?.desc
        }
        formRef.value.updateForm(formData)
        isForm.value = true
    })
}

const lookList = () => {
    isFormlist.value = true
    getFromlist()
}

const closeFormlist = () => {
    isFormlist.value = false
}

const getFromlist = () => {
    getPresentList().then((res) => {
        formList.value = res.data.reverse().map((x) => {
            return {
                count: x.count,
                desc: x.desc,
                name: x.name,
                phone: x.phone.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2'),
                id: x.id,
                openid: x.openid
            }
        })
    })
}
</script>

<style lang="scss" scoped>
.cu-form-group .title {
    min-width: calc(4em + 15px);
}

.message {
    height: 100%;
    width: 100%;

    .box {
        height: 100%;
        background: #f9e0d9;
        width: 100%;

        .place {
            height: 20rpx;
        }

        .place-end {
            height: 160rpx;
        }

        .item {
            width: 600rpx;
            margin: 0 auto 20rpx;
            border-radius: 16rpx;
            background: #fff;
            display: flex;
            justify-content: center;
            align-items: flex-start;
            padding: 30rpx;
            // margin-bottom: 20rpx;

            .left {
                width: 100rpx;
                height: 100rpx;
                border-radius: 50rpx;
            }

            .right {
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                min-height: 100rpx;
                align-items: flex-start;
                width: 480rpx;
                margin-left: 20rpx;

                .top {
                    height: 40rpx;
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    .top-l {
                        height: 50rpx;
                        line-height: 50rpx;
                        color: #444;
                        font-size: 28rpx;
                    }

                    .top-r {
                        height: 50rpx;
                        line-height: 50rpx;
                        color: #999;
                        font-size: 24rpx;
                    }
                }

                .con {
                    line-height: 50rpx;
                    color: #666;
                    font-size: 28rpx;
                    white-space: pre-wrap;
                    width: 450rpx;
                }

                .delete {
                    display: flex;
                    line-height: 50rpx;
                    width: 48rpx;

                    .delete_icon {
                        width: 36rpx;
                        height: 36rpx;
                    }
                }
            }
        }
    }

    .bottom {
        position: fixed;
        bottom: 100rpx;
        left: 0;
        height: 160rpx;
        background: rgba(255, 255, 255, 0.75);
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        .left,
        .right {
            height: 80rpx;
            line-height: 80rpx;
            font-size: 28rpx;
            width: 300rpx;
            color: #fff;
            background: #ed695d;
            margin: 0 20rpx 0 0;
        }

        .right {
            margin: 0;
        }
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

    .video-dialog {
        position: fixed;
        right: 10rpx;
        top: 200rpx;
        width: 100rpx;
        height: 100rpx;
        box-shadow: 0 0 10rpx rgba(0, 0, 0, 0.1);
        background: #fff;
        border-radius: 16rpx;

        image {
            width: 100%;
            height: 100%;
        }
    }

    .form-dialog {
        position: fixed;
        right: 10rpx;
        top: 320rpx;
        width: 100rpx;
        height: 100rpx;
        box-shadow: 0 0 10rpx rgba(0, 0, 0, 0.1);
        background: #fff;
        border-radius: 50rpx;

        image {
            width: 100%;
            height: 100%;
        }
    }

    .video,
    .form,
    .form-list {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: #fff;
        z-index: 99;
    }

    .form-list {
        background: rgba(0, 0, 0, 0.5);
    }
}
</style>
