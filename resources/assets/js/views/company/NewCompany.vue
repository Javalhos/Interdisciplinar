<template>
  <div class="col-md-12">
    <div class="row">
      <div class="container">
        <div class="card mt-3">
          <h3 class="card-header">CADASTRO DE EMPRESAS</h3>
          <ul class="nav nav-tabs mt-2">
            <li class="nav-item">
              <router-link to="/company" class="nav-link nav-text-link" exact>Dados da Empresa</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/company/partner" class="nav-link nav-text-link" exact>Vincular Sócios</router-link>
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
