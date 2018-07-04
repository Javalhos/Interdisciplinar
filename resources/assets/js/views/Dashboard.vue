<template>
  
  <div class="col-12">
    <div class="row">
      <div class="ak-card">
        <div class="col-sm-4 mt-3">
          <div class="card">
            <div class="card-body ak-card-1">
              <h5 class="card-title text-center">Empresas Cadastradas</h5>
              <h1 class="card-text text-center" style="font-size: 10rem">{{ companyCount }}</h1>
            </div>
          </div>
        </div>
        <div class="col-sm-4 mt-3">
          <div class="card">
            <div class="card-body ak-card-2">
              <h5 class="card-title text-center">Bens Cadastrados</h5>
              <h1 class="card-text text-center" style="font-size: 10rem">{{ assetCount }}</h1>
            </div>
          </div>
        </div>
        <div class="col-sm-4 mt-3">
          <div class="card">
            <div class="card-body ak-card-3">
              <h5 class="card-title text-center">Usuários Cadastrados</h5>
              <h1 class="card-text text-center" style="font-size: 10rem">{{ userCount }}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { get } from '../helpers/Api.js';
import User from '../store/User.js';

export default {
  mounted() {
    get('/info/count')
      .then(res => {
        this.companyCount = res.data.companyCount;
        this.userCount = res.data.userCount;
        this.assetCount = res.data.assetCount;
      })
      .catch(console.error);
  },
  data() {
    return {
      companyCount: 0,
      assetCount: 0,
      userCount: 0
    }
  },
  beforeRouteEnter(to, from, next) {
    if (User.loaded)
      next();
    
    get('/user/load')
      .then(res => {
        User.load(res.data.user);
        console.log(res.data.user);
        next();
      })
      .catch(err => {
        console.error(err);
        next();
      })
      .finally(() => {
        next();
      })
  }
}
</script>

<style>
.ak-card-1, .ak-card-2, .ak-card-3 {
  height: 300px;
}
</style>