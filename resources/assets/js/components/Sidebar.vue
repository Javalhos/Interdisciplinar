<template>
<!-- SIDEBAR -->
	<div class="col-2 pl-0 mr-0 pr-0 app-sidebar">
		<div class="nav-sidebar-items">
			<a class="brand" href="#">
				<img class="brand-img" src="../../images/logo.png">
				<span>Anima</span>	
			</a>
			<ul class="nav flex-column">
			
      <!-- DASHBOARD -->
			  <li class="nav-item ak-dashboard-color">
				  <router-link class="nav-link" to="/home">Dashboard</router-link>
				</li>
				
      <!-- EMPRESAS -->
				<li class="nav-item" data-toggle="angle-right" data-placement="right" title="" data-original-title="angle-right">
					<a class="nav-link ak-empresa-color nav-link-collapse collapsed" data-toggle="collapse" href="#collapseComponents" data-parent="#exampleAccordion" aria-expanded="false">
  					<span class="nav-link-text">Empresas</span>
					</a>
					<ul class="sidenav-second-level collapse" id="collapseComponents" style="">
						<li class="ak-emp1-color">
							<a class="ak-a" href="#">Empresa 1</a>
						</li>
						<li class="ak-emp2-color">
							<router-link class="ak-a" to="/company">Nova empresa</router-link>
						</li>
					</ul>
				</li>
			
      <!-- CONTAS -->
				<li class="nav-item" data-toggle="tooltip" data-placement="right" title="" data-original-title="Example Pages">
					<a class="nav-link ak-contas-color nav-link-collapse collapsed" data-toggle="collapse" href="#collapseExamplePages" data-parent="#exampleAccordion" aria-expanded="false">
						<router-link to="/admin" class="nav-link-text">Gerenciar Contas</router-link>
					</a>
					<!-- <ul class="sidenav-second-level collapse" id="collapseExamplePages" style="">
						<li>
							<a class="ak-a" href="#">Todas as Contas</a>
						</li>
		  			<li>
							<a class="ak-a" href="#">Alterar</a>
						</li>
					</ul> -->
				</li>
		
    	<!-- Relatórios -->
				<li class="nav-item" data-toggle="tooltip" data-placement="right" title="" data-original-title="Menu Levels">
					<a class="nav-link ak-relatorios-color nav-link-collapse collapsed" data-toggle="collapse" href="#collapseMulti" data-parent="#exampleAccordion"
					aria-expanded="false">
            <span class="nav-link-text">Relatórios</span>
          </a>
          <ul class="sidenav-second-level collapse" id="collapseMulti" style="">
            <li>
              <a class="ak-a" href="#">Relatório 1</a>
            </li>
            <li>
              <a class="ak-a" href="#">Relatório 2</a>
            </li>
            <li>
              <a class="ak-a" href="#">Relatório 3</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
<!-- END SIDEBAR -->
</template>

<script>
export default {};
</script>
