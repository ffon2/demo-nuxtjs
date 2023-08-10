<template>
  <div class="footer">
    <div style="flex: 1;">
      <b>
        Copyright © 2023
        <!-- <nuxt-link to="/">{{ $t('project_name') }}</nuxt-link> -->
        <!-- <nuxt-link to="/"><a href="">{{ $t('project_name') }}</a></nuxt-link> -->
      </b>
      All rights reserved.
    </div>
    <div style="flex: 0 1 auto;">
      <b>Version</b> {{ constant.APP.FORNT_VERSION }}
      <!-- <b>Version</b> 0.5.4 &nbsp;<b>Build&nbsp;</b>{{ commitSha }} ({{ buildDate }}) -->
    </div>
  </div>
</template>

<script>
import Constant from '~/assets/js/Constant'
export default {
  data () {
    return {
      commitSha: this.$config.currentGitSha,
      buildDate: this.$config.buildDate,
      constant: Constant,
    }
  }
}
</script>

<style>
.footer {
    display: flex;
    justify-content: space-between;
    padding: 8px 16px;
    border-top: 1px solid #ddd;
    font-size: 12px;
}
</style>


