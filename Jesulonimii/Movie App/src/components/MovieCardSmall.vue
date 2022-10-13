<template>

  <div class="flex w-full h-fit min-h-[120px] mt-2 border-b border-gray-700 pb-2 items-start">
    <div class="bg-red-300 w-[27%] bg-cover bg-center min-h-[120px] max-h-[130px]" :style="[`background-image: url('${img}')`]"></div>
    <div class="flex flex-col w-[70%] p-2">
      <router-link :to="link" class="font-outfit capitalize">{{ name }}</router-link>
      <p class="text-sm text-gray-400">{{ genre }}</p>
      <div class="flex w-full h-8 ">
        <i v-for="x in stars" class="uis uis-favorite text-amber-500 text-2xl"></i>
        <i v-for="x in 5 - stars" class="uil uil-favorite text-amber-500 text-2xl"></i>


      </div>

    </div>
  </div>


</template>

<script setup>

defineProps({
  name: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  stars:{
    type: Number,
    required: true
  }
})

</script>
