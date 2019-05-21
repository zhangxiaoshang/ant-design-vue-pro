import Vue from "vue";
import VueHighlightJS from "vue-highlightjs";
import "highlight.js/styles/github.css";
import VueI18n from "vue-i18n";
import {
  Layout,
  Button,
  Icon,
  Drawer,
  Radio,
  Menu,
  Form,
  Input,
  Select,
  Pagination,
  LocaleProvider,
  Dropdown,
  DatePicker
} from "ant-design-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import Authorized from "./components/Authorized";
import Auth from "@/directives/auth";
import zh_CN from "@/locale/zh_CN";
import en_US from "@/locale/en_US";

Vue.config.productionTip = false;

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_1193785_7wawvfdx0ps.js"
});

Vue.use(VueHighlightJS);
Vue.use(VueI18n);
Vue.use(Layout);
Vue.use(Button);
Vue.use(Icon);
Vue.use(Drawer);
Vue.use(Radio);
Vue.use(Menu);
Vue.use(Form);
Vue.use(Input);
Vue.use(Select);
Vue.use(Pagination);
Vue.use(LocaleProvider);
Vue.use(Dropdown);
Vue.use(DatePicker);
Vue.component("IconFont", IconFont);
Vue.component("Authorized", Authorized);
Vue.use(Auth);

const i18n = new VueI18n({
  locale: "zh",
  messages: {
    zh: zh_CN,
    en: en_US
  }
});

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
