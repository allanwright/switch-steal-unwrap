<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <header>
    <img src="@/assets/logo.png" alt="Stealy Logo" class="logo" />
  </header>
  <router-view v-slot="{ Component, route }">
    <transition :name="route.meta.transition" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style scoped>
.logo {
  display: block;
  margin: auto;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
