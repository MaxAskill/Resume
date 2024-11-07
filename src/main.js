// import './assets/main.css'
import './assets/index.css'  // Add this line
import { createApp } from 'vue'
import App from './App.vue'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/dist/vuetify.min.css'

const vuetify = createVuetify({
    components,
    directives    : {
        ...directives
    },      
    theme: {
        themes: {
            light: {
                colors: {
                    primary: '#1867C0',
                    secondary: '#5CBBF6',
                },
            },
        },
    }
})
createApp(App).use(vuetify).mount('#app')
