<script>
import { BFormTimepicker } from 'bootstrap-vue'

export default {
  name: 'AFormTimepicker',
  extends: BFormTimepicker,
  model: {
    prop: 'myvalue', // for custom v-model to HH:MM
    event: 'input'
  },
  props: {
    locale: {
      default: 'en-GB'
    },
    placeholder: {
      default: 'HH:MM'
    },
    nowButton: {
      default: true
    },
    resetButton: {
      default: true
    },
    closeButton: {
      default: true
    },
    hideHeader: {
      default: true
    },
    myvalue: {
      default: ''
    },
    hourCycle: {
      default: 'h23' // 00:00-23:59
    }
  },
  watch: {
    myvalue (newVal) {
      if (newVal) {
        const time = newVal.split(':')
        this.localHMS = time[0]+':'+time[1]
      }
      else {
        this.localHMS = ''
      }
    },
    localHMS (newVal) {
      if (newVal) {
        const time = newVal.split(':')
        this.$emit('input', time[0]+':'+time[1])
      }
      else {
        this.$emit('input', '')
      }
    }
  },
  beforeMount () {
    if (this.myvalue) {
      const time = this.myvalue.split(':')
      this.localHMS = time[0]+':'+time[1]
    }
  }
}
</script>