import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';


Vue.config.productionTip = false;

import 'leaflet/dist/leaflet.css';
/* leaflet icon */
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

import _ from 'lodash';
Vue.prototype._ = _;

import VueSlideBar from 'vue-slide-bar';
Vue.component('vue-slide-bar', VueSlideBar);

import './assets/customize.scss';

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
