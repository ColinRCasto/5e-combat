import Vue from "vue";
import Vuex from "vuex";
import creatures from "./components/store/creatures";
import party from "./components/store/party";
import add from "./components/store/add";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    creatures,
    party,
    add
  }
});

export default store;
