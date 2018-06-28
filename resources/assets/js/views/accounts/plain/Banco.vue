<template>
  <div class="container">
    <h3 class="mb-3">Nome do banco</h3>
    <p class="mb-1">Número da conta: </p>
    <p class="mb-1">Disponível:</p>

    <div class="row mt-3">
      <div class="col-12">
        <select class="custom-select" v-model="selected">
          <option :value="null">Escolha uma das opções...</option>
          <option value="Debit">Registrar débito</option>
          <option value="Credit">Registrar credito</option>
        </select>
      </div>
    </div>

    <div class="input-group mt-3" v-if="selected === 'Debit'">
      <input type="text" class="input-lg form-control" placeholder="Insira o valor do débito...">
      <div class="input-group-append">
        <button class="btn btn-block btn-success">Confirmar</button>
      </div>
    </div>

    <div class="input-group mt-3" v-else-if="selected === 'Credit'">
        <input type="text" class="input-lg form-control" placeholder="Insira o valor do crédito...">
      <div class="input-group-append">
        <button class="btn btn-block btn-danger">Confirmar</button>
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
