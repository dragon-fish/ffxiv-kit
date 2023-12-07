import App from './App.dev.vue'
import 'virtual:uno.css'
import './styles/index.sass'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)

app.mount('#app')
