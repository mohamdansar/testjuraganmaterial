import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
// vue-router
import router from './router'
// vuex
import { store } from './store/store'
import axios from "axios";
import JsonCSV from 'vue-json-csv'
import titleMixin from './mixins/titleMixin'
Vue.mixin(titleMixin)

// bootstrap vue component and tools
import { BootstrapVue, IconsPlugin, BootstrapVueIcons } from 'bootstrap-vue'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(BootstrapVueIcons)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { LayoutPlugin } from 'bootstrap-vue'
Vue.use(LayoutPlugin)
import { ModalPlugin } from 'bootstrap-vue'
Vue.use(ModalPlugin)
import { CardPlugin } from 'bootstrap-vue'
Vue.use(CardPlugin)
import { VBScrollspyPlugin } from 'bootstrap-vue'
Vue.use(VBScrollspyPlugin)
import { DropdownPlugin, TablePlugin } from 'bootstrap-vue'
Vue.use(DropdownPlugin)
Vue.use(TablePlugin)
import './assets/scss/custom.scss'
// veevalidate
import { ValidationProvider } from 'vee-validate/dist/vee-validate.full.esm';
Vue.component('ValidationProvider', ValidationProvider);

import FooterComponent from "@/components/Shared/FooterComponent.vue";

Vue.component('footers-template', FooterComponent)
Vue.component('downloadCsv', JsonCSV)

// to support older IE, Android, and iOS device web browsers
// import '@babel/polyfill'
// import 'intersection-observer' // Optional


Vue.config.productionTip = false

Vue.prototype.$http = axios;

// Vue.prototype.$http.defaults.baseURL = "http://localhost/wms_api/public/";

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     // this route requires auth, check if logged in
//     // if not, redirect to login page.
//     if (!store.state.user) {
//       next({
//         path: "/"
//         // query: { redirect: to.fullPath }
//       });
//     } else {
//       next();
//     }
//   } else {
//     next(); // make sure to always call next()!
//   }
// });

new Vue({
  router,
  store,
  components: {
    BootstrapVue
  },
  render: h => h(App)
}).$mount('#app')

// global.vm = vm;