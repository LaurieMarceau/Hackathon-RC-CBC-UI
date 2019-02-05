import VueI18n from 'vue-i18n';
import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/css/base.css';
import './assets/css/flexboxgrid.css';
import './assets/css/toggle.css';

import messages from './messages';

Vue.config.productionTip = false;

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: 'en',
  messages,
});

Vue.directive('focus', {
  // When the bound element is inserted into the DOM...
  inserted: function (el) {
    // Focus the element
    el.focus()
  }
});

new Vue({
  i18n,
  router,
  computed: Vuex.mapState(['recommended']),
  store,
  render: h => h(App),
  created() {
    this.$store.dispatch('loadRecommended');
  },

}).$mount('#app');
