import axios from "axios";

export default {
  state: {
    party: []
  },
  getters: {
    party: state => {
      return state.party;
    }
  },
  mutations: {
    loadParty: state => {
      axios
        .get("/players.json")
        .then(response => {
          console.log(response.data);
          state.party = response.data;
          state.party.forEach(element => {
            element.initiative = 7;
          });
        })
        .catch(err => {
          console.log(err);
        });
    },
    saveParty: state => {
      axios
        .put("/players.json", state.party)
        .then(response => {
          alert("Party Saved Successfully!");
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  actions: {
    loadParty: ({ commit }) => {
      commit("loadParty");
    },
    saveParty: ({ commit }) => {
      commit("saveParty");
    }
  }
};
