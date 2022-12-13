<script setup lang="ts">
import GameService from "@/services/gameService";

const gameService = new GameService();
</script>

<template>
  <div>
    <div v-if="gameService.getCurrentAction() === undefined">
      {{ gameService.getNextPlayer()?.name }}, it's your turn.
    </div>
    <div v-else>{{ gameService.getNextPlayer()?.name }}, you're up next!</div>
    <button type="button" @click="gameService.playTurn()">Play Turn</button>
  </div>
</template>
