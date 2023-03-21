import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  target: 'static',
  mode:'spa',
  head: {
    titleTemplate: '%s - Trip Tac Tone',
    title: 'Trip Tac Tone',
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
            initialize: {
              onAuthStateChangedMutation: "ON_AUTH_STATE_CHANGED_MUTATION",
            },
          },
        },
      },
    ],
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
          listcard:'#E4CEB4',

        }
      }
    }
  },
  build: {
  },
  // router:{
  //   routes: [
  //     {
  //       name: 'index',
  //       path: '/',
  //       component: 'pages/index.vue'
  //     },
  //     {
  //       name: 'home',
  //       path: '/home',
  //       component: 'pages/home.vue'
  //     },
  //     {
  //       name: 'login',
  //       path: '/login',
  //       component: 'pages/login.vue'
  //     }
  //   ]
  // },
  // optional
axios: {
  baseURL: 'http://127.0.0.1:8888/api',
  credentials: true
},

auth: {
  // strategies: {
  //   local: {
  //     endpoints: {
  //       login: { url: 'login', method: 'post', propertyName: 'data.token' },
  //       user: { url: 'me', method: 'get', propertyName: 'data' },
  //       logout: false
  //     }
  //   }
  // },
  // redirect: {
  //   login: '/'
  // }
},

env: {
  baseAPI: 'https://trip-tac-tone-back-production.up.railway.app'
}



}
