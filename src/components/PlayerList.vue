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

<script lang="ts">
import { defineComponent } from "vue";
import { useGameStore } from "@/stores/game";
import PlayerItem from "@/components/PlayerItem.vue";

export default defineComponent({
  setup() {
    const gameStore = useGameStore();

    const players = gameStore.players;

    return {
      players,
    };
  },
  components: {
    PlayerItem,
  },
});
</script>
