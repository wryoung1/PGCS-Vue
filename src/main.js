import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import BootstrapVue from 'bootstrap-vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

import {store} from './store/store.js';
import {routes} from './routes.js';

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.http.options.root = 'https://pgcsm-8495f.firebaseio.com/data.json';

const router = new VueRouter({
    mode: 'history',
    routes
});

Vue.use(BootstrapVue);
Vue.config.productionTip = false;

Vue.filter("percentage", function (value, decimals) {
    if (!value) value = 0;
    if (!decimals) decimals = 2;

    value = value * 100;
    return Math.round(value * Math.pow(10, decimals)) / Math.pow(10, decimals) + "%";
});

new Vue({
    store,
    router,
  render: h => h(App)
}).$mount('#app');


