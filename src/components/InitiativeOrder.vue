<template>
<div class="init-order">
  <h2>Initiative Order <a class="button round" v-if="creatures.length > 2" @click="cycle()">></a></h2>
  
    <ul v-for="(creature,index) in creatures">
    <transition name="card" appear>
      <init-card :style="determineStyle(index)">
      <div :class="determineStyle(index)">
          <h3>{{creature.name}}</h3>
          <br>
          Hp: <input size="1em" type="text" v-model="creatures[index].hp" />
          <br>
          AC: {{creature.ac}}
          <br>
          Init:  {{creature.number}}
          <br>
          <a class="button" @click="removeCharacter(index)">Remove</a>
      </div>
      </init-card>
    </transition>
    </ul>
  </div>
</template>

<script>
import { eventBus } from "../main.js";
import InitiativeCard from "./InitiativeCard";

export default {
  components: {
    "init-card": InitiativeCard
  },
  data() {
    return {
      creatures: []
    };
  },
  methods: {
    cycle() {
      var outlier = this.creatures.shift();
      this.creatures.push(outlier);
    },

    determineStyle(i) {
      if (i == 0) {
        return "card current";
      } else {
        return "card";
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
  created() {
    eventBus.$on("creatureAdded", data => {
      this.creatures.push(data);

      this.creatures = this.creatures.sort(
        (a, b) => parseInt(a.number) < parseInt(b.number)
      );
    });
  }
};
</script>

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

.card-enter-active {
  animation: fade-in 0.15s ease-in forwards;
}

.card-leave-active {
  animation: fade-out 0.15s ease-in forwards;
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0px);
  }
}

@keyframes fade-out {
  from {
    opacity: 1;
    transform: translateY(0px);
  }

  to {
    opacity: 0;
    transform: translateY(20px);
  }
}
</style>
