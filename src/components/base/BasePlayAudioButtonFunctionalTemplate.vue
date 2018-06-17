<!-- example of a functional component with a template -->
-->
<template functional>
    <b-button variant="primary" :block="true" @click="listeners['click'](props.title)">
      <!-- as this is a functional component, there is no instance and props
        have to be accessed via the props object -->
      Play {{props.title}}
    </b-button>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>
