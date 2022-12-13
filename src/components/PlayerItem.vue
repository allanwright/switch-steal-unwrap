<script setup lang="ts">
import IconTrash from "@/components/icons/IconTrash.vue";
import PlayerService from "@/services/playerService";

const props = defineProps<{
  id: number;
  name: string;
}>();

const playerService = new PlayerService();

const deletePlayer = function () {
  playerService.deletePlayer(props.id);
};
</script>

<template>
  <li>{{ name }}<IconTrash @click="deletePlayer()" /></li>
</template>
