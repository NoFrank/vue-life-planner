
<!-- This component displays a single travel item. It is used for the higher order
component example and the scoped slot.
-->
<template>
  <Layout>
    <div>
        <h2>Travel List Item</h2>
        <p>Destination: <b>{{ item.title }}</b></p>
        <p>This message was injected as a route prop: <i>{{ routeMessage }}</i></p>
        <b-button variant="primary" @click="$router.go(-1)">Back</b-button>
        <b-button variant="danger" @click="deleteItem()">Delete</b-button>
    </div>
  </Layout>
</template>

<script>
import Layout from '../layouts/MainLayout'

export default {
  name: 'TravelItem',
  components: { Layout },
  props: {
    item: {
      type: Object,
      required: true
    },
    routeMessage: {
      type: String
    }
  },
  methods: {
    deleteItem() {
      // emit an event to be handled in the parent component
      this.$emit('delete', this.item.id)
      // go back
      this.$router.go(-1)
    }
  }
}
</script>
