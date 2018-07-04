import Vue from 'vue';
import VueRouter from 'vue-router';

import User from './store/User';
import { get } from './helpers/Api';

import {
  // Main Pages
  Main, Dashboard,
  //Admin Components 
  Principal,
  //Companies/Accounts Components
  AccountPlan, NewAccount,
  //New Asset Component
  NewAsset,
  // Company Components
  NewCompany, Company, ViewCompany,
  // Auth Components
  Auth, Login, FirstAccess,
  // Report Components
  Report, Assets, Depre, RCompanies
} from './views';

import {
  InstalledGuard,
  AuthGuard,
  GuestGuard,
  NotInstalledGuard
} from './guards';

import { interceptors } from './helpers/Api';

Vue.use(VueRouter);

const callGuard = (guards, from, to, lastNext, i) => {
  let guard = guards[i];

  if (guard == undefined)
    lastNext();

  if (guards.length == i + 1)
    guard(from, to, lastNext);
  else
    guard(from, to, nextArg => {
      typeof(nextArg) == 'undefined' ? callGuard(guards, from, to, lastNext, i + 1) : lastNext(nextArg);
    });
};
const multiGuard = (guards = []) => ((to, from, next) => {
  callGuard(guards, from, to, next, 0);
});

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/', component: Main, beforeEnter: multiGuard([ AuthGuard, InstalledGuard ]), children: [
        { path: '', component: Dashboard, name: 'home' },
        { path: 'home', redirect: () => ({ name: 'home' }) },
        { path: 'admin', component: Principal},

        // { path: 'plainacc', component: PA, children: [
        //   { path: 'banco', component: Banco },
        //   { path: 'newbanco', component: NewBanco},
        //   { path: 'asset', component: Asset }
        // ] },

        {
          path: 'company', component: Company, children: [
            { path: '', component: NewCompany },
            {
              path: ':id', component: ViewCompany, children: [
                { path: '', component: AccountPlan },
                { path: 'asset/create', component: NewAsset },
                { path: 'account/create', component: NewAccount }
              ]
            },
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
        { path: 'login', component: Login, name: 'login', beforeEnter: GuestGuard },
        { path: 'firstAccess', component: FirstAccess, name: 'firstAccess', beforeEnter: NotInstalledGuard }
      ]
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (User.loaded)
    next();
  
  get('/user/load')
    .then(res => {
      User.load(res.data.user);
      console.log(res.data.user);
      next();
    })
    .catch(err => {
      console.error(err);
      next();
    })
    .finally(() => {
      next();
    })
});

interceptors((err) => {
  switch (err.response.status) {
  case 401:
    if (err.config.url.includes('/user/load')) {
      Auth.remove();
      router.push({ name: 'login' });
    }
    break;
  }
  return Promise.reject(err);
});

export { router };