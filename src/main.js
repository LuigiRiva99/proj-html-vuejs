import { createApp } from 'vue'
import App from './App.vue'


import { library } from '@fortawesome/fontawesome-svg-core'


import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


import {
    faSearch,
    faCloud,
    faTabletScreenButton,
    faStopwatch,
    faGaugeHigh
} from '@fortawesome/free-solid-svg-icons'

import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(faSearch,fab,faCloud,faTabletScreenButton,faStopwatch,faGaugeHigh)

const app = createApp(App)


app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
