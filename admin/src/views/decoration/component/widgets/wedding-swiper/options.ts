export default () => ({
    title: '婚礼轮播图',
    name: 'wedding-swiper',
    // disabled: 1,
    content: {
        enabled: 1,
        data: [
            {
                image: '',
                animate: 0,
                class: ''
            }
        ],
        albumn: [
            {
                image: '',
                class: ''
            }
        ],
        info: {
            name: '帅哥 & 美女',
            date: '谨定于 时间',
            time: '农历 时间',
            hotel: '席设：酒店名称',
            detail: '地址：具体地址'
        },
        musicList: [],
        showGreeting: false
    },
    styles: {}
})
