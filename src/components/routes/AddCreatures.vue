<template>
<div>
  <h1 style="color:white">Add Creatures</h1>
  <div @keyup="detectkeys">
    Name: <input type="text" v-model="name" />
    <br>
    Hit Points: <input type="number" v-model="hp" />
    <br>
    AC: <input type="number" v-model="ac" />
    <br>
    Initiative: <input type="number" v-model="initiative" /><br>
    <a class="button" @click="insertCreature">Add to Initiative</a>
  </div>
</div>
</template>

<script>
import InitiativeCard from "../InitiativeCard";
import {mapActions} from 'vuex';

export default {
  name: "init-container",
  data() {
    return {
      name: "",
      hp: 20,
      ac: 12,
      initiative: 10,
    };
  },
  methods: {
    ...mapActions([
      'addCreature'
    ]),
    insertCreature(){
      let new_creature = {
        name: this.name,
        hp: this.hp,
        ac: this.hp,
        initiative: this.initiative
      }
      this.addCreature(new_creature);
      console.log(this.$store.getters.get_creatures);
    },
    detectkeys(event) {
      if (event.key == "Enter") {
        this.addCreature();
      }
    }
  },
  components: {
    "init-card": InitiativeCard
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.button {
  background-color: #595494;
  border-style: solid;
  border-color: #585494 #1d1958 #1d1958 #585494;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 5%;
}

.round {
  border-radius: 30%;
  user-select: none;
}

.button:hover {

}
.button:active {
  position: relative;
  background-color: #373276;
  border-color: #1d1958 #585494 #585494 #1d1958;
  top: 2px;
}

h2 {
  cursor: pointer;
}

input{
  border-radius: 5px;
  border-color: black;
  border-width: 1px;
  margin: 2px;
  padding: 2px;
}
</style>
