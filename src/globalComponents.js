import Vue from 'vue'
import { VBModal, BModal } from 'bootstrap-vue'

// import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
Vue.component('b-modal', BModal)
// Note that Vue automatically prefixes directive names with `v-`
Vue.directive('b-modal', VBModal)