<template>
  <div class="justify-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
  </div>
</template>

<script setup>
import Card from './components/Card.vue'

</script>

<style>
#app {
  color: #2c3e50;
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>