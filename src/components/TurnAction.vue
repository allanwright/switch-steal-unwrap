<script setup lang="ts">
import GameService from "@/services/gameService";

const gameService = new GameService();
</script>

<template>
  <div v-if="gameService.getCurrentAction() !== undefined">
    {{ gameService.getCurrentPlayer()?.name }},
    {{ gameService.getCurrentAction()?.description }}.
  </div>
</template>
