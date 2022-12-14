<script setup lang="ts">
import { ref } from "vue";
import IconPlus from "@/components/icons/IconPlus.vue";
import PlayerService from "@/services/playerService";

const playerService = new PlayerService();
const addPlayer = function () {
  playerService.addPlayer(name.value);
  name.value = "";
};
const name = ref("");
</script>

<template>
  <div class="group">
    <input type="text" title="Name" placeholder="Name" v-model="name" />
    <div class="button" @click="addPlayer()">Add Player</div>
  </div>
</template>

<style scoped>
.group {
  display: flex;
  height: 35px;
}

input {
  border-radius: 10px 0 0 10px;
  border-style: none;
  text-indent: 10px;
}

input:focus {
  outline-width: 0;
}

.button {
  background-color: var(--colour-3);
  border-radius: 0 10px 10px 0;
  display: inline-block;
  line-height: 35px;
  padding: 0 10px 0 10px;
}
</style>
