<script setup lang="ts">
import PlayerSetup from "@/components/PlayerSetup.vue";
import GameService from "@/services/gameService";
import PlayerService from "@/services/playerService";

const gameService = new GameService();
const playerService = new PlayerService();
const setup = function () {
  gameService.setupGame(playerService.getPlayers());
};
</script>

<template>
  <main>
    <header>
      <img src="@/assets/logo.png" alt="Stealy Logo" class="logo" />
    </header>
    <PlayerSetup />
    <footer class="center">
      <RouterLink to="/game" @click="setup()">Play</RouterLink>
    </footer>
  </main>
</template>

<style scoped>
footer {
  bottom: 20px;
  position: fixed;
  max-width: 1280px;
  width: 100%;
}

a {
  background-color: var(--colour-primary-back);
  border-radius: 5px;
  color: var(--colour-primary-text);
  display: block;
  font-size: x-large;
  line-height: 60px;
  margin: auto;
  text-align: center;
  width: 150px;
}

.logo {
  display: block;
  margin: auto;
}
</style>
