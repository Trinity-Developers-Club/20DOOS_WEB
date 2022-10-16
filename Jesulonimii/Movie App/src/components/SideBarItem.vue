<template>

  <router-link :to=link class="my-2 rounded-md flex items-center h-fit px-2 py-1">
    <i :class="[`uil uil-${icon} text-3xl`]"></i>
    <p id="label" class="transition-opacity duration-1000 mx-2 font-bold capitalize" style="opacity: 0">{{ name }}</p>
  </router-link>


</template>

<script setup>
defineProps({
  icon: {
    type: String,
    required: true
  },
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