<template>
  <div class="container">
    <h4>Cadastrar nova conta de banco</h4>
    <form @submit.prevent="NewBank">
      <div class="form-row mt-3">
        <select class="custom-select">
          <option selected>Escolha o banco...</option>
          <option value="Banco do Brasil">Banco do Brasil</option>
          <option value="Itaú">Banco Itaú</option>
          <option value="Santander">Banco Santander</option>
          <option value="Bradesco">Banco do Bradesco</option>
        </select>
      </div>

      <div class="form-row mt-2">
        <input type="text" class="form-control" placeholder="Nome do propietário da conta">
      </div>

      <div class="form-row mt-2">
        <input type="text" class="form-control" placeholder="Nº da conta">
      </div>

      <div class="form-row mt-2">
        <input type="text" class="form-control" placeholder="Nº da agência">
      </div>

      <div class="form-row mt-2">
        <input type="text" class="form-control" placeholder="Quantia que será depositada">
      </div>

      <div class="form-row mt-3">
        <button class="btn btn-block btn-success">Confirmar</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  
}
</script>
