import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
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
          primary: '#F6F1EB',
          secondary: '#F4592F',
          card:"#C9AE91",
          crcard:"#E7E0D8",
          button:"#E8DED3",
          accent: '#9c27b0',
          background: '#F6F1EB'
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
  }


}
