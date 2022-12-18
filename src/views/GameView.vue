<script setup lang="ts">
import TurnButton from "@/components/TurnButton.vue";
import TurnAction from "@/components/TurnAction.vue";
import CheatButton from "@/components/CheatButton.vue";
import IconHouse from "@/components/icons/IconHouse.vue";
</script>

<template>
  <div>
    <RouterLink to="/" class="home">
      <IconHouse />
    </RouterLink>
    <CheatButton />
    <TurnButton />
    <TurnAction />
  </div>
</template>

<style>
.home {
  display: block;
  margin: 10px 10px 10px 10px;
}
</style>
