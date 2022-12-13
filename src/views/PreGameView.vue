<script setup lang="ts">
import PlayerList from "@/components/PlayerList.vue";
import GameService from "@/services/gameService";

const gameService = new GameService();
</script>

<template>
  <main>
    <PlayerList :players="gameService.getPlayers()" />
    <RouterLink to="/game">Start Game</RouterLink>
  </main>
</template>

<style scoped>
a {
  background-color: var(--colour-primary-back);
  border-radius: 5px;
  color: var(--colour-primary-text);
  display: block;
  font-size: x-large;
  line-height: 60px;
  text-align: center;
  width: 150px;
}
</style>
