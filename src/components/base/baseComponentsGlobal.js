import Vue from 'vue'
import BasePlayAudioButtonFunctionalTemplate from './BasePlayAudioButtonFunctionalTemplate'
import BasePlayMovieButtonFunctionalRender from './BasePlayMovieButtonFunctionalRender'
import BaseOpenBlogButtonFunctionalSlot from './BaseOpenBlogButtonFunctionalSlot'

// Base components are very generic basic ui components, which will be used throughout
// the app.
// This file imports all base components and registers them globally. In a more complex
// setup, this could be exchanged for a generic solution, which imports all files
// dynamically.
Vue.component('BasePlayAudioButtonFunctionalTemplate', BasePlayAudioButtonFunctionalTemplate)
Vue.component('BasePlayMovieButtonFunctionalRender', BasePlayMovieButtonFunctionalRender)
Vue.component('BaseOpenBlogButtonFunctionalSlot', BaseOpenBlogButtonFunctionalSlot)
