<template>

  <router-link :to="link" class="mx-1 min-w-[90px] rounded-full flex bg-slate-900 px-2 py-2 items-center">
    <div class="mr-1">{{ emoji }}</div>
    <p class="mr-3">{{ text }}</p>
  </router-link>

</template>

<script setup>

defineProps({
  emoji: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  }
})

</script>
