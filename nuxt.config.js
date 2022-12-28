import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  mode:'spa',
  head: {
    titleTemplate: '%s - tiptactone',
    title: 'tiptactone',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/firebase.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      '@nuxtjs/firebase',
      {
        config:{
          apiKey: "AIzaSyC5Qp9fXxiQG4mLmNqCwbFA7ryN55cMMU8",
          authDomain: "trip-tac-tone.firebaseapp.com",
          databaseURL: "https://trip-tac-tone-default-rtdb.asia-southeast1.firebasedatabase.app",
          projectId: "trip-tac-tone",
          storageBucket: "trip-tac-tone.appspot.com",
          messagingSenderId: "131124707681",
          appId: "1:131124707681:web:67319854fc7105b3f88520"
        },
        services:{
          auth:{
            onAuthStateChangedMutation: 'ON_AUTH_STATE_CHANGED_MUTATION',
            onAuthStateChangedAction: 'onAuthStateChangedAction',
          }
        }
      }
    ]
  ],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    theme: {
      options: {
      customProperties: true
    },
      light: true,
      themes: {
        light: {
          primary: '#000000',
          secondary: '#F4592F',
          card:"#C9AE91",
          crcard:"#E7E0D8",
          button:"#E8DED3",
          accent: '#9c27b0',
          background: '#F6F1EB',
          listcard:'#ECD7C2'
        }
      }
    }
  },
  // mode: {
  //   mode:'spa'
  // },
  // auth: {
  //   strategies: {
  //     facebook: {
  //       endpoints: {
  //         userInfo: 'https://graph.facebook.com/v6.0/me?fields=id,name,picture{url}'
  //       },
  //       clientId: '1341358666632206',
  //       scope: ['public_profile', 'email']
  //     },
  //   }
  // },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },



}
