import { defineStore } from 'pinia'
import { getConfig } from '@/api/app'
import { getIndex } from '@/api/shop'

interface AppSate {
    config: Record<string, any>
    indexConfig: Record<string, any>
    innerAudioContext: any
}
let _getConfig: Promise<any>
let _getIndex: Promise<any>
export const useAppStore = defineStore({
    id: 'appStore',
    state: (): AppSate => ({
        config: {},
        indexConfig: {},
        innerAudioContext: null
    }),
    getters: {
        getWebsiteConfig: (state) => state.config.website || {},
        getLoginConfig: (state) => state.config.login || {},
        getTabbarConfig: (state) => state.config.tabbar || [],
        getStyleConfig: (state) => state.config.style || {},
        getH5Config: (state) => state.config.webPage || {},
        getCopyrightConfig: (state) => state.config.copyright || []
        // getIndexConfig: (state) => state.config.index || {}
    },
    actions: {
        setMusic(innerAudioContext) {
            this.innerAudioContext = innerAudioContext
        },
        getImageUrl(url: string) {
            return url.indexOf('http') ? `${this.config.domain}${url}` : url
        },
        async getConfig() {
            const data = await (!_getConfig ? (_getConfig = getConfig()) : _getConfig)
            this.config = data
        },
        async getIndexConfig() {
            if (Object.keys(this.indexConfig).length) {
                return this.indexConfig
            }
            const data = await (!_getIndex ? (_getIndex = getIndex()) : _getIndex)
            this.indexConfig = data
            return this.indexConfig
        }
    }
})
