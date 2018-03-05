import Vue from 'vue'
import App from './App.vue'
import ToggleButton from 'vue-js-toggle-button'
Vue.use(ToggleButton);

new Vue({
  el: '#app',
  render: h => h(App),


});
Vue.component('Machine', {
  props: ['machine'],
  template: '<li :class="{color:machine.status}">{{machine.name}} <toggle-button v-model="machine.status" width="100" height="35" color="#B4AF91" :sync="true" :labels=" {checked: \'active\', unchecked: \'inactive\'}"/></li>'
});
