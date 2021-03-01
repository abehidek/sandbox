<template>
<div class="w-100 bg-gray-200 rounded-md p-5 m-5">  
  <div class="mt-2 mb-5">
    <p class="text-3xl mb-5 font-semibold">aaaa</p>
    <p class="text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque laboriosam dolores molestiae officia? Dignissimos ad fugiat, dolores ipsam veniam inventore ipsa explicabo unde, quia nobis perferendis dolore dolorem, animi nihil?</p>
  </div>
  <button @click="state.count++" class="border-gray-700 border-2 p-2 rounded-md">COUNT IS: {{ state.count }}</button>
</div>
</template>

<script setup>

  import { reactive } from 'vue'
  const state = reactive({ count: 0 })

</script>