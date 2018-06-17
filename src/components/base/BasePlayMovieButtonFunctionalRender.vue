<!-- example of a functional component with a render function.
 The render function creates a b-button-element (from Bootstrap-Vue),
 registers a click handler, sets attributes and passes the inner
 content
 -->
<script>
export default {
  functional: true,
  props: {
    title: {
      type: String,
      required: true
    }
  },
  render: function(createElement, context) {
    return createElement(
      'b-button',
      {
        on: {
          click: event => {
            // the click handler from the parent will be called and the title prop passed to it
            context.listeners['click'](context.props.title)
          }
          // to just pass all events along without changing it, use:
          // ...context.data
        },
        attrs: { variant: 'primary', block: true }
      },
      'Play ' + context.props.title
    )
  }
}
</script>
