<!-- Layouts define the general structure of pages. Each page loads a layout and fills
the slot with the page-content. In this example, the main-layout contains a horizontal
nav-bar and the page itself -->

<template>
  <div>
    <NavBar/>
    <b-container class="mt-4">
      <slot/>
    </b-container>
  </div>
</template>

<script>
import NavBar from '../components/NavBar'
export default {
  components: { NavBar }
}
</script>
