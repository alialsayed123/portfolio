import colors from 'vuetify/es5/util/colors'

export default  {
  // Global page headers: https://go.nuxtjs.dev/config-head
  mode: 'spa',
  head: {
    titleTemplate: 'Ali Sayed',
    title: 'Ali Sayed - Frontend Developer',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'description',
        hid: 'description',
        content:
          'Experienced in the field of web and hybrid app development using JavaScript and its frameworks. Proficient in building scalable micro services as well.'
      },
      {
        name: 'keywords',
        content:
          'Frontend Developer, Remote Engineer, Software developer, app development'
      },
      {
        name: 'og:title',
        content: 'Ali Sayed - Frontend Developer'
      },
      {
        name: 'og:description',
        content:
          'Experienced in the field of web and hybrid app development using JavaScript and its frameworks. Proficient in building scalable micro services as well.'
      },
      { name: 'og:type', content: 'website' },
      { name: 'og:url', content: 'https://kousikaganesan.github.io/' },
      {
        name: 'og:image',
        content:
          'https://user-images.githubusercontent.com/20679183/88207143-fceac500-cc6c-11ea-8b72-54b2b8255ef7.png'
      },
      {
        name: 'twitter:card',
        content: 'summary'
      },
      {
        name: 'twitter:site',
        content: 'Ali Sayed'
      },
      {
        name: 'twitter:title',
        content: 'Ali Sayed - Frontend Developer'
      },
      {
        name: 'twitter:description',
        content:
          'Experienced in the field of web and hybrid app development using JavaScript and its frameworks. Proficient in building scalable micro services as well.'
      },
      {
        name: 'twitter:image',
        content:
          'https://user-images.githubusercontent.com/20679183/88207143-fceac500-cc6c-11ea-8b72-54b2b8255ef7.png'
      },
      {
        name: 'twitter:image:alt',
        content: 'Ali Sayed Logo'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/scss/tailwind.scss',
    'aos/dist/aos.css', '~/assets/font/biko.css'],
    ssr: true,
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/typed', ssr: false },
    { src: '~/plugins/aos', ssr: false },
    { src: '~/plugins/vue-waypoint', ssr: false },
    { src: '~/plugins/carousal', ssr: false }
  ],

  loadingIndicator: {
    name: 'rectangle-bounce',
    color: '#02f3e6',
    background: '#131313'
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify',
    '@aceforth/nuxt-optimized-images'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
    '@neneos/nuxt-animate.css',
    'vue-scrollto/nuxt',
    'nuxt-icon'
  ],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
          background: '#232020'
        }
      }
    }
  },
  pwa: {
    manifest: {
      name: 'Ali Sayed'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, ctx) {}
  }
}
