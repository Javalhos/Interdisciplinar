<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="card mt-3">
          <h3 class="card-header">Plano de contas</h3>

          <div class="card-body"><!-- Começo card body 1-->
            <div class="row">
              <div class="col-6">

                <div class="card"><!-- Começo card body 2 -->
                  <div class="card-body">

                    <h5 class="card-title"><!-- Começo ativo -->
                      <a data-toggle="collapse" data-target="#ativo" aria-expanded="false">
                        1. Ativo
                      </a>
                    </h5>

                    <div class="collapse" id="ativo">
                      <ul>
                        <li><!-- Começo ativo circulante -->
                          <a data-toggle="collapse" data-target="#acirculante" aria-expanded="fakse">
                            1.1 Ativo circulante
                          </a>

                          <div class="collapse" id="acirculante">
                            <ul>
                              <li><!-- Começo bancos -->
                              <a data-toggle="collapse" data-target="#banco" aria-expanded="false">
                                1.1.1 Conta de movimento de bancos
                              </a>

                              <div class="collapse" id="banco">
                                <ul>
                                  <li>
                                    <router-link to="/plainacc/newbanco">Cadastrar novo banco</router-link>
                                  </li>
                                </ul>
                              </div>
                              </li><!-- Fim bancos -->
                            </ul>
                          </div>
                        </li><!-- Fim ativo circulante -->

                        <li><!-- Começo ativo não circulante -->
                          <a data-toggle="collapse" data-target="#ancirculante" aria-expanded="false">
                            1.2 Ativo não circulante
                          </a>

                          <div class="collapse" id="ancirculante">
                            <ul>
                              <li>1.2.1 Realizável a longo prazo</li>
                              <li>1.2.2 Investimento</li>
                              <li>1.2.3 Intangível</li>
                              <li><!-- Começo imobilizado -->
                                <a data-toggle="collapse" data-target="#imobilizado" aria-expanded="false">
                                  1.2.4 Imobilizado
                                </a>

                                <div class="collapse" id="imobilizado">
                                  <ul>
                                    <li>
                                      <router-link to="/newasset">Cadastrar novo bem</router-link>
                                    </li>
                                  </ul>
                                </div>

                              </li><!-- Fim imobilizado -->
                            </ul>
                          </div>
                        </li><!-- Fim ativo não circulante -->
                      </ul>
                    </div><!-- Fim ativo -->

                    
                    <h5 class="card-title"><!-- Começo passivo -->
                      <a data-toggle="collapse" data-target="#passivo" aria-expanded="false">
                        2. Passivo
                      </a>
                    </h5><!-- Fim passivo -->

                    <div class="collapse" id="passivo">
                      <ul>
                        <li>2.1 Passivo circulante</li>
                        <li>2.2 Passivo não circulante</li>
                      </ul>
                    </div>


                    <h5 class="card-title"><!-- Começo despesas -->
                      <a data-toggle="collapse" data-target="#despesa" aria-expanded="false">
                        3. Despesas
                      </a>
                    </h5><!-- Fim despesas -->

                    <div class="collapse" id="despesa">
                      <ul>
                        <li>
                          <a data-toggle="collapse" data-target="#depreci" aria-expanded="false">
                            3.1 Despesas com depreciação
                          </a>

                          <div class="collapse" id="depreci">
                            <ul>
                              <li>
                                <router-link to="#">Verificar depreciações</router-link>
                              </li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </div>

                  </div>
                </div><!-- Fim card body 2 -->

              </div>

              <div class="col-6">
                <router-view></router-view>
              </div>
            </div>
          </div><!-- Fim card body 1 -->

          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

