import Home from "./components/routes/Home.vue";
import EditParty from "./components/routes/EditParty.vue";
import AddCreatures from "./components/routes/AddCreatures.vue";
import InitiativeOrder from "./components/routes/InitiativeOrder.vue";
export default [
  { path: "/", component: Home },
  { path: "/edit", component: EditParty },
  { path: "/add", component: AddCreatures },
  { path: "/initiative", component: InitiativeOrder }
];
