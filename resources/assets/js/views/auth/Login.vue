<template>
  <form class="form-group" @submit.prevent="login">
    <div class="form-group mt-3 mb-3">
      <input type="email"
        class="form-control"
        :class="!!frm.err.email ? 'is-invalid' : ''" 
        placeholder="E-mail"
        v-model="frm.data.email">
      <small class="form-text text-danger" v-show="!!frm.err.email">{{ frm.err.email }}</small>
    </div>

    <div class="form-group mb-3">
      <div class="input-group app-input-password-icon">
        <input :type="showPassword ? 'text' : 'password'"
          class="form-control"
          :class="!!frm.err.password ? 'is-invalid' : ''" 
          placeholder="Password"
          v-model="frm.data.password">
        <div class="input-group-append"
            @click="togglePasswordDisplay">
          <span class="input-group-text">
            <i class="far fa-fw text-muted"
              :class="showPassword ? 'fa-eye-slash' : 'fa-eye'"></i>
          </span>
        </div>
      </div>
      <small class="form-text text-danger" v-show="!!frm.err.password">{{ frm.err.password }}</small>
    </div>

    <div class="form-group">
      <button type="submit" class="btn btn-primary btn-block">
        <span v-show="!loading">Confirmar</span>
        <span v-show="loading"><i class="fa fa-spinner fa-spin"></i></span>
      </button>
    </div>
  </form>
</template>

<script>
import { get, post } from '../../helpers/Api.js';
import Auth from '../../store/Auth.js';
import User from '../../store/User.js';
import FormFactory from '../../helpers/Form.js';

export default {
  data() {
    return {
      showPassword: false,
      loading: false,
      frm: FormFactory.makeForm({
        email: '',
        password: ''
      })
    };
  },
  methods: {
    togglePasswordDisplay() {
      this.showPassword = !this.showPassword;
    },
    fillErrors(array) {
      let errs = {};
      for (let error of array)
        errs[error.field] = error.message;
      this.frm.setErrors(errs);
    },
    login() {
      this.loading = true;
      this.frm.resetErrors();
      post('/auth/signin', this.frm.data)
        .then(res => {
          console.log(res.data);
          Auth.set(res.data.token, res.data.refreshToken);
          get('/user/load')
            .then(res => {
              User.load(res.data.user);
              this.$router.push(this.$route.query.redirect || '/');
            })
            .catch(console.error);
        })
        .catch(err => {
          switch (err.response.status) {
            case 400:
              this.fillErrors(err.response.data.errors);
              break;
            case 401:
              this.fillErrors(err.response.data);
            default:
              console.log(err);
          }
        })
        .finally(() => {
          this.loading = false;
        });
    }
  }
};
</script>

