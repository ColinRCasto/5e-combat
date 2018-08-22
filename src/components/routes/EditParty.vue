<template>
  <div class="edit-party">
    <h1 style="color:white">Edit Party</h1>
    <div class ="content-container">
      <div class="buttons_bar">
        <div class="button sideby" @click="loadParty">Load Party</div>
        <div class="button sideby" @click="addPartyToInitiative">Add To Initiative</div>
      </div>
      <div class="party-display">
        <ul v-for="(player,index) in party" :key="index">
          <transition name="card" appear>
              <init-card >
                <h3>{{player.name}}</h3>
                <br>
                Hp: <input class="num" type="number" v-model="player.hp" />
                <br>
                AC: <input class="num" type="number" v-model="player.ac" />
                <br>
                Init: <input class="num" type="number" v-model="player.initiative" />
                <br>
                <br>
              </init-card>
            </transition>
          </ul>
        </div>
      </div>
      </div>
</template>

<script>
import InitiativeCard from "../InitiativeCard";
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters(["party"])
  },
  methods: {
    ...mapActions(["loadParty", "saveParty", "addCreature"]),
    addPartyToInitiative() {
      this.party.forEach(element => {
        this.addCreature(element);
        console.log(element + "Added");
      });
    }
  },
  components: {
    "init-card": InitiativeCard
  },
  mounted() {
    this.loadParty();
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

.party-display {
  margin: auto;
  width: 90vw;
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
