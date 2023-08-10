import moment from 'moment-mini'

// Config
let BACKEND_URL = 'http://localhost:8080'

if (process.env.NODE_ENV === 'dev') {
  BACKEND_URL = ''
}

let BUILD_DATE = moment().format('YYYY-MM-DD HH:mm:ss')


export default {
  target: 'static', // default is 'server'
  subFolders: false,
  ssr: false,
  /*
   ** Headers of the page
   */
  head: {
    title: 'test',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#955BAC' },
  /*
   ** Global CSS
   */
  css: [
    'loaders.css/loaders.min.css',
    '@riophae/vue-treeselect/dist/vue-treeselect.css',
    '~/static/vendor/line-awesome/css/line-awesome.min.css',
    '~/assets/css/main.scss',
    'element-ui/lib/theme-chalk/tree.css',
    'vue2-datepicker/scss/index.scss',
    'vue-select/dist/vue-select.css',
    'nuxt-dropzone/dropzone.css',
    'timeline-vuejs/dist/timeline-vuejs.css',
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/plugins.js',
    '~/plugins/util.js',
    '~/plugins/auth.js',
    '~/plugins/axios.js',
    '~/plugins/vuelidate.js',
    '~/plugins/vue-select.js',
    '~/plugins/vue-treeselect.js',
    { src: '~/plugins/vue-list-picker.js', ssr: false },
    '~/plugins/element-ui.js',
    '~/plugins/vue2-datepicker.js',
    '~/plugins/vue-editor.js',
    '~/plugins/bootstrap-vue.js',
    '~/plugins/vue-echarts.js',
    { src: '~/plugins/vue-calendar.js', ssr: false },
    '~/plugins/dropzone.js',
    '~/plugins/vue-timeline.js',
    '~/plugins/vue-draggable.js',
  ],
  /*
   ** Router
   */
  router: {
    // middleware: ['logging']
  },
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://composition-api.nuxtjs.org/ , https://www.npmjs.com/package/vue-echarts?activeTab=readme ใช้สำหรับ echarts
    '@nuxtjs/composition-api/module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    'nuxt-i18n',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
  ],
  /*
   ** Nuxt.js modules configuration
   */
  bootstrapVue: {
    bootstrapCSS: false,
    bootstrapVueCSS: false,
    // https://bootstrap-vue.org/docs#tree-shaking-with-nuxtjs
    components: ['BContainer',
      'BRow',
      'BCol',
      'BFormGroup',
      'BFormInput',
      'BFormCheckbox',
      'BFormRadio',
      'BFormSelect',
      'BFormTextarea',
      'BFormTimepicker',
      'BInputGroup',
      'BInputGroupAppend',
      'BInputGroupPrepend',
      'BInputGroupText',
      'BNavbar',
      'BNavbarNav',
      'BNavbarToggle',
      'BNavItemDropdown',
      'BButton',
      'BDropdown',
      'BDropdownDivider',
      'BDropdownForm',
      'BDropdownItem',
      'BDropdownText',
      'BDropdownItemButton',
      'BTable',
      'BModal',
      'BCard',
      'BCollapse',
      'BProgress',
      'BBadge',
      'BPopover',
      'BListGroup',
      'BListGroupItem',
      'BFormTags',
      'BAvatar'],
    componentPlugins: ['BVModalPlugin', 'BVToastPlugin'],
    directives: ['VBTooltip', 'VBToggle'],
    config: {
      // https://bootstrap-vue.org/docs/reference/settings#default-bootstrapvue-configuration
    }
  },
  // https://medium.com/@ale_colombo/a-simple-multilanguage-site-with-nuxt-js-and-nuxt-i18n-43cce9f9f0fe
  i18n: {
    locales: [
      {
        name: 'English',
        code: 'en',
        iso: 'en-US',
        file: 'en-US.js'
      },
      {
        name: 'ไทย',
        code: 'th',
        iso: 'th-TH',
        file: 'th-TH.js'
      }
    ],
    strategy: 'no_prefix',
    lazy: true,
    langDir: 'static/lang/',
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en'
    },
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected'
    },
    vuex: {
      moduleName: 'i18n',
      syncLocale: true,
      syncMessages: false,
      syncRouteParams: false
    },
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    proxy: false,
    baseURL: BACKEND_URL,
  },
  // proxy: proxyConfig(),
  /*
   ** Build configuration
   */
  build: {
    // https://willbrowning.me/reducing-the-vendor-bundle-size-in-nuxt-js/
    // analyze: true,
    /*
     ** You can extend webpack config here
     */
    extend (config, ctx) {},
    transpile: [
      'ag-grid-vue',
      'echarts',
      'zrender'
    ],
    babel: {
      compact: true
    }
  },
  publicRuntimeConfig: {
    backendUrl: BACKEND_URL,
    buildDate: BUILD_DATE
  }
}
