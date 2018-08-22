// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import VueResource from "vue-resource";
import VueRouter from "vue-router";
import axios from "axios";

import App from "./App";

import store from "./store";
import routes from "./routes";

const MyPlugin = {
  install(Vue, options) {
    Vue.mixin({
      mounted() {
        console.log("Mounted");
      }
    });
  }
};

Vue.use(MyPlugin);
Vue.use(VueRouter);
axios.defaults.baseURL = "https://dnd-tracking.firebaseio.com";

const router = new VueRouter({
  mode: "history",
  routes
});

export const eventBus = new Vue();
new Vue({
  el: "#app",
  render: h => h(App),
  router,
  store
});
