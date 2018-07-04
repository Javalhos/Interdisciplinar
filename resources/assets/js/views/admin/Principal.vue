<template>
  <div class="container">
    <div class="row">
      <div class="col-12">

        <div class="card mt-3">
          <div class="card-header">
            <h3 class="card-title">Página do administrador</h3>
          </div>
          

          <div class="card-body">
            <div class="row">
              <div class="col-8">
                <div class="card">
                  
                  <div class="card-header">
                    <h4 class="card-title">Gerenciar contas</h4>
                  </div>
                  <div class="card-body">
                    <table class="table border text-center">
                      <thead>
                        <tr>
                          <th scope="col">Username</th>
                          <th scope="col">E-mail</th>
                          <th scope="col">Criado Em</th>
                          <th scope="col">Atualizado Em</th>
                          <th>Ações</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(user, idx) in users" v-if="user.id != currentUser.id" :key="user.id">
                          <td scope="col"><small>{{ user.username }}</small></td>
                          <td scope="col"><small>{{ user.email }}</small></td>
                          <td scope="col"><small>{{ user.created_at | timeFormat }}</small></td>
                          <td scope="col"><small>{{ user.updated_at | timeFormat }}</small></td>
                          <td scope="col">
                            <button class="btn btn-danger btn-sm"
                              @click="removeUser(user.id, idx)">
                              <i class="far fa-fw fa-trash-alt"></i>
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card">
                  <div class="card-header">
                    <h4 class="card-title">Criar nova conta</h4>
                  </div>
                  <div class="card-body">
                    <div class="form-group mb-1">
                      <label class="mb-0" for="#username">Usuário</label>
                      <input type="text" 
                        class="form-control form-control-sm" 
                        v-model="frm.data.username" autofocus required>
                    </div> 

                    <div class="form-group mb-1">
                      <label class="mb-0">E-mail</label>
                      <input type="email" 
                        class="form-control form-control-sm"
                        v-model="frm.data.email" required>
                    </div>

                    <div class="form-group mb-2">
                      <label class="mb-0">Senha</label>
                      <input type="password" 
                        class="form-control form-control-sm"
                        v-model="frm.data.password" required>
                    </div>

                    <div class="form-row">
                        <div class="form-group col">
                          <button type="button" @click="createUser" class="btn btn-sm btn-success">
                            <span v-show="!loading">Confirmar</span>
                            <span v-show="loading"><i class="fa fa-spinner fa-spin"></i></span>
                          </button>
                          <button type="button" @click="frm.resetForm()" class="btn btn-sm btn-secondary">Cancelar</button>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { post, get, del } from '../../helpers/Api.js';
import FormFactory from '../../helpers/Form.js';
import User from '../../store/User.js';
import moment from 'moment';

export default {
  filters: {
    timeFormat(value) {
      if (!value)
        return '';

      return moment(value).locale('pt-br').calendar();
    }
  },
  mounted() {
    this.loadUsers()
  },
  data() {
    return {
      loading: false,
      frm: FormFactory.makeForm({
        username: '',
        email: '',
        password: ''
      }),
      currentUser: User,
      users: []
    }
  },
  methods: {
    removeUser(id, idx) {
      this.users.splice(idx, 1);
      del(`/user/${id}`)
        .then(console.log)
        .catch(console.error);
    },
    loadUsers() {
      get('/user')
        .then(res => {
          this.users = res.data.users;
        })
        .catch(console.error);
    },
    createUser() {
      this.loading = true;
      this.frm.resetErrors();
      post('/user', this.frm.data)
        .then(res => {
          this.frm.resetForm();
          this.loadUsers();
        })
        .catch(err => {
          let errs = {};
          for (let error of err.response.data.errors)
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
