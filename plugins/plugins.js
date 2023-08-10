import Vue from 'vue'

import ATable from '~/components/component/ATable'
import AFormDatepicker from '~/components/component/AFormDatepicker'
import AFormTimepicker from '~/components/component/AFormTimepicker'
import AFormDate from '~/components/component/AFormDate'
import AFormTime from '~/components/component/AFormTime'


// Vue Component
Vue.component(ATable.name, ATable)
Vue.component(AFormDatepicker.name, AFormDatepicker)
Vue.component(AFormTimepicker.name, AFormTimepicker)
Vue.component(AFormDate.name, AFormDate)
Vue.component(AFormTime.name, AFormTime)


Vue.component('HasPerm', {
  functional: true,
  render (createElement, context) {
    let isPermit = false
    const userPerms = context.parent.$store.getters['auth/userPerms']

    const any = context.data.attrs && context.data.attrs.any

    // check any permission
    if (any) {
      const anyPerms = any.split(',').map(item => item.trim())

      for (const perm of anyPerms) {
        if (userPerms[perm] === 1) {
          isPermit = true
          break
        }
      }
    }
    else {
      const all = context.data.attrs && context.data.attrs.all

      // check all permission
      if (all) {
        const allPerms = all.split(',').map(item => item.trim())

        for (const perm of allPerms) {
          if (userPerms[perm] === 1) {
            isPermit = true
          }
          else {
            isPermit = false
            break
          }
        }
      }
    }

    if (isPermit) {
      return createElement('div', { staticClass: context.data.staticClass }, context.children)
    }
    else {
      return null
    }
  }
})