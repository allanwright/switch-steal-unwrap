<script setup lang="ts">
import { useGameStore } from "@/stores/game";

const gameStore = useGameStore();
</script>

<template>
  <div>{{ gameStore.currentAction?.description }}</div>
</template>
