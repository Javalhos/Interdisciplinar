<template>
<!-- SIDEBAR -->
	<div class="col-2 pl-0 mr-0 pr-0 app-sidebar">
		<div class="nav-sidebar-items">
			<a class="brand" href="#">
				<img class="brand-img" src="../../images/logo.png">
				<span>Anima</span>	
			</a>
			<ul class="nav flex-column">
				<li class="nav-item" data-toggle="tooltip" data-placement="right" title="" data-original-title="Example Pages">
					<a class="nav-link ak-contas-color nav-link-collapse collapsed" data-toggle="collapse" href="#collapseExamplePages" data-parent="#exampleAccordion" aria-expanded="false">
						<router-link to="/" class="nav-link-text">Dashboard</router-link>
					</a>
				</li>
      <!-- EMPRESAS -->
				<app-company-list></app-company-list>
			
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
            <span class="nav-link-text">Relatórios Adicionais</span>
          </a>
          <ul class="sidenav-second-level collapse" id="collapseMulti" style="">
            <li>
              <router-link class="ak-a" to="/report/companies">Todas as empresas</router-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
<!-- END SIDEBAR -->
</template>

<script>
import CompanyList from "./CompanyList.vue";
import User from '../store/User.js';

export default {

	mounted(){
		console.log(User.isAdmin);
	},
	data() {
		return {
			user: User
		}
	},
	components: {
		'app-company-list': CompanyList
	}

}
</script>
