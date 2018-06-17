<template>
    <div>
        <b-card :title="item.title"
                :img-src="imgSrc"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2"
                text-variant="dark">
          <p class="card-text">
            {{item.details}}
          </p>
          <!-- the property 'buttonType' defines which component to use. The
            title attribute is passed on. To pass on all own properties this
            could be used: v-bind="$attrs"
            Docs: https://vuejs.org/v2/api/#component -->
          <component :is="buttonType" :title="item.title" @click="openTarget">
            <!-- the slot will be filled in 'pages/MediaList.vue' and only be used
            by 'components/base/OpenBlogButtonFunctionSlot.vue'. The other components
            will ignore it.
            Docs: https://vuejs.org/v2/guide/components-slots.html -->
            <slot/>
          </component>
        </b-card>
    </div>
</template>

<script>
export default {
  props: {
    buttonType: {
      type: String,
      required: true
    },
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      book: 'books'
    }
  },
  computed: {
    imgSrc: function() {
      switch (this.item.type) {
        case 'listen':
          return require('../assets/headphone.jpg')
        case 'watch':
          return require('../assets/movie.jpg')
        default:
          return require('../assets/books.jpg')
      }
    }
  },
  methods: {
    // this function will be called via event from the base components
    openTarget: function(title) {
      alert('"' + title + '" clicked')
    }
  }
}
</script>

<style>
button {
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>
