<script setup lang="ts">
import GameService from "@/services/gameService";

const gameService = new GameService();
const cheat = function () {
  gameService.playTurn();
  gameService.cheat();
};
</script>

<template>
  <button v-if="gameService.isGameMastersTurn()" @click="cheat()" type="button">
    Cheat
  </button>
</template>
