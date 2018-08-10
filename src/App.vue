<template>
  <div id="app">
    <save-character />
    <edit-party />
    <add-creatures />
    <init-order />
  </div>
</template>

<script>
import AddCreatures from "./components/AddCreatures";
import InitiativeOrder from "./components/InitiativeOrder";
import SaveCharacter from "./components/SaveCharacter";
import EditParty from "./components/EditParty"
export default {
  name: "App",
  components: {
    "add-creatures": AddCreatures,
    "init-order": InitiativeOrder,
    "save-character": SaveCharacter,
    "edit-party": EditParty,
  }
};
</script>

<style>
* {
  margin-top: auto;
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
