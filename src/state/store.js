/* Example of a simple Vuex-store. In this example, all state is organized
in namespaced modules.
Vuex docs: https://vuex.vuejs.org/guide/
Vuex modules: https://vuex.vuejs.org/guide/modules.html
*/

import Vue from 'vue'
import Vuex from 'vuex'
import { travelModule } from './modules/travel'
import { mediaList } from './modules/media'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    travel: travelModule,
    media: mediaList
  }
})

export default store
