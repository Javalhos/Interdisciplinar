<template>
  <li class="nav-item" data-toggle="angle-right" data-placement="right" title="" data-original-title="angle-right">
    <a class="nav-link ak-empresa-color nav-link-collapse collapsed" data-toggle="collapse" href="#collapseComponents" data-parent="#exampleAccordion" aria-expanded="false">
      <span class="nav-link-text">Empresas</span>
    </a>
    <ul class="sidenav-second-level collapse" id="collapseComponents" style="">
      <li class="ak-emp1-color"
        v-for="company in companies"
        :key="company.id">
        <router-link
          class="ak-a"
          :to="`/company/${company.id}`">
          {{ company.name }}
        </router-link>
      </li>

      <li class="ak-emp2-color">
        <router-link class="ak-a" to="/company">Nova empresa</router-link>
      </li>
    </ul>
  </li>
</template>

<script>
import { get } from '../helpers/Api.js';
import Event from '../helpers/Event.js';

export default {
  data() {
    return {
      loading: false,
      companies: []
    }
  },
  methods: {
    loadCompanies() {
      // Carrega Empresas do BackEnd
      this.loading = true;
      get('/company')
        .then(res => {
          this.companies = res.data.companies;
        })
        .catch(err => {
          console.error(err);
        })
        .finally(() => {
          this.loading = false;
        });
    }
  },
  mounted() {
    this.loadCompanies();
    Event.listen('company-added', (data) => { this.loadCompanies(); });
  }
}
</script>
