<template>
  <ul>
    <li v-for="player in players" v-bind:key="player">{{ player }}</li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { usePlayerStore } from "@/stores/players";

export default defineComponent({
  setup() {
    const playerStore = usePlayerStore();

    const players = playerStore.players;

    return {
      players,
    };
  },
});
</script>
