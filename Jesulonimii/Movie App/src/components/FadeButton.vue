<template>

  <router-link :to="link" class="flex h-fit px-8 py-2  capitalize relative">
    <div class="bg-amber-500 absolute opacity-10 top-0 left-0 w-full h-full"></div>
    <p class="text-amber-500 opacity-100">{{ name }}</p>
  </router-link>


</template>

<script setup>

defineProps({
  name: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  }
})

</script>
