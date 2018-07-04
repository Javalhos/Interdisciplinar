<template>
  <div class="container">
    <div class="row">
      <div class="col-12">

        <div class="card-group mt-3" style="min-height: 400px; max-height: 512px;">
          <div class="card" style="max-width: 30%"><!-- Card principal -->
            <h4 class="card-header">
              {{ company.name }}
            </h4>
  
            <div class="card-body">
              <p><b>Razão social:</b> {{ company.social_name }}</p>
              <p><b>Cidade:</b> {{ company.city }}</p>
              <p><b>UF:</b> {{ company.uf }}</p>
              <p><b>Telefone principal:</b> {{ company.tel_primary }}</p>
              <p><b>E-mail:</b> {{ company.email }}</p>
            </div>
          </div><!-- Fim card principal -->
          <div class="card">
            <div class="card-header">
              <ul class="nav nav-tabs card-header-tabs">
                <li class="nav-item">
                  <router-link class="nav-link nav-text-link"
                    :to="`/company/${$route.params.id}`"
                    exact>
                    Plano de Contas
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link nav-text-link"
                    :to="`/company/${$route.params.id}/account/create`"
                    exact>
                    Nova Conta
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link nav-text-link"
                    :to="`/company/${$route.params.id}/asset/create`"
                    exact>
                    Novo Bem
                  </router-link>
                </li>
              </ul>
            </div>
            <div class="card-body" style=" overflow-y: auto">
              <router-view></router-view>
            </div>
          </div>
        </div>

        <table class="table border text-center mt-3">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Bem imob.</th>
              <th scope="col">Data</th>
              <th scope="col">Durabilidade</th>
              <th scope="col">Valor inicial</th>
              <th scope="col">Valor depreciado</th>
              <th scope="col">Valor atual</th>
              <th scope="col">Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="company.assets.length < 1">
              <td colspan="9">
                <span class="text-muted">Nenhum bem foi registrado.</span>
              </td>
            </tr>                          
            <tr v-else v-for="asset in company.assets" :key="asset.id">
              <td>{{ asset.id }}</td>
              <td>{{ asset.name }}</td>
              <td>{{ asset.buy_date | timeFormat }}</td>
              <td>{{ `${asset.life_time} anos` }}</td>
              <td>{{ asset.value | currency }}</td>
              <td>{{ getDepreciation(asset) | currency }}</td>
              <td>{{ (asset.value - getDepreciation(asset)) | currency }}</td>
              <td scope="col">
                <button class="btn btn-danger"
                @click="removeAsset(asset.id, idx)">
                <i class="far fa-trash-alt"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        <table class="table border text-center mt-3">
          <thead>
            <tr>
              <th scope="col">Nome do sócio</th>
              <th scope="col">CPF</th>
              <th scope="col">Telefone</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="company.partners.length < 1">
              <td colspan="4">
                <span class="text-muted">Nenhum Sócio Vinculado.</span>
              </td>
            </tr>
            <tr v-else v-for="(partner, idx) in company.partners" :key="partner.id">
              <td>{{ partner.name }}</td>
              <td>{{ partner.cpf }}</td>
              <td>{{ partner.telephone }}</td>
              <td>
                <button class="btn btn-danger btn-sm"
                  @click="removePartner(partner.id, idx)">
                  <i class="far fa-trash-alt"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import Company from '../../store/Company.js';
import Event from '../../helpers/Event.js';
import { get, del } from '../../helpers/Api.js';
import moment from 'moment';

export default {
  filters: {
    timeFormat(value) {
      if (!value)
        return '';

      return moment(value).locale('pt-br').calendar();
    },
    currency(value) {
      if (!value)
        return 'R$ 0,00';
      
      return `R$ ${String(value.toFixed(2)).replace(/\,/g, '^').replace(/\./g, ',').replace(/\^/g, '.')}`;
    }
  },
  mounted() {
    this.loadCompany();
  },
  watch: {
    '$route'(to, from) {
      this.loadCompany();
    }
  },
  computed: {
    newAssetLink() {
      return `/company/${this.$route.params.id}/asset/create`;
    },
    banks() {
      let banks = {};
      for (let acc in this.company.accounts) {
        banks[acc.bank] += acc.balance;
      }
      return banks;
    }
  },
  methods: {
    getDepreciation(asset) {
      let inicio = moment(asset.buy_date);
      console.log(inicio);
      let now = moment();
      let months = Math.floor(moment.duration(now.diff(inicio)).asMonths());
      console.log(months);

      let lifeTime = asset.life_time * 12;
      let valueDeprec = asset.value * asset.depreciation_rate / 100;
      let byMonth = valueDeprec / lifeTime;
      let totalDeprecNow = byMonth * months;
      return totalDeprecNow;
    },
    removeAsset(id, idx) {
      this.company.assets.splice(idx, 1);
      del(`/company/${this.$route.params.id}/asset/${id}`)
        .then(console.log)
        .catch(console.error);
    },

    removePartner(id, idx) {
      this.company.partners.splice(idx, 1);
      del(`/company/${this.$route.params.id}/partner/${id}`)
        .then(res => {
          console.log(res);
        })
        .catch(console.error);
    },
    loadCompany(callback = undefined) {
      get(`/company/${this.$route.params.id}`)
        .then(res => {
          this.company = res.data.company;
          this.loaded = true;
          if (callback)
            calback();
        })
        .catch(err => {
          this.$router.push('/');
        });
    }
  },
  data() {
    return {
      loaded: false,
      company: new Proxy({}, { get: (obj, prop) => prop in ['partners', 'assets', 'accounts'] ? [] : '' }),
    }
  }
}
</script>
