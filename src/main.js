// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import '../node_modules/jquery/dist/jquery.min';
import '../node_modules/bootswatch/dist/superhero/bootstrap.min.css';
import '../node_modules/popper.js/dist/umd/popper.min';
import '../node_modules/bootstrap/dist/js/bootstrap.min';
import '../node_modules/font-awesome/css/font-awesome.min.css';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
