<script setup lang="ts">
import GameService from "@/services/gameService";

const gameService = new GameService();
</script>

<template>
  <div v-if="!gameService.getCalculatingAction()" class="container">
    <div v-if="gameService.getCurrentAction() === undefined">
      <span class="player"> {{ gameService.getNextPlayer()?.name }}</span>, touch the present to start playing.
    </div>
    <div v-if="gameService.getCurrentAction() !== undefined">
      <span class="player">{{ gameService.getCurrentPlayer()?.name }}, </span>
      <span>
        {{ gameService.getCurrentAction()?.description }}. Now pass the device
        to
      </span>
      <span class="player"> {{ gameService.getNextPlayer()?.name }}.</span>
    </div>
  </div>
</template>

<style scoped>
.container {
  font-size: 20px;
  padding: 0 20px 0 20px;
  position: fixed;
  text-align: center;
  top: 75%;
  width: 100%;
}

.player {
  color: var(--colour-1);
  text-transform: capitalize;
}
</style>
