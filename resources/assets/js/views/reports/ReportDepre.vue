<template>
  <div class="container">
    <div class="row">
      <div class="col">

        <div class="card mt-3">
          <h3 class="card-header">Relatório de todos os relatórios de depreciações</h3>
          <div class="card-body">

            <div class="form-row">
              <div class="form-group col-12">
                <select class="custom-select" v-model="selected">
                  <option :value="null">Escolha o tipo de busca que deseja realizar...</option>
                  <option value="Item">Item</option>
                  <option value="Data">Data</option>
                </select>
              </div>
            </div>

            <div class="form-row" v-if="selected === 'Item'">
              <div class="form-group col-9">
                <input type="text" class="input-lg form-control" placeholder="Digite o item que deseja procurar...">
              </div>
              <div class="col-3">
                <button class="btn btn-success btn-block">Procurar</button>
              </div>
            </div>

            <div class="form-row" v-else-if="selected === 'Data'">
              <div class="form-group col-4">
                <input type="text" class="input-lg form-control" placeholder="De: 00/00/0000">
              </div>
              <div class="form-group col-4">
                <input type="text" class="input-lg form-control" placeholder="Até: 00/00/0000">
              </div>
              <div class="col-4">
                <button class="btn btn-success btn-block">Procurar</button>
              </div>
            </div>

          </div>
        </div>

        <table class="table border text-center mt-3">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Conta</th>
              <th scope="col">Empresa</th>
              <th scope="col">Descrição do bem</th>
              <th scope="col">Tipo</th>
              <th scope="col">Uso</th>
              <th scope="col">Valor inicial</th>
              <th scope="col">Valor atual</th>
            </tr>
          </thead>
        </table>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: null
    }
  }
}
</script>
