<template>
  <form>
    <div class="form-row"><!-- Código, conta e descrição -->
      <div class="form-group col-3">
        <label for="" class="form-control-label mb-0">Conta</label>
        <select class="custom-select" v-model="frm.data.account_id">
          <option v-for="acc in assetAccounts" :key="acc.id" :value="acc.id">{{ acc.name }}</option>
        </select>
      </div>
      <div class="form-group col-3">
        <label for="" class="form-control-label mb-0">Nome do bem</label>
        <input type="text" class="form-control" v-model="frm.data.name">
      </div>
      <div class="form-group col-6">
        <label for="" class="form-control-label mb-0">Descrição</label>
        <input type="text" class="form-control" v-model="frm.data.description">
      </div>
    </div><!-- Fim código, conta e descrição -->

    <div class="form-row"><!-- Uso, sofrimento e CM do bem -->
      <div class="form-group col-6">
        <label class="form-control-label mb-0">O bem sofre:</label>
        <div class="card">
          <div class="card-body">
            <div class="form-inline p-1 mr-auto ml-auto">
              <input id="sofredep"
                type="radio"
                class="form-control mr-1" 
                value="Depreciação"
                v-model="frm.data.suffers">
              <label for="sofredep" class="form-control-label mb-0">Depreciação</label>

              <input id="sofream"
                type="radio" 
                class="form-control ml-3 mr-1"
                value="Amortização" 
                v-model="frm.data.suffers">
              <label for="sofream" class="form-control-label mb-0">Amortização</label>
            </div>
          </div>
        </div>
      </div>

      <div class="form-group col-6">
        <label class="form-control-label mb-0">Uso do bem:</label>
        <div class="card">
          <div class="card-body">
            <div class="form-inline p-1 mr-auto ml-auto">
              <input id="usoadm" 
                type="radio" 
                name="uso_do_bem" 
                class="form-control mr-1"
                value="Administrativo"
                v-model="frm.data.use">
              <label for="usoadm" class="form-control-label mb-0">Administrativo</label>

              <input id="usoind" 
                type="radio" 
                name="uso_do_bem" 
                class="form-control ml-3 mr-1"
                value="Industrial"
                v-model="frm.data.use">
              <label for="usoind" class="form-control-label mb-0">Industrial</label>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="form-row"><!-- Data, tipo e taxa de depreciação -->
      <div class="form-group col-3">
        <label class="form-control-label mb-0">Data de compra</label>
        <input type="text" class="form-control" v-model="frm.data.buy_date">
      </div>

      <div class="form-group col-6">
        <label class="form-control-label mb-0">Tipo do bem</label>
        <select class="custom-select" v-model="frm.data.type">
          <option selected>Escolha um tipo de bem...</option>
          <option value="property">Imóvel</option>
          <option value="furniture">Móvel e utensílio</option>
          <option value="vehicle">Veículo</option>
          <option value="equipment">Máquina ou equipamento</option>
          <option value="brand">Marca, direito ou patente</option>
        </select>
      </div>
      
      <div class="form-group col-3">
        <label class="form-control-label mb-0">Taxa de depreciação %</label>
        <input type="text" class="form-control" v-model="frm.data.depreciation_rate">
      </div>
    </div>

    <div class="form-row">
      <div class="col-6">
        <label class="form-control-label mb-0">Durabilidade</label>
        <input type="text" class="form-control" v-model="frm.data.life_time">
      </div>
      <div class="col-6">
        <label class="form-control-label mb-0">Valor do bem</label>
        <input type="text" class="form-control" v-model="frm.data.value">
      </div>
    </div>

    <div class="form-row mt-3">
      <div class="form-group col">
        <button type="button" class="btn btn-success" @click="createAsset">
          <span v-show="!loading">Confirmar</span>
          <span v-show="loading"><i class="fa fa-spinner fa-spin"></i></span>
        </button>
        <button type="button" class="btn btn-secondary" @click="frm.resetForm()">Cancelar</button>
      </div>
    </div>
  </form>
</template>

<script>
import FormFactory from '../../helpers/Form.js';
import Company from '../../store/Company.js';
import { post, get } from '../../helpers/Api.js';

export default {
  data() {
    return {
      loading: false,
      assetAccounts: [],
      frm: FormFactory.makeForm({
        account_id: '',
        name: '',
        description: '',
        suffers: '',
        use: '',
        type: '',
        buy_date: '',
        depreciation_rate: '',
        life_time: '',
        value: ''                  
      }),
      currCompany: Company
    }
  },
  mounted() {
    get(`/company/${this.$route.params.id}/account`)
      .then(res => {
        this.assetAccounts = res.data.accounts;
      });
  },
  methods: {
    createAsset() {
      this.loading = true;
      this.frm.resetErrors();
      post(`/company/${this.$route.params.id}/asset`, this.frm.data)
        .then(res => {
          this.resetForm();
          Event.fire('company-account-updated');
          this.$router.push(`/company/${this.$route.params.id}`);        
        })            
        .catch(err => {
          let errs = {};
          for(let error of err.response.data.errors)
            errs[error.field] = error.message;
          this.frm.setErrors(errs);                                                
        })
        .finally(() => {
          this.loading = false;
        })                
    }
  }  
}
</script>
