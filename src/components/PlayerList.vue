<script setup lang="ts">
import type Player from "@/models/Player";
import PlayerItem from "./PlayerItem.vue";

defineProps<{
  players: Player[];
}>();
</script>

<template>
  <ul>
    <PlayerItem
      v-for="player in players"
      v-bind:key="player.id"
      :id="player.id"
      :name="player.name"
    />
  </ul>
</template>

<style scoped>
ul {
  list-style: none;
  padding-left: 0;
}
</style>
