<template>
  <div class="nav">
    <router-link class="nav-button" to="/edit">Edit Party</router-link>
    <router-link class="nav-button" to="/add">Add Creatures</router-link>
    <router-link class="nav-button" to="/initiative">Initiative</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
  a{
    background-color: lightblue;
  }

  a {
  background-color: #595494;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 30px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 5px 5px 5px;
}

a:hover {
  background-color: #373276;
}

.router-link-active{
  background-color: #373276;
}

.nav{
  background-color: #595494;
}

.nav-button{
   //transform: translateY(-50px)
}
</style>
