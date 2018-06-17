/* Mixins are a way to merge funcionality with a component definition. In this
example, the mixin, doesn't do anything useful. As you can see in the console log
when running this app, the created-callback will be called from the mixin, as well
as the component itself. The callbacks and functions defined in a mixin will be
executed within the component itself (after merge) and therefor, the components
context can be accessed via 'this'.
Docs: https://vuejs.org/v2/guide/mixins.html
*/
export default {
  created: function() {
    this.EventBus.$emit(
      'LOG_DEBUG',
      'Created hook wittin mixin called for component: ' + this.$options.name
    )
  },
  methods: {
    hello: function() {
      console.log('hello from mixin!')
    }
  }
}
