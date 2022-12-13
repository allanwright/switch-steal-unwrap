<script setup lang="ts">
import TurnButton from "@/components/TurnButton.vue";
import TurnAction from "@/components/TurnAction.vue";
import CheatButton from "@/components/CheatButton.vue";
</script>

<template>
  <div class="about">
    <TurnButton />
    <TurnAction />
    <CheatButton />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
