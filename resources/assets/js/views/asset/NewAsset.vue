<template>
  <div class="container">
    <div class="row">
      <div class="col">

        <div class="card mt-3">
          <h3 class="card-header">Cadastro de novo bem</h3>
          <div class="card-body">

            <div class="form-row"><!-- Código, conta e descrição -->
              <div class="form-group col-3">
                <label for="" class="form-control-label mb-0">Código</label>
                <input type="text" class="form-control">
              </div>
              <div class="form-group col-3">
                <label for="" class="form-control-label mb-0">Conta</label>
                <input type="text" class="form-control">
              </div>
              <div class="form-group col-6">
                <label for="" class="form-control-label mb-0">Descrição</label>
                <input type="text" class="form-control">
              </div>
            </div><!-- Fim código, conta e descrição -->

            <div class="form-group"><!-- Uso, sofrimento e CM do bem -->
              <div class="row">

                <div class="col-6">
                  <label class="form-control-label mb-0">O bem sofre:</label>
                  <div class="card">
                    <div class="card-body">
                      <div class="form-inline p-1 mr-auto ml-auto">
                        <input type="radio" class="form-control mr-1">
                        <label for="" class="form-control-label mb-0">Depreciação</label>

                        <input type="radio" class="form-control ml-3 mr-1">
                        <label for="" class="form-control-label mb-0">Amortização</label>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-6">
                  <label class="form-control-label mb-0">Uso do bem:</label>
                  <div class="card">
                    <div class="card-body">
                      <div class="form-inline p-1 mr-auto ml-auto">
                        <input type="radio" class="form-control mr-1">
                        <label for="" class="form-control-label mb-0">Administrativo</label>

                        <input type="radio" class="form-control ml-3 mr-1">
                        <label for="" class="form-control-label mb-0">Industrial</label>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>

            <div class="form-row"><!-- Data, tipo e taxa de depreciação -->
              <div class="form-group col-3">
                <label class="form-control-label mb-0">Data de compra</label>
                <input type="text" class="form-control">
              </div>
              <div class="form-group col-6">
                <label class="form-control-label mb-0">Tipo do bem</label>
                <select class="custom-select">
                  <option selected>Escolha um tipo de bem...</option>
                  <option value="Imóvel">Imóvel</option>
                  <option value="Móvel ou utensílio">Móvel e utensílio</option>
                  <option value="Veículo">Veículo</option>
                  <option value="Máquina ou equipamento">Máquina ou equipamento</option>
                  <option value="Marca, direito ou patente">Marca, direito ou patente</option>
                </select>
              </div>
              <div class="form-group col-3">
                <label class="form-control-label mb-0">Taxa de depreciação %</label>
                <input type="text" class="form-control">
              </div>
            </div>

            <div class="form-row">
              <div class="col-6">
                <label class="form-control-label mb-0">Durabilidade</label>
                <input type="text" class="form-control">
              </div>
              <div class="col-6">
                <label class="form-control-label mb-0">Valor do bem</label>
                <input type="text" class="form-control">
              </div>
            </div>

            <div class="form-row mt-3">
              <div class="col-6">
                <button class="btn btn-success btn-block">Confirmar</button>
              </div>
              <div class="col-6">                
                <button class="btn btn-default btn-block">
                  <router-link to="/company/:id">Cancelar</router-link>
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>
