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
            <form action="" class="form-horizontal">
              <div class="form-row">
                <div class="form-group col-sm-3">
                  <label for="inputname" class="form-control-label mb-0">Código</label>
                  <input type="text" class="form-control">
                </div>
                <div class="form-group col-sm-9">
                  <label for="" class="form-control-label mb-0">Nome Fantasia</label>
                  <input type="text" class="form-control">
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-sm-9">
                  <label for="" class="form-control-label mb-0">Razão Social</label>
                  <input type="text" class="form-control">
                </div>
                <div class="form-group col-sm-3">
                  <label for="inputname" class="form-control-label mb-0">CNPJ/CPF</label>
                  <input type="text" class="form-control">
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-sm-6">
                  <label for="" class="form-control-label mb-0">Logradouro, Número</label>
                  <input type="text" class="form-control">
                </div>
                <div class="form-group col-sm-3">
                  <label for="" class="form-control-label mb-0">Complemento</label>
                  <input type="text" class="form-control">
                </div>
                <div class="form-group col-sm-3">
                  <label for="" class="form-control-label mb-0">Bairro</label>
                  <input type="text" class="form-control">
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-sm-6">
                  <label class="form-control-label mb-0">Cidade</label>
                  <input type="text" class="form-control">
                </div>
                <div class="form-group col-sm-4">
                  <label for="" class="form-control-label mb-0">CEP</label>
                  <input type="text" class="form-control">
                </div>
                <div class="form-group col-sm-2">
                  <label for="" class="form-control-label mb-0">UF</label>
                  <input type="text" class="form-control">
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-sm-3">
                  <label for="" class="form-control-label mb-0">Telefone Secundário</label>
                  <input type="text" class="form-control">
                </div>
                <div class="form-group col-sm-3">
                  <label for="" class="form-control-label mb-0">Telefone Principal</label>
                  <input type="text" class="form-control">
                </div>
                <div class="form-group col-sm-6">
                  <label for="" class="form-control-label mb-0">E-mail</label>
                  <input type="text" class="form-control">
                </div>
              </div>
            </form>
            <div class="row m-3">
              <div class="col">
                <button type="button" class="btn btn-primary btn-sm">Salvar</button>
                <button type="button" class="btn btn-secondary btn-sm">Cancelar</button>
              </div>
            </div>
          </div>
            <div class="card-body" v-else>
              <table class="table border text-center">
                <thead>
                <tr>
                  <th scope="col">Cód.</th>
                  <th scope="col">Nome</th>
                  <th scope="col">CPF</th>
                  <th scope="col"></th>
                  <th scope="col"></th>
                  </tr>
                </thead>
                <tbody class="text-center">
                  <tr>
                    <th scope="row">1</th>
                    <td></td>
                    <td></td>
                    <td><button class="btn btn-warning"><i class="fas fa-plus"></i></button></td>
                    <td><button class="btn btn-danger"><i class="far fa-trash-alt"></i></button></td>
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
export default {
  data() {
    return {
      formView: true
    }
  }
};
</script>
