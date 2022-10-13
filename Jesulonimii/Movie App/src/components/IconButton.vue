<template>

  <router-link :to="link" class="bg-amber-500 w-fit aspect-square capitalize">
    <i :class="[`uil uil-${icon} text-2xl aspect-square px-2`]"></i>
  </router-link>


</template>

<script setup>

defineProps({
  icon: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  }
})

</script>
