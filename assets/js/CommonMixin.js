
import Constants from './Constant'
export default {
  data () {
    return {
      skipValidateUnsaved: false,
      originalForm: null,
      APP: {...Constants.APP}
    }
  },
  created () {
    if (this.form) {
      this.originalForm = this.$util.cloneObject(this.form)
    }
  },

  deactivated () {
    // reset Vuelidate state
    if (this.$v) {
      this.$v.$reset()
    }

    // no cache "Detail" page
    if (this.$options.name && (this.$options.name.endsWith('Detail') || this.$options.name.endsWith('Detail2'))) {
      this.$destroy()
    }
  },

  methods: {
    // method สำหรับแสดงข้อความ toast บนหน้าจอ
    // เช่น this.toast('warning', this.$t('c.err__form_validate'))
    toast (variant, msg) {
      let vNodesTitle

      switch (variant) {
      case 'success': {
        vNodesTitle = this.$createElement('div', [this.$createElement('i', { class: 'las la-md la-check' }, '')])
        break
      }
      case 'warning': {
        vNodesTitle = this.$createElement('div', [this.$createElement('i', { class: 'las la-md la-exclamation-triangle' }, '')])
        break
      }
      case 'danger': {
        vNodesTitle = this.$createElement('div', [this.$createElement('i', { class: 'las la-md la-ban' }, '')])
        break
      }
      case 'info': {
        vNodesTitle = this.$createElement('div', [this.$createElement('i', { class: 'las la-md la-info-circle' }, '')])
        break
      }
      default: {
        vNodesTitle = this.$createElement('div', [this.$createElement('i', { class: 'las la-md la-square' }, '')])
        break
      }
      }

      // To make on-demand toasts persist across router $route changes,
      // use this.$root.$bvToast.toast() instead to make the toast's parent the root of your app.
      this.$root.$bvToast.toast(msg, {
        title: [vNodesTitle],
        variant,
        autoHideDelay: 3000
      })
    },

    // method สำหรับแสดง popup confirm บนหน้าจอ
    // เช่น this.msgBoxConfirm('save').then(ok => { ... })
    msgBoxConfirm (type) {
      let msg

      if (type === 'save') {
        msg = this.$t('c.confirm__save')
      }
      else if (type === 'update') {
        msg = this.$t('c.confirm__update')
      }
      else if (type === 'delete') {
        msg = this.$t('c.confirm__delete')
      }
      else if (type === 'resetPwd') {
        msg = this.$t('c.confirm__resetPwd')
      }
      else if (type === 'accept') {
        msg = this.$t('c.confirm_accept')
      }
      else if (type === 'sendBack') {
        msg = this.$t('c.confirm_sendBack')
      }
      else if (type === 'lockCampaign') {
        msg = this.$t('c.confirm_lock_campaign')
      }
      else if (type === 'UnlockCampaign') {
        msg = this.$t('c.confirm_unlock_campaign')
      }
      else if (type === 'checkPromotion') {
        msg = this.$t('c.confirm__unsave_data_promotion')
      }
      else if (type === 'preview') {
        msg = this.$t('c.confirm__preview')
      }
      else {
        msg = type
      }

      return this.$bvModal.msgBoxConfirm(msg, {
        modalClass: 'modal-confirm',
        okTitle: this.$t('c.ok'),
        cancelTitle: this.$t('c.cancel'),
        footerClass: 'modal-footer-custom',
        noCloseOnBackdrop: true
      })
    },


    // method สำหรับสั่ง toggle collapse ด้วย id
    toggleCollapse (collapseId, event) {

      if (event.target.classList.contains('la-angle-up')) {
        event.target.classList.remove('la-angle-up')
        event.target.classList.add('la-angle-down')
      } else if (event.target.classList.contains('la-angle-down')) {
        event.target.classList.remove('la-angle-down')
        event.target.classList.add('la-angle-up')
      } else if (event.target.firstElementChild.classList.contains('la-angle-up')) {
        event.target.firstElementChild.classList.remove('la-angle-up')
        event.target.firstElementChild.classList.add('la-angle-down')
      }
      else if (event.target.firstElementChild.classList.contains('la-angle-down')) {
        event.target.firstElementChild.classList.remove('la-angle-down')
        event.target.firstElementChild.classList.add('la-angle-up')
      }

      this.$root.$emit('bv::toggle::collapse', collapseId)
    },
  }
}