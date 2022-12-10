<template>
  <ul>
    <li v-for="player in players" v-bind:key="player.id">
      {{ player.id }} {{ player.name }}
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useGameStore } from "@/stores/game";

export default defineComponent({
  setup() {
    const gameStore = useGameStore();

    const players = gameStore.players;

    return {
      players,
    };
  },
});
</script>
