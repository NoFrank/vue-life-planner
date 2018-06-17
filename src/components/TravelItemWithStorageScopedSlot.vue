<!-- In this example, the same result as with the HoC 'withStorage' is achieved by using a
scoped slot. The 'withStorageScopedSlot'-component is the wrapper-component, which adds the load- and
delete-functions. The TravelItem-component is defined within the slot of 'withStorageScopedSlot'.
The slot-scope gets the name 'withStorageScope' and is accessed to get the item and pass it down
as well as to get the delete-callback, which will be called, when a delete-event is emmitted from
TravelItem.
Docs 'scoped slot': https://vuejs.org/v2/guide/components-slots.html#Scoped-Slots
-->

<template>
    <with-storage-scoped :id="id" :conf="conf">
        <travel-item slot-scope="withStorageScope" :item="withStorageScope.item"
            @delete="withStorageScope.deleteItem(withStorageScope.item.id)" :routeMessage="$attrs.routeMessage"/>
    </with-storage-scoped>
</template>

<script>
import TravelItem from '../pages/TravelItem'
import withStorageScopedSlot from '../components/hoc/withStorageScopedSlot'

export default {
  name: 'app',
  components: {
    'travel-item': TravelItem,
    'with-storage-scoped': withStorageScopedSlot
  },
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      conf: {
        getterName: 'travel/getTravelItemById',
        deleteActionName: 'travel/deleteItem'
      }
    }
  }
}
</script>
