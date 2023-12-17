<script setup lang="ts">
import AddPlayer from "./AddPlayer.vue";
import PlayerList from "./PlayerList.vue";
import { usePlayerStore } from "@/stores/player";

const playerStore = usePlayerStore();
</script>

<template>
  <div>
    <AddPlayer />
    <PlayerList :players="playerStore.players" />
  </div>
</template>
