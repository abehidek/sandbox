<template>
  <div id="cards" class="grid grid cols-1 sm: grid cols-2 sm:px-8 sm:py-12 sm:gap-x-8 md:py-16">
    <HelloWorld/>
    <HelloWorld/>
    <HelloWorld/>

  </div>
</template>

<script setup>
import HelloWorld from './components/HelloWorld.vue'

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

<style>
#app {
  /* text-align: center; */
  color: #2c3e50;
  /* background-color: salmon; */
  width: 100%;
  display: flex;
  /* align-items: center; */
  justify-content: center;
}
#cards {
  /* background-color: blue; */
  
  margin: 20px;
  padding: 5px;
  width: 100%;
  height: 600px;
  display: flex;
  justify-content: center;
}
</style>