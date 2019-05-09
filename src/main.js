import Vue from "vue";
import { Layout, Button, Icon, Drawer, Radio } from "ant-design-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

Vue.use(Layout);
Vue.use(Button);
Vue.use(Icon);
Vue.use(Drawer);
Vue.use(Radio);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
