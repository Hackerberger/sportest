import Vue from 'vue';
import vuetify from './plugins/vuetify';
import App from './App.vue';
import router from './router';
import './registerServiceWorker';
import GSignInButton from 'vue-google-signin-button';

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: h => h(App),
}).$mount('#app');

Vue.use(GSignInButton);

//register LocalForagecomponent
import VueLocalForage from 'vue-localforage';
Vue.use(VueLocalForage);

//Popup Dialog component
import VuetifyConfirm from 'vuetify-confirm';
Vue.use(VuetifyConfirm, { vuetify });
Vue.use(VuetifyConfirm, {
  buttonTrueText: 'Install',
  buttonFalseText: 'Discard',
  color: '#4b7dbb',
  property: '$confirm',
});


//Charts
import VueCharts from 'vue-chartjs';
Vue.use(VueCharts);
