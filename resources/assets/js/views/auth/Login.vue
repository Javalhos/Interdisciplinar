<template>
  <form class="form-group" @submit.prevent="login">
    <input type="email" 
    :class="{'form-control mt-5': true, 'is-invalid': !!errors.email}"
    placeholder="E-mail address"
    v-model="form.email">
    <input type="password" 
    :class="{'form-control mt-2': true, 'is-invalid': !!errors.password}" 
    placeholder="Password"
    v-model="form.password"> 

    <button type="submit" class="btn btn-primary btn-block mt-3">Confirm</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      errors: {},
      form: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    login() {
      alert("EU EXISTO E FUNCIONO!");
    }
  }
};
</script>

<style>
header {
  height: 105px;
  border-bottom: 1px solid #b5b5b5;
  background: #343434;
}

footer {
  height: 105px;
  width: 100%;
  border-top: 1px solid #b5b5b5;
  bottom: 0px;
  background: #343434;
}

body {
  background: #343434;
  width: 100%;
  height: 100%;
}

.img-logo {
  max-width: 200px;
  max-height: 200px;
}

.card {
  border: 1px solid #b5b5b5;
}

.align {
  margin-top: 90px;
}
</style>
