<!-- the Navbar is used in the main layout -->
<template>
    <b-navbar toggleable="md" type="dark" variant="info">

        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

        <b-navbar-brand href="#"><font-awesome-icon :icon="['fab', 'vuejs']" /> Vue Life Planner</b-navbar-brand>

        <b-collapse is-nav id="nav_collapse">

          <b-navbar-nav>
            <!-- with the exact-attribute, this item will only be highlighted as active
             when being on the exact path and not for child-routes
             Docs: https://router.vuejs.org/api/#exact -->
            <b-nav-item href="#" to="/" exact>Home</b-nav-item>
            <b-nav-item href="#" to="/media">Media-List</b-nav-item>
            <b-nav-item href="#" to="/travel">Travel-List</b-nav-item>
            <b-nav-item href="#" to="/money">Money</b-nav-item>
         </b-navbar-nav>

        </b-collapse>
    </b-navbar>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

export default {
  components: { FontAwesomeIcon }
}
</script>
