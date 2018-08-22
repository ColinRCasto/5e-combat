<template>
<div class="init-order">
  <h2>Initiative Order <a class="button round" @click="cycle()">></a></h2>
  
    <ul v-for="(creature,index) in get_creatures" :key="index">
    <transition name="card" appear>
      <init-card>
      <div>
          <h3>{{creature.name}}</h3>
          <br>
          Hp: <input size="1em" type="text" v-model="creature.hp" />
          <br>
          AC: {{creature.ac}}
          <br>
          Init: {{creature.initiative}}
          <br>
          <a class="button" @click="removeCreature(index)">Remove</a>
      </div>
      </init-card>
    </transition>
    </ul>
  </div>
</template>

<script>
import InitiativeCard from "../InitiativeCard";
import {mapGetters,mapActions} from 'vuex';

export default {
  components: {
    "init-card": InitiativeCard
  },
  computed : mapGetters([
      'get_creatures'
    ]),
  methods: {
    detectkeys(event) {
      if (event.key === "Enter") {
        this.addCreature();
      }
    },
  ...mapActions([
    'removeCreature',
    'cycle'
  ])
  },
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
  border-radius: 5px;
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
