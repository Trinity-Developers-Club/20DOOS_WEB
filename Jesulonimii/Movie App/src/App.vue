<template>


  <main class="text-white flex bg-slate-800 relative">
    <SideBar class="z-50 h-screen fixed" @collapsed="resizeView"/>
    <router-view id="view" class="w-full pl-[250px] transition-all duration-1000" style="padding-left: 100px" />

  </main>


</template>

<script setup>
import {RouterLink, RouterView} from 'vue-router'
import SideBar from './components/SideBar.vue'


function resizeView(state) {
  const view = document.querySelector('#view')
  console.log("state", state)

  if (state) {
    view.setAttribute("style", "padding-left: 100px")
  } else {
    view.setAttribute("style", "padding-left: 250px")

  }


}
</script>


