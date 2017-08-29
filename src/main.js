// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import App from './App';
import router from './router';

Vue.config.productionTip = false;
Vue.use(BootstrapVue);

Vue.component('foot', {
  template: '<div class="row"><a target="_blank" href="https://github.com/AwadMaharoof">Awad Maharoof 2017</a></div>',
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
