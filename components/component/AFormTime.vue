<template>
  <input
    ref="AFormTime"
    v-model="value"
    type="text"
    autocomplete="off"
    maxlength="5"
    placeholder="HH:MM"
    class="form-control"
    @drop.prevent
    @keypress="onKeypress"
    @keyup="onKeyup"
    @blur="onBlur"
  >
</template>

<script>
import moment from 'moment-mini'
export default {
  name: 'AFormTime',
  props: {
    val: {}, // from parent v-model
  },
  data () {
    return {
      value: this.val
    }
  },
  watch: {},
  mounted () {},
  methods: {
    onKeypress (e) {
      // console.log('e.charCode', e.charCode)
      if (e.charCode >= 48 && e.charCode <= 57) {
        // allow 0-9
        if ((e.target.value.charCodeAt(e.target.selectionStart) === 46)) {
          e.preventDefault()
        }
      } else if (e.charCode >= 37 && e.charCode <= 40) {
        // allow arrow left, up, right, down
      } else if (e.ctrlKey && e.charCode === 97) {
        // allow ctrl + a
      } else if (e.ctrlKey && e.charCode === 99) {
        // allow ctrl + c
      } else if (e.ctrlKey && e.charCode === 118) {
        // allow ctrl + v
      } else if (e.ctrlKey && e.charCode === 120) {
        // allow ctrl + x
      } else if (e.charCode === 0) {
        // allow
      } else {
        e.preventDefault()
      }
      // console.log('onKeypress', this.value)

      if (this.value) {
        let arr = this.value.split(':')

        if ((arr.length == 1 && arr[0].length == 2)) {
          this.value = `${this.value}:`
        }
      }
    },
    onKeyup (e) {
      // // console.log('onKeyup', e)
      // if (this.value) {
      //   let arr = this.value.split('/')
      //   if (arr.length == 3 && (arr[2].length == 2 && e.keyCode != 8)) {
      //     arr[2] = `20${arr[2]}`
      //     this.value = arr.join('/')
      //   }
      // }
    },
    onBlur (event) {
      let value = event.target.value
      // console.log('onBlur', value)

      if (value) {
        let arr = this.value.split(':')
        if (parseInt(arr[0]) < 24 && parseInt(arr[1]) < 60) {
          let isPass = moment(value, 'HH:mm').isValid()
          // console.log('isPass', isPass)
          if (!isPass) {
            value = ''
          }
        } else {
          value = ''
        }
        // console.log('value', value)
      }
      this.value = value
      this.$emit('input', value)
    }
  }
}
</script>
