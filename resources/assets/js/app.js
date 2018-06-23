import Vue from 'vue';

import App from './App.vue';
import { router } from './router.js';

try {
  window.$ = window.jQuery = require('jquery');
  window.Popper = require('popper.js');

  require('bootstrap');
} catch (e) {
  console.log('Erro ao carregar pacotes do client.');
}

new Vue({
  el: '#app',
  template: '<app></app>',
  components: { App },
  router
});
