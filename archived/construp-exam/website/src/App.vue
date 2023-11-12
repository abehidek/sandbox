<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <transition
    enter-active-class="animate__animated animate__fadeInLeft"
    leave-active-class="animate__animated animate__fadeInRight"
    mode="out-in">
  <router-view />
  </transition>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  border-bottom: 2px solid #A855F7;
  color: #A855F7;
}
</style>
