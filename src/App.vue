<template>
  <div class="app">
    <nav-bar />
    <transition name="view" appear>
      <router-view />
    </transition>
  </div>
</template>

<script>
import NavBar from "./components/NavBar";

export default {
  name: "App",
  components: {
    "nav-bar": NavBar
  }
};
</script>

<style>
* {
  margin-top: auto;
}

.app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  color: #2c3e50;
  margin-top: 0px;
  background-color: #595494;
  width: 100vw;
  height: 100vh;
}

.view-enter-active {
  animation: slide-in 0.3s ease-in forwards;
}

.view-leave-active {
  animation: slide-out 0.3s ease-in forwards;
  position: absolute;
}

@keyframes slide-in {
  0% {
    transform: translateX(500px);
    opacity: 0;
  }
  100% {
    transform: translateX(0px);
    opacity: 1;
  }
}

@keyframes slide-out {
  0% {
    transform: translateX(0px);
    opacity: 1;
  }
  100% {
    transform: translateX(-500px);
    opacity: 0;
  }
}
</style>
