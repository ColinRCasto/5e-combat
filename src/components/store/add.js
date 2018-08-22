export default {
  state: {
    new_creature: {
      name: "",
      hp: 20,
      ac: 12,
      initiatve: 10
    }
  },
  getters: {
    new_creature: state => {
      return state.new_creature;
    }
  },
  mutations: {},
  actions: {}
};
