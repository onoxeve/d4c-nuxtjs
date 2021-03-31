import colors from 'vuetify/es5/util/colors'
require('dotenv').config()
const client = require('./plugins/contentful').default

export default {
  env: {
    CTF_SPACE_ID: process.env.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: process.env.CTF_CDA_ACCESS_TOKEN,
    CTF_HERO_IMAGE_TYPE_ID: 'heroImage',
    CTF_HOME_TYPE_ID: 'home',
    CTF_FEATURE_TYPE_ID: 'feature',
    CTF_PLAN_TYPE_ID: 'plan',
    CTF_VOICE_TYPE_ID: 'voice',
    CTF_TRAINING_TYPE_ID: 'training',
    CTF_TRAINING_CONTENT_TYPE_ID: 'trainingContent',
    CTF_SUPPORT_TYPE_ID: 'support',
    CTF_PRICING_TYPE_ID: 'pricing',
    CTF_CUSTOMER_TYPE_ID: 'customer',
    CTF_FAQ_TYPE_ID: 'faq',
    CTF_ABOUT_TYPE_ID: 'about',
    CTF_PRIVACY_TYPE_ID: 'privacy'
  },
  generate: {
    subFolders: false,
    routes() {
      return Promise.all([
        client.getEntries({
          content_type: 'customer'
        })
      ]).then(([res]) => {
        return res.items.map((item) => {
          return {
            route: '/customers/' + item.fields.slug,
            payload: item
          }
        })
      })
    }
  },
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s - titleTemplate',
    title: 'title',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'content'
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content: 'og:title content'
      },
      {
        hid: 'og:decription',
        name: 'og:decription',
        content: 'og:decription content'
      },
      { hid: 'og:type', property: 'og:type', content: 'website' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Noto+Sans+JP:400,700&display=swap&subset=japanese'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#2196F3' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    '@nuxtjs/vuetify',
    // Doc: https://github.com/nuxt-community/date-fns-module
    '@nuxtjs/date-fns',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/modules/tree/master/packages/markdownit
    '@nuxtjs/markdownit',
    // Doc: https://github.com/nuxt-community/sitemap-module
    '@nuxtjs/sitemap',
    // Doc: https://github.com/nuxt-community/google-gtag
    '@nuxtjs/google-gtag'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** [optional] markdownit options
   ** See https://github.com/markdown-it/markdown-it
   */
  markdownit: {
    injected: true,
    breaks: true,
    html: true,
    typography: true
  },
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  sitemap: [
    {
      hostname: 'laughing-lumiere-3eb002.netlify.app',
      exclude: ['']
    }
  ],
  'google-gtag': {
    id: '',
    debug: true
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      config.node = {
        fs: 'empty'
      }
    }
  }
}
