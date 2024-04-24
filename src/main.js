import { createApp } from 'vue'
import App from './App.vue'


import { library } from '@fortawesome/fontawesome-svg-core'


import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faComment } from '@fortawesome/free-regular-svg-icons'

import {
    faSearch,
    faCloud,
    faTabletScreenButton,
    faStopwatch,
    faGaugeHigh,
    faBagShopping,
    faFileExport,
    faQuoteLeft,
    faCircle,
    faArrowUp
} from '@fortawesome/free-solid-svg-icons'

import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(faSearch,fab,faCloud,faTabletScreenButton,faStopwatch,faGaugeHigh,faBagShopping,faFileExport,faQuoteLeft,faCircle,faComment,faArrowUp)

const app = createApp(App)


app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
