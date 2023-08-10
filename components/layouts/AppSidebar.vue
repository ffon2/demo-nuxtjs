<template>
  <div class="sidebar text-light">
    <!-- Sidebar Header -->
    <div class="sidebar__header navbar-dark">
      <div class="navbar-brand logo">
        Management
      </div>
    </div>

    <div class="sidebar_content">
      <div class="menu" :class="{ 'active' : activeMenu == '' }" v-b-tooltip.hover.right="sideBarMini ? $t('dashboard') : null">
        <nuxt-link to="/" @click.native="menuClick($event); activeMenu = ''">
          <i class="las la-md la-th-large pr-2"></i> <span>{{ $t('dashboard') }}</span>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data () {
    return {
      mockupProjectMenu: [],
      activeMenu: '',
      menuList: []
    }
  },
  computed: {
    ...mapState({
      showSidebar: state => state.layout.showSidebar,
      sideBarMini: state => state.layout.sideBarMini,
      favoriteProject: state => state.favoriteProjectsMockup.favoriteList
    })
  },
  watch: {
    sideBarMini () {
      this.delayDisplay()
    },
    favoriteProject () {
      this.mockupProjectMenu = this.favoriteProject.map(e => {
        return {...e, showMoreMenu: false}
      })
    }
  },
  mounted () {
    this.mockupProjectMenu = this.favoriteProject.map(e => {
      return {...e, showMoreMenu: false}
    })
    // auto expand sidebar
    const currentPath = this.$route.fullPath
    document.querySelectorAll('.sidebar a').forEach((el) => {
      const href = el.getAttribute('href')

      if (href != '/' && currentPath.startsWith(href)) {
        this.activeMenu = href.split('/')[1]

        if (href.split('/').length > 2) {
          // b-collapse expand
          this.$root.$emit('bv::toggle::collapse', href.split('/')[1])
        }
      }
    })
  },
  methods: {
    ...mapActions({
      setFavorite: 'favoriteProjectsMockup/setFavorite'
    }),
    delayDisplay () {
      let title = document.getElementById('logo-title')
      if (title) {
        if (!this.sideBarMini) {
          title.classList.remove('hidden')
        } else {
          title.addEventListener('transitionend', function (e) {
            title.classList.add('hidden')
          }, {
            capture: false,
            once: true,
            passive: false
          })
        }
      }
    },
    menuClick (event) {
      // when click single menu then collapse other'
      if (!event.target.parentElement.classList.contains('list-group-item') && !event.target.parentElement.parentElement.classList.contains('list-group-item')) {
        document.querySelectorAll('.sidebar .menu.not-collapsed').forEach((el) => {

          // b-collapse collapse
          if (el.nextElementSibling) {
            this.$root.$emit('bv::toggle::collapse', el.nextElementSibling.getAttribute('id'))
          } else {
            // this.$root.$emit('bv::toggle::collapse', el.attributes[4].value)
          }
        })
      }
    },
    clickMoreMenu (project) {
      this.$set(project, 'showMoreMenu', !project.showMoreMenu)
      this.mockupProjectMenu.forEach(v => {
        if (v.projectId != project.projectId) this.$set(v, 'showMoreMenu', false)
      })
    },
    changFavorite (project) {
      this.setFavorite(project)
      this.mockupProjectMenu = this.favoriteProject
    }
  }
}
</script>

<style>
  .app__sidebar {
    background-color: #fefefe;
    /* background-color: #2A3F54; */
    min-height: 100vh;
    /* box-shadow: 0 14px 10px rgba(0, 0, 0, 0.25); */
    box-shadow:0px 14px 7px 0px rgb(0 0 0 / 0.30)
  }

  .sidebar {
    display: none;
  }

  .app .sidebar {
    display: flex;
    flex-direction: column;
  }

  .app .collapsed .sidebar .sidebar__header {
    margin-bottom: 3rem;
  }

  .app.collapsed .sidebar .sidebar__header {
    padding: 0 .6rem;
  }
  .app.collapsed .sidebar .sidebar__header .header {
    opacity: 0;
  }

  .app.collapsed .sidebar .sidebar__header .header-logo {
    width: 30px !important;
    height: 30px !important;
  }

  .sidebar__header {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    padding: 0 1rem;
    transition: padding 0.1s ease-in-out;
  }

  .sidebar .menu {
    background-color: inherit;
    font-weight: 700;
    cursor: pointer;
    border: 0;
    position: relative;
    align-items: center !important;
    justify-content: space-between !important;
    display: flex !important;
    white-space: nowrap;
    overflow: hidden;
  }

  .sidebar .menu:focus {
    outline: none;
  }

  .sidebar .list-group-item {
    padding: 0;
    padding-bottom: 2px;
    background-color: inherit;
    font-weight: 700;
    cursor: pointer;
    border: 0;
    background-color: #0000;
    white-space: nowrap;
    overflow: hidden;
  }

  .sidebar .list-group {
    border-radius: 0;
  }

  .app__sidebar a {
    padding: 10px 10px 10px 17px;
    text-decoration: none;
    transition: margin-left 0.3s linear, opacity 0.5s ease;
  }

  .app__sidebar a:not(.nuxt-link-exact-active.nuxt-link-active) {
    /* color: #495057; */
    /* color: #b0b09f; */
    /* color: #7a7d88; */
    color: #414656;
  }

  .menu > div {
    color: #414656;
    padding: 10px 10px 10px 17px;
  }
  .menu > i {
    /* color: #495057; */
    color: #414656;
  }

  .sidebar .menu.not-collapsed,
  .sidebar .menu:hover,
  .sidebar .menu:hover a,
  .sidebar .menu a.nuxt-link-active {
    /* color: #ffffff !important; */
    color: #414656 !important;
  }

  .sidebar .collapse .list-group-item a.nuxt-link-active,
  .sidebar .collapse .list-group-item:hover a {
    /* color: #6F7EE2 !important; */
    font-display: bold;
  }
  .sidebar .collapse .list-group-item a.nuxt-link-active{
    color: #6F7EE2 !important;
  }
  a.nuxt-link-active i {
    color:#6F7EE2;
  }

  .app.show-sidebar .menu:hover,
  .app.show-sidebar .list-group-item:hover {
    /* background: #e1effdb6; */
    /* background: #3F51B5; */
    background: #6f7ee21c;
    border-radius: 4px 0px 0px 4px;
  }

  .sidebar .collapse .list-group-item.active {
    margin-top: 0px;
  }

  .sidebar .menu.not-collapsed .la-angle-left:before {
    content: "\f107"; /* la-angle-down */
  }

  .sidebar .list-group-item .nuxt-link-active .la-circle:before {
    content: "\f138"; /* la-angle-down */
  }

  .favorite-menu.not-collapsed .la-angle-left:before {
    content: "\f107"; /* la-angle-down */
  }
  .favorite-project .la-heart:hover {
    color: #ef4770 !important;
  }

  .sidebar .menu > a {
    width: 100%;
  }

  .sidebar .list-group-item > a {
    display: inline-block;
    width: 100%;
  }

  .sidebar .list-group.sidebar-mini-inactive {
    margin-top: 2px;
    margin-bottom: 2px;
    margin-left: .55rem;
  }

  .app.collapsed .sidebar .list-group.sidebar-mini-active {
    margin-top: 2px;
  }

  .app.collapsed .app__sidebar {
    width: 50px !important;
    transition: width 0.4s ease-in-out;
  }

  .menu.active, .menu.not-collapsed.active {
    height: 40px;
    /* background-color: #b4d6fb !important; */
    /* background-color: #3F51B5 !important; */
    /* background: #214162 !important; */
    background: rgba(255,255,255,0.05);
    /* box-shadow: 0 1px 3px rgba(0,0,0,.12), 0 1px 2px rgba(0,0,0,.24); */

    text-shadow: rgba(0,0,0,0.07) 0 -1px 0;
    background: -webkit-gradient(linear, left top, left bottom, from(#334556), to(#2C4257)),#2A3F54;
    /* background: linear-gradient(#334556, #2C4257),#2A3F54; */
    background:#6f7ee247;
    /* -webkit-box-shadow: rgba(0,0,0,0.25) 0 1px 0, inset rgba(255,255,255,0.16) 0 1px 0; */
    /* box-shadow: rgba(0,0,0,0.25) 0 1px 0, inset rgba(255,255,255,0.16) 0 1px 0; */
    border-right: 5px solid #6F7EE2;
  }
  .menu.active > i, .menu.not-collapsed.active > i {
    margin-right: 3px !important;
  }

  .menu.active + .collapse, .menu.not-collapsed.active + .collapse {
    border-right: 5px solid #6F7EE2;
  }

  .app.collapsed .sidebar .sidebar__header .navbar-brand b,
  .app.collapsed .menu a span,
  .app.collapsed .menu span,
  .app.collapsed .menu > i,
  .app.collapsed .sidebar .list-group-item span,
  .app.collapsed .sidebar .list-group.sidebar-mini-active > .list-group-item span {
    visibility: hidden;
    opacity: 0;
    -webkit-transition: opacity 600ms, visibility 600ms;
    transition: opacity 600ms, visibility 600ms;
  }

  .app.not-collapsed > .app__sidebar > .menu > a > span,
  .app.not-collapsed > .app__sidebar > .menu > span,
  .app.not-collapsed > .app__sidebar > .menu > .las.la-angle-left,
  .app.not-collapsed > .app__sidebar > span,
  .app.not-collapsed > .app__sidebar > .sidebar > .sidebar__header > b {
    opacity: 1;
    transition: opacity 1s ease-in;
  }

  .la-md {
    font-size: 1.2em;
    line-height: .75em;
    vertical-align: -.06em;
  }
  .logo {
    font-size: 1.75rem;
  }
  .header {
    font-family: verdana, helvetica, sans-serif;
    font-weight: 500;
    color: #495057;
    transition: 0.3s ease;
    transition-delay: 0.1s;
  }
  .header.hidden {
    display: none;
  }
  .header-logo {
    transition: width 0.1s, height 0.1s ease-in-out;
  }
  .project-menu-hr{
    margin: 1.3em 0 1.3em 0;
    border-top: 1px solid #D9DEE4;
  }
  .popover-body{
    padding: 2px;
  }
  .popover-menu .list-group-item{
    padding: 0.4rem 1.25rem; cursor: pointer;
  }
  .popover-menu .list-group-item:hover{
    background-color: #6f7ee212;
  }
</style>
