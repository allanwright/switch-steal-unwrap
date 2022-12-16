<script setup lang="ts">
import { ref } from "vue";
import GameService from "@/services/gameService";

const gameService = new GameService();
let rotation = ref(0);
const playTurn = function () {
  const rotationAmount = 1080;
  if (rotation.value > 0) {
    rotation.value -= rotationAmount;
  } else {
    rotation.value += rotationAmount;
  }
  gameService.playTurn();
};
</script>

<template>
  <div class="container">
    <img
      src="@/assets/present.png"
      alt="Present"
      @click="playTurn()"
      class="transition"
      v-bind:style="{ transform: `rotate(${rotation}deg)` }"
    />
  </div>
</template>

<style scoped>
.container {
  text-align: center;
}

.transition {
  transition: transform 2s ease-in-out;
}
</style>
