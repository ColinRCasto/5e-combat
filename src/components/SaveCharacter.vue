<template>
<div class="save-character">
<h2 @click="display_content = !display_content">Save Character {{display_content ? '-' : '+' }}</h2>
  <div class="add-players" v-if="display_content">
    <div class="data-entry">
      Name: <input v-model="name" type="text" size="10em" placeholder="Character Name" />
      Hp: <input v-model="hp" type="number" size="40em" placeholder="Health Points"/>
      Ac: <input v-model="ac" type="number" size="13em" placeholder="Armor Class"/>
    
      
      <div class="button" @click="addPlayer">Save</div>
      
      
      
    </div>
  </div>
</div>
</template>
<script>
import { eventBus } from "../main.js";

export default {
  data() {
    return {
      name: "",
      hp:"",
      ac:"",
      display_content: false,
      party: []
    };
  },
  created() {
    const customActions = {
      saveParty: { method: "PUT", url: "players.json" },
      getParty: { mehtod: "GET", url: "players.json" }
    };
    this.resource = this.$resource("5e.json", {}, customActions);
  },
  methods: {
    addPlayer() {
      this.resource
        .getParty()
        .then(res => {
          return res.json();
        })
        .then(data => {
          this.party = data;
        })
      .then(()=>{ 
      let newPlayer = {
        name: this.name,
        ac: this.ac,
        hp: this.hp,
      };
      this.party.push(newPlayer);
      this.resource.saveParty(this.party);
      console.log('saved '+this.name);
      eventBus.$emit("playerSaved", this.name);
      this.name = "";
      this.ac = "";
      this.hp = "";
      });
    }
  }
};
</script>

<style scoped>
.add-players {
  background-color: white;
  color: white;
  width: 100vw;
  height: 50vh;
  display: grid;
  grid-template-columns: 30% 40% 30%;
}

.data-entry{
  grid-area: 1 / 2 / 1 / 3;
  border: 7px solid #ccc;
  margin: auto;
  display: grid;
  padding: 10px;
  text-align: left;
  font-size: 1.7em;
  background-color: #4e2c73;
  border-radius: 10px;
}

input {
  background-color:#4e2c73;
  color: white;
  border-radius: 10px;
  width: 300px;
  line-height: 1em;
  font-size: 1.2em;
  border:0px;
  text-align:center;
}

input:focus{
  outline-width: 0px;
  background-color: #595494;

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

h2 {
  cursor: pointer;
}
</style>
