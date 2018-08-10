<template>
<div>
  <slot />
</div>
</template>

<script>
export default {};
</script>

<style scoped>
.card {
  border-style: solid;
  border-color: #ccc;
  width: 200px;
  margin: 5px;
  float: left;
  grid-area: auto;
  border-radius: 5%;
  color: white;
  background-color: #2b4c6f;
}

.current {
  background-color: #4e2c73;
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

input.num{
  width: 2.5em
}
</style>
