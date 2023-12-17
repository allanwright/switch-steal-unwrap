<script setup lang="ts">
import GameService from "@/services/gameService";

const gameService = new GameService();
const cheat = function () {
  gameService.setNextAction();
};
</script>

<template>
  <div v-if="gameService.isGameMastersTurn()" @click="cheat()"></div>
</template>

<style scoped>
div {
  height: 100px;
  width: 100%;
}
</style>
