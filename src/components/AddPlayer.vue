<script setup lang="ts">
import { ref } from "vue";
import PlayerService from "@/services/playerService";

const playerService = new PlayerService();
const addPlayer = function () {
  playerService.addPlayer(name.value);
  name.value = "";
};
const name = ref("");
</script>

<template>
  <div class="center">
    <div class="group">
      <input
        type="text"
        title="Name"
        placeholder="Name"
        v-model="name"
        autocomplete="false"
      />
      <div class="button" @click="addPlayer()">Add Player</div>
    </div>
  </div>
</template>

<style scoped>
.center {
  text-align: center;
}

.group {
  display: inline-flex;
  height: 35px;
}

input {
  border-radius: 10px 0 0 10px;
  border-style: none;
  font-size: 16px;
  text-indent: 10px;
  width: 200px;
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
  width: 100px;
}
</style>
