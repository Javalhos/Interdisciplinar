<template>
  <form @submit.prevent="registerAdmin">
    <small>
      <i class="fa fa-info-circle text-secondary"></i>
      Por favor, cadastre sua Conta de Administrador abaixo:
    </small>
    <div class="form-group mb-3 mt-3">
      <input type="text"
        class="form-control"
        :class="!!frm.err.username ? 'is-invalid' : ''" 
        placeholder="Username"
        v-model="frm.data.username">
      <small class="form-text text-danger" v-show="!!frm.err.username">{{ frm.err.username }}</small>
    </div>

    <div class="form-group mb-3">
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
      loading: false,
      showPassword: false,
      frm: FormFactory.makeForm({
        username: '',
        email: '',
        password: ''
      })
    };
  },
  methods: {
    togglePasswordDisplay() {
      this.showPassword = !this.showPassword;
    },
    registerAdmin() {
      this.loading = true;
      this.frm.resetErrors();
      post('/auth/firstAccess', this.frm.data)
        .then(res => {
          this.$router.push('/auth/login');
        })
        .catch(err => {
          switch (err.response.status) {
            case 400:
              let errs = {};
              for (let error of err.response.data.errors)
                errs[error.field] = error.message;
              this.frm.setErrors(errs);
              break;
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
