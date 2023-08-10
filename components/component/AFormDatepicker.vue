<script>
import { BFormDatepicker } from 'bootstrap-vue'

export default {
  name: 'AFormDatepicker',
  extends: BFormDatepicker,
  model: {
    prop: 'myvalue', // for custom v-model to DD/MM/YYYY
    event: 'input'
  },
  props: {
    dateFormatOptions: {
      default () {
        return {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit'
        }
      }
    },
    locale: {
      default: 'en-GB'
    },
    placeholder: {
      default: 'DD/MM/YYYY'
    },
    todayButton: {
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
    }
  },
  watch: {
    myvalue (newVal) {
      if (newVal) {
        const date = newVal.split('/')
        this.localYMD = date[2]+'-'+date[1]+'-'+date[0]
      }
      else {
        this.localYMD = ''
      }
    },
    localYMD (newVal) {
      if (newVal) {
        const date = newVal.split('-')
        this.$emit('input', date[2]+'/'+date[1]+'/'+date[0])
      }
      else {
        this.$emit('input', '')
      }
    },
  },
  beforeMount () {
    if (this.myvalue) {
      const date = this.myvalue.split('/')
      this.localYMD = date[2]+'-'+date[1]+'-'+date[0]
    }
  }
}
</script>