// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

// External module imports
import BootstrapVue from 'bootstrap-vue'
import fontawesome from '@fortawesome/fontawesome'
import faVuejs from '@fortawesome/fontawesome-free-brands/faVuejs'
import Vuex from 'vuex'

// app imports
import App from './App'
import router from './router'
import './components/base/baseComponentsGlobal'
import ConsoleLogger from './services/ConsoleLogger'
import MoneyPlugin from './plugins/money/moneyPlugin'
import store from './state/store'

// Styling
import './assets/scss/app.scss'

// register the icons from FontAwesome
fontawesome.library.add(faVuejs)

// register plugins
Vue.use(Vuex)
Vue.use(BootstrapVue)
Vue.use(MoneyPlugin)

Vue.config.productionTip = false

// create a new Vue instance to be used as a event bus. This instance
// can be imported in other files and via '$emit' and '$on' events can
// be exchanged
export const EventBus = new Vue()

// create a new logger class and pass it the event bus
export const consoleLogger = new ConsoleLogger(EventBus)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
