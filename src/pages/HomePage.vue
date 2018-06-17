<template>
  <Layout>
    <div>
        <b-jumbotron text-variant="dark">
            <template slot="header">
                <img class="logo" src="../assets/logo.png"> <span>Vue Life Planner</span>
            </template>
            <template slot="lead">
                A sample App for Vue.js
            </template>
        </b-jumbotron>
        <p>This is a fictional sample app to demonstrate different options and architectural patterns in Vue.js-apps.
            It is in itself not meant to be a "best practice" app, because many different approaches are mixed in one app,
            which should be avoided in real apps. Some of the examples are 'artificial' and you would use that approach only
            in bigger apps. But for the purpose of demonstrating different ways and giving a basis for custom experiments,
            this shouldn't be a problem.
        </p>

        <p>You will find many comments in the source and links to the official documentation. This is work in progress. Don't
            take everything as 'this is how it should be' but as a starting point to play around with different approaches and
            to form your own opinion.
        </p>

        <h4 class="pt-3">Features</h4>
        <ul>
            <li>Props & Events</li>
            <li>Event bus</li>
            <li>State Management per Vuex</li>
            <li>Vuex modules</li>
            <li>Dependency injection</li>
            <li>Render functions</li>
            <li>Functional components</li>
            <li>Dynamic components</li>
            <li>Slots</li>
            <li>v-once</li>
            <li>computed properties</li>
            <li>Higher order components</li>
            <li>Scoped slots</li>
            <li>Functions as prop</li>
            <li>Layout and page components</li>
            <li>Base components</li>
            <li>Mixins</li>
            <li>Shared services per JS-Class</li>
            <li>Vue Router:
                <ul>
                    <li>Data fetching in beforeEnter</li>
                    <li>Route params</li>
                </ul>
            </li>
            <li>Plugins</li>
            <li>Filter</li>
            <li>Simple form</li>
        </ul>

        <h4 class="pt-3">Packages used</h4>
        <p>Besides Vue.js itself the following libraries are being used:</p>
        <ul>
            <li>Vuex: https://vuex.vuejs.org/</li>
            <li>Vue Router: https://router.vuejs.org/</li>
            <li>Bootstrap-Vue: https://bootstrap-vue.js.org/</li>
            <li>vue-fontawesome: https://github.com/FortAwesome/vue-fontawesome</li>
            <li>lodash: https://lodash.com/</li>
        </ul>

        <h4 class="pt-3">Future plans</h4>
        <ul>
            <li>Complex forms</li>
            <li>Validation</li>
            <li>I18n</li>
            <li>Upgrade to CLI 3.0</li>
            <li>More Vuex</li>
            <li>More Router examples</li>
            <li>Better plugin example</li>
            <li>Axios</li>
        </ul>
    </div>
  </Layout>
</template>

<script>
import Layout from '../layouts/MainLayout'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

export default {
  name: 'Home',
  components: { Layout, FontAwesomeIcon }
}
</script>

<style scoped lang="scss">
    .logo {
        height: 2em;
    }
    .jumbotron{
        h1 {
            display: flex;
            align-items: center;
            span {
                margin-left: 20px;
            }
        }
    }
</style>
