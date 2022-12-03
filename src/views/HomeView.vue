<script setup lang="ts">
import PlayerSetup from "@/components/PlayerSetup.vue";
</script>

<template>
  <main>
    <PlayerSetup />
    <RouterLink to="/game">Play</RouterLink>
  </main>
</template>

<style scoped>
a {
  background-color: var(--colour-primary-back);
  border-radius: 5px;
  color: var(--colour-primary-text);
  display: block;
  font-size: x-large;
  line-height: 60px;
  text-align: center;
  width: 150px;
}
</style>
