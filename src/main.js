import Vue from "vue";
import {
  Layout,
  Button,
  Icon,
  Drawer,
  Radio,
  Menu,
  Form,
  Input,
  Select
} from "ant-design-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import Authorized from "./components/Authorized";
import Auth from "@/directives/auth";

Vue.config.productionTip = false;

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_1193785_7wawvfdx0ps.js"
});

Vue.use(Layout);
Vue.use(Button);
Vue.use(Icon);
Vue.use(Drawer);
Vue.use(Radio);
Vue.use(Menu);
Vue.use(Form);
Vue.use(Input);
Vue.use(Select);
Vue.component("IconFont", IconFont);
Vue.component("Authorized", Authorized);
Vue.use(Auth);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
