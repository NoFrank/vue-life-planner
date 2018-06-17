<!-- In this example, the same result as with the HoC 'withStorage' is achieved by using a
scoped slot. The original component can be defined via slot. This component adds the
additional behaviour (load and delete) and passes the item as a prop and the
delete-function as a callback to the slot-scope.
In the parent component, this functionality can be accessed via the slot-scope and
passed to the original component.
This example is used in 'components/TravelItemWithStorageScopedSlot.vue'.
-->
<template>
  <div>
    <slot :item="load(id)" :deleteItem="deleteItem"></slot>
  </div>
</template>

<script>

export default {
  props: {
    conf: {
      type: Object,
      required: true
    },
    id: {
      type: Number,
      required: true
    }
  },
  methods: {
    load(id) {
      return this.$store.getters[this.conf.getterName](id) || {}
    },
    deleteItem(id) {
      this.$store.commit(this.conf.deleteActionName, id)
    }
  }
}
</script>
