<!-- This page shows two lists with the same content. The detail view for items is on the left
list the higher order component TravelItemHoc and on the ride side the scoped slot component
TravelItemScopedSlot is used.-->
<template>
  <Layout>
    <div>
        <h2>Travel List</h2>
        <b-container fluid>
            <b-row>
                <b-col>
                    <p>Higher Order Component:</p>
                    <b-list-group>
                        <b-list-group-item v-for="item in items" :key="item.id" :to="{ name: 'TravelItemHoc', params: { id: item.id }}">{{item.title}}</b-list-group-item>
                    </b-list-group>
                </b-col>
                <b-col>
                    <p>Scoped Slot:</p>
                    <b-list-group>
                        <b-list-group-item v-for="item in items" :key="item.id" :to="{ name: 'TravelItemScopedSlot', params: { id: item.id }}">{{item.title}}</b-list-group-item>
                    </b-list-group>
                </b-col>
            </b-row>
        </b-container>
    </div>
  </Layout>
</template>

<script>
import Layout from '../layouts/MainLayout'

export default {
  name: 'TravelList',
  components: { Layout },
  props: {
    items: {
      type: Array,
      required: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
