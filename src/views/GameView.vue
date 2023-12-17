<script setup lang="ts">
import TurnButton from "@/components/TurnButton.vue";
import TurnAction from "@/components/TurnAction.vue";
import ActionSelectionButton from "@/components/ActionSelectionButton.vue";
import IconFlag from "@/components/icons/IconFlag.vue";
import GameService from "@/services/gameService";

const gameService = new GameService();
</script>

<template>
  <div>
    <a v-if="gameService.isFirstPlayersTurn()" href="/" class="home">
      <IconFlag />
    </a>
    <ActionSelectionButton />
    <TurnButton />
    <TurnAction />
  </div>
</template>

<style>
.home {
  display: block;
  margin: 10px 10px 10px 10px;
}
</style>
