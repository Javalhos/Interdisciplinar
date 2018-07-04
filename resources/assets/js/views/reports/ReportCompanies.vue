<template>
  <div class="container">
    <div class="row">
      <div class="col">

        <div class="card mt-3">
          <h3 class="card-header">Relatório de todas as empresas</h3>
          <div class="card-body">
            
            <form @submit.prevent="fetchCompany"> 
              <div class="form-row">
                <div class="form-group col-9">
                  <label v-if="validation !== ''">Insira o nome de uma empresa.</label>
                  <input type="text" v-model="term" class="form-control input-lg" placeholder="Digite o nome da empresa que deseja pesquisar...">
                </div>
                <div class="col-3">
                  <button type="submit" class="btn btn-success btn-block">
                    <span v-show="!loading">Procurar</span>
                    <span v-show="loading"><i class="fa fa-spinner fa-spin"></i></span>
                  </button>
                </div>
              </div>
            </form>

          </div>
        </div>

        <table class="table border text-center mt-3">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Empresa</th>
              <th scope="col">Razão Social</th>
              <th scope="col">Cidade</th>
              <th scope="col">UF</th>
              <th scope="col">E-mail</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="company in companies" :key="company.id">
              <td>{{ company.id }}</td>
              <td>{{ company.name }}</td>
              <td>{{ company.social_name }}</td>
              <td>{{ company.city }}</td>
              <td>{{ company.uf }}</td>
              <td>{{ company.email}}</td>
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
      validation: '',
      term: '',
      loading: false,
      companies: []
    };
  },

  methods: {
    fetchCompany() {
      if(this.term == '')
        return;
      this.loading = true;
      get(`/company/find/${this.term}`)
        .then(res => {
          console.log(res.data);
          this.companies = res.data.companies;
        })
        .finally(() => {
          this.loading = false;
        });
    }
  },

  mounted() {
    get('/company', this.companies)
      .then(res => {
        this.companies = res.data.companies;
        console.log(data);
      })
      .catch(error => console.log(error))
  }
}
</script>
