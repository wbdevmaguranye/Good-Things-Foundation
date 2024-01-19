// store with menu items and cards for two different componets
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // List of menu items to be used in the NavMenu.vue component
    menuItems: [
      { id: 1, label: 'Home', path: '/' },
      { id: 2, label: 'What we do', path: '/whatwedo' },
      { id: 3, label: 'The digital divide', path: '/digitaldivide' },
      { id: 4, label: 'Get involved', path: '/getinvolved' },
      { id: 5, label: 'Our network', path: '/ournetwork' },
      { id: 6, label: 'Insights', path: '/insights' },
    ],
    // List of cards to be used in the WhatWeDo.vue component
    cardData: [
      {
        id: 1,
        heading: 'Get online week',
        description: 'Lorem ipsum dolor sit amet.',
      },
      {
        id: 2,
        heading: 'Learn my way',
        description: 'Lorem ipsum dolor sit amet.',
      },
      {
        id: 3,
        heading: 'Make it click',
        description: 'Lorem ipsum dolor sit amet.',
      },
      {
        id: 4,
        heading: 'Digital you',
        description: 'Lorem ipsum dolor sit amet.',
      },

    ],
  },
  mutations: {},
  actions: {},
  getters: {
    getMenuItems: (state) => state.menuItems,
  },
})
