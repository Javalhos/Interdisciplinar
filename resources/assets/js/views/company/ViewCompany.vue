<template>
  <div class="container">
    <div class="row">
      <div class="col-12">

        <div class="card mt-3"><!-- Card principal -->
          <h3 class="card-header">Nome da empresa</h3>

          <div class="card-body">
            <div class="row">
              <div class="col-6"><!-- Card informações da empresa -->
                <div class="card mt-3">
                  <div class="card-body">
                    <p>Razão social:</p>
                    <p>Cidade:</p>
                    <p>UF:</p>
                    <p>Telefone principal:</p>
                    <p>E-mail:</p>
                  </div>
                </div>
              </div><!-- Fim card informações da empresa -->

              <div class="col-6"><!-- Opções -->
                <div class="row align-items-center h-100">
                  <div class="col-4 mr-auto ml-auto">
                    <h4 class="text-center">Opções</h4>
                    <p class="mb-0 text-center">
                      <router-link to="/plainacc">Plano de contas</router-link>
                    </p>
                    <p class="mb-0 text-center">
                      <router-link to="/newasset">Cadastrar novo bem</router-link>
                    </p>
                  </div>
                </div>
              </div> <!-- Fim das opções -->
            </div>

          </div>
        </div><!-- Fim card principal -->

        <table class="table border text-center mt-3">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Conta ativo</th>
              <th scope="col">Conta dep.</th>
              <th scope="col">Bem imob.</th>
              <th scope="col">Valor atual</th>
              <th scope="col">Valor depreciado</th>
              <th scope="col">Número de série</th>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td><button class="btn btn-warning"><i class="fas fa-plus"></i></button></td>
              <td scope="col"><button class="btn btn-success"><i class="fas fa-pencil-alt"></i></button></td>
              <td scope="col"><button class="btn btn-danger"><i class="far fa-trash-alt"></i></button></td>
            </tr>
          </tbody>
        </table>

        <table class="table border text-center mt-3">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Nome do sócio</th>
              <th scope="col">CPF</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td><button class="btn btn-danger"><i class="far fa-trash-alt"></i></button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>
