<script setup lang="ts">
import { ref } from "vue";
import GameService from "@/services/gameService";

const gameService = new GameService();
let rotation = ref(0);
const playTurn = function () {
  gameService.setCalculatingAction(true);
  setTimeout(() => {
    gameService.setCalculatingAction(false);
  }, 2000);

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
  position: fixed;
  left: 50%;
  text-align: center;
  top: 50%;
  transform: translate(-50%, -50%);
}

img {
  border-color: var(--colour-1);
  border-radius: 67px;
  border-style: solid;
  border-width: 2px;
}

.transition {
  transition: transform 2s ease-in-out;
  -webkit-transition-property: transform;
  -webkit-transition-duration: 2s;
  -webkit-transition-timing-function: ease-in-out;
}
</style>
