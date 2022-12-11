<script setup lang="ts">
import { useGameStore } from "@/stores/game";

const gameStore = useGameStore();

const playTurn = function () {
  if (gameStore.currentPlayer === undefined) {
    gameStore.currentPlayer = gameStore.players[0];
  } else {
    let index = gameStore.players.indexOf(gameStore.currentPlayer);
    if (index >= gameStore.players.length - 1) {
      gameStore.currentPlayer = gameStore.players[0];
    } else {
      gameStore.currentPlayer = gameStore.players[++index];
    }
  }

  const actionIndex = Math.round(
    Math.random() * (gameStore.actions.length - 1)
  );

  gameStore.currentAction = gameStore.actions[actionIndex];
};
</script>

<template>
  <div>
    <div>{{ gameStore.currentPlayer?.name }}</div>
    <button type="button" @click="playTurn()">Play Turn</button>
  </div>
</template>
