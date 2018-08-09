<template>
  <div id="app">
    <add-creatures />
    <init-order />
  </div>
</template>

<script>
import AddCreatures from "./components/AddCreatures";
import InitiativeOrder from "./components/InitiativeOrder"
export default {
  name: "App",
  components: {
    'add-creatures': AddCreatures,
    'init-order' : InitiativeOrder
  }
};
</script>

<style>
* {
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
