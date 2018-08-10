<template>
  <div class="edit-party">
  <h2 @click="display_content = !display_content">Edit Party {{display_content ? '-' : '+'}}</h2>
    <div class ="content-container" v-if="display_content">
      <div class="buttons_bar">
        <div class="button sideby" @click="loadParty">Load Party</div>
        <div class="button sideby" @click="addPartyToInitiative">Add To Initiative</div>
      </div>
      <div class="party-display">
        <init-card v-for="(player,index) in party" :key="index">
          <div class="card">
            <h3>{{player.name}}</h3>
            <br>
            Hp: <input class="num" type="number" v-model="player.hp" />
            <br>
            AC: <input class="num" type="number" v-model="player.ac" />
            <br>
            Init: <input class="num" type="number" v-model="player.initiatve" />
            <br>
            <br>
          </div>
        </init-card>
    

      </div>
    </div>
  </div>
</template>

<script>
import { eventBus } from "../main.js";
import InitiativeCard from "./InitiativeCard"

export default {
  data() {
    return {
      party: [],
      display_content: false
    };
  },
  created() {
    const customActions = {
      saveParty: { method: "POST", url: "players.json" },
      getParty: { mehtod: "GET", url: "players.json" }
    };
    this.resource = this.$resource("5e.json", {}, customActions);

    eventBus.$on("playerSaved", data => {
      this.loadParty();
    });
  },
  methods: {
    loadParty() {
      this.resource
        .getParty()
        .then(res => {
          return res.json();
        })
        .then(data => {
          this.party = data;
          this.cleanParty();
          
        });
    },
    cleanParty(){
      this.party = this.party.filter(x=>{
      return (x != null);
      });
    },
    addPartyToInitiative(){
      this.party.forEach(player =>{
        console.log(player)
        eventBus.$emit("creatureAdded", player);
      })
    }
  },
  components: {
    'init-card': InitiativeCard
  }
};
</script>

<style scoped>
h2 {
  cursor: pointer;
}

.button {
  background-color: #595494;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 5px;
}

.button:hover {
  background-color: #373276;
}

.sideby {
  margin-left: 5px;
}

.party-display{
  margin: auto;
  width: 90vw;
 // display: grid;
  //grid-template: repeat(3,33%) / repeat(3,33%)
}


</style>
