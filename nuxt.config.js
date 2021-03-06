const isProd = process.env.NODE_ENV === 'production';

export default {
  head: {
    title: 'nuxt-learn',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: ['@/assets/scss/all'],

  plugins: [
    {
      src: '@/plugins/axios.js',
    },
    {
      src: '@/plugins/vue2-datepicker.js',
    },
    {
      src: '@/plugins/vue-slider-component.js',
      mode: 'client',
    },
  ],

  components: false,

  buildModules: [],

  modules: ['@nuxtjs/axios', 'cookie-universal-nuxt'],

  axios: {
    baseURL: process.env.BASE_URL || 'http://localhost:9000',
  },

  build: {
    extractCSS: isProd,
    hotMiddleware: {
      client: { noInfo: true },
    },
  },

  server: {
    port: 9000,
  },

  serverMiddleware: [
    {
      path: '/',
      handler: '@/server/app.js',
    },
  ],

  loading: {
    // continuous: true,
    color: '#3ea6da',
    height: '5px',
  },

  // loadingIndicator: {
  //   name: 'circle',
  //   color: '#3B8070',
  //   background: 'white',
  // },

  pageTransition: {
    name: 'fade',
    mode: 'out-in',
  },

  publicRuntimeConfig: {
    BASE_URL: process.env.BASE_URL || 'http://localhost:9000',
  },
  privateRuntimeConfig: {
    ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET || 'abcd',
  },
};
