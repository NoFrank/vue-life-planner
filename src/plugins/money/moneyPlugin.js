// Simple example of a plugin. This plugin just registers a global component
// (which normaly wouldn't be a candidate for a seperate plugin) and a filter
// to format currency-values.
// Docs Plugin: https://vuejs.org/v2/guide/plugins.html
// Docs Filter: https://vuejs.org/v2/guide/filters.html

import TransactionItem from './TransactionItem'

export default {
  // The install method is all that needs to exist on the plugin object.
  // It takes the global Vue object as well as user-defined options.
  install(Vue, options) {
    // register the component globally. This should be normally avoided
    // with such specific components.
    Vue.component('TransactionItem', TransactionItem)

    // register a filter to format currencies for display
    // by using the Intl-API
    Vue.filter('formatCurrency', (amount) => {
      if (typeof amount !== 'number') {
        return amount
      }
      return new Intl.NumberFormat('en-EN', {
        style: 'currency',
        currency: 'EUR'
      }).format(amount)
    })
  }
}
