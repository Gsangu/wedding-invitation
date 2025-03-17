/*
 * FileName: wedding.ts
 * Project: uni-preset-vue
 * Author: Gsan
 * File Created: Tuesday, 10th December 2024 8:55:26 pm
 * Last Modified: Tuesday, 10th December 2024 8:55:26 pm
 * Modified By: Gsan
 */
/*
 * @Author: zouyaoji@requests://github.com/zouyaoji
 * @Date: 2022-12-15 00:44:39
 * @LastEditTime: 2023-08-20 01:26:01
 * @LastEditors: zouyaoji 370681295@qq.com
 * @Description:
 * @FilePath: \wedding\src\api\wedding.ts
 */
import request from '@/utils/request'
// import common from '@/config/common.json'
// import banner from '@/config/banner.json'
// import music from '@/config/music.json'
// import indexBanner from '@/config/indexBanner.json'
// import message from '@/config/message.json'
// import utils from '@/utils'
// const getStaticAssets = utils.getStaticAssets

// const map = {
//     music: music.map((item) => ({ ...item, url: getStaticAssets(item.musicUrl) })),
//     'photo-banner': banner.bannerList.map((item) => ({
//         url: getStaticAssets(item)
//     })),
//     'index-banner': indexBanner.indexBanner.map((item) => ({
//         url: getStaticAssets(item)
//     }))
// }
// console.log(map)

/**
 * 获取通用配置
 * @returns { background: '', videoUrl: '', info: { name: '', date: '', time: '', hotel: '', detail: '' } }
 */
export async function getCommonConfig() {
    // common.background = getStaticAssets(common.background)
    // common.poster = getStaticAssets(common.poster)
    // common.videoUrl = getStaticAssets(common.videoUrl)
    // common.musicList = music.map((item) => ({
    //     ...item,
    //     url: getStaticAssets(item.musicUrl)
    // }))
    // return {
    //     data: common
    // }
    return request.request({
        url: '/wedding/getCommonConfig',
        method: 'GET'
        // params: {
        //     userId: import.meta.env.VITE_VUE_APP_USERID as string
        // }
    })
}

/**
 * 获取资源配置
 * @returns
 */
export async function getResouces(type: 'music' | 'photo-banner' | 'index-banner') {
    // console.log(map[type])
    // return {
    //     data: map[type]
    // }
    return request.request({
        url: '/wedding/getResouces',
        method: 'GET',
        data: {
            type
            // userId: import.meta.env.VITE_VUE_APP_USERID as string
        }
    })
}

// /**
//  * 获取音乐配置
//  * @returns
//  */
// export function getMusicConfig() {
//   return request.request({
//     url: '/wedding/getMusicConfig',
//     method: 'GET'
//   })
// }

// /**
//  * 获取邀请函页面轮播图列表
//  * @returns
//  */
// export function getPhotoBannerList() {
//   return request.request({
//     url: '/wedding/getPhotoBannerList',
//     method: 'GET'
//   })
// }

// /**
//  * 获取相册页面轮播图列表
//  * @returns
//  */
// export function getIndexBannerList() {
//   return request.request({
//     url: '/wedding/getIndexBannerList',
//     method: 'GET'
//   })
// }

/**
 * 获取留言板数据列表
 * @returns
 */
export async function getAllMessageList() {
    // return {
    //     data: message
    // }
    return request.request({
        url: '/wedding/MessageLists',
        method: 'GET'
    })
}

/**
 * 添加留言
 * @param data
 * @returns
 */
export async function addMessage(data: any) {
    return request.request({
        url: '/wedding/addMessage',
        method: 'POST',
        data
    })
}

/**
 * 删除留言
 * @param data
 * @returns
 */
export async function deleteMessage(id: any) {
    return request.request({
        url: '/wedding/deleteMessage',
        method: 'POST',
        data: {
            id
        }
    })
}

/**
 * 通过 openId 获取用户
 * @returns
 */
export async function getUserByOpenId(openid: any) {
    return request.request({
        url: '/wedding/getUserByOpenId',
        method: 'GET',
        data: {
            openid
        }
    })
}

/**
 * 通过 openId 获取用户
 * @returns
 */
export async function addOrUpdateUser(data: any) {
    return request.request({
        url: '/wedding/addOrUpdateUser',
        data,
        method: 'POST'
    })
}

/**
 * 获取用户列表
 * @returns
 */
export function getFriendUserList() {
    return request.request({
        url: '/wedding/getUserList',
        method: 'GET'
    })
}

/**
 * 获取出席数据列表
 * @returns
 */
export function getPresentList(openid?: any) {
    return request.request({
        url: '/wedding/presentLists',
        method: 'GET',
        data: {
            openid
        }
    })
}

/**
 * 增加或者更新出席数据
 * @returns
 */
export function addOrUpdatePresent(data: any) {
    return request.request({
        url: '/wedding/addOrUpdatePresent',
        method: 'POST',
        data
    })
}
/**
 * 根据 jsCode 换取用户 openId
 * @param jsCodeMP
 * @returns
 */
export function code2Session(jsCodeMP: string) {
    return request.request({
        url: '/wechat/code2Session',
        method: 'GET',
        data: {
            jsCodeMP
        }
    })
}

/**
 * 上传头像
 * @param data
 * @param openId
 * @returns
 */
export function uploadAvatar(file) {
    const data = new FormData()
    data.append('file', file)
    return request.request({
        url: '/wedding/uploadAvatar',
        // filePath,
        // name: 'file',
        data: data
        // params: {
        //     userId: import.meta.env.VITE_VUE_APP_USERID as string
        // }
    })
}
