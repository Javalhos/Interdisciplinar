<template>
  <div class="container">
    <div class="row">
      <div class="col">

        <div class="card mt-3">
          <h3 class="card-header">Relatório de todos os relatórios de bens</h3>
          <div class="card-body">

            <div class="form-row">
              <div class="form-group col-9">
                <input type="text" class="form-control input-lg" placeholder="Digite o nome da empresa que deseja pesquisar...">
              </div>
              <div class="col-3">
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
              <th scope="col">Razão Social</th>
              <th scope="col">Cidade</th>
              <th scope="col">UF</th>
              <th scope="col">Valor no banco</th>
            </tr>
          </thead>
        </table>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>
