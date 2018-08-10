// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import VueResource from "vue-resource";

Vue.use(VueResource);

Vue.http.options.root = "https://dnd-tracking.firebaseio.com/";
Vue.http.interceptors.push((request, next) => {
  console.log(request);
  next(response => {
    //response.json = () => {return {messages: response.body} }
  });
});

export const eventBus = new Vue();
new Vue({
  el: "#app",
  render: h => h(App)
});
