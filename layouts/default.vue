<template>
  <div class="app" :class="{ 'show-sidebar not-collapsed': !sideBarMini,'show-sidebar collapsed': sideBarMini }">
    <div class="app__container">
      <div class="app__header">
        <AppHeader />
      </div>
      <b-container fluid class="app__body" id="page" :style="{ 'background-color': $route.name == 'index' || $route.name == 'analytics' || $route.name == 'projects-folder' || $route.name == 'projects' ? '#f4f4f4' : '' }">
        <nuxt keep-alive :keep-alive-props="{ max: 10, exclude: ['GoodRecevingDetail', 'AdjustPriceDetail'] }" />
      </b-container>
      <div class="app__footer">
        <AppFooter />
      </div>
      <!-- loading spinner -->
      <div class="loader" :class="{ 'show': showLoading }">
        <div class="ball-pulse-sync">
          <div /><div /><div />
        </div>
      </div>
    </div>
    <div class="app__sidebar">
      <AppSidebar />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import AppHeader from '~/components/layouts/AppHeader.vue'
import AppSidebar from '~/components/layouts/AppSidebar.vue'
import AppFooter from '~/components/layouts/AppFooter.vue'

export default {
  components: {
    AppHeader,
    AppSidebar,
    AppFooter
  },
  middleware: ['auth'],
  fetch ({ store, params }) {
    store.dispatch('layout/showSidebar', true)
    this.toggleSidebar()
  },
  computed: {
    ...mapState({
      showSidebar: state => state.layout.showSidebar,
      showLoading: state => state.layout.showLoading,
      sideBarMini: state => state.layout.sideBarMini
    })
  },
  mounted () {
    this.$nextTick(function () {
      this.onResize()
    })
    window.addEventListener('resize', this.onResize)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.onResize)
  },
  methods: {
    ...mapActions({
      toggleSidebar: 'layout/toggleSidebar',
      mouseOverSidebar: 'layout/mouseOverSidebar',
      mouseLeaveSidebar: 'layout/mouseLeaveSidebar'
    }),
    onResize () {
      const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth

      // console.log('resized = ', width)
      // console.log('showSidebar = ', this.showSidebar)
      if (this.showSidebar && width < 1025) {
        this.toggleSidebar()
      }
      else if (!this.showSidebar && width >= 1024) {
        this.toggleSidebar()
      }

      this.$root.$emit('app::resize')
    }
  }
}
</script>

<style>
.app {
 /* padding-left: 0px; */
  display: flex;
  width: 100%;
}
.app__container {
  flex: 1;
  order: 2;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.app__header {
  /* position: fixed;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 999; */
  flex: 0;
  /* box-shadow: inset 8px 0 8px -8px rgba(0,0,0,.25); */
}
.app__body {
  /* width: auto;
  margin-top: 3rem;
  margin-right: 0em;
  padding-bottom: 3em; */
  flex: 1;
  /* background: #ffffff;
  box-shadow: inset 8px 0 8px -8px rgba(0,0,0,.25); */
}
.app__footer {
  flex: 0;
  /* z-index: 999; */
  /* position: fixed;
  z-index: 999;
  bottom: 0;
  left: 0;
  right: 0;
  background: white; */
  /* box-shadow: inset 8px 0 8px -8px rgba(0,0,0,.25); */
}
.app__sidebar {
  flex: 0 0 auto;
  width: 0px;
  order: 1;
  /* position: fixed; */
  transition: all 0.3s ease-in-out;
}
.app.show-sidebar.not-collapsed .app__sidebar {
  width: 250px;
}

.loader {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  display: none;
  width: 100%;
  height: 100%;
  overflow: hidden;
  outline: 0;
  background: rgba(0, 0, 0, 0.2);
}

.loader.show {
  display: block;
}

.loader.show > div {
  position: relative;
  top: 45%;
  width: 100%;
  text-align: center;
}

.loader.show > div > div {
  background-color: #6610f2;
}
</style>
