<template>
  <div id="app">
    <div class="router-wrapper">
      <router-view/>
    </div>
    <!-- The footer is placed outside the routing outlet as every route
      should contain a footer. Another option would be to integrate the
      footer in the layout or to define a second route outlet and set
      the footer within the router configuration.
      The directive 'v-once' is used here. On first rendering, the msg-prop
      is passed to the component and evaluated. If msg changes afterwards,
      the footer won't update, as it will be rendered only once.
    -->
    <FooterBar v-once :text="msg"/>
  </div>
</template>

<script>
import FooterBar from './components/FooterBar'
import { EventBus } from './main'

export default {
  name: 'App',
  components: { FooterBar },
  data() {
    return {
      msg: 'A Vue.js Showcase App'
    }
  },
  // Here is an example of Vue's dependency injection. The EventBus is
  // published here via the provide-functions. All child components can
  // access it via the inject-function (see pages/MediaList.vue)
  // Docs: https://vuejs.org/v2/guide/components-edge-cases.html#Dependency-Injection
  provide: function() {
    return {
      EventBus: EventBus
    }
  },
  created: function() {
    // Emit a log event. The consoleLogger is subscribed to the event and
    // will write a console log
    EventBus.$emit('LOG_DEBUG', 'App component created')
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  .router-wrapper {
    margin-bottom: 60px;
  }
}
</style>
