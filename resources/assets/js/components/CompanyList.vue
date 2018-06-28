<template>
  <li class="nav-item" data-toggle="angle-right" data-placement="right" title="" data-original-title="angle-right">
    <a class="nav-link ak-empresa-color nav-link-collapse collapsed" data-toggle="collapse" href="#collapseComponents" data-parent="#exampleAccordion" aria-expanded="false">
      <span class="nav-link-text">Empresas</span>
    </a>
    <ul class="sidenav-second-level collapse" id="collapseComponents" style="">
      <li class="ak-emp1-color"
        v-for="company in companies"
        :key="company.id">
        <router-link class="ak-a" :to="`/company/${company.id}`">
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
export default {
  data() {
    return {
      companies: [
        {
          name: 'Asabilita',
          id: 1
        },
        {
          name: 'Ferramentex',
          id: 2
        }
      ]
    }
  },

  mounted() {
    // Carrega Empresas do BackEnd  

  }
}
</script>
