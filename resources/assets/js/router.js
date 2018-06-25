import Vue from 'vue';
import VueRouter from 'vue-router';

import {
  // Main Pages
  Main, Dashboard,
  //Admin Components 
  Principal,
  //Companies/Accounts Components
  PA, Caixa, Partners, 
  //New Asset Component
  NewAsset,
  // Company Components
  NewCompany, Company, Partner, ViewCompany,
  // End Main Pages
  // Auth Components
  Auth, Login, FirstAccess,
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
        { path: 'partners', component: Partners },
        { path: 'newasset', component: NewAsset},

        { path: 'plainacc', component: PA, children: [
          { path: '', component: Caixa }
        ] },

        {
          path: 'company', component: NewCompany, children: [
            { path: '', component: Company },
            { path: ':id', component: ViewCompany },
            { path: 'partner', component: Partner },

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
