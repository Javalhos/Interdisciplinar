<template>
  <form @submit.prevent="registerAdmin">
    <p class="text-center">
      Seja bem vindo ao Sistema Anima.
      Por favor, cadastre sua Conta de Administrador abaixo:
    </p>
    <div class="form-group">
      <input type="text"
        :class="{'form-control mt-3': true, 'is-invalid': !!errors.username}"
        placeholder="Username"
        v-model="form.username">
    </div>

    <div class="form-group">
      <input type="email"
        :class="{'form-control mb-3': true, 'is-invalid': !!errors.email}"
        placeholder="E-mail"
        v-model="form.email">
    </div>

    <div class="form-group">
      <input type="password"
        :class="{'form-control mb-3': true, 'is-invalid': !!errors.password}" 
        placeholder="Password"
        v-model="form.password">
    </div>

    <div class="form-group">
      <button type="submit" class="btn btn-primary btn-block">Confirmar</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      errors: {},
      form: {
        username: "",
        email: "",
        password: ""
      }
    };
  },
  methods: {
    registerAdmin() {
      alert("EU EXISTO E FUNCIONO");
    }
  }
};
</script>
