<template>
  <div class="container">
    <div class="row">
      <div class="col-12">

        <div class="card mt-3">
          <h3 class="card-header">Página do administrador</h3>

          <div class="card-body">
            <div class="row">
              <div class="col-6">
                <div class="card">
                  <h4 class="card-header">Gerenciar contas</h4>
                  <div class="card-body">
                    <table class="table border text-center">
                      <thead>
                        <tr>
                          <td scope="col">ID</td>
                          <td scope="col">Username</td>
                          <td scope="col">E-mail</td>
                          <td scope="col">Senha</td>
                          <td></td>
                          <td></td>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                          <td scope="col">1</td>
                          <td scope="col"></td>
                          <td scope="col"></td>
                          <td scope="col"></td>
                          <td scope="col"><button class="btn btn-success"><i class="fas fa-pencil-alt"></i></button></td>
                          <td scope="col"><button class="btn btn-danger"><i class="far fa-trash-alt"></i></button></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div class="col-6">
                <div class="card">
                  <h4 class="card-header">Criar nova conta</h4>
                  <div class="card-body">
                    <label class="mb-0" for="#username">Usuário</label>
                    <input type="text" class="form-control input-lg mb-3" autofocus> 

                    <label class="mb-0">E-mail</label>
                    <input type="email" class="form-control input-lg mb-3">

                    <div class="form-row">
                      <div class="col-6">
                        <label class="mb-0">Senha</label>
                        <input type="password" class="form-control input-lg mb-3">
                      </div>

                      <div class="col-6">
                        <label class="mb-0">Repetir senha</label>
                        <input type="password" class="form-control input-lg mb-3">
                      </div>
                    </div>

                    <button type="submit" class="btn btn-success btn-block">Confirmar</button>
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
export default {
  
}
</script>
