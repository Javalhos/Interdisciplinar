<template>
  <div class="col-md-12">
    <div class="row">
      <div class="container">
        <div class="card mt-3">
          <div class="card-header">

            <h3 class="card-title">CADASTRO DE EMPRESAS</h3>
            <ul class="nav nav-tabs mt-2 card-header-tabs">
              <li class="nav-item">
                <a class="nav-link nav-text-link" :class="formView ? 'active' : ''" @click="formView = true">Dados da Empresa</a>
              </li>
              <li class="nav-item">
                <a class="nav-link nav-text-link" :class="!formView ? 'active' : ''" @click="formView = false">Vincular Sócios</a>
              </li>
            </ul>
          </div>
          <div class="card-body card-block" v-if="formView">
            <form class="form-horizontal">
              <div class="form-row">
                <div class="form-group col">
                  <label class="form-control-label mb-0">Nome Fantasia</label>
                  <input type="text" class="form-control" v-model="frm.data.name">
                </div>
                <div class="form-group col">
                  <label class="form-control-label mb-0">Razão Social</label>
                  <input type="text" class="form-control" v-model="frm.data.social_name">
                </div>
                <div class="form-group col">
                  <label for="inputname" class="form-control-label mb-0">CNPJ/CPF</label>
                  <input type="text" class="form-control" v-model="frm.data.cnpj">
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-sm-6">
                  <label class="form-control-label mb-0">Logradouro, Número</label>
                  <input type="text" class="form-control" v-model="frm.data.address">
                </div>
                <div class="form-group col-sm-3">
                  <label class="form-control-label mb-0">Complemento</label>
                  <input type="text" class="form-control" v-model="frm.data.address2">
                </div>
                <div class="form-group col-sm-3">
                  <label class="form-control-label mb-0">Bairro</label>
                  <input type="text" class="form-control" v-model="frm.data.neighborhood">
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-sm-6">
                  <label class="form-control-label mb-0">Cidade</label>
                  <input type="text" class="form-control" v-model="frm.data.city">
                </div>
                <div class="form-group col-sm-4">
                  <label class="form-control-label mb-0">CEP</label>
                  <input type="text" class="form-control" v-model="frm.data.zip">
                </div>
                <div class="form-group col-sm-2">
                  <label class="form-control-label mb-0">UF</label>
                  <input type="text" class="form-control" v-model="frm.data.uf">
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-sm-3">
                  <label class="form-control-label mb-0">Telefone Principal</label>
                  <input type="text" class="form-control" v-model="frm.data.tel_primary">
                </div>
                <div class="form-group col-sm-3">
                  <label class="form-control-label mb-0">Telefone Secundário</label>
                  <input type="text" class="form-control" v-model="frm.data.tel_secondary">
                </div>
                <div class="form-group col-sm-6">
                  <label class="form-control-label mb-0">E-mail</label>
                  <input type="email" class="form-control" v-model="frm.data.email">
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col">
                  <button type="button" @click="createCompany" class="btn btn-primary">
                    <span v-show="!loading">Salvar</span>
                    <span v-show="loading"><i class="fa fa-spinner fa-spin"></i></span>
                  </button>
                  <button type="button" @click="frm.resetForm()" class="btn btn-secondary">Cancelar</button>
                </div>
              </div>
            </form>
          </div>
          <div class="card-body" v-else>

            <form class="form-horizontal">
              <div class="form-row">
                <div class="form-group col-md-5">
                  <label class="form-control-label mb-0">Nome</label>
                  <input type="text"
                    class="form-control"
                    v-model="newPartner.data.name"
                    required>
                </div>
                <div class="form-group col">
                  <label class="form-control-label mb-0">CPF</label>
                  <input type="text"
                    class="form-control"
                    required
                    maxlength="11"
                    v-model="newPartner.data.cpf"
                    @keyup="sanitizePartnerCPF">
                </div>
                <div class="form-group col">
                  <label class="form-control-label mb-0">Telefone</label>
                  <input type="text"
                    class="form-control"
                    v-model="newPartner.data.telephone"
                    required>
                </div>
                <div class="form-group col-1">
                  <label class="form-control-label mb-0"></label>
                  <button type="button"
                    class="btn btn-primary btn-block"
                    @click="addPartner">
                    <i class="fa fa-plus"></i>
                  </button>
                </div>
              </div>
            </form>

            <table class="table border text-center">
              <thead>
                <tr>
                  <th scope="col">Nome</th>
                  <th scope="col">CPF</th>
                  <th scope="col">Telefone</th>
                  <th scope="col">Ações</th>
                </tr>
              </thead>
              <tbody class="text-center">
                <tr v-if="frm.data.partners.length == 0">
                  <td colspan="4"><span class="text-muted">Nenhum Sócio Vinculado!</span></td>
                </tr>
                <tr v-else v-for="(partner, idx) in frm.data.partners" :key="idx">
                  <td>{{ partner.name }}</td>
                  <td>{{ partner.cpf }}</td>
                  <td>{{ partner.telephone }}</td>
                  <td>
                    <button class="btn btn-danger btn-sm" @click="frm.data.partners.splice(idx, 1)">
                      <i class="far fa-trash-alt"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FormFactory from '../../helpers/Form.js';
import Event from '../../helpers/Event.js';
import { post } from '../../helpers/Api.js';

export default {
  data() {
    return {
      formView: true,
      loading: false,
      newPartner: FormFactory.makeForm({
        name: '',
        cpf: '',
        telephone: ''
      }),
      frm: FormFactory.makeForm({
        name: '',
        social_name: '',
        cnpj: '',
        address: '',
        address2: '',
        neighborhood: '',
        city: '',
        zip: '',
        uf: '',
        tel_primary: '',
        tel_secondary: '',
        email: '',
        partners: []
      })
    }
  },
  methods: {
    sanitizePartnerCPF() {
      this.newPartner.data.cpf = this.newPartner.data.cpf.replace(/\D/g, '');
    },
    addPartner() {
      this.sanitizePartnerCPF();
      this.frm.data.partners.push(Object.assign({}, this.newPartner.data));
      this.newPartner.resetForm();
    },
    createCompany() {
      this.loading = true;
      post('/company', this.frm.data)
        .then(res => {
          Event.fire('company-added');
        })
        .catch(console.error)
        .finally(() => {
          this.loading = false;
        })
    }
  }
};
</script>
