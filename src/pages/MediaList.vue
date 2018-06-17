<!-- The MediaList shows a grid of media items. The main-layout is used and the page-content
defined as slot-content. The items are passed as a prop from the route.
The lodash-function 'chunk' is used, to group the items in chunks for the grid.
The EventBus is injected via dependency injection (as defined in App.vue). The mixin
'lifecycleHooks' is used. The created-hooks from both the mixin and this component
are called one after another.
-->
<template>
  <Layout>
    <div>
        <h2>My Media List</h2>
        <p>List of things I want to read, listen to or watch.</p>
        <b-container fluid>
            <b-row v-for="(chunk,index) in chunkedItems" :key="index">
                <b-col v-for="item in chunk" :key="item.id" cols="4">
                  <MediaCard :button-type="item.buttonType" :item="item">
                    <b>{{item.title}}</b>
                  </MediaCard>
                </b-col>
            </b-row>
        </b-container>
    </div>
  </Layout>
</template>

<script>
import Layout from '../layouts/MainLayout'
import MediaCard from '../components/MediaCard'
import lifecycleHooks from '../mixins/lifecycleHooks'
import _ from 'lodash'

export default {
  name: 'MediaList',
  components: { Layout, MediaCard },
  inject: ['EventBus'],
  mixins: [lifecycleHooks],
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  computed: {
    itemsEnhanced() {
      return this.items.map(item => {
        switch (item.type) {
          case 'read':
            item.buttonType = 'BaseOpenBlogButtonFunctionalSlot'
            break
          case 'listen':
            item.buttonType = 'BasePlayAudioButtonFunctionalTemplate'
            break
          case 'watch':
            item.buttonType = 'BasePlayMovieButtonFunctionalRender'
            break
        }
        return item
      })
    },
    chunkedItems() {
      return _.chunk(this.itemsEnhanced, 3)
    }
  },
  created: function() {
    // call the hello-function in the mixin.
    this.hello()
    // emit a log-event
    this.EventBus.$emit('LOG_DEBUG', 'MediaList created')
  }
}
</script>

<!-- Add "scoped" attribute to encapsulate CSS within this component -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
