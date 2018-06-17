/* Example of a higher order component (HoC). The function 'withStorage' gets a
component as an argument, adds addional behaviour (load and delete) and
returns that as a new component. The original component has no knowledge
of any HoC and gets the item via prop. In this example, the load- and delete-
functionality is added via higher order component. This functionality is generic
and the specific Vuex-paths can be set via the conf-object when creating the HoC.
In this example-app, it is used in 'components/TravelItemWithStorage.js'.
*/

import Vue from 'vue'

const withStorage = (component, conf) => {
  // get the props from the component or initialize them as an empty array
  const inheritedProps = component.props || []

  return Vue.component('withStorage', {
    render(createElement) {
      return createElement(component, {
        props: {
          // props are passed along
          ...this.$attrs,
          // the item is loaded and passed to the child component
          item: this.load(this.id)
        },
        // event listeners are passed along and the delete-handler is registered
        on: { ...this.$listeners, delete: this.deleteItem }
      })
    },
    // register the same props for the Hoc as the original component had
    // and additionally the id-prop
    props: [...inheritedProps, 'id'],
    methods: {
      load(id) {
        // load the item. The Vuex-path is passed in via the conf-object
        return this.$store.getters[conf.getterName](id) || {}
      },
      deleteItem(id) {
        // delete the item. The Vuex-path is passed in via the conf-object
        this.$store.commit(this.conf.deleteActionName, id)
      }
    }
  })
}

export default withStorage
