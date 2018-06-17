// Docs for Vue-router: https://router.vuejs.org/guide/

import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../pages/HomePage'
import MediaList from '../pages/MediaList'
import TravelList from '../pages/TravelList'
import TravelItemWithStorage from '../components/TravelItemWithStorage'
import TravelItemWithStorageScopedSlot from '../components/TravelItemWithStorageScopedSlot'
import store from '../state/store'
import MoneyManagement from '../pages/MoneyManagement'

Vue.use(Router)

const routeMessageForTravel = 'That\'s a place I want to go'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/media',
      name: 'MediaList',
      component: MediaList,
      // get the items from the store and pass them to the target component
      props: route => ({ items: store.getters['media/mediaItems'] })
    },
    {
      path: '/travel',
      name: 'TravelList',
      component: TravelList,
      beforeEnter(routeTo, routeFrom, next) {
        // Fetch the items (async) before the navigation happens and
        // add them to the route params, so they can be
        // passed further down as a prop to the target component
        store
          .dispatch('travel/fetchTravelItems')
          .then(items => {
            routeTo.params.items = items
            next()
          })
      },
      props: route => ({ items: route.params.items })
    },
    {
      path: '/travel/scoped-slot/:id',
      name: 'TravelItemScopedSlot',
      component: TravelItemWithStorageScopedSlot,
      props: route => ({ routeMessage: routeMessageForTravel, id: route.params.id })
    },
    {
      path: '/travel/hoc/:id',
      name: 'TravelItemHoc',
      component: TravelItemWithStorage,
      props: route => ({ routeMessage: routeMessageForTravel, id: route.params.id })
    },
    {
      path: '/money',
      name: 'MoneyManagement',
      component: MoneyManagement
    }
  ]
})
