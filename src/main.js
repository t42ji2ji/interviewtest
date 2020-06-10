import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {
  BootstrapVue
} from 'bootstrap-vue'

import {
  library
} from '@fortawesome/fontawesome-svg-core';
import {
  faFacebookF
} from '@fortawesome/free-brands-svg-icons';
import {
  faInstagram
} from '@fortawesome/free-brands-svg-icons';
import {
  faYoutube
} from '@fortawesome/free-brands-svg-icons';
import {
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome';
library.add(faFacebookF, faInstagram, faYoutube);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false
Vue.use(BootstrapVue)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')