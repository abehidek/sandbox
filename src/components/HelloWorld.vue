<template>
  <div class="block1">
    <p class="text-3xl mb-5 font-semibold">aaaa</p>
    <p class="text-lg">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque laboriosam dolores molestiae officia? Dignissimos ad fugiat, dolores ipsam veniam inventore ipsa explicabo unde, quia nobis perferendis dolore dolorem, animi nihil?
    </p>
    <button @click="state.count++">count is: {{ state.count }}</button>
  </div>
</template>

<script setup>

  import { reactive } from 'vue'
  const state = reactive({ count: 0 })

</script>

<style scoped>
.block1 {
  margin: 1rem;
  width: 20rem;
  padding: 1rem;
  background-color: blanchedalmond;
  border-radius: 5px;
}
</style>