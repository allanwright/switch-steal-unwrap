<script setup lang="ts">
import GameService from "@/services/gameService";

const gameService = new GameService();
const cheat = function () {
  gameService.playTurn();
  gameService.cheat();
};
</script>

<template>
  <div v-if="gameService.isGameMastersTurn()" @click="cheat()"></div>
</template>

<style scoped>
div {
  height: 100px;
  position: fixed;
  top: 0;
  width: 100%;
}
</style>
