<template>
<div>
  <h2 @click="addBox = !addBox" style="{'user-select':'none'}">Add Creatures {{addBox ? '-' : '+'}}</h2>
  <div v-if="addBox" @keyup="detectkeys">
    Name: <input type="text" v-model="name" />
    <br>
    Hit Points: <input type="number" v-model="hp" />
    <br>
    AC: <input type="number" v-model="ac" />
    <br>
    Initiative: <input type="number" v-model="number" /><br>
    <a class="button" @click="addCreature()">Add to Initiative</a>
    <hr>
  </div>
<!--
  <h2>Initiative Order <a class="button round" v-if="creatures.length > 2" @click="cycle()">></a></h2>
  
    <ul v-for="(creature,index) in creatures">
      <init-card :style="determineStyle(index)">
      <p>
          <h3>{{creature.name}}</h3>
          <br>
          Hp: <input size="1em" type="text" v-model="creatures[index].hp" />
          <br>
          AC: {{creature.ac}}
          <br>
          Init:  {{creature.number}}
          <br>
          <a class="button" @click="removeCharacter(index)">Remove</a>
      </p>
      </init-card>
    </ul>
-->
</div>
</template>

<script>
import InitiativeCard from "./InitiativeCard";
import { eventBus } from "../main.js";

export default {
  name: "init-container",
  data() {
    return {
      addBox: true,
      name: "",
      hp: 20,
      ac: 12,
      number: 10,
      creatures: []
    };
  },
  methods: {
    addCreature() {
      if (this.name == "") {
        alert("Please enter a character name");
        return;
      }
      var newCreature = {
        name: this.name,
        hp: this.hp,
        ac: this.ac,
        number: this.number
      };

      eventBus.$emit("creatureAdded", newCreature);

      this.name = "";
      this.index++;
      this.number = 10;
      /*
      this.creatures.push({
        name: this.name,
        hp : this.hp,
        ac: this.ac,
        number: this.number,
      });
      

      this.creatures = this.creatures.sort(
        (a, b) => parseInt(a.number) < parseInt(b.number)
      );

      this.name = "";
      this.index++;
      this.number = 10;
      */
    },

    cycle() {
      var outlier = this.creatures.shift();
      this.creatures.push(outlier);
    },

    determineStyle(i) {
      if (i == 0) {
        return {
          "background-color": "#4E2C73"
        };
      } else {
        return {
          "background-color": "#2B4C6F"
        };
      }
    },
    removeCharacter(index) {
      this.creatures.splice(index, 1);
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
</style>
