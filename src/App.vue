<template>
<div>

  <div class="m-5">
    <p class="flex justify-center text-xl lg:text-3xl lg:justify-start">Here some cards for you:</p>
  </div>

  <div class="justify-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    <Card/>
  </div>
</div>
</template>

<script setup>
import Card from './components/Card.vue';
</script>

<style>
#app {
  color: #2c3e50;
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>