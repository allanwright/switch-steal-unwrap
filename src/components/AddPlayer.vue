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
  <div>
    <div>Add Player</div>
    <input type="text" title="Name" placeholder="Name" v-model="name" />
    <IconPlus @click="addPlayer()" />
  </div>
</template>
