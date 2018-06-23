<template>
  <div class="col-md-12">
    <div class="row">
      <div class="container m-4">
        <div class="card mt-1">
          <h5 class="ml-3 mt-3">CADASTRO DE EMPRESAS</h5>
          <hr>
          <ul class="nav nav-tabs">
            <li class="nav-item">
              <router-link to="/company/new" class="nav-link" exact>Dados da Empresa</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/company/partner" class="nav-link" exact>Vincular Sócios</router-link>
            </li>
          </ul>
          <router-view></router-view>      
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
