<template>

  <router-link :to="link" class="bg-amber-500 px-8 py-2 w-fit h-fit capitalize">
    {{ name }}
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
