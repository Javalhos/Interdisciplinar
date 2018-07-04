<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <form @submit.prevent="fetchAsset">
          <div class="card mt-3">
            <h3 class="card-header">Relatório de todos os relatórios de bens</h3>
            <div class="card-body">

              <div class="form-row">
                <div class="form-group col-9">
                  <select class="form-control" v-model="companyId">
                    <option selected>Selecione uma empresa...</option>
                    <option v-for="company in companies" :key="company.id" :value="company.id">{{ company.name }}</option>
                  </select>
                </div>
                <div class="col-3">
                    <button type="submit" class="btn btn-success btn-block">
                    <span v-show="!loading">Procurar</span>
                    <span v-show="loading"><i class="fa fa-spinner fa-spin"></i></span>
                  </button>
                </div>
              </div>

            </div>
          </div>
        </form>

        <table class="table border text-center mt-3">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Conta</th>
              <th scope="col">Empresa</th>
              <th scope="col">Descrição do bem</th>
              <th scope="col">Tipo</th>
              <th scope="col">Uso</th>
              <th scope="col">Valor inicial</th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="companyId == ''">
              <td colspan="7">
                <span class="text-muted">Selecione uma empresa para obter resultados...</span>
              </td>
            </tr>
            <tr v-else v-for="asset in company.assets" :key="asset.id">
              <td>{{ asset.id }}</td>
              <td>{{ asset.account_id }}</td>
              <td>{{ asset.company }}</td>
              <td>{{ asset.description }}</td>
              <td>{{ asset.type }}</td>
              <td>{{ asset.use }}</td>
              <td>{{ asset.value }}</td>
            </tr>
          </tbody>
        </table>

      </div>
    </div>
  </div>
</template>

<script>
import { get } from '../../helpers/Api.js';
export default {
  data() {
    return {
      loading: false,
      companyId: '',
      term: '',
      assets: [],
      companies: []
    }
  },

  mounted() {
    get('/company')
      .then(res => {
        this.companies = res.data.companies;
        // console.log(data);
      })
      .catch(error => console.log(error));
    get()
  }
}
</script>
