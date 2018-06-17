<!-- This footer is rendered with the 'v-once'-directive. If the msg-prop is changed
after the initial rendering, no updates will be passed to the footer
Docs v-once: https://vuejs.org/v2/api/#v-once
-->
<template>
    <b-navbar type="dark" variant="info" fixed="bottom">
        <b-nav-text>{{text}}</b-nav-text>
    </b-navbar>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: false
    }
  }
}
</script>
