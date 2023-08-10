<template>
  <div class="container-fluid login-form h-100">
    <section class="vh-100">
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-12 col-md-8 col-lg-6 col-xl-5">
            <div class="card shadow-2-strong" style="border-radius: 1rem;">
              <div class="card-body p-5 text-center">
                <form @submit.prevent :class="{ 'dirty' : $v.$dirty }">
                  <h3 class="mb-5">Sign in</h3>

                  <div class="form-group row">
                    <div class="col">
                      <input type="text" name="username" class="form-control" v-model="form.username" placeholder="Username" autocomplete="off">
                      <div class="invalid-feedback" v-show="!$v.form.username.required" style="text-align: left;">{{ $t('c.err__required') }}</div>
                    </div>
                  </div>

                  <div class="form-group row mb-3">
                    <div class="col form-group-password">
                      <input type="password" name="password" id="password" class="form-control" v-model="form.password" placeholder="Password" autocomplete="off">
                      <span type="button" class="icon las" :class="{ 'la-eye': hiddenPassword, 'la-eye-slash': !hiddenPassword }" @click="toggleHiddenPassword()"></span>
                      <div class="invalid-feedback" v-show="!$v.form.password.required" style="text-align: left;">{{ $t('c.err__required') }}</div>
                    </div>
                  </div>

                  <div class="form-check d-flex justify-content-start mb-4">
                    <input class="form-check-input" type="checkbox" value="" id="form1Example3" />
                    <label class="form-check-label" for="form1Example3"> Forgot Password? </label>
                  </div>

                  <button class="btn btn-primary btn-lg btn-block" @click="login()">Login</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
import CommonMixin from '~/assets/js/CommonMixin'

export default {
  components: {},
  mixins: [CommonMixin],
  layout: 'blank',
  data () {
    return {
      form: {
        username: 'username',
        password: 'password'
      },
      hiddenPassword: true,
      modalObj: { id: 'modal-forgot-pass-ctrl' },
      isDisabled: false
    }
  },
  fetch () {
    if (process.server) {
      console.log('login.vue serverrrrrrrrrrrrrrrr')
    }
    else if (process.client) {
      console.log('login.vue clientttttttttttttttt')
    }
  },
  validations: {
    form: {
      username: {
        required
      },
      password: {
        required
      }
    }
  },

  mounted () {
    this.hiddenPassword = true
  },
  methods: {
    toggleHiddenPassword () {
      const password = document.querySelector('#password')
      const type = password.getAttribute('type') === 'password' ? 'text' : 'password'
      password.setAttribute('type', type)
      this.hiddenPassword = !this.hiddenPassword
    },
    async login () {

      // validate form
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.toast('warning', 'Please fill in the correct information !')
        return
      }
      const ok = await this.$auth.login(this.form.username, this.form.password)
      console.log('ok', ok)
      if (ok) {
        window.location.href = '/'
      } else {
        window.location.href = ok
      }
    },
  }
}
</script>

<style>
body {
  height: 100%;
  background: linear-gradient(to right, #ded5f4, #acb6f5);
}
html, #__nuxt, #__layout {
  height: 100%;
}
.wrap-login {
  background: #fff;
  border-radius: 10px;
  box-shadow: 15px 20px 0 rgba(0,0,0,.1);
}
.form-control::-webkit-input-placeholder,
.form-control::-ms-input-placeholder,
.form-control::placeholder {
  color: #ccc;
}
input::-ms-reveal,
input::-ms-clear {
    display: none;
}
.icon {
  position: absolute;
  top: 30%;
  right: 5%;
  cursor: pointer;
}
.login-btn {
  background: #5d67bf;
  border: 1px solid #5d67bf;
  border-radius: 20px !important;
  color: white;
}
.login-btn:hover {
  background: #6F7EE2 !important;
  border: 1px solid #6F7EE2;
  color: white;
}
.text-theme {
  color: #6F7EE2;
}
.text-forgot {
  font-size: 12px;
  color: #1e5fa8;
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
}
</style>