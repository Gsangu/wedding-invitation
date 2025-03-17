import { createSSRApp } from 'vue'
import App from './App.vue'
import plugins from './plugins'
import router from './router'
import './styles/index.scss'
import 'animate.css'
import { setupMixin } from './mixins'
export function createApp() {
    const app = createSSRApp(App)
    setupMixin(app)
    app.use(plugins)
    app.use(router)
    return {
        app
    }
}
