export default {
  state: {
    creatures: []
  },
  getters: {
    get_creatures: state => {
      return state.creatures;
    }
  },
  mutations: {
    cycle: state => {
      let outlier = state.creatures.shift();
      state.creatures.push(outlier);
    },
    removeCreature: (state, index) => {
      console.log(state.creatures[index].initiative);
      state.creatures.splice(index, 1);
    },
    addCreature: (state, creature) => {
      state.creatures.push(creature);
      state.creatures = state.creatures.sort((a, b) => {
        return parseInt(a.initiative, 10) < parseInt(b.initiative, 10);
      });
    }
  },
  actions: {
    cycle: ({ commit }) => {
      commit("cycle");
    },
    removeCreature: ({ commit }, index) => {
      commit("removeCreature", index);
    },
    addCreature: ({ commit }, creature) => {
      commit("addCreature", creature);
    }
  }
};
