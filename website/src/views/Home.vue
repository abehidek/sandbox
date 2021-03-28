<template>
  <div class="home p-10">
    <MaterialList />
  </div>
</template>

<script>
// @ is an alias to /src
import MaterialList from "@/components/MaterialList.vue";

export default {
  name: "Home",
  components: {
    MaterialList,
  },
};
</script>
