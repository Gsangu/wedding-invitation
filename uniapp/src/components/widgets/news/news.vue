<template>
    <view class="article" v-if="article.length && content.enabled">
        <view class="flex items-center article-title mx-[20rpx] my-[30rpx] text-lg font-medium">
            最新资讯
        </view>
        <news-card v-for="item in article" :key="item.id" :news-id="item.id" :item="item" />
    </view>
</template>
<script lang="ts" setup>
// import { getIndex } from '@/api/shop'
// import { onLoad, onPageScroll } from '@dcloudio/uni-app'
// import { computed, reactive, ref } from 'vue'

const props = defineProps({
    content: {
        type: Object,
        default: () => ({})
    },
    styles: {
        type: Object,
        default: () => ({})
    },
    article: {
        type: Array<any>,
        default: () => []
    }
})
</script>

<style lang="scss" scoped>
.article-title {
    &::before {
        content: '';
        width: 8rpx;
        height: 34rpx;
        display: block;
        margin-right: 10rpx;
        @apply bg-primary;
    }
}
</style>
