<script setup lang="ts">
import PlayerSetup from "@/components/PlayerSetup.vue";
import GameService from "@/services/gameService";
import PlayerService from "@/services/playerService";

const gameService = new GameService();
const playerService = new PlayerService();
const setup = function () {
  const params = new URLSearchParams(window.location.search);
  const gameMastersParam = params.get('gamecode') ?? '';
  const gameMasters = atob(decodeURIComponent(gameMastersParam)).split(',');
  gameService.setupGame(playerService.getPlayers(), gameMasters);
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
