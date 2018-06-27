import Vue from 'vue';
import VueRouter from 'vue-router';

import {
  // Main Pages
  Main, Dashboard,
  //Admin Components 
  Principal,
  //Companies/Accounts Components
  PA, Banco, NewBanco, Asset,
  //New Asset Component
  NewAsset,
  // Company Components
  NewCompany, Company, Partner, ViewCompany,
  // Auth Components
  Auth, Login, FirstAccess,
  // Report Components
  Report, Assets, Depre, RCompanies
} from './views';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/', component: Main, children: [

        { path: 'home', component: Dashboard },
        { path: 'admin', component: Principal},
        { path: 'newasset', component: NewAsset},

        { path: 'plainacc', component: PA, children: [
          { path: 'banco', component: Banco },
          { path: 'newbanco', component: NewBanco},
          { path: 'asset', component: Asset }
        ] },

        {
          path: 'company', component: Company, children: [
            { path: '', component: NewCompany },
            { path: ':id', component: ViewCompany },
            { path: 'partner', component: Partner },

          ]
        },
        {
          path: '/report', component: Report, children: [
            { path: 'assets', component: Assets },
            { path: 'depreciation', component: Depre },
            { path: 'companies', component: RCompanies }
          ]
        }
      ]
    },
    {
      path: '/auth', component: Auth, children: [
        { path: 'login', component: Login },
        { path: 'firstAccess', component: FirstAccess }
      ]
    }
  ]
});
