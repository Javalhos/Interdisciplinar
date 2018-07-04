<template>
  <form>
    <div class="form-row">
      <div class="form-group col-6">
        <label class="form-control-label mb-0">Nome da conta:</label>
        <input type="text" class="form-control" v-model="frm.data.name">
      </div>
      
      <div class="form-group col-3">
        <label class="form-control-label mb-0">Tipo da conta:</label>
        <select class="custom-select" v-model="frm.data.type">
          <option selected>Escolha o tipo...</option>
          <option value="Imobilizado">Imobilizado</option>
        </select>
      </div>

      <div class="form-group col-3">
        <label class="form-control-label mb-0">Escolha o banco:</label>
        <select class="custom-select" v-model="frm.data.bank">
          <option selected>Escolha o banco...</option>
          <option value="Banco do Brasil">Banco do Brasil</option>
          <option value="Itaú">Banco Itaú</option>
          <option value="Santander">Banco Santander</option>
          <option value="Bradesco">Banco do Bradesco</option>
        </select>
      </div>
    </div>

    <div class="form-row">
      <div class="form-group col-3">
        <label class="form-control-label mb-0">Nº da conta:</label>
        <input type="text" class="form-control" v-model="frm.data.account"> 
      </div>

      <div class="form-group col-3">
        <label class="form-control-label mb-0">Nº da agência:</label>
        <input type="text" class="form-control" v-model="frm.data.agency">
      </div>

      <div class="form-group col-6">
        <label class="form-control-label mb-0">Valor a ser depositado:</label>
        <input type="text" class="form-control" v-model="frm.data.balance">
      </div>
    </div>

    <div class="form-row mt-3">
      <div class="form-group col">
        <button type="button" class="btn btn-success" @click="createAccount">
          <span v-show="!loading">Confirmar</span>
          <span v-show="loading"><i class="fa fa-spinner fa-spin"></i></span>
        </button>
        <button type="button" class="btn btn-secondary" @click="frm.resetForm()">Cancelar</button>
      </div>
    </div>

  </form>

</template>

<script>
import { post } from '../../helpers/Api.js';
import Event from '../../helpers/Event.js';
import FormFactory from '../../helpers/Form.js';
export default {
  data() {
    return {
      loading: false,
      frm: FormFactory.makeForm({
        company_id: this.$route.params.id,
        name: '',
        type: '',
        bank: '',
        account: '',
        agency: '',
        balance: ''
      })
    }
  },

  methods: {
    createAccount() {
      this.loading = true;
      post(`/company/${this.$route.params.id}/account`, this.frm.data)
        .then(res => {
          console.log('chegou');
          this.resetForm();
          this.$router.push(`/company/${this.$route.params.id}`);
          Event.fire('company-account-updated');
        })
        .catch(console.error)
        .finally(() => {
          this.loading = false;
        })
    }
  }
}
</script>
