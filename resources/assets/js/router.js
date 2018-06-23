import Vue from 'vue';
import VueRouter from 'vue-router';

import {
  // Main Pages Components
  Main, Dashboard, Test,
  //New Company
  NewCompany, Company, Partner,
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
        { path: 'test', component: Test },
        {
          path: 'company', component: NewCompany, children: [
            { path: '', component: Company },
            { path: 'new', component: Company },
            { path: 'partner', component: Partner }

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
