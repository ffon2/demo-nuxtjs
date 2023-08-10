<template>
  <b-navbar toggleable="sm" style="">
    <div class="navbar-brand">
      <i @click="toggleSidebar" class="las la-bars clickable"></i>
      <!-- <span class="ml-2">{{ $t('project_name') }}</span> -->
      <!-- <b class="ml-2" style="color:#414656;">Workspace : Joint Business Planning</b> -->
    </div>

    <b-navbar-toggle target="nav-collapse">
      <template #default="{ expanded }">
        <i v-if="expanded" class="las la-chevron-up"></i>
        <i v-else class="las la-chevron-down"></i>
      </template>
    </b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right>
          <template slot="button-content">
            <span class="flag-icon flag-icon-squared" :class="{'flag-icon-gb': locale=='en', 'flag-icon-th': locale=='th'}" />
            <em class="text-uppercase font-weight-bold mr-1">{{ locale }}</em>
          </template>

          <b-dropdown-item href="" @click="switchLang('en')">
            <span class="flag-icon flag-icon-gb mr-2" /> {{ $t('c.english') }}
          </b-dropdown-item>
          <b-dropdown-item href="" @click="switchLang('th')">
            <span class="flag-icon flag-icon-th mr-2" /> {{ $t('c.thai') }}
          </b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown right>
          <template #button-content>
            <b>Admin</b>
          </template>
          <b-dropdown-item href="/profile"><i class="las la-user mr-2" style="font-size: 16px;"></i> Profile</b-dropdown-item>
          <b-dropdown-item href="" @click="changePassword()"><i class="las la-key mr-2" style="font-size: 16px;"></i> Change Password</b-dropdown-item>
          <b-dropdown-item href="" @click="logout()"><i class="las la-sign-out-alt mr-2" style="font-size: 16px;"></i> Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import CommonMixin from '~/assets/js/CommonMixin'

export default {
  components: {},
  mixins: [CommonMixin],
  data () {
    return {
      dataSendModal: {}
    }
  },
  computed: {
    ...mapState({
      showSidebar: state => state.layout.showSidebar,
      sideBarMini: state => state.layout.sideBarMini,
      user: state => state.auth.user,
      locale: state => state.i18n.locale
    })
  },
  methods: {
    ...mapActions({
      toggleSidebar: 'layout/toggleSidebar'
    }),
    switchLang (langCode) {
      if (process.client) {
        this.$util.setCookie('i18n_redirected', langCode, 365)
        window.location.reload()
      }
    },
    async changePassword () {},
    logout () {
      // this.$auth.logout()
      window.location.href = '/login'
    }
  }
}
</script>

<style>
.navbar {
  padding: 0 1rem;
  /* box-shadow: 0 0.46875rem 2.1875rem rgba(4, 9, 20, 0.03), 0 0.9375rem 1.40625rem rgba(4, 9, 20, 0.03), 0 0.25rem 0.53125rem rgba(4, 9, 20, 0.05), 0 0.125rem 0.1875rem rgba(4, 9, 20, 0.03); */
  background-color: #f2f2f3 !important;
  border-bottom: 1px solid #D9DEE4;
}

.navbar-dark .navbar-brand{
  color:#6F7EE2
}

.navbar-dark .navbar-brand:hover{
  color:#919de9
}

.navbar-brand {
  font-size: 22px;
  line-height: 35px;
}
.navbar-brand i {
  font-size: 24px;
}

.navbar-brand img {
  max-height: 40px;
}

.navbar-nav.ml-auto > .nav-item em {
  color: #5E6974;
  font-weight: 600;
}
</style>
